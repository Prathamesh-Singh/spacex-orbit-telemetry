import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Search, Globe, Radio, Zap, Shield, Play, Pause } from 'lucide-react';
import { satelliteApi } from '../services/satelliteApi';

export default function GlobeViewer({ satellites, selectedSat, setSelectedSat, simSpeed, setSimSpeed }) {
  const containerRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredSat, setHoveredSat] = useState(null);
  const [activeCount, setActiveCount] = useState(0);

  // Three.js References
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const controlsRef = useRef(null);
  const satMeshGroupRef = useRef(null);
  const orbitLineRef = useRef(null);
  const satsDataRef = useRef([]);

  // Time tracking for simulation speed
  const simTimeRef = useRef(new Date());

  // Initialize Three.js Engine
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
    camera.position.set(0, 2.2, 5.8);
    cameraRef.current = camera;

    // 3. Renderer
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch (e) {
      renderer = new THREE.WebGLRenderer({ antialias: false, failIfMajorPerformanceCaveat: false });
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

    // 5. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.1);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffffff, 1.6);
    sunLight.position.set(5, 3, 5);
    scene.add(sunLight);

    // 6. Earth Mesh (Radius = 2.0)
    const earthGeo = new THREE.SphereGeometry(2.0, 64, 64);
    const proceduralTex = createProceduralEarthTexture();
    const earthMat = new THREE.MeshPhongMaterial({
      map: proceduralTex,
      shininess: 25,
      specular: new THREE.Color(0x333333)
    });
    const earthMesh = new THREE.Mesh(earthGeo, earthMat);
    scene.add(earthMesh);

    // Atmosphere Glow Outer Shell
    const atmosGeo = new THREE.SphereGeometry(2.06, 48, 48);
    const atmosMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.14,
      side: THREE.BackSide
    });
    const atmosMesh = new THREE.Mesh(atmosGeo, atmosMat);
    scene.add(atmosMesh);

    // Satellite Mesh Group
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

    // Main 60fps Real-Time Orbit Propagation Animation Loop
    let animationFrameId;
    let lastRealTime = performance.now();

    const animate = (time) => {
      animationFrameId = requestAnimationFrame(animate);
      const deltaSec = (time - lastRealTime) / 1000;
      lastRealTime = time;

      // Slow Earth rotation
      if (earthMesh) {
        earthMesh.rotation.y += 0.02 * deltaSec;
      }

      // Advance simulation time
      if (!isPaused) {
        simTimeRef.current = new Date(simTimeRef.current.getTime() + deltaSec * 1000 * simSpeed);
      }

      // Propagate positions of active satellites in 3D space
      if (satMeshGroupRef.current && satMeshGroupRef.current.children.length > 0) {
        const currTime = simTimeRef.current;
        satMeshGroupRef.current.children.forEach((mesh) => {
          const satData = mesh.userData;
          if (satData) {
            const pos = satelliteApi.computePosition(satData, currTime);
            const altScale = 2.0 + (pos.altKm || 550) / 6371;
            const latRad = (pos.lat || 0) * (Math.PI / 180);
            const lonRad = (pos.lng || 0) * (Math.PI / 180);

            mesh.position.x = altScale * Math.cos(latRad) * Math.cos(lonRad);
            mesh.position.y = altScale * Math.sin(latRad);
            mesh.position.z = altScale * Math.cos(latRad) * Math.sin(lonRad);
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
  }, [simSpeed, isPaused]);

  // Update Satellites Mesh Group when filter or search changes
  useEffect(() => {
    if (!satMeshGroupRef.current || !satellites) return;

    // Clear existing meshes
    while (satMeshGroupRef.current.children.length > 0) {
      const child = satMeshGroupRef.current.children[0];
      satMeshGroupRef.current.remove(child);
      if (child.geometry) child.geometry.dispose();
      if (child.material) child.material.dispose();
    }

    const filtered = satellites.filter(sat => {
      const matchesSearch = !searchQuery || sat.name.toLowerCase().includes(searchQuery.toLowerCase()) || String(sat.noradId).includes(searchQuery);
      const matchesType = filterType === 'all' || sat.type.category === filterType;
      return matchesSearch && matchesType;
    });

    setActiveCount(filtered.length);
    satsDataRef.current = filtered;

    if (filtered.length === 0) return;

    // High Visibility Glowing Sphere Geometry for orbital nodes (Radius = 0.032)
    const satGeo = new THREE.SphereGeometry(0.032, 12, 12);
    const starlinkMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });
    const stationMat = new THREE.MeshBasicMaterial({ color: 0xffd700 });
    const scienceMat = new THREE.MeshBasicMaterial({ color: 0xa855f7 });

    const now = simTimeRef.current;

    filtered.forEach((sat) => {
      let mat = starlinkMat;
      if (sat.type?.category === 'station') mat = stationMat;
      else if (sat.type?.category === 'science') mat = scienceMat;

      const mesh = new THREE.Mesh(satGeo, mat);
      const pos = satelliteApi.computePosition(sat, now);

      const altScale = 2.0 + (pos.altKm || 550) / 6371;
      const latRad = (pos.lat || 0) * (Math.PI / 180);
      const lonRad = (pos.lng || 0) * (Math.PI / 180);

      mesh.position.x = altScale * Math.cos(latRad) * Math.cos(lonRad);
      mesh.position.y = altScale * Math.sin(latRad);
      mesh.position.z = altScale * Math.cos(latRad) * Math.sin(lonRad);

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

  // Draw Selected Satellite Orbit Trajectory Ring
  useEffect(() => {
    if (!sceneRef.current) return;

    if (orbitLineRef.current) {
      sceneRef.current.remove(orbitLineRef.current);
      orbitLineRef.current.geometry.dispose();
      orbitLineRef.current.material.dispose();
      orbitLineRef.current = null;
    }

    if (!selectedSat) return;

    const points = [];
    const altScale = 2.0 + (selectedSat.altitudeKm || 550) / 6371;
    const incRad = ((selectedSat.inclination || 53) * Math.PI) / 180;

    for (let i = 0; i <= 128; i++) {
      const theta = (i / 128) * Math.PI * 2;
      const x = altScale * Math.cos(theta);
      const y = altScale * Math.sin(theta) * Math.sin(incRad);
      const z = altScale * Math.sin(theta) * Math.cos(incRad);
      points.push(new THREE.Vector3(x, y, z));
    }

    const orbitGeo = new THREE.BufferGeometry().setFromPoints(points);
    const orbitMat = new THREE.LineBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.85 });
    const orbitLine = new THREE.Line(orbitGeo, orbitMat);
    sceneRef.current.add(orbitLine);
    orbitLineRef.current = orbitLine;
  }, [selectedSat]);

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      {/* 3D WebGL Canvas Container */}
      <div ref={containerRef} style={{ width: '100%', height: '100%' }} />

      {/* Top Left Mission Telemetry HUD Controls */}
      <div className="globe-hud-overlay">
        {/* Search Bar */}
        <div className="glass-panel" style={{ padding: '10px 14px' }}>
          <div className="search-input-wrapper">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="Search Earth Satellites or NORAD ID..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{ width: '100%' }}
            />
          </div>
        </div>

        {/* Orbit Category Filters */}
        <div className="glass-panel filter-pill-container">
          <button className={`filter-pill ${filterType === 'all' ? 'active' : ''}`} onClick={() => setFilterType('all')}>
            All Earth Orbits
          </button>
          <button className={`filter-pill ${filterType === 'starlink' ? 'active' : ''}`} onClick={() => setFilterType('starlink')}>
            <span className="dot-indicator" style={{ background: '#00f0ff' }}></span> Starlink
          </button>
          <button className={`filter-pill ${filterType === 'station' ? 'active' : ''}`} onClick={() => setFilterType('station')}>
            <span className="dot-indicator" style={{ background: '#ffd700' }}></span> ISS / Station
          </button>
          <button className={`filter-pill ${filterType === 'science' ? 'active' : ''}`} onClick={() => setFilterType('science')}>
            <span className="dot-indicator" style={{ background: '#a855f7' }}></span> Science
          </button>
        </div>

        {/* Active Stats Card - Upgraded Aerospace Styling */}
        <div className="glass-panel" style={{ padding: '14px 18px', display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(5, 5, 8, 0.92)', borderLeft: '3px solid #00f0ff' }}>
          <div>
            <div style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: '#00f0ff', letterSpacing: '1.2px', fontWeight: 'bold' }}>
              EARTH ORBITS TRACKED
            </div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: '900', color: '#ffffff', lineHeight: '1.1', marginTop: '2px' }}>
              {activeCount.toLocaleString()}
            </div>
          </div>

          <div style={{ width: '1px', height: '32px', background: 'rgba(255,255,255,0.15)' }}></div>

          <div>
            <div style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: '#ffd700', letterSpacing: '1.2px', fontWeight: 'bold' }}>
              SPACEX STARLINK
            </div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: '900', color: '#ffd700', lineHeight: '1.1', marginTop: '2px' }}>
              {satellites.filter(s => s.type?.category === 'starlink').length.toLocaleString()}
            </div>
          </div>
        </div>
      </div>

      {/* Time Machine Controls */}
      <div className="time-controls-bar">
        <button className="speed-btn" onClick={() => setIsPaused(!isPaused)}>
          {isPaused ? <Play size={14} color="#00f0ff" /> : <Pause size={14} />}
        </button>
        <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontFamily: 'monospace' }}>SPEED:</span>
        <button className={`speed-btn ${simSpeed === 1 ? 'active' : ''}`} onClick={() => { setSimSpeed(1); setIsPaused(false); }}>1x Live</button>
        <button className={`speed-btn ${simSpeed === 10 ? 'active' : ''}`} onClick={() => { setSimSpeed(10); setIsPaused(false); }}>10x</button>
        <button className={`speed-btn ${simSpeed === 60 ? 'active' : ''}`} onClick={() => { setSimSpeed(60); setIsPaused(false); }}>60x</button>
        <button className={`speed-btn ${simSpeed === 300 ? 'active' : ''}`} onClick={() => { setSimSpeed(300); setIsPaused(false); }}>300x</button>
      </div>

      {/* Mouse Hover Tooltip */}
      {hoveredSat && (
        <div style={{
          position: 'fixed',
          bottom: '80px',
          left: '24px',
          zIndex: 50,
          background: 'rgba(5, 5, 8, 0.94)',
          border: '1px solid rgba(0, 240, 255, 0.4)',
          padding: '12px 16px',
          borderRadius: '6px',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.8rem',
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

// Procedural NASA Cyber Earth Texture with continents, ocean bathymetry, and grid lines
function createProceduralEarthTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 2048;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');

  // Deep Blue Ocean base
  ctx.fillStyle = '#061325';
  ctx.fillRect(0, 0, 2048, 1024);

  // Continents simulation with cyan glow outlines
  ctx.fillStyle = '#112948';
  ctx.strokeStyle = '#00f0ff';
  ctx.lineWidth = 2;

  // North America
  ctx.beginPath();
  ctx.ellipse(560, 320, 280, 180, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // South America
  ctx.beginPath();
  ctx.ellipse(720, 680, 150, 220, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Europe & Africa
  ctx.beginPath();
  ctx.ellipse(1120, 360, 180, 140, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.beginPath();
  ctx.ellipse(1140, 620, 170, 220, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Asia & Australia
  ctx.beginPath();
  ctx.ellipse(1560, 340, 320, 200, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.beginPath();
  ctx.ellipse(1680, 720, 140, 120, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Latitude & Longitude Coordinate Lines
  ctx.strokeStyle = 'rgba(0, 240, 255, 0.18)';
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
