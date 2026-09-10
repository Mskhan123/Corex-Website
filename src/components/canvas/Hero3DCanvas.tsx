import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface Hero3DCanvasProps {
  variant?: 'core' | 'neural' | 'quantum';
}

export const Hero3DCanvas: React.FC<Hero3DCanvasProps> = ({ variant = 'core' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeVariant, setActiveVariant] = useState<'core' | 'neural' | 'quantum'>(variant);
  const [isInteracting, setIsInteracting] = useState(false);
  const [fpsMode, setFpsMode] = useState<'high' | 'normal'>('high');

  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const mainMeshRef = useRef<THREE.Mesh | null>(null);
  const wireMeshRef = useRef<THREE.Mesh | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const ringRef = useRef<THREE.Mesh | null>(null);
  const pulseRingsRef = useRef<THREE.Mesh[]>([]);

  const mouseRef = useRef<{ x: number; y: number; targetX: number; targetY: number }>({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0
  });

  useEffect(() => {
    setActiveVariant(variant);
  }, [variant]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Detect WebGL support
    let isWebGLAvailable = true;
    try {
      const canvas = document.createElement('canvas');
      isWebGLAvailable = !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    } catch {
      isWebGLAvailable = false;
    }

    if (!isWebGLAvailable) return;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const width = container.clientWidth || 800;
    const height = container.clientHeight || 600;
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 5.2;
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: window.devicePixelRatio < 2,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Ambient & Studio lights for natural light theme
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.8);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 3.0);
    keyLight.position.set(5, 8, 5);
    scene.add(keyLight);

    const blueRimLight = new THREE.PointLight(0x2563eb, 3.5, 50);
    blueRimLight.position.set(-4, -2, 4);
    scene.add(blueRimLight);

    const fillLight = new THREE.PointLight(0x64748b, 2.0, 40);
    fillLight.position.set(0, -4, -2);
    scene.add(fillLight);

    // Group to hold our primary 3D artifacts
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // 1. Central Geometry depending on variant
    const buildGeometries = (currentType: 'core' | 'neural' | 'quantum') => {
      // Clear old meshes
      if (mainMeshRef.current) coreGroup.remove(mainMeshRef.current);
      if (wireMeshRef.current) coreGroup.remove(wireMeshRef.current);
      if (ringRef.current) coreGroup.remove(ringRef.current);
      pulseRingsRef.current.forEach(p => coreGroup.remove(p));
      pulseRingsRef.current = [];

      let mainGeo: THREE.BufferGeometry;
      let wireGeo: THREE.BufferGeometry;

      if (currentType === 'core') {
        // High-tech multifaceted Icosahedron
        mainGeo = new THREE.IcosahedronGeometry(1.25, 1);
        wireGeo = new THREE.IcosahedronGeometry(1.42, 1);
      } else if (currentType === 'neural') {
        // Dodecahedron with inner core
        mainGeo = new THREE.DodecahedronGeometry(1.2, 1);
        wireGeo = new THREE.OctahedronGeometry(1.5, 2);
      } else {
        // Quantum Torus Knot
        mainGeo = new THREE.TorusKnotGeometry(0.85, 0.28, 100, 16);
        wireGeo = new THREE.TorusGeometry(1.5, 0.04, 16, 80);
      }

      // Elegant physical material with subtle sapphire depth on white
      const mainMaterial = new THREE.MeshPhysicalMaterial({
        color: 0x1e40af, // Deep royal sapphire
        emissive: 0x1d4ed8,
        emissiveIntensity: 0.15,
        roughness: 0.25,
        metalness: 0.5,
        clearcoat: 0.9,
        clearcoatRoughness: 0.1,
        wireframe: false,
        transparent: true,
        opacity: 0.92
      });

      const wireMaterial = new THREE.MeshBasicMaterial({
        color: 0x3b82f6,
        wireframe: true,
        transparent: true,
        opacity: 0.35
      });

      const mainMesh = new THREE.Mesh(mainGeo, mainMaterial);
      const wireMesh = new THREE.Mesh(wireGeo, wireMaterial);

      coreGroup.add(mainMesh);
      coreGroup.add(wireMesh);

      mainMeshRef.current = mainMesh;
      wireMeshRef.current = wireMesh;

      // Outer clean architectural orbit ring
      const ringGeo = new THREE.TorusGeometry(2.0, 0.015, 16, 100);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0x2563eb,
        transparent: true,
        opacity: 0.25
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.x = Math.PI / 2.5;
      coreGroup.add(ringMesh);
      ringRef.current = ringMesh;

      // Secondary inclined ring
      const ringGeo2 = new THREE.TorusGeometry(1.85, 0.012, 16, 90);
      const ringMat2 = new THREE.MeshBasicMaterial({
        color: 0x64748b,
        transparent: true,
        opacity: 0.2
      });
      const ringMesh2 = new THREE.Mesh(ringGeo2, ringMat2);
      ringMesh2.rotation.y = Math.PI / 3;
      coreGroup.add(ringMesh2);
    };

    buildGeometries(activeVariant);

    // 2. Subtle constellation of data nodes
    const particleCount = 280;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const radius = 1.6 + Math.random() * 3.0;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      scales[i] = Math.random() * 0.03 + 0.01;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Particle material in soft slate/blue
    const particleMat = new THREE.PointsMaterial({
      color: 0x2563eb,
      size: 0.04,
      transparent: true,
      opacity: 0.45
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);
    particlesRef.current = particles;

    // Mouse & Touch Tracking
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseRef.current.targetX = x * 0.8;
      mouseRef.current.targetY = y * 0.8;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const rect = container.getBoundingClientRect();
        const x = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
        const y = -(((touch.clientY - rect.top) / rect.height) * 2 - 1);
        mouseRef.current.targetX = x * 0.9;
        mouseRef.current.targetY = y * 0.9;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: true });

    // Click/Tap Pulse shockwave effect
    const handleClick = () => {
      setIsInteracting(true);
      setTimeout(() => setIsInteracting(false), 800);

      // Create pulse ring
      const pulseGeo = new THREE.RingGeometry(0.5, 0.58, 48);
      const pulseMat = new THREE.MeshBasicMaterial({
        color: 0x22d3ee,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.9
      });
      const pulseMesh = new THREE.Mesh(pulseGeo, pulseMat);
      pulseMesh.rotation.x = Math.PI / 2;
      coreGroup.add(pulseMesh);
      pulseRingsRef.current.push(pulseMesh);

      // Temporarily speed up rotation
      if (mainMeshRef.current) {
        mainMeshRef.current.scale.set(1.15, 1.15, 1.15);
      }
    };

    container.addEventListener('click', handleClick);

    // Responsive Resize with ResizeObserver
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(container);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      // Rotate central meshes
      if (mainMeshRef.current) {
        mainMeshRef.current.rotation.y = elapsedTime * 0.28 + mouseRef.current.x * 0.6;
        mainMeshRef.current.rotation.x = elapsedTime * 0.18 + mouseRef.current.y * 0.6;

        // Smooth scale back if pulsed
        if (mainMeshRef.current.scale.x > 1.002) {
          mainMeshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.08);
        }
      }

      if (wireMeshRef.current) {
        wireMeshRef.current.rotation.y = -elapsedTime * 0.2 + mouseRef.current.x * 0.4;
        wireMeshRef.current.rotation.z = elapsedTime * 0.12;
      }

      if (ringRef.current) {
        ringRef.current.rotation.z = elapsedTime * 0.15;
      }

      // Rotate whole particle constellation slowly
      if (particlesRef.current) {
        particlesRef.current.rotation.y = elapsedTime * 0.06 + mouseRef.current.x * 0.2;
        particlesRef.current.rotation.x = mouseRef.current.y * 0.2;
      }

      // Animate shockwave pulse rings
      for (let i = pulseRingsRef.current.length - 1; i >= 0; i--) {
        const ring = pulseRingsRef.current[i];
        ring.scale.multiplyScalar(1.05);
        const mat = ring.material as THREE.MeshBasicMaterial;
        mat.opacity -= 0.025;
        if (mat.opacity <= 0.01) {
          coreGroup.remove(ring);
          pulseRingsRef.current.splice(i, 1);
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('click', handleClick);
      resizeObserver.disconnect();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [activeVariant]);

  return (
    <div className="relative w-full h-full min-h-[380px] sm:min-h-[460px] lg:min-h-[540px] flex items-center justify-center select-none overflow-hidden">
      {/* 3D Canvas Mount */}
      <div 
        ref={containerRef} 
        id="hero-3d-canvas"
        className="w-full h-full cursor-grab active:cursor-grabbing flex items-center justify-center transition-opacity duration-700"
        title="Interactive 3D Core: Click or drag to inspect"
      />

      {/* Floating 3D Controls HUD */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5 p-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl shadow-slate-200/60 text-xs">
        <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 font-semibold px-2.5 hidden sm:inline-block">
          3D MODEL
        </span>
        <button
          type="button"
          id="btn-3d-core"
          onClick={() => setActiveVariant('core')}
          className={`px-3 py-1.5 rounded-full transition-all duration-200 font-medium ${
            activeVariant === 'core'
              ? 'bg-slate-900 text-white font-semibold shadow-sm'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          Cyber Core
        </button>
        <button
          type="button"
          id="btn-3d-neural"
          onClick={() => setActiveVariant('neural')}
          className={`px-3 py-1.5 rounded-full transition-all duration-200 font-medium ${
            activeVariant === 'neural'
              ? 'bg-slate-900 text-white font-semibold shadow-sm'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          Neural Agent
        </button>
        <button
          type="button"
          id="btn-3d-quantum"
          onClick={() => setActiveVariant('quantum')}
          className={`px-3 py-1.5 rounded-full transition-all duration-200 font-medium ${
            activeVariant === 'quantum'
              ? 'bg-slate-900 text-white font-semibold shadow-sm'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          Quantum Matrix
        </button>
      </div>

      {/* Interactive Cue Badge */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 pointer-events-none z-10 flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/90 border border-slate-200 backdrop-blur-sm text-[11px] text-slate-700 shadow-sm font-mono">
        <span className={`w-2 h-2 rounded-full ${isInteracting ? 'bg-blue-600 animate-ping' : 'bg-emerald-500 animate-pulse'}`} />
        <span>3D WEBGL LIVE</span>
      </div>

      <div className="absolute bottom-16 sm:bottom-20 right-4 sm:right-6 pointer-events-none hidden md:flex items-center gap-1.5 text-[11px] text-slate-500 font-mono bg-white/80 backdrop-blur-sm px-2.5 py-1 rounded-full border border-slate-200 shadow-sm">
        <span>Click to Pulse · Drag to Orbit</span>
      </div>
    </div>
  );
};
