import React, { useState } from 'react';
import { Rocket, Moon, Globe, Shield, Smartphone, Zap, Calendar, Target, ChevronRight, Compass, Sparkles, Award } from 'lucide-react';

const FUTURE_PROJECTS = [
  {
    id: 'starship-mars',
    title: 'Starship Mars Colonization & Base Alpha',
    category: 'mars',
    targetYear: '2026 - 2028',
    status: 'FLIGHT TEST PHASE',
    statusColor: '#ff6b00',
    tagline: 'Making humanity a multi-planetary species by building a self-sustaining city on Mars.',
    badge: 'FLAGSHIP MISSION',
    patchUrl: '/assets/starship_patch.jpg',
    description: 'Starship is the fully reusable launch system designed to carry up to 100 people and 150 metric tons of cargo to Earth orbit, the Moon, Mars, and beyond. Powered by 33 Raptor 3 engines on Super Heavy.',
    stats: [
      { label: 'Payload to Orbit', val: '150+ Tons' },
      { label: 'Raptor Thrust', val: '280 Tonsf / engine' },
      { label: 'Crew Capacity', val: '100 Humans' },
      { label: 'Height', val: '121 meters' }
    ],
    milestones: [
      { year: '2024 - 2025', title: 'Starship Flight Tests 3-6', status: 'COMPLETED', desc: 'First successful hot-staging separation, catch of Super Heavy booster by Mechazilla arms at Starbase.' },
      { year: '2026', title: 'Orbital Propellant Transfer Test', status: 'IN PROGRESS', desc: 'Demonstrating cryogenic LOX/CH4 ship-to-ship refueling in Low Earth Orbit.' },
      { year: '2026', title: 'Uncrewed Starship Mars Cargo Mission', status: 'PLANNED', desc: 'Landing uncrewed Starships on Mars to verify landing integrity and local water ice extraction.' },
      { year: '2028+', title: 'First Crewed Mars Landing & Base Alpha', status: 'VISION', desc: 'Establishing initial human presence and solar-powered propellant synthesis plant.' }
    ]
  },
  {
    id: 'artemis-hls',
    title: 'NASA Artemis III & IV Lunar Human Landing System (HLS)',
    category: 'lunar',
    targetYear: '2026 - 2027',
    status: 'ACTIVE DEVELOPMENT',
    statusColor: '#00f0ff',
    tagline: 'Returning American astronauts to the Lunar South Pole for the first time since 1972.',
    badge: 'NASA CONTRACT $2.9B',
    patchUrl: '/assets/falcon_heavy_patch.jpg',
    description: 'SpaceX was awarded NASA’s Human Landing System contract to develop Starship HLS. It will dock with NASA’s Orion spacecraft and Gateway station in lunar orbit before descending to the Moon’s South Pole.',
    stats: [
      { label: 'Destination', val: 'Moon South Pole' },
      { label: 'Surface Stay', val: 'Up to 14 Days' },
      { label: 'Cargo Payload', val: '100+ Tons to Moon' },
      { label: 'Elevator Bay', val: '10m Outer Lift' }
    ],
    milestones: [
      { year: '2025', title: 'Starship HLS Docking & Elevator Testing', status: 'IN PROGRESS', desc: 'Testing crew airlocks, lunar elevator, and thermal protection for deep space.' },
      { year: '2026', title: 'Uncrewed Lunar Landing Demonstration', status: 'PLANNED', desc: 'Autonomous touchdown of Starship HLS on the Moon’s South Pole.' },
      { year: '2027', title: 'Artemis III Crewed Lunar Landing', status: 'PLANNED', desc: 'First woman and first person of color landing on the lunar surface.' }
    ]
  },
  {
    id: 'starlink-direct-cell',
    title: 'Starlink Direct-to-Cell & Gen3 Satellite Constellation',
    category: 'starlink',
    targetYear: '2024 - 2026',
    status: 'COMMERCIAL ROLLOUT',
    statusColor: '#10b981',
    tagline: 'Ubiquitous satellite cellular connectivity everywhere on Earth using standard LTE smartphones.',
    badge: 'GLOBAL COVERAGE',
    patchUrl: '/assets/starlink_patch.jpg',
    description: 'Starlink Direct-to-Cell satellites feature advanced eNodeB modems that act as cell towers in space, delivering seamless text, voice, and data connection to unmodified LTE mobile phones anywhere on Earth.',
    stats: [
      { label: 'Target Satellites', val: '42,000 Total' },
      { label: 'Backhaul Speed', val: '100 Gbps Laser' },
      { label: 'Mobile Compatibility', val: 'Standard LTE Phones' },
      { label: 'Carrier Partners', val: 'T-Mobile, Optus, Salt' }
    ],
    milestones: [
      { year: '2024', title: 'First Direct-to-Cell Texting Test', status: 'COMPLETED', desc: 'Sent first SMS text messages via Starlink satellite to unmodified cell phones.' },
      { year: '2025', title: 'Global Voice & IoT Data Launch', status: 'ACTIVE ROLLOUT', desc: 'Expanding to voice calls, cellular data roaming, and dead-zone elimination.' },
      { year: '2026', title: 'Starlink Gen3 V2.0 Full Deployment', status: 'PLANNED', desc: 'Launching 2.0-ton V2 satellites via Starship for 10x higher bandwidth.' }
    ]
  },
  {
    id: 'starshield-defense',
    title: 'Starshield National Security Network',
    category: 'defense',
    targetYear: '2024 - 2028',
    status: 'CLASSIFIED / ACTIVE',
    statusColor: '#a855f7',
    tagline: 'Dedicated satellite bus network designed for government security, earth observation, and tactical comms.',
    badge: 'US DOD CONTRACT',
    patchUrl: '/assets/starship_patch.jpg',
    description: 'Starshield leverages Starlink technology and launch capability to support national security. While Starlink is designed for consumer and commercial use, Starshield is built for government use with high-grade cryptographic security.',
    stats: [
      { label: 'Domains', val: 'Comms, Sensing, Payloads' },
      { label: 'Encryption', val: 'Post-Quantum NSA' },
      { label: 'Intersatellite', val: 'Optical Laser Mesh' },
      { label: 'Bus Modular', val: 'Custom Military Bus' }
    ],
    milestones: [
      { year: '2023', title: '$70M US Space Force Contract', status: 'COMPLETED', desc: 'Awarded first dedicated contract for Starshield services.' },
      { year: '2024 - 2025', title: 'Spy Satellite Constellation Deployment', status: 'IN PROGRESS', desc: 'Launching hundreds of earth observation and intelligence gathering satellites.' }
    ]
  },
  {
    id: 'point-to-point',
    title: 'Starship Earth-to-Earth Passenger Travel',
    category: 'mars',
    targetYear: '2028 - 2030',
    status: 'FEASIBILITY PHASE',
    statusColor: '#ffd700',
    tagline: 'Sub-30 minute passenger flight to anywhere on Earth at Mach 25.',
    badge: 'REVOLUTIONARY TRANSPORT',
    patchUrl: '/assets/falcon_heavy_patch.jpg',
    description: 'With Starship, most international long-haul flights could be completed in under 30 minutes. Fly from New York to Shanghai in 39 minutes or London to Hong Kong in 34 minutes.',
    stats: [
      { label: 'Max Speed', val: 'Mach 27 (27,000 km/h)' },
      { label: 'NY to Tokyo', val: '30 Minutes' },
      { label: 'London to Sydney', val: '35 Minutes' },
      { label: 'Launch Pad', val: 'Floating Ocean Platforms' }
    ],
    milestones: [
      { year: '2027', title: 'Offshore Launch Platform Tests', status: 'PLANNED', desc: 'Converting ocean oil rigs into launch pads near major coastal cities.' },
      { year: '2029', title: 'Commercial Cargo & Passenger Trials', status: 'VISION', desc: 'Obtaining FAA commercial point-to-point suborbital passenger licenses.' }
    ]
  }
];

