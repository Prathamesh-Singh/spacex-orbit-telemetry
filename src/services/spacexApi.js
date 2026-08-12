// SpaceX API Client Service (v4/v5 API)
const BASE_URL = 'https://api.spacexdata.com/v4';

// In-memory cache to prevent spamming endpoints
const cache = new Map();

async function fetchWithCache(url, cacheDurationMs = 60000) {
  const now = Date.now();
  if (cache.has(url)) {
    const { data, timestamp } = cache.get(url);
    if (now - timestamp < cacheDurationMs) {
      return data;
    }
  }
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2500);

    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    cache.set(url, { data, timestamp: now });
    return data;
  } catch (error) {
    console.warn(`SpaceX API fetch error for ${url}:`, error);
    // Return cached data if available even if expired
    if (cache.has(url)) return cache.get(url).data;
    throw error;
  }
}

export const spacexApi = {
  // Fetch Next Scheduled SpaceX Launch
  async getNextLaunch() {
    try {
      const launch = await fetchWithCache(`${BASE_URL}/launches/next`);
      return await this.enrichLaunchDetails(launch);
    } catch (e) {
      // Fallback fallback simulated next launch if endpoint unreachable
      return this.getFallbackNextLaunch();
    }
  },

  // Fetch Latest SpaceX Launch
  async getLatestLaunch() {
    try {
      const launch = await fetchWithCache(`${BASE_URL}/launches/latest`);
      return await this.enrichLaunchDetails(launch);
    } catch (e) {
      return null;
    }
  },

  // Fetch Upcoming Launches
  async getUpcomingLaunches() {
    try {
      const launches = await fetchWithCache(`${BASE_URL}/launches/upcoming`);
      return Promise.all(launches.slice(0, 10).map(l => this.enrichLaunchDetails(l)));
    } catch (e) {
      return [this.getFallbackNextLaunch()];
    }
  },

  // Fetch Past Launches (sorted newest first)
  async getPastLaunches(limit = 40) {
    try {
      const launches = await fetchWithCache(`${BASE_URL}/launches`);
      const sorted = launches
        .filter(l => !l.upcoming)
        .sort((a, b) => b.date_unix - a.date_unix)
        .slice(0, limit);
      return Promise.all(sorted.map(l => this.enrichLaunchDetails(l)));
    } catch (e) {
      return this.getFallbackPastLaunches();
    }
  },

  // Enrich launch with Rocket & Launchpad metadata
  async enrichLaunchDetails(launch) {
    if (!launch) return null;
    let rocket = null;
    let launchpad = null;

    if (launch.rocket) {
      try {
        rocket = await this.getRocketById(launch.rocket);
      } catch (err) { /* ignore */ }
    }

    if (launch.launchpad) {
      try {
        launchpad = await this.getLaunchpadById(launch.launchpad);
      } catch (err) { /* ignore */ }
    }

    const rocketName = rocket ? rocket.name : (typeof launch.rocket === 'string' ? launch.rocket : 'Falcon 9');
    
    // Determine crisp fallback mission patch asset
    let defaultPatch = '/assets/starlink_patch.jpg';
    if (launch.name?.toLowerCase().includes('starship') || rocketName.toLowerCase().includes('starship')) {
      defaultPatch = '/assets/starship_patch.jpg';
    } else if (launch.name?.toLowerCase().includes('heavy') || rocketName.toLowerCase().includes('heavy')) {
      defaultPatch = '/assets/falcon_heavy_patch.jpg';
    }

    const rawPatch = launch.links?.patch?.small || launch.links?.patch?.large;
    const patchUrl = (rawPatch && !rawPatch.includes('imgbox.com')) ? rawPatch : defaultPatch;

    return {
      ...launch,
      rocketName,
      rocketType: rocket ? rocket.type : 'rocket',
      rocketObject: rocket,
      launchpadName: launchpad ? launchpad.name : 'Cape Canaveral SLC-40',
      launchpadLocation: launchpad ? `${launchpad.locality}, ${launchpad.region}` : 'Florida, USA',
      launchpadCoords: launchpad ? [launchpad.latitude, launchpad.longitude] : [28.5618571, -80.577366],
      patchUrl,
      defaultPatch,
      webcastUrl: launch.links?.webcast || (launch.links?.youtube_id ? `https://www.youtube.com/watch?v=${launch.links.youtube_id}` : 'https://x.com/SpaceX'),
      officialLiveUrl: 'https://x.com/SpaceX',
      spacexLaunchesUrl: 'https://www.spacex.com/launches',
      articleUrl: launch.links?.article,
      wikipediaUrl: launch.links?.wikipedia,
      flickrImages: launch.links?.flickr?.original || []
    };
  },

  // Rocket Catalog
  async getRockets() {
    try {
      return await fetchWithCache(`${BASE_URL}/rockets`);
    } catch (e) {
      return this.getFallbackRockets();
    }
  },

  async getRocketById(id) {
    if (!id) return null;
    return await fetchWithCache(`${BASE_URL}/rockets/${id}`);
  },

  // Launchpad Catalog
  async getLaunchpads() {
    try {
      return await fetchWithCache(`${BASE_URL}/launchpads`);
    } catch (e) {
      return this.getFallbackLaunchpads();
    }
  },

  async getLaunchpadById(id) {
    if (!id) return null;
    return await fetchWithCache(`${BASE_URL}/launchpads/${id}`);
  },

  // Starlink satellites raw data from SpaceX API
  async getStarlinkData() {
    try {
      return await fetchWithCache(`${BASE_URL}/starlink`, 120000);
    } catch (e) {
      return [];
    }
  },

  // Fallbacks in case external network fails
  getFallbackNextLaunch() {
    const futureDate = new Date(Date.now() + 3 * 24 * 3600 * 1000 + 4 * 3600 * 1000).toISOString();
    return {
      id: 'fallback-next-1',
      name: 'Starlink Group 10-14',
      date_utc: futureDate,
      date_unix: Math.floor(new Date(futureDate).getTime() / 1000),
      details: 'SpaceX Falcon 9 rocket launching a batch of Starlink v2 Mini satellites into Low Earth Orbit from SLC-40 at Cape Canaveral Space Force Station.',
      flight_number: 388,
      rocketName: 'Falcon 9 Block 5',
      launchpadName: 'Space Launch Complex 40 (SLC-40)',
      launchpadLocation: 'Cape Canaveral, Florida',
      launchpadCoords: [28.5618571, -80.577366],
      patchUrl: '/assets/starlink_patch.jpg',
      webcastUrl: 'https://x.com/SpaceX',
      officialLiveUrl: 'https://x.com/SpaceX',
      spacexLaunchesUrl: 'https://www.spacex.com/launches',
      cores: [{ flight: 18, reused: true, landing_success: true, landing_type: 'ASOG' }]
    };
  },

  getFallbackPastLaunches() {
    return [
      {
        id: 'past-1',
        name: 'Starship Integrated Flight Test 4',
        date_utc: '2024-06-06T12:50:00.000Z',
        date_unix: 1717678200,
        details: 'Fourth test flight of Starship and Super Heavy. Controlled splashdown of Super Heavy in Gulf of Mexico and Starship peak heating atmospheric entry in Indian Ocean.',
        flight_number: 350,
        success: true,
        rocketName: 'Starship',
        launchpadName: 'Starbase Pad A',
        launchpadLocation: 'Boca Chica, Texas',
        launchpadCoords: [25.997, -97.157],
        patchUrl: '/assets/starship_patch.jpg',
        webcastUrl: 'https://x.com/SpaceX/status/1798670597148561845'
      },
      {
        id: 'past-2',
        name: 'Europa Clipper (Falcon Heavy)',
        date_utc: '2024-10-14T16:06:00.000Z',
        date_unix: 1728921960,
        details: 'NASA interplanetary mission to investigate Jupiter ocean moon Europa for potential life suitability.',
        flight_number: 360,
        success: true,
        rocketName: 'Falcon Heavy',
        launchpadName: 'Launch Complex 39A (LC-39A)',
        launchpadLocation: 'Kennedy Space Center, Florida',
        launchpadCoords: [28.608, -80.604],
        patchUrl: '/assets/falcon_heavy_patch.jpg',
        webcastUrl: 'https://www.spacex.com/launches'
      }
    ];
  },

  getFallbackRockets() {
    return [
      {
        id: 'falcon9',
        name: 'Falcon 9',
        type: 'rocket',
        active: true,
        stages: 2,
        boosters: 0,
        cost_per_launch: 67000000,
        success_rate_pct: 99,
        first_flight: '2010-06-04',
        country: 'United States',
        company: 'SpaceX',
        height: { meters: 70, feet: 229.6 },
        diameter: { meters: 3.7, feet: 12 },
        mass: { kg: 549054, lb: 1207920 },
        payload_weights: [
          { id: 'leo', name: 'Low Earth Orbit', kg: 22800, lb: 50265 },
          { id: 'gto', name: 'Geostationary Transfer Orbit', kg: 8300, lb: 18300 },
          { id: 'mars', name: 'Mars Orbit', kg: 4020, lb: 8860 }
        ],
        description: 'Falcon 9 is a reusable, two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of people and payloads into Earth orbit and beyond. Falcon 9 is the world’s first orbital class reusable rocket.',
        flickr_images: [
          'https://farm1.staticflickr.com/929/28787645167_10545f448c_b.jpg',
          'https://farm1.staticflickr.com/653/33633857502_572e9a2be7_b.jpg'
        ]
      },
      {
        id: 'falconheavy',
        name: 'Falcon Heavy',
        type: 'rocket',
        active: true,
        stages: 2,
        boosters: 2,
        cost_per_launch: 97000000,
        success_rate_pct: 100,
        first_flight: '2018-02-06',
        country: 'United States',
        company: 'SpaceX',
        height: { meters: 70, feet: 229.6 },
        diameter: { meters: 12.2, feet: 39.9 },
        mass: { kg: 1420788, lb: 3125735 },
        payload_weights: [
          { id: 'leo', name: 'Low Earth Orbit', kg: 63800, lb: 140660 },
          { id: 'gto', name: 'Geostationary Transfer Orbit', kg: 26700, lb: 58860 },
          { id: 'mars', name: 'Mars Orbit', kg: 16800, lb: 37040 }
        ],
        description: 'Falcon Heavy is the most powerful operational rocket in the world by a factor of two. With the ability to lift into orbit nearly 64 metric tons (141,000 lb), Falcon Heavy can lift more than twice the payload of the next closest operational vehicle.',
        flickr_images: [
          'https://farm5.staticflickr.com/4645/38583830575_37ba21778c_b.jpg',
          'https://farm5.staticflickr.com/4709/40358807802_90ab8295b9_b.jpg'
        ]
      },
      {
        id: 'starship',
        name: 'Starship & Super Heavy',
        type: 'rocket',
        active: true,
        stages: 2,
        boosters: 1,
        cost_per_launch: 10000000,
        success_rate_pct: 90,
        first_flight: '2023-04-20',
        country: 'United States',
        company: 'SpaceX',
        height: { meters: 121, feet: 397 },
        diameter: { meters: 9, feet: 29.5 },
        mass: { kg: 5000000, lb: 11000000 },
        payload_weights: [
          { id: 'leo', name: 'Low Earth Orbit', kg: 150000, lb: 330000 },
          { id: 'mars', name: 'Mars Payload', kg: 100000, lb: 220000 }
        ],
        description: 'SpaceX’s Starship spacecraft and Super Heavy rocket – collectively referred to as Starship – represent a fully reusable transportation system designed to carry both crew and cargo to Earth orbit, the Moon, Mars and beyond.',
        flickr_images: [
          'https://live.staticflickr.com/65535/52834942970_42fa955217_b.jpg'
        ]
      }
    ];
  },

  getFallbackLaunchpads() {
    return [
      {
        id: '5e9e4501f509094ba4566f84',
        name: 'Vandenberg Space Launch Complex 4E',
        locality: 'Vandenberg SFB',
        region: 'California',
        latitude: 34.632093,
        longitude: -120.610829,
        launch_attempts: 130,
        launch_successes: 129,
        status: 'active',
        details: 'SpaceX polar orbit launch site on the West Coast.'
      },
      {
        id: '5e9e4502f509094188566f88',
        name: 'Cape Canaveral Space Launch Complex 40',
        locality: 'Cape Canaveral',
        region: 'Florida',
        latitude: 28.5618571,
        longitude: -80.577366,
        launch_attempts: 210,
        launch_successes: 208,
        status: 'active',
        details: 'SpaceX workhorse launchpad for Starlink and commercial satellites.'
      },
      {
        id: '5e9e4502f509092b78566f87',
        name: 'Kennedy Space Center Launch Complex 39A',
        locality: 'Cape Canaveral',
        region: 'Florida',
        latitude: 28.6080585,
        longitude: -80.6039558,
        launch_attempts: 160,
        launch_successes: 160,
        status: 'active',
        details: 'Historic Saturn V & Apollo pad, used by SpaceX for Crew Dragon, Falcon Heavy, and Starship Florida launch tower.'
      },
      {
        id: 'starbase_pad_a',
        name: 'Starbase Pad A',
        locality: 'Boca Chica',
        region: 'Texas',
        latitude: 25.997,
        longitude: -97.157,
        launch_attempts: 6,
        launch_successes: 5,
        status: 'active',
        details: 'World’s largest rocket launch pad featuring Mechazilla tower with catch arms for Super Heavy.'
      }
    ];
  }
};
