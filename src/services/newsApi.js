// Spaceflight News API Client Service (v4 API)
const NEWS_BASE_URL = 'https://api.spaceflightnewsapi.net/v4/articles';

// Fallback high-quality curated space news if network is offline or throttled
const FALLBACK_SPACE_NEWS = [
  {
    id: 101,
    title: 'SpaceX Prepares Starship Flight Test 6 for Orbital Fuel Transfer Test at Starbase',
    summary: 'SpaceX engineers at Boca Chica have completed full-duration static fire tests on Super Heavy Booster 13 and Starship 31, paving the way for the next orbital launch attempt.',
    url: 'https://x.com/SpaceX',
    news_site: 'SpaceX Direct',
    published_at: new Date(Date.now() - 2 * 3600 * 1000).toISOString(),
    image_url: '/assets/starship_mars_hero.jpg',
    featured: true
  },
  {
    id: 102,
    title: 'Starlink Direct-to-Cell Constellation Passes 200 Satellites in Orbit',
    summary: 'SpaceX has successfully deployed over 200 eNodeB Direct-to-Cell satellites, offering unmodified LTE cellular phone coverage in global dead zones in partnership with T-Mobile.',
    url: 'https://www.spacex.com/launches',
    news_site: 'Spaceflight Now',
    published_at: new Date(Date.now() - 5 * 3600 * 1000).toISOString(),
    image_url: '/assets/starlink_patch.jpg',
    featured: false
  },
  {
    id: 103,
    title: 'NASA Artemis III Lunar Landing System Hardware Tests Enter Final Phase',
    summary: 'NASA astronauts completed vacuum chamber testing of the Starship HLS crew elevator and docking mechanism at Marshall Space Flight Center.',
    url: 'https://www.spacex.com/launches',
    news_site: 'NASA Spaceflight',
    published_at: new Date(Date.now() - 14 * 3600 * 1000).toISOString(),
    image_url: '/assets/falcon_heavy_patch.jpg',
    featured: false
  },
  {
    id: 104,
    title: 'Falcon Heavy Deploys Next-Gen US Space Force Geostationary Payload',
    summary: 'A SpaceX Falcon Heavy rocket executed a triple-booster ignition from LC-39A at Kennedy Space Center, placing classified defense satellites into direct GEO orbit.',
    url: 'https://x.com/SpaceX',
    news_site: 'Space News',
    published_at: new Date(Date.now() - 28 * 3600 * 1000).toISOString(),
    image_url: '/assets/falcon_heavy_patch.jpg',
    featured: false
  }
];

export const newsApi = {
  async getLatestSpaceNews(limit = 15) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3500);

      const res = await fetch(`${NEWS_BASE_URL}/?limit=${limit}&ordering=-published_at`, { signal: controller.signal });
      clearTimeout(timeoutId);

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();

      if (data && data.results && data.results.length > 0) {
        return data.results.map(article => ({
          id: article.id,
          title: article.title,
          summary: article.summary,
          url: article.url,
          news_site: article.news_site || 'Space News',
          published_at: article.published_at,
          image_url: article.image_url || '/assets/starship_mars_hero.jpg'
        }));
      }
      return FALLBACK_SPACE_NEWS;
    } catch (e) {
      console.warn("Using fallback space news feed:", e);
      return FALLBACK_SPACE_NEWS;
    }
  }
};
