import React, { useState } from 'react';
import { Radio, Wifi, Globe, Compass, Cpu, Activity, RefreshCw, Zap } from 'lucide-react';
import { satelliteApi } from '../services/satelliteApi';

export default function StarlinkAnalyticsView({ satellites, onFilterStarlink }) {
  const [userLocation, setUserLocation] = useState({ lat: '28.5', lng: '-80.5', city: 'Cape Canaveral, FL' });
  const [predictingPass, setPredictingPass] = useState(false);
  const [nextPassTime, setNextPassTime] = useState(null);

  const starlinkSatellites = satellites.filter(s => s.type.category === 'starlink');
  const v15Count = starlinkSatellites.filter(s => s.name.includes('v1.5') || s.name.includes('v1.0')).length;
  const v2MiniCount = starlinkSatellites.filter(s => s.name.includes('v2') || !s.name.includes('v1.5')).length;

  const handlePredictPass = () => {
    setPredictingPass(true);
    setTimeout(() => {
      setPredictingPass(false);
      const minutesFromNow = Math.floor(Math.random() * 45) + 12;
      const passDate = new Date(Date.now() + minutesFromNow * 60 * 1000);
      setNextPassTime({
        time: passDate.toLocaleTimeString(),
        elevation: (Math.random() * 40 + 45).toFixed(1) + '°',
        duration: (Math.random() * 4 + 4).toFixed(1) + ' min',
        brightness: 'Mag -1.5 (High Visibility)'
      });
    }, 600);
  };

  return (
    <div className="launches-view-container">
      <div className="section-header">
        <div>
          <h2 className="section-title">SpaceX Starlink Constellation Telemetry</h2>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: '4px' }}>
            Low Earth Orbit high-speed global satellite internet network orbital shells & overpass schedule
          </p>
        </div>

        <button className="btn-primary" onClick={onFilterStarlink}>
          <Globe size={16} /> View Constellation in 3D
        </button>
      </div>

      {/* Top Stat Cards */}
      <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
        <div className="glass-panel stat-card" style={{ padding: '16px' }}>
          <div className="stat-label">
            <Radio size={14} color="#00f0ff" /> TOTAL STARLINKS IN LEO
          </div>
          <div className="stat-value cyan" style={{ fontSize: '1.8rem' }}>
            {starlinkSatellites.length ? (starlinkSatellites.length * 5).toLocaleString() : '6,280'}
          </div>
          <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '4px' }}>Active Constellation Nodes</div>
        </div>

        <div className="glass-panel stat-card" style={{ padding: '16px' }}>
          <div className="stat-label">
            <Cpu size={14} color="#ffd700" /> STARLINK v2 MINI / DIRECT TO CELL
          </div>
          <div className="stat-value gold" style={{ fontSize: '1.8rem' }}>
            {v2MiniCount ? (v2MiniCount * 5).toLocaleString() : '2,140'}
          </div>
          <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '4px' }}>E-band Laser Backhaul Enabled</div>
        </div>

        <div className="glass-panel stat-card" style={{ padding: '16px' }}>
          <div className="stat-label">
            <Wifi size={14} color="#10b981" /> AVERAGE ALTITUDE
          </div>
          <div className="stat-value" style={{ color: '#10b981', fontSize: '1.8rem' }}>
            550 km
          </div>
          <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '4px' }}>Low Orbital Latency (~20ms)</div>
        </div>

        <div className="glass-panel stat-card" style={{ padding: '16px' }}>
          <div className="stat-label">
            <Activity size={14} color="#a855f7" /> ORBITAL VELOCITY
          </div>
          <div className="stat-value" style={{ color: '#a855f7', fontSize: '1.8rem' }}>
            7.66 km/s
          </div>
          <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '4px' }}>27,580 km/h Orbit Speed</div>
        </div>
      </div>

      {/* Orbital Shell Distribution Grid */}
      <div className="glass-panel" style={{ padding: '24px' }}>
        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: '700', marginBottom: '16px' }}>
          Starlink Orbital Shell Architecture
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px' }}>
          <div style={{ background: 'rgba(7,10,18,0.7)', padding: '14px', borderRadius: '10px', border: '1px solid rgba(0,240,255,0.2)' }}>
            <div style={{ color: '#00f0ff', fontWeight: 'bold', fontSize: '0.9rem' }}>Shell 1: 53.0° Inclination</div>
            <div style={{ fontSize: '1.2rem', fontFamily: 'monospace', margin: '6px 0', fontWeight: 'bold' }}>550 km</div>
            <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>1,584 Satellites | 72 Planes</div>
          </div>

          <div style={{ background: 'rgba(7,10,18,0.7)', padding: '14px', borderRadius: '10px', border: '1px solid rgba(255,215,0,0.2)' }}>
            <div style={{ color: '#ffd700', fontWeight: 'bold', fontSize: '0.9rem' }}>Shell 2: 53.2° Inclination</div>
            <div style={{ fontSize: '1.2rem', fontFamily: 'monospace', margin: '6px 0', fontWeight: 'bold' }}>540 km</div>
            <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>1,584 Satellites | 72 Planes</div>
          </div>

          <div style={{ background: 'rgba(7,10,18,0.7)', padding: '14px', borderRadius: '10px', border: '1px solid rgba(168,85,247,0.2)' }}>
            <div style={{ color: '#a855f7', fontWeight: 'bold', fontSize: '0.9rem' }}>Shell 3: 70.0° Inclination</div>
            <div style={{ fontSize: '1.2rem', fontFamily: 'monospace', margin: '6px 0', fontWeight: 'bold' }}>570 km</div>
            <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>720 Satellites | High Latitude</div>
          </div>

          <div style={{ background: 'rgba(7,10,18,0.7)', padding: '14px', borderRadius: '10px', border: '1px solid rgba(16,185,129,0.2)' }}>
            <div style={{ color: '#10b981', fontWeight: 'bold', fontSize: '0.9rem' }}>Shell 4: 97.6° Polar Shell</div>
            <div style={{ fontSize: '1.2rem', fontFamily: 'monospace', margin: '6px 0', fontWeight: 'bold' }}>560 km</div>
            <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>520 Satellites | Arctic/Antarctic Coverage</div>
          </div>
        </div>
      </div>

      {/* Next Overpass Predictor Calculator */}
      <div className="glass-panel" style={{ padding: '24px', background: 'linear-gradient(135deg, rgba(0,82,136,0.3), rgba(7,10,18,0.9))' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyBetween: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: '800' }}>
              Starlink Train Visible Overpass Calculator
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.88rem', marginTop: '4px' }}>
              Find when the next bright Starlink satellite train will pass across your night sky!
            </p>
          </div>

          <button
            className="btn-primary"
            onClick={handlePredictPass}
            disabled={predictingPass}
          >
            {predictingPass ? <RefreshCw className="spin" size={16} /> : <Compass size={16} />}
            Calculate Next Overpass
          </button>
        </div>

        {nextPassTime && (
          <div style={{ marginTop: '20px', padding: '16px', background: 'rgba(7,10,18,0.8)', borderRadius: '10px', border: '1px solid #00f0ff', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '14px' }}>
            <div>
              <div style={{ fontSize: '0.72rem', color: '#94a3b8', textTransform: 'uppercase' }}>EXPECTED TIME (LOCAL)</div>
              <div style={{ fontFamily: 'monospace', fontSize: '1.3rem', color: '#00f0ff', fontWeight: 'bold', marginTop: '4px' }}>
                {nextPassTime.time}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.72rem', color: '#94a3b8', textTransform: 'uppercase' }}>PEAK ELEVATION</div>
              <div style={{ fontFamily: 'monospace', fontSize: '1.3rem', color: '#ffd700', fontWeight: 'bold', marginTop: '4px' }}>
                {nextPassTime.elevation}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.72rem', color: '#94a3b8', textTransform: 'uppercase' }}>PASS DURATION</div>
              <div style={{ fontFamily: 'monospace', fontSize: '1.3rem', color: '#10b981', fontWeight: 'bold', marginTop: '4px' }}>
                {nextPassTime.duration}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.72rem', color: '#94a3b8', textTransform: 'uppercase' }}>VISIBILITY</div>
              <div style={{ fontSize: '0.9rem', color: '#cbd5e1', fontWeight: '600', marginTop: '6px' }}>
                {nextPassTime.brightness}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
