import React, { useEffect, useRef, useState } from 'react';
import Globe from 'globe.gl';
import { Search, Play, Pause, RefreshCw } from 'lucide-react';
import { satelliteApi } from '../services/satelliteApi';

export default function GlobeViewer({ satellites, selectedSat, setSelectedSat, simSpeed, setSimSpeed }) {
  const containerRef = useRef(null);
  const globeInstanceRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [isPaused, setIsPaused] = useState(false);
  const [activeCount, setActiveCount] = useState(0);
  const [hoveredSat, setHoveredSat] = useState(null);

  const simTimeRef = useRef(new Date());

  // Initialize Globe.gl 3D Engine with NASA Blue Marble & Night Lights
  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth || window.innerWidth;
    const height = containerRef.current.clientHeight || (window.innerHeight - 65);

    // Initialize 3D Globe with NASA Blue Marble Texture
    const globe = Globe()(containerRef.current)
      .width(width)
      .height(height)
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
      .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
      .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
      .atmosphereColor('#00f0ff')
      .atmosphereAltitude(0.18)
      .pointOfView({ lat: 20, lng: 0, altitude: 2.2 });

    // Enable OrbitControls Damping & Smooth Interaction
    const controls = globe.controls();
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.4;

    // Custom 3D Object Renderer for Glowing Satellite Points
    globe
      .customLayerData([])
      .customThreeObject(d => {
        const color = d.type?.category === 'station' ? 0xffd700 : (d.type?.category === 'science' ? 0xa855f7 : 0x00f0ff);
        const radius = d.type?.category === 'station' ? 0.045 : 0.032;
        const THREE = window.THREE || globe.scene().children[0].constructor.module || require('three');
        const geo = new THREE.SphereGeometry(radius, 10, 10);
        const mat = new THREE.MeshBasicMaterial({ color });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.userData = d;
        return mesh;
      })
      .customThreeObjectUpdate((obj, d) => {
        // Compute 3D Keplerian position around Earth sphere (Radius = 100)
        const pos = d.__pos || { lat: 0, lng: 0, altKm: 550 };
        const altScale = 100 + (pos.altKm || 550) / 6371 * 100;
        const latRad = pos.lat * (Math.PI / 180);
        const lonRad = pos.lng * (Math.PI / 180);

        obj.position.x = altScale * Math.cos(latRad) * Math.cos(lonRad);
        obj.position.y = altScale * Math.sin(latRad);
        obj.position.z = altScale * Math.cos(latRad) * Math.sin(lonRad);
      })
      .onCustomLayerClick((d) => {
        if (d) setSelectedSat(d);
      })
      .onCustomLayerHover((d) => {
        setHoveredSat(d);
        if (containerRef.current) {
          containerRef.current.style.cursor = d ? 'pointer' : 'default';
        }
      });

    globeInstanceRef.current = globe;

    // Handle Window Resize
    const handleResize = () => {
      if (!containerRef.current || !globe) return;
      const w = containerRef.current.clientWidth || window.innerWidth;
      const h = containerRef.current.clientHeight || (window.innerHeight - 65);
      globe.width(w).height(h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  // Update Satellites Data & Real-Time 3D Positions across 360 Degrees
  useEffect(() => {
    if (!satellites || !globeInstanceRef.current) return;

    const filtered = satellites.filter(sat => {
      const matchesSearch = !searchQuery || sat.name.toLowerCase().includes(searchQuery.toLowerCase()) || String(sat.noradId).includes(searchQuery);
      const matchesType = filterType === 'all' || sat.type?.category === filterType;
      return matchesSearch && matchesType;
    });

    setActiveCount(filtered.length);

    // Compute 3D positions for all filtered satellites
    const now = simTimeRef.current;
    const dataWithPositions = filtered.map(sat => {
      const pos = satelliteApi.computePosition(sat, now);
      return {
        ...sat,
        __pos: pos
      };
    });

    globeInstanceRef.current.customLayerData(dataWithPositions);
  }, [satellites, filterType, searchQuery]);

  // Real-time animation tick for satellite orbits
  useEffect(() => {
    let animId;
    let lastTime = performance.now();

    const tick = (time) => {
      animId = requestAnimationFrame(tick);
      const deltaSec = (time - lastTime) / 1000;
      lastTime = time;

      if (!isPaused && globeInstanceRef.current) {
        simTimeRef.current = new Date(simTimeRef.current.getTime() + deltaSec * 1000 * simSpeed);
        const currTime = simTimeRef.current;

        const currentData = globeInstanceRef.current.customLayerData();
        if (currentData && currentData.length > 0) {
          const updated = currentData.map(sat => ({
            ...sat,
            __pos: satelliteApi.computePosition(sat, currTime)
          }));
          globeInstanceRef.current.customLayerData(updated);
        }
      }
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [isPaused, simSpeed]);

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden', background: '#030712' }}>
      {/* 3D Earth Globe Viewport */}
      <div ref={containerRef} style={{ width: '100%', height: '100%' }} />

      {/* 🎛️ SLEEK COMPACT TOP-LEFT TELEMETRY HUD TOOLBAR */}
      <div style={{
        position: 'absolute',
        top: '16px',
        left: '16px',
        zIndex: 30,
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        maxWidth: '310px',
        pointerEvents: 'auto'
      }}>
        {/* Compact Search Bar */}
        <div className="glass-panel" style={{ padding: '6px 12px', background: 'rgba(5, 5, 8, 0.92)' }}>
          <div className="search-input-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Search size={14} style={{ color: '#00f0ff', flexShrink: 0 }} />
            <input
              type="text"
              placeholder="Search Earth Satellites..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                background: 'transparent',
                border: 'none',
                color: '#ffffff',
                fontSize: '0.78rem',
                fontFamily: 'var(--font-mono)',
                outline: 'none'
              }}
            />
          </div>
        </div>

        {/* Compact Category Filters */}
        <div className="glass-panel" style={{
          padding: '6px 8px',
          display: 'flex',
          gap: '4px',
          background: 'rgba(5, 5, 8, 0.92)',
          overflowX: 'auto'
        }}>
          <button
            className={`filter-pill ${filterType === 'all' ? 'active' : ''}`}
            onClick={() => setFilterType('all')}
            style={{ padding: '4px 8px', fontSize: '0.7rem' }}
          >
            All
          </button>
          <button
            className={`filter-pill ${filterType === 'starlink' ? 'active' : ''}`}
            onClick={() => setFilterType('starlink')}
            style={{ padding: '4px 8px', fontSize: '0.7rem' }}
          >
            <span className="dot-indicator" style={{ background: '#00f0ff' }}></span> Starlink
          </button>
          <button
            className={`filter-pill ${filterType === 'station' ? 'active' : ''}`}
            onClick={() => setFilterType('station')}
            style={{ padding: '4px 8px', fontSize: '0.7rem' }}
          >
            <span className="dot-indicator" style={{ background: '#ffd700' }}></span> ISS
          </button>
          <button
            className={`filter-pill ${filterType === 'science' ? 'active' : ''}`}
            onClick={() => setFilterType('science')}
            style={{ padding: '4px 8px', fontSize: '0.7rem' }}
          >
            <span className="dot-indicator" style={{ background: '#a855f7' }}></span> Science
          </button>
        </div>

        {/* Ultra-Compact Stats Strip */}
        <div className="glass-panel" style={{
          padding: '8px 14px',
          display: 'flex',
          alignItems: 'center',
          justify: 'space-between',
          background: 'rgba(5, 5, 8, 0.94)',
          borderLeft: '3px solid #00f0ff'
        }}>
          <div>
            <div style={{ fontSize: '0.62rem', fontFamily: 'var(--font-mono)', color: '#00f0ff', letterSpacing: '1px', fontWeight: 'bold' }}>
              ORBITS TRACKED
            </div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: '900', color: '#ffffff', lineHeight: '1' }}>
              {activeCount.toLocaleString()}
            </div>
          </div>

          <div style={{ width: '1px', height: '24px', background: 'rgba(255,255,255,0.15)' }}></div>

          <div>
            <div style={{ fontSize: '0.62rem', fontFamily: 'var(--font-mono)', color: '#ffd700', letterSpacing: '1px', fontWeight: 'bold' }}>
              SPACEX STARLINK
            </div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: '900', color: '#ffd700', lineHeight: '1' }}>
              {satellites.filter(s => s.type?.category === 'starlink').length.toLocaleString()}
            </div>
          </div>
        </div>
      </div>

      {/* 🎮 COMPACT BOTTOM TIME CONTROLS */}
      <div className="time-controls-bar" style={{
        position: 'absolute',
        bottom: '16px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 30,
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        padding: '6px 14px',
        borderRadius: '20px',
        background: 'rgba(5, 5, 8, 0.94)',
        border: '1px solid rgba(255, 255, 255, 0.15)'
      }}>
        <button className="speed-btn" onClick={() => setIsPaused(!isPaused)} style={{ padding: '4px 8px' }}>
          {isPaused ? <Play size={12} color="#00f0ff" /> : <Pause size={12} />}
        </button>
        <span style={{ fontSize: '0.68rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>SPEED:</span>
        <button className={`speed-btn ${simSpeed === 1 ? 'active' : ''}`} onClick={() => { setSimSpeed(1); setIsPaused(false); }}>1x Live</button>
        <button className={`speed-btn ${simSpeed === 10 ? 'active' : ''}`} onClick={() => { setSimSpeed(10); setIsPaused(false); }}>10x</button>
        <button className={`speed-btn ${simSpeed === 60 ? 'active' : ''}`} onClick={() => { setSimSpeed(60); setIsPaused(false); }}>60x</button>
        <button className={`speed-btn ${simSpeed === 300 ? 'active' : ''}`} onClick={() => { setSimSpeed(300); setIsPaused(false); }}>300x</button>
      </div>

      {/* Mouse Hover Tooltip */}
      {hoveredSat && (
        <div style={{
          position: 'absolute',
          bottom: '70px',
          left: '20px',
          zIndex: 50,
          background: 'rgba(5, 5, 8, 0.94)',
          border: '1px solid rgba(0, 240, 255, 0.4)',
          padding: '10px 14px',
          borderRadius: '6px',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.78rem',
          color: '#ffffff',
          pointerEvents: 'none'
        }}>
          <div style={{ color: '#00f0ff', fontWeight: 'bold' }}>{hoveredSat.name}</div>
          <div>NORAD ID: {hoveredSat.noradId} | Alt: {hoveredSat.__pos?.altKm || 550} km</div>
        </div>
      )}
    </div>
  );
}
