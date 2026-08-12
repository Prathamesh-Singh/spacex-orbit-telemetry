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

  // References for Three.js state
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const controlsRef = useRef(null);
  const satMeshGroupRef = useRef(null);
  const orbitLineRef = useRef(null);
  const satsDataRef = useRef([]);

  // Initialize Pure Three.js Engine
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
    camera.position.set(0, 2, 5.5);
    cameraRef.current = camera;

    // 3. Renderer
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch (e) {
      console.warn("WebGL creation fallback:", e);
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
    controls.minDistance = 2.3;
    controls.maxDistance = 12;
    controlsRef.current = controls;

    // 5. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffffff, 1.4);
    sunLight.position.set(5, 3, 5);
    scene.add(sunLight);

    // 6. Earth Mesh (Radius = 2.0)
    const earthGeo = new THREE.SphereGeometry(2.0, 64, 64);
    const proceduralTex = createProceduralEarthTexture();
    const earthMat = new THREE.MeshPhongMaterial({
      map: proceduralTex,
      shininess: 15,
      specular: new THREE.Color(0x222222)
    });
    const earthMesh = new THREE.Mesh(earthGeo, earthMat);
    scene.add(earthMesh);

    // Atmosphere Glow Outer Sphere
    const atmosGeo = new THREE.SphereGeometry(2.05, 48, 48);
    const atmosMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.12,
      side: THREE.BackSide
    });
    const atmosMesh = new THREE.Mesh(atmosGeo, atmosMat);
    scene.add(atmosMesh);

    // Satellite Points Group
    const satGroup = new THREE.Group();
    scene.add(satGroup);
    satMeshGroupRef.current = satGroup;

    // Window Resize Listener
    const handleResize = () => {
      if (!containerRef.current || !renderer || !camera) return;
      const w = containerRef.current.clientWidth || window.innerWidth;
      const h = containerRef.current.clientHeight || (window.innerHeight - 65);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let lastTime = performance.now();

    const animate = (time) => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      // Slow Earth rotation
      if (earthMesh) {
        earthMesh.rotation.y += 0.03 * delta;
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
  }, []);

  // Update Satellites 3D Points when satellites prop changes
  useEffect(() => {
    if (!satMeshGroupRef.current || !satellites) return;

    // Clear existing
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

    // Create Instance Points or Individual Sphere Geometries for high responsiveness
    const pointGeo = new THREE.SphereGeometry(0.015, 8, 8);

    filtered.forEach((sat) => {
      const color = sat.type.color || '#00f0ff';
      const mat = new THREE.MeshBasicMaterial({ color });
      const mesh = new THREE.Mesh(pointGeo, mat);

      // Convert lat/lng/alt (km) to 3D Cartesian coordinates (Earth Radius = 2.0)
      const altScale = 2.0 + (sat.alt || 550) / 6371; // 6371km Earth Radius
      const latRad = (sat.lat || 0) * (Math.PI / 180);
      const lonRad = (sat.lng || 0) * (Math.PI / 180);

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

  // Draw Selected Satellite Orbit Ring
  useEffect(() => {
    if (!sceneRef.current) return;

    // Remove existing line
    if (orbitLineRef.current) {
      sceneRef.current.remove(orbitLineRef.current);
      orbitLineRef.current.geometry.dispose();
      orbitLineRef.current.material.dispose();
      orbitLineRef.current = null;
    }

    if (!selectedSat) return;

    // Generate Orbit Ring Line
    const points = [];
    const altScale = 2.0 + (selectedSat.alt || 550) / 6371;
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

    // Focus Camera on Selected Satellite
    if (controlsRef.current) {
      const latRad = (selectedSat.lat || 0) * (Math.PI / 180);
      const lonRad = (selectedSat.lng || 0) * (Math.PI / 180);
      const targetVec = new THREE.Vector3(
        altScale * Math.cos(latRad) * Math.cos(lonRad),
        altScale * Math.sin(latRad),
        altScale * Math.cos(latRad) * Math.sin(lonRad)
      );
      controlsRef.current.target.copy(targetVec);
    }
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

        {/* Active Stats Card - Upgraded Professional Aerospace Styling */}
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
              {satellites.filter(s => s.type.category === 'starlink').length.toLocaleString()}
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
          <div>NORAD ID: {hoveredSat.noradId} | Alt: {hoveredSat.alt} km</div>
        </div>
      )}
    </div>
  );
}

// Helper procedural Earth texture for zero-network offline rendering fallback
function createProceduralEarthTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  // Ocean base
  ctx.fillStyle = '#0b192c';
  ctx.fillRect(0, 0, 1024, 512);

  // Continents simulation
  ctx.fillStyle = '#1e3a5f';

  // North America
  ctx.beginPath();
  ctx.ellipse(280, 160, 140, 90, 0, 0, Math.PI * 2);
  ctx.fill();

  // South America
  ctx.beginPath();
  ctx.ellipse(360, 340, 75, 110, 0, 0, Math.PI * 2);
  ctx.fill();

  // Europe / Africa
  ctx.beginPath();
  ctx.ellipse(560, 180, 90, 70, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(570, 310, 85, 110, 0, 0, Math.PI * 2);
  ctx.fill();

  // Asia / Australia
  ctx.beginPath();
  ctx.ellipse(780, 170, 160, 100, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(840, 360, 70, 60, 0, 0, Math.PI * 2);
  ctx.fill();

  // Grid Lines overlay
  ctx.strokeStyle = 'rgba(0, 240, 255, 0.15)';
  ctx.lineWidth = 1;
  for (let x = 0; x < 1024; x += 64) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, 512);
    ctx.stroke();
  }
  for (let y = 0; y < 512; y += 64) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(1024, y);
    ctx.stroke();
  }

  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}
