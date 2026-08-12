import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Search, Play, Pause } from 'lucide-react';
import { satelliteApi } from '../services/satelliteApi';

export default function GlobeViewer({ satellites, selectedSat, setSelectedSat, simSpeed, setSimSpeed }) {
  const containerRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [isPaused, setIsPaused] = useState(false);
  const [activeCount, setActiveCount] = useState(0);
  const [hoveredSat, setHoveredSat] = useState(null);

  // Pure Three.js References
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const controlsRef = useRef(null);
  const satMeshGroupRef = useRef(null);
  const orbitLineRef = useRef(null);
  const satsDataRef = useRef([]);

  const simTimeRef = useRef(new Date());

  // Initialize Pure Three.js Engine (Zero external wrapper dependencies)
  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth || window.innerWidth;
    const height = containerRef.current.clientHeight || (window.innerHeight - 65);

    // 1. Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#030712');
    sceneRef.current = scene;

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 2.4, 5.8);
    cameraRef.current = camera;

    // 3. WebGL Renderer
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch (e) {
      renderer = new THREE.WebGLRenderer({ antialias: false });
    }
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 4. OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.8;
    controls.minDistance = 2.2;
    controls.maxDistance = 14;
    controlsRef.current = controls;

    // 5. Ambient & Sun Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffffff, 1.6);
    sunLight.position.set(5, 3, 5);
    scene.add(sunLight);

    // 6. NASA Blue Marble Procedural High-Res Earth Sphere (Radius = 2.0)
    const earthGeo = new THREE.SphereGeometry(2.0, 64, 64);
    const proceduralTex = createProceduralEarthTexture();
    const earthMat = new THREE.MeshPhongMaterial({
      map: proceduralTex,
      shininess: 25,
      specular: new THREE.Color(0x333333)
    });
    const earthMesh = new THREE.Mesh(earthGeo, earthMat);
    scene.add(earthMesh);

    // Outer Atmospheric Glow Shell
    const atmosGeo = new THREE.SphereGeometry(2.06, 48, 48);
    const atmosMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.14,
      side: THREE.BackSide
    });
    const atmosMesh = new THREE.Mesh(atmosGeo, atmosMat);
    scene.add(atmosMesh);

    // Satellites Group Container
    const satGroup = new THREE.Group();
    scene.add(satGroup);
    satMeshGroupRef.current = satGroup;

    // Window Resize Handler
    const handleResize = () => {
      if (!containerRef.current || !renderer || !camera) return;
      const w = containerRef.current.clientWidth || window.innerWidth;
      const h = containerRef.current.clientHeight || (window.innerHeight - 65);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // 60fps Real-Time Orbit Animation Loop
    let animationFrameId;
    let lastTime = performance.now();

    const animate = (time) => {
      animationFrameId = requestAnimationFrame(animate);
      const deltaSec = (time - lastTime) / 1000;
      lastTime = time;

      // Rotate Earth slowly
      if (earthMesh) {
        earthMesh.rotation.y += 0.03 * deltaSec;
      }

      // Advance simulation clock
      if (!isPaused) {
        simTimeRef.current = new Date(simTimeRef.current.getTime() + deltaSec * 1000 * simSpeed);
      }

      // Update 3D Keplerian positions for all satellites across full 360-degree sphere
      if (satMeshGroupRef.current && satMeshGroupRef.current.children.length > 0) {
        const tSec = simTimeRef.current.getTime() / 1000;
        satMeshGroupRef.current.children.forEach((mesh) => {
          const sat = mesh.userData;
          if (sat) {
            const meanMotionRad = (2 * Math.PI) / (((sat.periodMinutes && !isNaN(sat.periodMinutes)) ? sat.periodMinutes : 95) * 60);
            const u = ((sat.meanAnomaly || 0) * Math.PI / 180 + meanMotionRad * (tSec - 1700000000)) % (2 * Math.PI);
            const incRad = (sat.inclination || 53.0) * Math.PI / 180;
            const raanRad = (sat.raan || 0) * Math.PI / 180;

            const radius = 2.0 + (sat.altitudeKm || 550) / 6371;

            // 3D Orbital Transformation in ECI space
            const xOrb = radius * Math.cos(u);
            const yOrb = radius * Math.sin(u);

            const x = xOrb * Math.cos(raanRad) - yOrb * Math.sin(raanRad) * Math.cos(incRad);
            const y = xOrb * Math.sin(raanRad) + yOrb * Math.cos(raanRad) * Math.cos(incRad);
            const z = yOrb * Math.sin(incRad);

            mesh.position.set(x, z, y);
          }
        });
      }

      controls.update();
      renderer.render(scene, camera);
    };
    animate(performance.now());

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement && containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [isPaused, simSpeed]);

  // Update Satellites Mesh Group when filter or search changes
  useEffect(() => {
    if (!satMeshGroupRef.current || !satellites) return;

    // Clear existing children
    while (satMeshGroupRef.current.children.length > 0) {
      const child = satMeshGroupRef.current.children[0];
      satMeshGroupRef.current.remove(child);
      if (child.geometry) child.geometry.dispose();
      if (child.material) child.material.dispose();
    }

    const filtered = satellites.filter(sat => {
      const matchesSearch = !searchQuery || sat.name.toLowerCase().includes(searchQuery.toLowerCase()) || String(sat.noradId).includes(searchQuery);
      const matchesType = filterType === 'all' || sat.type?.category === filterType;
      return matchesSearch && matchesType;
    });

    setActiveCount(filtered.length);
    satsDataRef.current = filtered;

    if (filtered.length === 0) return;

    // Glowing Satellite Geometries (Radius = 0.035)
    const satGeo = new THREE.SphereGeometry(0.035, 10, 10);
    const starlinkMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });
    const stationMat = new THREE.MeshBasicMaterial({ color: 0xffd700 });
    const scienceMat = new THREE.MeshBasicMaterial({ color: 0xa855f7 });

    const tSec = simTimeRef.current.getTime() / 1000;

    filtered.forEach((sat) => {
      let mat = starlinkMat;
      if (sat.type?.category === 'station') mat = stationMat;
      else if (sat.type?.category === 'science') mat = scienceMat;

      const mesh = new THREE.Mesh(satGeo, mat);

      const meanMotionRad = (2 * Math.PI) / (((sat.periodMinutes && !isNaN(sat.periodMinutes)) ? sat.periodMinutes : 95) * 60);
      const u = ((sat.meanAnomaly || 0) * Math.PI / 180 + meanMotionRad * (tSec - 1700000000)) % (2 * Math.PI);
      const incRad = (sat.inclination || 53.0) * Math.PI / 180;
      const raanRad = (sat.raan || 0) * Math.PI / 180;

      const radius = 2.0 + (sat.altitudeKm || 550) / 6371;

      const xOrb = radius * Math.cos(u);
      const yOrb = radius * Math.sin(u);

      const x = xOrb * Math.cos(raanRad) - yOrb * Math.sin(raanRad) * Math.cos(incRad);
      const y = xOrb * Math.sin(raanRad) + yOrb * Math.cos(raanRad) * Math.cos(incRad);
      const z = yOrb * Math.sin(incRad);

      mesh.position.set(x, z, y);
      mesh.userData = sat;
      satMeshGroupRef.current.add(mesh);
    });
  }, [satellites, filterType, searchQuery]);

  // Raycaster for Hover & Selection
  useEffect(() => {
    if (!rendererRef.current || !cameraRef.current || !satMeshGroupRef.current) return;

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handlePointerMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, cameraRef.current);
      const intersects = raycaster.intersectObjects(satMeshGroupRef.current.children);

      if (intersects.length > 0) {
        const satData = intersects[0].object.userData;
        setHoveredSat(satData);
        containerRef.current.style.cursor = 'pointer';
      } else {
        setHoveredSat(null);
        containerRef.current.style.cursor = 'grab';
      }
    };

    const handleClick = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, cameraRef.current);
      const intersects = raycaster.intersectObjects(satMeshGroupRef.current.children);

      if (intersects.length > 0) {
        const satData = intersects[0].object.userData;
        setSelectedSat(satData);
      }
    };

    const domElement = rendererRef.current.domElement;
    domElement.addEventListener('mousemove', handlePointerMove);
    domElement.addEventListener('click', handleClick);

    return () => {
      domElement.removeEventListener('mousemove', handlePointerMove);
      domElement.removeEventListener('click', handleClick);
    };
  }, [setSelectedSat]);

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden', background: '#030712' }}>
      {/* Pure Three.js WebGL Canvas Viewport */}
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
          <div>NORAD ID: {hoveredSat.noradId} | Alt: {hoveredSat.altitudeKm || 550} km</div>
        </div>
      )}
    </div>
  );
}

