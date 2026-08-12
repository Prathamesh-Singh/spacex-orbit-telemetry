import React, { useState, useEffect } from 'react';
import { Newspaper, ExternalLink, Clock, Search, Sparkles, Radio, RefreshCw } from 'lucide-react';
import { newsApi } from '../services/newsApi';

export default function SpaceNewsView() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');

  const fetchNews = async () => {
    setLoading(true);
    const data = await newsApi.getLatestSpaceNews(20);
    setArticles(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const filteredArticles = articles.filter(art => {
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          art.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          art.news_site.toLowerCase().includes(searchQuery.toLowerCase());
    if (!matchesSearch) return false;

    if (filter === 'spacex') return art.title.toLowerCase().includes('spacex') || art.title.toLowerCase().includes('starship') || art.title.toLowerCase().includes('falcon');
    if (filter === 'starlink') return art.title.toLowerCase().includes('starlink');
    if (filter === 'nasa') return art.title.toLowerCase().includes('nasa') || art.title.toLowerCase().includes('artemis') || art.title.toLowerCase().includes('moon');
    return true;
  });

  const featuredArticle = filteredArticles[0] || articles[0];
  const gridArticles = filteredArticles.length > 1 ? filteredArticles.slice(1) : filteredArticles;

  return (
    <div className="launches-view-container" style={{ paddingBottom: '60px' }}>
      {/* Header section */}
      <div className="section-header">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#00f0ff', fontFamily: 'monospace', fontSize: '0.78rem', fontWeight: 'bold', marginBottom: '4px' }}>
            <span className="pulse-dot"></span> LIVE TELEMETRY NEWS FEED
          </div>
          <h2 className="section-title">Space & Launch Operations News</h2>
          <p style={{ color: '#94a3b8', fontSize: '0.88rem', marginTop: '4px' }}>
            Real-time breaking spaceflight news, Starship updates, satellite launches & astronomy discoveries
          </p>
        </div>

        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap', width: '100%', maxWidth: '400px' }}>
          <div className="search-input-wrapper" style={{ flex: 1, minWidth: '200px' }}>
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="Search Space News..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{ width: '100%' }}
            />
          </div>

          <button className="btn-secondary" onClick={fetchNews} title="Refresh News Feed">
            <RefreshCw size={15} />
          </button>
        </div>
      </div>

      {/* News Category Filter Pills */}
      <div className="filter-pill-container" style={{ marginBottom: '24px', overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
        <button className={`filter-pill ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>
          All Space News
        </button>
        <button className={`filter-pill ${filter === 'spacex' ? 'active' : ''}`} onClick={() => setFilter('spacex')}>
          SpaceX & Starship
        </button>
        <button className={`filter-pill ${filter === 'starlink' ? 'active' : ''}`} onClick={() => setFilter('starlink')}>
          Starlink & Comms
        </button>
        <button className={`filter-pill ${filter === 'nasa' ? 'active' : ''}`} onClick={() => setFilter('nasa')}>
          NASA & Artemis
        </button>
      </div>

      {loading ? (
        <div style={{ padding: '60px', textAlign: 'center', color: '#00f0ff', fontFamily: 'monospace' }}>
          <div className="pulse-dot" style={{ margin: '0 auto 16px auto', width: '14px', height: '14px' }}></div>
          ACQUIRING LIVE SPACEFLIGHT NEWS FEED...
        </div>
      ) : (
        <>
          {/* Featured Top Story Card */}
          {featuredArticle && (
            <div className="glass-panel" style={{ padding: '20px', marginBottom: '24px', borderLeft: '4px solid #00f0ff' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', alignItems: 'center' }}>
                <img
                  src={featuredArticle.image_url}
                  alt={featuredArticle.title}
                  style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)' }}
                  onError={(e) => { e.target.src = '/assets/starship_mars_hero.jpg'; }}
                />
                <div>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '10px' }}>
                    <span className="brand-badge" style={{ background: 'rgba(0, 240, 255, 0.15)', color: '#00f0ff' }}>
                      {featuredArticle.news_site}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '4px', fontFamily: 'var(--font-mono)' }}>
                      <Clock size={12} /> {new Date(featuredArticle.published_at).toLocaleDateString()}
                    </span>
                  </div>

                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', fontWeight: '800', color: '#ffffff', marginBottom: '10px', lineHeight: '1.3' }}>
                    {featuredArticle.title}
                  </h3>

                  <p style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '16px' }}>
                    {featuredArticle.summary}
                  </p>

                  <a
                    href={featuredArticle.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem' }}
                  >
                    Read Full Article <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Grid Stories Section */}
          <div className="launches-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
            {gridArticles.map((art) => (
              <div key={art.id} className="glass-panel" style={{ padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <img
                    src={art.image_url}
                    alt={art.title}
                    style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '4px', marginBottom: '12px', border: '1px solid rgba(255,255,255,0.1)' }}
                    onError={(e) => { e.target.src = '/assets/starship_mars_hero.jpg'; }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span className="brand-badge" style={{ fontSize: '0.7rem', padding: '2px 8px' }}>
                      {art.news_site}
                    </span>
                    <span style={{ fontSize: '0.72rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
                      {new Date(art.published_at).toLocaleDateString()}
                    </span>
                  </div>

                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '700', color: '#ffffff', marginBottom: '8px', lineHeight: '1.3' }}>
                    {art.title}
                  </h4>

                  <p style={{ color: '#94a3b8', fontSize: '0.82rem', lineHeight: '1.45', marginBottom: '16px', display: '-webkit-box', WebkitLineClamp: '3', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {art.summary}
                  </p>
                </div>

                <a
                  href={art.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '0.78rem', width: '100%' }}
                >
                  View Source <ExternalLink size={13} />
                </a>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