export default function FutureProjectsView() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(FUTURE_PROJECTS[0]);

  const filteredProjects = filter === 'all'
    ? FUTURE_PROJECTS
    : FUTURE_PROJECTS.filter(p => p.category === filter);

  return (
    <div className="launches-view-container" style={{ paddingBottom: '60px' }}>
      {/* Top Banner Header */}
      <div className="glass-panel" style={{ padding: '20px 24px', borderLeft: '4px solid #00f0ff', marginBottom: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#00f0ff', fontFamily: 'monospace', fontSize: '0.8rem', fontWeight: 'bold' }}>
              <Sparkles size={16} /> SPACEX ROADMAP & NEXT-GEN INITIATIVES
            </div>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', margin: '6px 0 4px 0' }}>
              SpaceX Future Plans & Active Development
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '0.88rem', margin: 0 }}>
              From Mars Base Alpha and NASA Artemis Moon HLS to Direct-to-Cell satellite networks and Mach 25 suborbital flight.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <div className="stat-card" style={{ minWidth: '110px' }}>
              <div className="stat-label">MARS GOAL</div>
              <div className="stat-value gold">1M Humans</div>
            </div>
            <div className="stat-card" style={{ minWidth: '110px' }}>
              <div className="stat-label">LUNAR LANDING</div>
              <div className="stat-value cyan">2026 - 2027</div>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="filter-pill-container" style={{ marginTop: '18px', overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
          <button className={`filter-pill ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>
            <Compass size={14} /> All Initiatives
          </button>
          <button className={`filter-pill ${filter === 'mars' ? 'active' : ''}`} onClick={() => setFilter('mars')}>
            <Rocket size={14} /> Mars & Starship
          </button>
          <button className={`filter-pill ${filter === 'lunar' ? 'active' : ''}`} onClick={() => setFilter('lunar')}>
            <Moon size={14} /> NASA Artemis HLS
          </button>
          <button className={`filter-pill ${filter === 'starlink' ? 'active' : ''}`} onClick={() => setFilter('starlink')}>
            <Smartphone size={14} /> Direct-to-Cell
          </button>
          <button className={`filter-pill ${filter === 'defense' ? 'active' : ''}`} onClick={() => setFilter('defense')}>
            <Shield size={14} /> Starshield Defense
          </button>
        </div>
      </div>

      {/* Main Responsive Grid: Left Projects List + Right Detail Deep Dive */}
      <div className="roadmap-grid">
        {/* Left Column: Project Cards List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {filteredProjects.map(proj => {
            const isSelected = selectedProject.id === proj.id;
            return (
              <div
                key={proj.id}
                className="glass-panel"
                style={{
                  padding: '18px',
                  cursor: 'pointer',
                  borderLeft: isSelected ? `4px solid ${proj.statusColor}` : '1px solid rgba(255,255,255,0.08)',
                  background: isSelected ? 'rgba(0, 240, 255, 0.08)' : undefined,
                  transition: 'all 0.2s ease'
                }}
                onClick={() => setSelectedProject(proj)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px', flexWrap: 'wrap', gap: '6px' }}>
                  <span className="brand-badge" style={{ background: `${proj.statusColor}22`, color: proj.statusColor }}>
                    {proj.status}
                  </span>
                  <span style={{ fontFamily: 'monospace', fontSize: '0.78rem', color: '#94a3b8' }}>
                    TARGET: {proj.targetYear}
                  </span>
                </div>

                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: '700', margin: '4px 0 6px 0', color: '#ffffff' }}>
                  {proj.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: '#cbd5e1', lineHeight: '1.45', margin: 0 }}>
                  {proj.tagline}
                </p>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '14px', paddingTop: '10px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <span style={{ fontSize: '0.75rem', color: '#00f0ff', fontFamily: 'monospace' }}>
                    {proj.badge}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: '#00f0ff', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    View Deep Dive <ChevronRight size={14} />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Interactive Mission Deep Dive Card */}
        <div>
          {selectedProject && (
            <div className="glass-panel" style={{ padding: '22px', borderLeft: `4px solid ${selectedProject.statusColor}` }}>
              {/* Mission Patch & Header */}
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '18px', flexWrap: 'wrap' }}>
                <img
                  src={selectedProject.patchUrl}
                  alt={selectedProject.title}
                  style={{ width: '75px', height: '75px', borderRadius: '10px', objectFit: 'cover', border: '2px solid rgba(0,240,255,0.3)' }}
                  onError={(e) => { e.target.src = '/assets/starship_patch.jpg'; }}
                />
                <div style={{ flex: 1, minWidth: '220px' }}>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
                    <span className="brand-badge" style={{ background: `${selectedProject.statusColor}22`, color: selectedProject.statusColor }}>
                      {selectedProject.status}
                    </span>
                    <span style={{ fontFamily: 'monospace', fontSize: '0.78rem', color: '#ffd700' }}>
                      {selectedProject.badge}
                    </span>
                  </div>
                  <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 2.5vw, 1.6rem)', fontWeight: '800', margin: '6px 0 2px 0', color: '#ffffff' }}>
                    {selectedProject.title}
                  </h2>
                  <div style={{ fontSize: '0.82rem', color: '#00f0ff', fontFamily: 'monospace' }}>
                    Target Operations Timeline: {selectedProject.targetYear}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p style={{ fontSize: '0.9rem', color: '#e2e8f0', lineHeight: '1.6', marginBottom: '20px' }}>
                {selectedProject.description}
              </p>

              {/* Technical Specifications Grid */}
              <div style={{ marginBottom: '22px' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', color: '#00f0ff', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Zap size={15} /> TECHNICAL SPECIFICATIONS & CAPABILITIES
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '10px' }}>
                  {selectedProject.stats.map((st, idx) => (
                    <div key={idx} className="sat-telemetry-item" style={{ padding: '10px' }}>
                      <div className="sat-telemetry-key" style={{ fontSize: '0.68rem' }}>{st.label}</div>
                      <div className="sat-telemetry-val" style={{ color: '#ffd700', fontSize: '1.05rem' }}>
                        {st.val}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Roadmap Timeline */}
              <div>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', color: '#00f0ff', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Target size={15} /> STRATEGIC ROADMAP MILESTONES
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {selectedProject.milestones.map((ms, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: 'rgba(3,7,18,0.7)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '8px',
                        padding: '12px 14px',
                        display: 'flex',
                        gap: '12px',
                        flexDirection: 'column'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '6px' }}>
                        <span style={{ fontSize: '0.78rem', color: '#ffd700', fontFamily: 'monospace', fontWeight: 'bold' }}>
                          📅 {ms.year}
                        </span>
                        <span style={{
                          fontSize: '0.68rem',
                          padding: '2px 8px',
                          borderRadius: '4px',
                          background: ms.status === 'COMPLETED' ? 'rgba(16,185,129,0.2)' : ms.status === 'IN PROGRESS' ? 'rgba(0,240,255,0.2)' : 'rgba(255,215,0,0.15)',
                          color: ms.status === 'COMPLETED' ? '#10b981' : ms.status === 'IN PROGRESS' ? '#00f0ff' : '#ffd700',
                          fontFamily: 'monospace',
                          fontWeight: 'bold'
                        }}>
                          {ms.status}
                        </span>
                      </div>
                      <div style={{ fontWeight: '700', fontSize: '0.92rem', color: '#ffffff' }}>
                        {ms.title}
                      </div>
                      <div style={{ fontSize: '0.82rem', color: '#cbd5e1', lineHeight: '1.45' }}>
                        {ms.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
