import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Play, RotateCcw, Flame, Camera, Zap, Shield, Radio, Activity, Globe, Target } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function LaunchSimulatorView({ nextLaunch }) {
  const containerRef = useRef(null);

  // Dynamic Mission Parameters
  const missionName = nextLaunch?.name || 'Starlink Group 10-14';
  const rocketName = nextLaunch?.rocketName || 'Falcon 9 Block 5';
  const padName = nextLaunch?.launchpadName || 'Space Launch Complex 40 (SLC-40)';
  const flightNum = nextLaunch?.flight_number || 388;

  const [launchState, setLaunchState] = useState('idle');
  const [countdownNum, setCountdownNum] = useState(10);
  const [activeCamView, setActiveCamView] = useState('auto'); // 'auto' | 'stage1' | 'stage2' | 'pad' | 'droneship'

  // Telemetry HUD State
  const [telemetry, setTelemetry] = useState({
    timeStr: 'T-00:00:10',
    altitude: 0,
    velocity: 0,
    downrange: 0,
    mach: 0,
    pitch: 90,
    gForce: 1.0,
    stage1Fuel: 100,
    stage2Fuel: 100,
    statusText: 'SYSTEMS NOMINAL - TERMINAL COUNTDOWN AUTO-SEQUENCE',
    currentPhase: 'PRE-LAUNCH'
  });

  // Three.js References
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const controlsRef = useRef(null);

  // Mesh & Physics References
  const rocketGroupRef = useRef(null);
  const stage1GroupRef = useRef(null);
  const stage2GroupRef = useRef(null);
  const fairingLeftRef = useRef(null);
  const fairingRightRef = useRef(null);
  const flameMeshRef = useRef(null);
  const umbilicalArmRef = useRef(null);
  const landingLegsRef = useRef([]);
  const droneShipRef = useRef(null);

  const launchStateRef = useRef('idle');
  const activeCamViewRef = useRef('auto');

  useEffect(() => {
    launchStateRef.current = launchState;
  }, [launchState]);

  useEffect(() => {
    activeCamViewRef.current = activeCamView;
  }, [activeCamView]);

  // Initialize 3D Earth & Rocket Launch Environment
  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth || window.innerWidth;
    const height = containerRef.current.clientHeight || (window.innerHeight - 65);

    // 1. Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#02050e');
    scene.fog = new THREE.FogExp2('#02050e', 0.001);
    sceneRef.current = scene;

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 5000);
    camera.position.set(0, 10, 38);
    cameraRef.current = camera;

    // 3. Renderer
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true });
    } catch (e) {
      renderer = new THREE.WebGLRenderer({ antialias: false });
    }
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 4. OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2 + 0.05;
    controlsRef.current = controls;

    // 5. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffffff, 1.6);
    sunLight.position.set(150, 250, 150);
    sunLight.castShadow = true;
    scene.add(sunLight);

    // Pad Spotlights
    const spot1 = new THREE.SpotLight(0x00f0ff, 5, 120, Math.PI / 4, 0.4);
    spot1.position.set(-20, 30, 20);
    spot1.target.position.set(0, 8, 0);
    scene.add(spot1);
    scene.add(spot1.target);

    const spot2 = new THREE.SpotLight(0xff6b00, 4, 120, Math.PI / 4, 0.4);
    spot2.position.set(20, 30, -20);
    spot2.target.position.set(0, 8, 0);
    scene.add(spot2);
    scene.add(spot2.target);

    // 6. 3D Starfield Universe (3000 Stars)
    const starGeo = new THREE.BufferGeometry();
    const starCoords = [];
    for (let i = 0; i < 3000; i++) {
      const x = (Math.random() - 0.5) * 4000;
      const y = Math.random() * 2000 - 400;
      const z = (Math.random() - 0.5) * 4000;
      starCoords.push(x, y, z);
    }
    starGeo.setAttribute('position', new THREE.Float32BufferAttribute(starCoords, 3));
    const starMat = new THREE.PointsMaterial({ color: 0xffffff, size: 1.5, transparent: true, opacity: 0.85 });
    const starPoints = new THREE.Points(starGeo, starMat);
    scene.add(starPoints);

    // 7. 3D PLANET EARTH GLOBE (Radius = 150, Center at y = -150 so Earth surface is directly at y = 0 under the Launch Pad!)
    const earthRadius = 150;
    const earthGeo = new THREE.SphereGeometry(earthRadius, 64, 64);
    const proceduralCanvas = document.createElement('canvas');
    proceduralCanvas.width = 1024; proceduralCanvas.height = 512;
    const pctx = proceduralCanvas.getContext('2d');
    const pgrad = pctx.createLinearGradient(0, 0, 0, 512);
    pgrad.addColorStop(0, '#06152d'); pgrad.addColorStop(0.5, '#0b2545'); pgrad.addColorStop(1, '#051022');
    pctx.fillStyle = pgrad; pctx.fillRect(0, 0, 1024, 512);
    pctx.fillStyle = '#1e3a8a';
    pctx.beginPath(); pctx.ellipse(250, 150, 110, 75, -0.2, 0, Math.PI * 2); pctx.fill();

    const earthMat = new THREE.MeshPhongMaterial({
      map: new THREE.CanvasTexture(proceduralCanvas),
      shininess: 35,
      specular: 0x112244
    });
    const earthMesh = new THREE.Mesh(earthGeo, earthMat);
    earthMesh.position.set(0, -earthRadius, 0); // Surface touches y = 0!
    scene.add(earthMesh);

    // Atmosphere Halo on Earth Surface
    const atmosphereGeo = new THREE.SphereGeometry(earthRadius + 4, 64, 64);
    const atmosphereMat = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.6 - dot(vNormal, vec3(0, 0, 1.0)), 2.0);
          gl_FragColor = vec4(0.0, 0.94, 1.0, 1.0) * intensity;
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true
    });
    const atmosphereMesh = new THREE.Mesh(atmosphereGeo, atmosphereMat);
    atmosphereMesh.position.set(0, -earthRadius, 0);
    scene.add(atmosphereMesh);

    // Load NASA Blue Marble High-Res Earth Texture
    new THREE.TextureLoader().load(
      'https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg',
      (texture) => {
        earthMat.map = texture;
        earthMat.needsUpdate = true;
      }
    );

    // 8. 3D Launch Pad Base directly on Earth Surface (y = 0)
    const padBaseGeo = new THREE.CylinderGeometry(14, 14, 1.2, 32);
    const padBaseMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.7 });
    const padBase = new THREE.Mesh(padBaseGeo, padBaseMat);
    padBase.position.set(0, 0.6, 0);
    scene.add(padBase);

    // Strongback Launch Support Tower & Umbilical Arm
    const towerGroup = new THREE.Group();
    const mainTowerGeo = new THREE.BoxGeometry(4, 30, 4);
    const mainTowerMat = new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.7 });
    const mainTower = new THREE.Mesh(mainTowerGeo, mainTowerMat);
    mainTower.position.set(-8, 15, 0);
    towerGroup.add(mainTower);

    for (let h = 3; h < 28; h += 3.5) {
      const beamGeo = new THREE.BoxGeometry(4.2, 0.4, 4.2);
      const beamMat = new THREE.MeshStandardMaterial({ color: 0x00f0ff, metalness: 0.8 });
      const beam = new THREE.Mesh(beamGeo, beamMat);
      beam.position.set(-8, h, 0);
      towerGroup.add(beam);
    }

    const armGroup = new THREE.Group();
    const armGeo = new THREE.BoxGeometry(5.5, 1.0, 1.0);
    const armMat = new THREE.MeshStandardMaterial({ color: 0x00f0ff, metalness: 0.9 });
    const arm = new THREE.Mesh(armGeo, armMat);
    arm.position.set(2.75, 0, 0);
    armGroup.add(arm);
    armGroup.position.set(-8, 20, 0);
    towerGroup.add(armGroup);
    umbilicalArmRef.current = armGroup;

    scene.add(towerGroup);

    // 9. Autonomous Spaceport Drone Ship ("A Shorttail of Gravitas") on Atlantic Ocean Curve
    const shipGroup = new THREE.Group();
    const shipGeo = new THREE.BoxGeometry(20, 1.8, 40);
    const shipMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.3 });
    const shipMesh = new THREE.Mesh(shipGeo, shipMat);
    shipGroup.add(shipMesh);

    const targetRingGeo = new THREE.RingGeometry(4, 5.2, 32);
    const targetRingMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff, side: THREE.DoubleSide });
    const targetRing = new THREE.Mesh(targetRingGeo, targetRingMat);
    targetRing.rotation.x = -Math.PI / 2;
    targetRing.position.y = 0.92;
    shipGroup.add(targetRing);

    shipGroup.position.set(0, -1.8, -240); // Resting on ocean curve downrange!
    scene.add(shipGroup);
    droneShipRef.current = shipGroup;

    // 10. 3D Glowing Trajectory Line Curving Off Earth Surface into LEO Orbit
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 1.2, 0),
      new THREE.Vector3(0, 20, -20),
      new THREE.Vector3(0, 60, -70),
      new THREE.Vector3(0, 120, -160),
      new THREE.Vector3(0, 200, -280)
    ]);
    const trajectoryPoints = curve.getPoints(100);
    const trajGeo = new THREE.BufferGeometry().setFromPoints(trajectoryPoints);
    const trajMat = new THREE.LineBasicMaterial({ color: 0x00f0ff, linewidth: 2, transparent: true, opacity: 0.65 });
    const trajLine = new THREE.Line(trajGeo, trajMat);
    scene.add(trajLine);

    // 11. HIGH-DETAIL FALCON 9 3D ROCKET ASSEMBLY
    const rocketGroup = new THREE.Group();

    // STAGE 1 BOOSTER
    const s1Group = new THREE.Group();
    const s1BodyGeo = new THREE.CylinderGeometry(0.9, 0.9, 13, 32);
    const s1BodyMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.25 });
    const s1Body = new THREE.Mesh(s1BodyGeo, s1BodyMat);
    s1Body.position.y = 6.5;
    s1Group.add(s1Body);

    const interstageGeo = new THREE.CylinderGeometry(0.91, 0.91, 2.4, 32);
    const interstageMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.4 });
    const interstage = new THREE.Mesh(interstageGeo, interstageMat);
    interstage.position.y = 12.2;
    s1Group.add(interstage);

    const engineGroup = new THREE.Group();
    for (let i = 0; i < 9; i++) {
      const nozzleGeo = new THREE.ConeGeometry(0.2, 0.7, 16);
      const nozzleMat = new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.9 });
      const nozzle = new THREE.Mesh(nozzleGeo, nozzleMat);
      if (i === 0) {
        nozzle.position.set(0, -0.35, 0);
      } else {
        const angle = ((i - 1) * Math.PI) / 4;
        nozzle.position.set(Math.cos(angle) * 0.5, -0.35, Math.sin(angle) * 0.5);
      }
      nozzle.rotation.x = Math.PI;
      engineGroup.add(nozzle);
    }
    s1Group.add(engineGroup);

    const finGeo = new THREE.BoxGeometry(0.09, 0.8, 1.0);
    const finMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.9 });
    for (let i = 0; i < 4; i++) {
      const fin = new THREE.Mesh(finGeo, finMat);
      const angle = (i * Math.PI) / 2;
      fin.position.set(Math.cos(angle) * 0.95, 12.5, Math.sin(angle) * 0.95);
      fin.rotation.y = angle;
      s1Group.add(fin);
    }

    const legs = [];
    for (let i = 0; i < 4; i++) {
      const legGroup = new THREE.Group();
      const legGeo = new THREE.CylinderGeometry(0.07, 0.07, 4.0, 16);
      const legMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.8 });
      const leg = new THREE.Mesh(legGeo, legMat);
      leg.position.y = -1.8;
      legGroup.add(leg);

      const angle = (i * Math.PI) / 2 + Math.PI / 4;
      legGroup.position.set(Math.cos(angle) * 0.9, 2.0, Math.sin(angle) * 0.9);
      legGroup.rotation.y = angle;
      legGroup.rotation.z = Math.PI - 0.15;
      s1Group.add(legGroup);
      legs.push(legGroup);
    }
    landingLegsRef.current = legs;

    const flameGeo = new THREE.ConeGeometry(1.0, 6, 16);
    const flameMat = new THREE.MeshBasicMaterial({ color: 0xff6b00, transparent: true, opacity: 0 });
    const flame = new THREE.Mesh(flameGeo, flameMat);
    flame.position.y = -3.0;
    flame.rotation.x = Math.PI;
    s1Group.add(flame);
    flameMeshRef.current = flame;

    stage1GroupRef.current = s1Group;
    rocketGroup.add(s1Group);

    // STAGE 2 UPPER STAGE
    const s2Group = new THREE.Group();
    const s2BodyGeo = new THREE.CylinderGeometry(0.9, 0.9, 4.8, 32);
    const s2BodyMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.3 });
    const s2Body = new THREE.Mesh(s2BodyGeo, s2BodyMat);
    s2Body.position.y = 15.6;
    s2Group.add(s2Body);

    const payloadGeo = new THREE.BoxGeometry(1.0, 2.8, 1.0);
    const payloadMat = new THREE.MeshStandardMaterial({ color: 0x00f0ff, metalness: 0.9 });
    const payload = new THREE.Mesh(payloadGeo, payloadMat);
    payload.position.y = 18.8;
    s2Group.add(payload);

    const fairingGeo = new THREE.ConeGeometry(0.92, 3.8, 16, 1, false, 0, Math.PI);
    const fairingMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.2 });

    const fLeft = new THREE.Mesh(fairingGeo, fairingMat);
    fLeft.position.set(0, 19.4, 0);
    s2Group.add(fLeft);
    fairingLeftRef.current = fLeft;

    const fRight = new THREE.Mesh(fairingGeo, fairingMat);
    fRight.position.set(0, 19.4, 0);
    fRight.rotation.y = Math.PI;
    s2Group.add(fRight);
    fairingRightRef.current = fRight;

    stage2GroupRef.current = s2Group;
    rocketGroup.add(s2Group);

    rocketGroup.position.set(0, 1.2, 0);
    scene.add(rocketGroup);
    rocketGroupRef.current = rocketGroup;

    // Window Resize Handler
    const handleResize = () => {
      if (!containerRef.current || !rendererRef.current || !cameraRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Dynamic Stage-Based Camera Tracking Loop
    let animId;
    const animate = () => {
      animId = requestAnimationFrame(animate);

      const state = launchStateRef.current;
      const camMode = activeCamViewRef.current;

      if (cameraRef.current && controlsRef.current) {
        let targetLookAt = null;
        let targetCamPos = null;

        // Mode 1: Track Stage 2 / Orbit
        if (camMode === 'stage2' && stage2GroupRef.current) {
          const s2World = new THREE.Vector3();
          stage2GroupRef.current.getWorldPosition(s2World);
          targetLookAt = s2World;
          targetCamPos = new THREE.Vector3(s2World.x + 6, s2World.y + 4, s2World.z + 18);
        }
        // Mode 2: Track Stage 1 Booster
        else if (camMode === 'stage1' && stage1GroupRef.current) {
          const s1World = new THREE.Vector3();
          stage1GroupRef.current.getWorldPosition(s1World);
          targetLookAt = s1World;
          targetCamPos = new THREE.Vector3(s1World.x + 6, s1World.y + 6, s1World.z + 20);
        }
        // Mode 3: Launch Pad Cam
        else if (camMode === 'pad') {
          targetLookAt = new THREE.Vector3(0, 10, 0);
          targetCamPos = new THREE.Vector3(0, 7, 32);
        }
        // Mode 4: Drone Ship Target Cam
        else if (camMode === 'droneship') {
          targetLookAt = new THREE.Vector3(0, 1, -240);
          targetCamPos = new THREE.Vector3(0, 14, -200);
        }
        // Mode 5: Auto Tracking (Smart flight phase tracking)
        else if (camMode === 'auto' && state !== 'idle' && rocketGroupRef.current) {
          if (state === 'liftoff') {
            targetLookAt = rocketGroupRef.current.position;
            targetCamPos = new THREE.Vector3(
              rocketGroupRef.current.position.x + 6,
              rocketGroupRef.current.position.y + 4,
              rocketGroupRef.current.position.z + 28
            );
          } else if (state === 'maxq' || state === 'staging' || state === 'fairing') {
            if (stage2GroupRef.current) {
              const s2World = new THREE.Vector3();
              stage2GroupRef.current.getWorldPosition(s2World);
              targetLookAt = s2World;
              targetCamPos = new THREE.Vector3(s2World.x + 8, s2World.y + 6, s2World.z + 22);
            }
          } else if (state === 'landing') {
            if (stage1GroupRef.current) {
              const s1World = new THREE.Vector3();
              stage1GroupRef.current.getWorldPosition(s1World);
              targetLookAt = s1World;
              targetCamPos = new THREE.Vector3(s1World.x + 8, s1World.y + 8, s1World.z + 24);
            }
          } else if (state === 'success') {
            targetLookAt = new THREE.Vector3(0, 2, -240);
            targetCamPos = new THREE.Vector3(0, 14, -195);
          }
        }

        if (targetCamPos && targetLookAt) {
          cameraRef.current.position.lerp(targetCamPos, 0.06);
          controlsRef.current.target.lerp(targetLookAt, 0.06);
        }
      }

      if (controlsRef.current) controlsRef.current.update();
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Execute Real Flight Trajectory Timeline
  const handleStartLaunch = () => {
    if (launchState !== 'idle') return;

    setLaunchState('countdown');
    let count = 10;
    setCountdownNum(10);

    const timer = setInterval(() => {
      count -= 1;
      setCountdownNum(count);
      if (count <= 0) {
        clearInterval(timer);
        runTrajectoryTimeline();
      }
    }, 1000);
  };

  const runTrajectoryTimeline = () => {
    setLaunchState('liftoff');
    const startMs = Date.now();

    if (umbilicalArmRef.current) {
      umbilicalArmRef.current.rotation.y = -Math.PI / 2.5;
    }
    if (flameMeshRef.current) {
      flameMeshRef.current.material.opacity = 0.95;
    }

    const interval = setInterval(() => {
      const elapsed = (Date.now() - startMs) / 1000;

      // 1. T+0s to T+8s: Liftoff & Vertical Ascent off Earth Surface
      if (elapsed < 8) {
        const alt = Math.pow(elapsed, 1.75) * 0.35;
        const vel = Math.round(elapsed * 195);
        const down = elapsed * 2.8;

        setTelemetry({
          timeStr: `T+00:00:${String(Math.floor(elapsed)).padStart(2, '0')}`,
          altitude: parseFloat(alt.toFixed(1)),
          velocity: vel,
          downrange: parseFloat(down.toFixed(1)),
          mach: parseFloat((vel / 1234).toFixed(1)),
          pitch: Math.max(70, Math.round(90 - elapsed * 2.5)),
          stage1Fuel: Math.max(0, Math.round(100 - elapsed * 3.5)),
          stage2Fuel: 100,
          gForce: parseFloat((1.1 + elapsed * 0.15).toFixed(1)),
          statusText: 'LIFTOFF! FALCON 9 LAUNCHING DIRECTLY OFF PLANET EARTH SURFACE',
          currentPhase: 'STAGE 1 ASCENT'
        });

        if (rocketGroupRef.current) {
          rocketGroupRef.current.position.y = 1.2 + alt;
          rocketGroupRef.current.position.z = -down * 0.4;
          rocketGroupRef.current.rotation.z = -Math.min(0.32, elapsed * 0.028);
        }
      }
      // 2. T+8s to T+14s: Max-Q & Gravity Turn into Upper Atmosphere
      else if (elapsed >= 8 && elapsed < 14) {
        setLaunchState('maxq');
        const alt = 15 + (elapsed - 8) * 6.5;
        const vel = 1560 + Math.round((elapsed - 8) * 480);
        const down = 22 + (elapsed - 8) * 14;

        setTelemetry({
          timeStr: `T+00:01:${String(Math.floor(elapsed)).padStart(2, '0')}`,
          altitude: parseFloat(alt.toFixed(1)),
          velocity: vel,
          downrange: parseFloat(down.toFixed(1)),
          mach: parseFloat((vel / 1234).toFixed(1)),
          pitch: 58,
          stage1Fuel: Math.max(0, Math.round(72 - (elapsed - 8) * 5.2)),
          stage2Fuel: 100,
          gForce: 3.4,
          statusText: 'MAX-Q: MAXIMUM DYNAMIC PRESSURE PASSING EARTH ATMOSPHERE HULL',
          currentPhase: 'GRAVITY TURN'
        });

        if (rocketGroupRef.current) {
          rocketGroupRef.current.position.y = 1.2 + alt;
          rocketGroupRef.current.position.z = -down * 0.6;
          rocketGroupRef.current.rotation.z = -0.48;
        }
      }
      // 3. T+14s to T+18s: MECO & Stage Separation High Above Earth
      else if (elapsed >= 14 && elapsed < 18) {
        setLaunchState('staging');

        if (flameMeshRef.current) {
          flameMeshRef.current.material.opacity = 0.1;
        }

        setTelemetry(prev => ({
          ...prev,
          timeStr: `T+00:02:26`,
          statusText: 'MECO CONFIRMED - PNEUMATIC PUSHERS EXECUTING STAGE SEPARATION IN EARTH ORBIT',
          currentPhase: 'STAGE SEPARATION'
        }));

        if (stage2GroupRef.current) {
          stage2GroupRef.current.position.y += 0.35;
          stage2GroupRef.current.position.z -= 0.15;
        }
        if (stage1GroupRef.current) {
          stage1GroupRef.current.rotation.z += 0.04;
        }
      }
      // 4. T+18s to T+24s: Fairing Jettison & Orbit Insertion
      else if (elapsed >= 18 && elapsed < 24) {
        setLaunchState('fairing');

        setTelemetry(prev => ({
          ...prev,
          timeStr: `T+00:03:10`,
          statusText: 'PAYLOAD FAIRING SEPARATION CONFIRMED - STARLINK V2 MINI STACK EXPOSED IN LEO ORBIT',
          currentPhase: 'ORBIT INSERTION'
        }));

        if (fairingLeftRef.current && fairingRightRef.current) {
          fairingLeftRef.current.position.x -= 0.3;
          fairingRightRef.current.position.x += 0.3;
          fairingLeftRef.current.position.z += 0.2;
          fairingRightRef.current.position.z += 0.2;
        }
      }
      // 5. T+24s to T+32s: Stage 1 Booster Landing Burn on ASOG Drone Ship
      else if (elapsed >= 24 && elapsed < 32) {
        setLaunchState('landing');

        const droneDist = Math.max(0, 240 - (elapsed - 24) * 30);
        const landAlt = Math.max(1.4, 52 - (elapsed - 24) * 6.3);

        if (landingLegsRef.current && elapsed > 28) {
          landingLegsRef.current.forEach(legGroup => {
            legGroup.rotation.z = Math.PI / 2 + 0.35;
          });
        }

        setTelemetry(prev => ({
          ...prev,
          timeStr: `T+00:08:15`,
          altitude: parseFloat((65 - (elapsed - 24) * 8).toFixed(1)),
          velocity: Math.max(0, 2600 - (elapsed - 24) * 325),
          statusText: 'STAGE 1 MERLIN ENGINE LANDING BURN - TOUCHDOWN ON ASOG DRONE SHIP',
          currentPhase: 'BOOSTER LANDING'
        }));

        if (stage1GroupRef.current) {
          stage1GroupRef.current.position.set(0, landAlt, -droneDist);
          stage1GroupRef.current.rotation.set(0, 0, 0);
        }

        if (stage2GroupRef.current) {
          stage2GroupRef.current.position.y += 2.8;
          stage2GroupRef.current.position.z -= 8.0;
        }
      }
      // 6. T+32s: Touchdown & Orbit Deployment Complete!
      else if (elapsed >= 32) {
        clearInterval(interval);
        setLaunchState('success');

        setTelemetry({
          timeStr: `T+00:08:45`,
          altitude: 220.0,
          velocity: 27580,
          downrange: 1250.0,
          mach: 22.4,
          pitch: 0,
          stage1Fuel: 6,
          stage2Fuel: 40,
          gForce: 1.0,
          statusText: `MISSION SUCCESS! FALCON 9 STAGE 1 TOUCHDOWN ON ASOG & ${missionName.toUpperCase()} DEPLOYED IN ORBIT!`,
          currentPhase: 'ORBIT ACHIEVED'
        });

        if (stage1GroupRef.current) {
          stage1GroupRef.current.position.set(0, -0.4, -240);
          stage1GroupRef.current.rotation.set(0, 0, 0);
        }

        confetti({ particleCount: 220, spread: 120, origin: { y: 0.5 } });
      }
    }, 200);
  };

  const handleReset = () => {
    setLaunchState('idle');
    setCountdownNum(10);
    setActiveCamView('auto');

    if (umbilicalArmRef.current) {
      umbilicalArmRef.current.rotation.y = 0;
    }
    if (flameMeshRef.current) {
      flameMeshRef.current.material.opacity = 0;
    }
    if (landingLegsRef.current) {
      landingLegsRef.current.forEach(legGroup => {
        legGroup.rotation.z = Math.PI - 0.15;
      });
    }

    setTelemetry({
      timeStr: 'T-00:00:10',
      altitude: 0,
      velocity: 0,
      downrange: 0,
      mach: 0,
      pitch: 90,
      stage1Fuel: 100,
      stage2Fuel: 100,
      gForce: 1.0,
      statusText: 'SYSTEMS NOMINAL - TERMINAL COUNTDOWN AUTO-SEQUENCE',
      currentPhase: 'PRE-LAUNCH'
    });

    if (rocketGroupRef.current) {
      rocketGroupRef.current.position.set(0, 1.2, 0);
      rocketGroupRef.current.rotation.set(0, 0, 0);
    }
    if (stage1GroupRef.current) {
      stage1GroupRef.current.position.set(0, 0, 0);
      stage1GroupRef.current.rotation.set(0, 0, 0);
    }
    if (stage2GroupRef.current) {
      stage2GroupRef.current.position.set(0, 0, 0);
      stage2GroupRef.current.rotation.set(0, 0, 0);
    }
    if (fairingLeftRef.current && fairingRightRef.current) {
      fairingLeftRef.current.position.set(0, 19.4, 0);
      fairingRightRef.current.position.set(0, 19.4, 0);
    }
    if (cameraRef.current && controlsRef.current) {
      cameraRef.current.position.set(0, 10, 38);
      controlsRef.current.target.set(0, 10, 0);
    }
  };

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      {/* 3D WebGL Canvas Viewport */}
      <div ref={containerRef} style={{ width: '100%', height: '100%' }} />

      {/* Top Left Mission Telemetry HUD Card */}
      <div className="globe-hud-overlay" style={{ maxWidth: '460px' }}>
        <div className="glass-panel" style={{ padding: '20px', borderLeft: '4px solid #00f0ff' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: '0.72rem', color: '#00f0ff', fontFamily: 'monospace', fontWeight: 'bold' }}>
                SPACEX MISSION PROFILE #{flightNum}
              </div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: '800', marginTop: '2px' }}>
                {missionName}
              </div>
            </div>
            <span className="brand-badge" style={{ background: launchState === 'success' ? 'rgba(16,185,129,0.2)' : 'rgba(0,240,255,0.15)', color: launchState === 'success' ? '#10b981' : '#00f0ff' }}>
              {telemetry.currentPhase}
            </span>
          </div>

          <div style={{ fontSize: '0.84rem', color: '#cbd5e1', marginTop: '8px', display: 'flex', gap: '12px' }}>
            <span><strong>Vehicle:</strong> {rocketName}</span>
            <span><strong>Pad:</strong> {padName.split(' ')[0]}</span>
          </div>

          <div style={{ fontSize: '0.8rem', color: '#ffd700', fontFamily: 'monospace', marginTop: '10px', background: 'rgba(3,7,18,0.75)', padding: '8px 12px', borderRadius: '6px', border: '1px solid rgba(255,215,0,0.25)' }}>
            {telemetry.statusText}
          </div>

          {launchState === 'countdown' && (
            <div style={{ textAlign: 'center', margin: '14px 0' }}>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase' }}>TERMINAL COUNTDOWN</div>
              <div style={{ fontFamily: 'monospace', fontSize: '3.6rem', fontWeight: '900', color: '#ff6b00', lineHeight: '1' }}>
                T-{countdownNum}s
              </div>
            </div>
          )}

          {/* Launch Controls */}
          <div style={{ display: 'flex', gap: '10px', marginTop: '14px' }}>
            <button
              className="btn-primary"
              style={{ flex: 1, justifyContent: 'center' }}
              onClick={handleStartLaunch}
              disabled={launchState !== 'idle'}
            >
              <Play size={16} /> EXECUTE TRAJECTORY LAUNCH
            </button>
            <button
              className="btn-secondary"
              onClick={handleReset}
              title="Reset Flight Timeline"
            >
              <RotateCcw size={16} />
            </button>
          </div>
        </div>

        {/* Camera Tracking Mode Switcher */}
        <div className="glass-panel filter-pill-container" style={{ marginTop: '8px' }}>
          <div style={{ width: '100%', fontSize: '0.72rem', color: '#94a3b8', fontFamily: 'monospace', marginBottom: '4px', textTransform: 'uppercase' }}>
            🎥 Stage-Based Camera Tracking Mode:
          </div>
          <button className={`filter-pill ${activeCamView === 'auto' ? 'active' : ''}`} onClick={() => setActiveCamView('auto')}>
            <Camera size={13} /> 🤖 Auto Stage Cam
          </button>
          <button className={`filter-pill ${activeCamView === 'stage2' ? 'active' : ''}`} onClick={() => setActiveCamView('stage2')}>
            <Camera size={13} /> Track Stage 2 / Orbit
          </button>
          <button className={`filter-pill ${activeCamView === 'stage1' ? 'active' : ''}`} onClick={() => setActiveCamView('stage1')}>
            <Camera size={13} /> Track Stage 1 Booster
          </button>
          <button className={`filter-pill ${activeCamView === 'pad' ? 'active' : ''}`} onClick={() => setActiveCamView('pad')}>
            <Camera size={13} /> Launch Pad Cam
          </button>
          <button className={`filter-pill ${activeCamView === 'droneship' ? 'active' : ''}`} onClick={() => setActiveCamView('droneship')}>
            <Camera size={13} /> Drone Ship Target
          </button>
        </div>
      </div>

      {/* Right HUD Instrumentation Telemetry Gauges */}
      <div className="globe-hud-right" style={{ width: '340px' }}>
        <div className="glass-panel" style={{ padding: '18px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Zap size={16} color="#ffd700" /> FLIGHT INSTRUMENTATION
            </div>
            <div style={{ fontFamily: 'monospace', fontSize: '0.9rem', color: '#00f0ff', fontWeight: 'bold' }}>
              {telemetry.timeStr}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
            <div className="sat-telemetry-item">
              <div className="sat-telemetry-key">ALTITUDE</div>
              <div className="sat-telemetry-val" style={{ color: '#00f0ff' }}>
                {telemetry.altitude} km
              </div>
            </div>
            <div className="sat-telemetry-item">
              <div className="sat-telemetry-key">VELOCITY</div>
              <div className="sat-telemetry-val" style={{ color: '#ffd700' }}>
                {telemetry.velocity.toLocaleString()} km/h
              </div>
            </div>
            <div className="sat-telemetry-item">
              <div className="sat-telemetry-key">DOWNRANGE</div>
              <div className="sat-telemetry-val">{telemetry.downrange} km</div>
            </div>
            <div className="sat-telemetry-item">
              <div className="sat-telemetry-key">SPEED MACH</div>
              <div className="sat-telemetry-val" style={{ color: '#a855f7' }}>Mach {telemetry.mach}</div>
            </div>
          </div>

          {/* Propellant Tanks Progress Bars */}
          <div style={{ marginTop: '14px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#94a3b8', marginBottom: '3px' }}>
                <span>STAGE 1 PROPELLANT (RP-1/LOX)</span>
                <span>{telemetry.stage1Fuel}%</span>
              </div>
              <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ width: `${telemetry.stage1Fuel}%`, height: '100%', background: 'linear-gradient(90deg, #ff6b00, #ffd700)', transition: 'width 0.2s' }}></div>
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#94a3b8', marginBottom: '3px' }}>
                <span>STAGE 2 PROPELLANT</span>
                <span>{telemetry.stage2Fuel}%</span>
              </div>
              <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ width: `${telemetry.stage2Fuel}%`, height: '100%', background: 'linear-gradient(90deg, #00f0ff, #38bdf8)', transition: 'width 0.2s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
