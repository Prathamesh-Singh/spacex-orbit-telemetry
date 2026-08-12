import React, { useState } from 'react';
import { Shield, Zap, Flame, Award, ChevronRight, Layers, ArrowUp } from 'lucide-react';

export default function RocketFleetView({ rockets }) {
  const [selectedRocket, setSelectedRocket] = useState(rockets[0] || null);

  return (
    <div className="launches-view-container">
      <div className="section-header">
        <div>
          <h2 className="section-title">SpaceX Launch Vehicles & Starship Megarocket Fleet</h2>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: '4px' }}>
            Next-generation orbital propulsion systems, Merlin & Raptor engine specs, payload capacities & reusability
          </p>
        </div>
      </div>

      <div className="fleet-grid">
        {rockets.map(rocket => (
          <div
            key={rocket.id}
            className="glass-panel fleet-card"
            style={{
              borderColor: selectedRocket?.id === rocket.id ? '#ffffff' : 'var(--border-color)',
              boxShadow: selectedRocket?.id === rocket.id ? '0 0 24px rgba(255, 255, 255, 0.25)' : 'none',
              cursor: 'pointer'
            }}
            onClick={() => setSelectedRocket(rocket)}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: '800' }}>
                  {rocket.name}
                </h3>
                <span className="brand-badge" style={{ background: 'rgba(255, 255, 255, 0.1)', color: '#ffffff' }}>
                  {rocket.active ? 'OPERATIONAL' : 'DEVELOPMENT'}
                </span>
              </div>

              {rocket.flickr_images && rocket.flickr_images[0] && (
                <img
                  src={rocket.flickr_images[0]}
                  alt={rocket.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    if (rocket.name.includes('Starship')) {
                      e.target.src = '/assets/starship_patch.jpg';
                    } else if (rocket.name.includes('Heavy')) {
                      e.target.src = '/assets/falcon_heavy_patch.jpg';
                    } else {
                      e.target.src = '/assets/starlink_patch.jpg';
                    }
                  }}
                  style={{ width: '100%', height: '210px', objectFit: 'cover', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)' }}
                />
              )}

              <p style={{ color: '#cbd5e1', fontSize: '0.86rem', lineHeight: '1.5', margin: '14px 0' }}>
                {rocket.description}
              </p>

              <div className="fleet-specs-grid">
                <div className="sat-telemetry-item">
                  <div className="sat-telemetry-key">HEIGHT</div>
                  <div className="sat-telemetry-val" style={{ color: '#ffffff' }}>{rocket.height?.meters}m ({rocket.height?.feet} ft)</div>
                </div>
                <div className="sat-telemetry-item">
                  <div className="sat-telemetry-key">DIAMETER</div>
                  <div className="sat-telemetry-val" style={{ color: '#00f0ff' }}>{rocket.diameter?.meters}m ({rocket.diameter?.feet} ft)</div>
                </div>
                <div className="sat-telemetry-item">
                  <div className="sat-telemetry-key">STAGES</div>
                  <div className="sat-telemetry-val">{rocket.stages} Stage</div>
                </div>
                <div className="sat-telemetry-item">
                  <div className="sat-telemetry-key">COST / LAUNCH</div>
                  <div className="sat-telemetry-val" style={{ color: '#ffd700' }}>${(rocket.cost_per_launch / 1000000).toFixed(0)}M</div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '12px', marginTop: '12px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <span style={{ fontSize: '0.78rem', color: '#00f0ff', fontFamily: 'monospace' }}>
                SUCCESS RATE: {rocket.success_rate_pct}%
              </span>
              <span style={{ fontSize: '0.8rem', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: '600' }}>
                View Spec Sheet <ChevronRight size={14} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