// High-Resolution Procedural Earth Canvas Texture (Blue Oceans, Continents, Cyber Grid)
function createProceduralEarthTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 2048;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');

  // 1. Deep Ocean Base
  ctx.fillStyle = '#06162d';
  ctx.fillRect(0, 0, 2048, 1024);

  // 2. Continents with Cyan Outlines
  ctx.fillStyle = '#14345c';
  ctx.strokeStyle = '#00f0ff';
  ctx.lineWidth = 2.5;

  // North America
  ctx.beginPath();
  ctx.ellipse(540, 310, 260, 170, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // South America
  ctx.beginPath();
  ctx.ellipse(720, 680, 140, 210, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Europe & Africa
  ctx.beginPath();
  ctx.ellipse(1120, 350, 170, 130, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.beginPath();
  ctx.ellipse(1140, 620, 160, 210, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Asia & Australia
  ctx.beginPath();
  ctx.ellipse(1560, 330, 310, 190, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.beginPath();
  ctx.ellipse(1680, 720, 130, 110, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // 3. Global Longitude & Latitude Cyber Grid Lines
  ctx.strokeStyle = 'rgba(0, 240, 255, 0.22)';
  ctx.lineWidth = 1.5;
  for (let x = 0; x < 2048; x += 128) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, 1024);
    ctx.stroke();
  }
  for (let y = 0; y < 1024; y += 128) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(2048, y);
    ctx.stroke();
  }

  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}
