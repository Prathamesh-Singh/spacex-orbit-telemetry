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
    <div className="launches-view-container">
      {/* Header section */}
      <div className="section-header">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#00f0ff', fontFamily: 'monospace', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '4px' }}>
            <span className="pulse-dot"></span> LIVE TELEMETRY NEWS FEED
          </div>
          <h2 className="section-title">Space & Launch Operations News</h2>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: '4px' }}>
            Real-time breaking spaceflight news, Starship updates, satellite launches & astronomy discoveries
          </p>
        </div>

        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div className="search-input-wrapper" style={{ minWidth: '260px' }}>
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="Search Space News..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>

          <button className="btn-secondary" onClick={fetchNews} title="Refresh News Feed">
            <RefreshCw size={15} />
          </button>
        </div>
      </div>

      {/* News Category Filter Pills */}
      <div className="filter-pill-container" style={{ marginBottom: '24px' }}>
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
            <div className="glass-panel" style={{ padding: '24px', marginBottom: '28px', borderLeft: '4px solid #00f0ff' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', alignItems: 'center' }}>
                <img
                  src={featuredArticle.image_url}
                  alt={featuredArticle.title}
                  style={{ width: '100%', height: '240px', objectFit: 'cover', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)' }}
                  onError={(e) => { e.target.src = '/assets/starship_mars_hero.jpg'; }}
                />

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="brand-badge" style={{ background: 'rgba(0,240,255,0.15)', color: '#00f0ff' }}>
                      FEATURED STORY // {featuredArticle.news_site}
                    </span>
                    <span style={{ fontSize: '0.78rem', color: '#94a3b8', fontFamily: 'monospace', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={13} /> {new Date(featuredArticle.published_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>

                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: '800', lineHeight: '1.3' }}>
                    {featuredArticle.title}
                  </h3>

                  <p style={{ color: '#cbd5e1', fontSize: '0.92rem', lineHeight: '1.5' }}>
                    {featuredArticle.summary}
                  </p>

                  <a
                    href={featuredArticle.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary"
                    style={{ textDecoration: 'none', width: 'fit-content', marginTop: '8px' }}
                  >
                    Read Full Story <ExternalLink size={15} />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Grid of Space News Cards */}
          <div className="launches-grid">
            {gridArticles.map(article => (
              <div key={article.id} className="glass-panel launch-card" style={{ padding: '20px' }}>
                <div>
                  <img
                    src={article.image_url}
                    alt={article.title}
                    style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '4px', marginBottom: '14px', border: '1px solid rgba(255,255,255,0.08)' }}
                    onError={(e) => { e.target.src = '/assets/starship_patch.jpg'; }}
                  />

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.72rem', color: '#00f0ff', fontFamily: 'monospace', fontWeight: 'bold' }}>
                      {article.news_site}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontFamily: 'monospace' }}>
                      {new Date(article.published_at).toLocaleDateString([], { month: 'short', day: 'numeric' })}
                    </span>
                  </div>

                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: '700', lineHeight: '1.35', marginBottom: '8px' }}>
                    {article.title}
                  </h4>

                  <p style={{ fontSize: '0.84rem', color: '#94a3b8', lineHeight: '1.45', display: '-webkit-box', WebkitLineClamp: '3', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {article.summary}
                  </p>
                </div>

                <div style={{ paddingTop: '14px', marginTop: '14px', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'flex-end' }}>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: '#00f0ff', fontSize: '0.8rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: '600' }}
                  >
                    Read Article <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
