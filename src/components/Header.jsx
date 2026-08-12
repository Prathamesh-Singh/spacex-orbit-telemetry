import React, { useState, useEffect } from 'react';
import { Globe, Rocket, Radio, Shield, Volume2, VolumeX, RefreshCw, Activity, Sparkles, Home, Newspaper } from 'lucide-react';

export default function Header({ activeTab, setActiveTab, totalSatellites, nextLaunch, onRefresh }) {
  const [utcTime, setUtcTime] = useState('');
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setUtcTime(now.toUTCString().replace('GMT', 'UTC'));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleTabSwitch = (tabName) => {
    setActiveTab(tabName);
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 50);
  };

  return (
    <header className="header-hud">
      {/* Brand Section */}
      <div className="brand-section" onClick={() => handleTabSwitch('home')}>
        <div className="brand-logo-icon">
          <Globe size={16} />
        </div>
        <div>
          <h1 className="brand-title">
            SPACEX ORBIT <span className="brand-badge">LIVE v2.5</span>
          </h1>
        </div>
      </div>

      {/* 📱 Mobile Dropdown Menu Selector (Visible on mobile/tablets < 768px - Simulator removed for mobile) */}
      <div className="mobile-nav-container">
        <select
          className="mobile-nav-select"
          value={activeTab === 'simulator' ? 'home' : activeTab}
          onChange={(e) => handleTabSwitch(e.target.value)}
        >
          <option value="home">🏠 Overview</option>
          <option value="news">📰 Space News</option>
          <option value="globe">🌍 3D Orbit Tracker</option>
          <option value="launches">📡 Launch Manifest</option>
          <option value="starlink">🛰️ Starlink Analytics</option>
          <option value="rockets">🛡️ Rocket Fleet</option>
          <option value="future">✨ Mars Roadmap</option>
        </select>
      </div>

      {/* 🖥️ Desktop Navigation Tabs (Visible on screens > 768px) */}
      <nav className="nav-tabs desktop-nav">
        <button
          className={`nav-tab-btn ${activeTab === 'home' ? 'active' : ''}`}
          onClick={() => handleTabSwitch('home')}
        >
          <Home size={14} /> <span>Overview</span>
        </button>

        <button
          className={`nav-tab-btn ${activeTab === 'news' ? 'active' : ''}`}
          onClick={() => handleTabSwitch('news')}
        >
          <Newspaper size={14} /> <span>News</span>
        </button>

        <button
          className={`nav-tab-btn ${activeTab === 'globe' ? 'active' : ''}`}
          onClick={() => handleTabSwitch('globe')}
        >
          <Globe size={14} /> <span>3D Orbit</span>
        </button>

        <button
          className={`nav-tab-btn ${activeTab === 'simulator' ? 'active' : ''}`}
          onClick={() => handleTabSwitch('simulator')}
        >
          <Rocket size={14} /> <span>Simulator</span>
        </button>

        <button
          className={`nav-tab-btn ${activeTab === 'launches' ? 'active' : ''}`}
          onClick={() => handleTabSwitch('launches')}
        >
          <Radio size={14} /> <span>Manifest</span>
        </button>

        <button
          className={`nav-tab-btn ${activeTab === 'starlink' ? 'active' : ''}`}
          onClick={() => handleTabSwitch('starlink')}
        >
          <Activity size={14} /> <span>Starlink</span>
        </button>

        <button
          className={`nav-tab-btn ${activeTab === 'rockets' ? 'active' : ''}`}
          onClick={() => handleTabSwitch('rockets')}
        >
          <Shield size={14} /> <span>Fleet</span>
        </button>

        <button
          className={`nav-tab-btn ${activeTab === 'future' ? 'active' : ''}`}
          onClick={() => handleTabSwitch('future')}
          style={{
            border: activeTab === 'future' ? '1px solid #ffd700' : '1px solid rgba(255, 215, 0, 0.35)',
            color: activeTab === 'future' ? '#000000' : '#ffd700',
            background: activeTab === 'future' ? '#ffd700' : 'rgba(255, 215, 0, 0.05)'
          }}
        >
          <Sparkles size={14} color={activeTab === 'future' ? '#000000' : '#ffd700'} /> <span>Roadmap</span>
        </button>
      </nav>

      {/* Header Telemetry Actions */}
      <div className="header-actions">
        <div className="telemetry-clock">
          <span className="pulse-dot"></span>
          <span>{utcTime || 'UTC 00:00:00'}</span>
        </div>

        <button 
          className="btn-icon" 
          onClick={onRefresh}
          title="Refresh Telemetry Data"
        >
          <RefreshCw size={15} />
        </button>

        <button 
          className="btn-icon" 
          onClick={() => setSoundEnabled(!soundEnabled)}
          title={soundEnabled ? "Mute Telemetry Sound" : "Enable Telemetry Sound"}
        >
          {soundEnabled ? <Volume2 size={15} color="#00f0ff" /> : <VolumeX size={15} />}
        </button>
      </div>
    </header>
  );
}
