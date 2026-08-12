import React, { useState, useEffect } from 'react';
import { Rocket, Play, Search, Calendar, MapPin, CheckCircle2, XCircle, ArrowUpRight, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function SpaceXLaunchesView({ nextLaunch, launches, onSelectLaunch }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Countdown timer effect
  useEffect(() => {
    if (!nextLaunch || !nextLaunch.date_unix) return;

    const updateCountdown = () => {
      const targetTime = nextLaunch.date_unix * 1000;
      const now = Date.now();
      const diff = Math.max(0, targetTime - now);

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [nextLaunch]);

  // Launch list filter logic
  const filteredLaunches = launches.filter(launch => {
    const matchesSearch = launch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          launch.rocketName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          launch.launchpadName?.toLowerCase().includes(searchQuery.toLowerCase());
    if (!matchesSearch) return false;

    if (filterType === 'starlink') return launch.name.toLowerCase().includes('starlink');
    if (filterType === 'falcon9') return launch.rocketName?.toLowerCase().includes('falcon 9');
    if (filterType === 'falconheavy') return launch.rocketName?.toLowerCase().includes('falcon heavy');
    if (filterType === 'starship') return launch.rocketName?.toLowerCase().includes('starship');
    return true;
  });

  return (
    <div className="launches-view-container">
      {/* Header section */}
      <div className="section-header">
        <div>
          <h2 className="section-title">SpaceX Launch Operations & Manifest</h2>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: '4px' }}>
            Live countdowns, trajectory telemetry, rocket booster reusability & webcast archive
          </p>
        </div>

        <div className="search-filter-bar">
          <div className="search-input-wrapper">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="Search SpaceX Mission, Payload..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Hero Banner: Upcoming Next SpaceX Launch */}
      {nextLaunch && (
        <div className="glass-panel hero-launch-banner">
          <div className="hero-launch-info">
            <div>
              <div className="launch-status-tag">
                <span className="pulse-dot"></span> NEXT SCHEDULED SPACEX MISSION
              </div>
              <h3 className="hero-launch-title">{nextLaunch.name}</h3>
              <div className="hero-launch-meta">
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Rocket size={16} color="#00f0ff" /> {nextLaunch.rocketName}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <MapPin size={16} color="#ff6b00" /> {nextLaunch.launchpadName}
                </span>
              </div>
              <p style={{ color: '#cbd5e1', fontSize: '0.92rem', lineHeight: '1.5', maxWidth: '650px', marginTop: '8px' }}>
                {nextLaunch.details || 'SpaceX Falcon 9 orbital deployment carrying next-generation payload into Low Earth Orbit with automated autonomous drone ship booster landing.'}
              </p>
            </div>

            {/* Live Countdown Clock Box */}
            <div>
              <div className="countdown-box">
                <div className="countdown-unit">
                  <div className="countdown-number">{String(countdown.days).padStart(2, '0')}</div>
                  <div className="countdown-label">DAYS</div>
                </div>
                <div className="countdown-unit">
                  <div className="countdown-number">{String(countdown.hours).padStart(2, '0')}</div>
                  <div className="countdown-label">HOURS</div>
                </div>
                <div className="countdown-unit">
                  <div className="countdown-number">{String(countdown.minutes).padStart(2, '0')}</div>
                  <div className="countdown-label">MINS</div>
                </div>
                <div className="countdown-unit">
                  <div className="countdown-number">{String(countdown.seconds).padStart(2, '0')}</div>
                  <div className="countdown-label">SECS</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a
                  href={nextLaunch.webcastUrl && !nextLaunch.webcastUrl.includes('youtube') ? nextLaunch.webcastUrl : 'https://x.com/SpaceX'}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                  style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  <Play size={16} /> Watch Live on X (@SpaceX)
                </a>
                <a
                  href="https://www.spacex.com/launches"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                  style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  <ArrowUpRight size={16} color="#00f0ff" /> Official SpaceX.com Stream
                </a>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <img
              src={nextLaunch.patchUrl}
              alt={nextLaunch.name}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = nextLaunch.defaultPatch || '/assets/starlink_patch.jpg';
              }}
              style={{ width: '160px', height: '160px', objectFit: 'contain', borderRadius: '50%', border: '2px solid rgba(0,240,255,0.4)', filter: 'drop-shadow(0 0 20px rgba(0,240,255,0.5))' }}
            />
            <div style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: '#00f0ff', marginTop: '12px' }}>
              FLIGHT #{nextLaunch.flight_number || '388'}
            </div>
          </div>
        </div>
      )}

      {/* Launch Filters */}
      <div className="filter-pill-container" style={{ marginBottom: '20px' }}>
        <button
          className={`filter-pill ${filterType === 'all' ? 'active' : ''}`}
          onClick={() => setFilterType('all')}
        >
          All Launches ({launches.length})
        </button>
        <button
          className={`filter-pill ${filterType === 'starlink' ? 'active' : ''}`}
          onClick={() => setFilterType('starlink')}
        >
          Starlink Missions
        </button>
        <button
          className={`filter-pill ${filterType === 'falcon9' ? 'active' : ''}`}
          onClick={() => setFilterType('falcon9')}
        >
          Falcon 9
        </button>
        <button
          className={`filter-pill ${filterType === 'falconheavy' ? 'active' : ''}`}
          onClick={() => setFilterType('falconheavy')}
        >
          Falcon Heavy
        </button>
        <button
          className={`filter-pill ${filterType === 'starship' ? 'active' : ''}`}
          onClick={() => setFilterType('starship')}
        >
          Starship
        </button>
      </div>

      {/* Grid of Launch Cards */}
      <div className="launches-grid">
        {filteredLaunches.map(launch => (
          <div key={launch.id} className="glass-panel launch-card">
            <div>
              <div className="launch-card-header">
                <img
                  src={launch.patchUrl}
                  alt={launch.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = launch.defaultPatch || '/assets/starlink_patch.jpg';
                  }}
                  style={{ width: '56px', height: '56px', objectFit: 'contain', borderRadius: '8px', border: '1px solid rgba(0,240,255,0.3)', flexShrink: 0 }}
                />
                <div>
                  <div className="launch-name">{launch.name}</div>
                  <div className="launch-date">
                    <Calendar size={13} style={{ display: 'inline', marginRight: '4px' }} />
                    {new Date(launch.date_utc).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '14px', fontSize: '0.85rem', color: '#94a3b8', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div>
                  <strong style={{ color: '#f1f5f9' }}>Vehicle:</strong> {launch.rocketName}
                </div>
                <div>
                  <strong style={{ color: '#f1f5f9' }}>Pad:</strong> {launch.launchpadName}
                </div>
                {launch.details && (
                  <div style={{ marginTop: '4px', fontSize: '0.8rem', lineHeight: '1.4', color: '#cbd5e1', display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {launch.details}
                  </div>
                )}
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '12px', marginTop: '16px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <div>
                {launch.success !== undefined && (
                  <span className={launch.success ? 'badge-success' : 'badge-fail'}>
                    {launch.success ? 'SUCCESSFUL MISSION' : 'LAUNCH FAILURE'}
                  </span>
                )}
              </div>

              {launch.webcastUrl && (
                <a
                  href={launch.webcastUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#00f0ff', fontSize: '0.8rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: '600' }}
                >
                  Webcast <ArrowUpRight size={14} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
