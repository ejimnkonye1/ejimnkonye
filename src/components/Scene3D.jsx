/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, MeshWobbleMaterial, Icosahedron, Torus, Box, Sphere, Octahedron, Ring, Dodecahedron } from '@react-three/drei';
import { useRef, useMemo } from 'react';

const FloatingShape = ({ position, color, speed, size, type, opacity = 0.35, wireframe = true }) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.2;
    }
  });

  const components = {
    icosahedron: Icosahedron,
    torus: Torus,
    box: Box,
    sphere: Sphere,
    octahedron: Octahedron,
    ring: Ring,
    dodecahedron: Dodecahedron,
  };
  const ShapeComponent = components[type] || Icosahedron;
  const args = type === 'torus' ? [size, size * 0.4, 16, 32]
    : type === 'ring' ? [size, size * 0.6, 32]
    : [size];

  return (
    <Float speed={speed} rotationIntensity={0.8} floatIntensity={2.5} floatingRange={[-0.8, 0.8]}>
      <ShapeComponent ref={meshRef} args={args} position={position}>
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={opacity}
          wireframe={wireframe}
          distort={0.4}
          speed={2}
        />
      </ShapeComponent>
    </Float>
  );
};

const GlowSphere = ({ position, color, size, opacity = 0.12 }) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.15);
    }
  });

  return (
    <Float speed={1.5} floatIntensity={1.5}>
      <Sphere ref={meshRef} args={[size, 32, 32]} position={position}>
        <MeshWobbleMaterial
          color={color}
          transparent
          opacity={opacity}
          factor={0.6}
          speed={1.5}
        />
      </Sphere>
    </Float>
  );
};

const Particles = ({ count = 50, color = "#7c3aed", size = 0.035 }) => {
  const points = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, [count]);

  const pointsRef = useRef();

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.03;
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.015;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={size} color={color} transparent opacity={0.8} sizeAttenuation />
    </points>
  );
};

// ─── HERO ───
export const HeroScene = () => (
  <div className="absolute inset-0 z-0">
    <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 1.5]} style={{ background: 'transparent' }}>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#7c3aed" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06b6d4" />
      <pointLight position={[0, 5, 0]} intensity={0.3} color="#3b82f6" />

      <FloatingShape position={[-3.5, 1.5, -2]} color="#7c3aed" speed={1.2} size={1.2} type="icosahedron" opacity={0.4} />
      <FloatingShape position={[3.5, -1, -2]} color="#06b6d4" speed={0.8} size={1} type="torus" opacity={0.35} />
      <FloatingShape position={[-2, -2.5, -1]} color="#3b82f6" speed={1} size={0.8} type="octahedron" opacity={0.4} />
      <FloatingShape position={[2.5, 2.5, -2]} color="#8b5cf6" speed={0.6} size={0.9} type="box" opacity={0.35} />
      <FloatingShape position={[0, -3, -3]} color="#7c3aed" speed={1.5} size={1.3} type="dodecahedron" opacity={0.3} />
      <FloatingShape position={[-4, 0, -2]} color="#06b6d4" speed={0.9} size={0.7} type="ring" opacity={0.4} />
      <FloatingShape position={[4.5, 0.5, -4]} color="#8b5cf6" speed={0.7} size={0.6} type="octahedron" opacity={0.35} />

      <GlowSphere position={[4, 2, -5]} color="#7c3aed" size={2.5} opacity={0.15} />
      <GlowSphere position={[-4, -2, -5]} color="#06b6d4" size={2.5} opacity={0.12} />

      <Particles count={100} color="#7c3aed" size={0.04} />
      <Particles count={60} color="#06b6d4" size={0.03} />
    </Canvas>
  </div>
);

// ─── ABOUT ───
export const AboutScene = () => (
  <div className="absolute inset-0 z-0 pointer-events-none">
    <Canvas camera={{ position: [0, 0, 7], fov: 45 }} dpr={[1, 1.5]} style={{ background: 'transparent' }}>
      <ambientLight intensity={0.35} />
      <pointLight position={[5, 5, 5]} intensity={0.6} color="#7c3aed" />
      <pointLight position={[-5, -3, 3]} intensity={0.4} color="#06b6d4" />

      <FloatingShape position={[4, 1.5, -2]} color="#7c3aed" speed={0.5} size={1.2} type="torus" opacity={0.35} />
      <FloatingShape position={[-4, -1.5, -3]} color="#06b6d4" speed={0.7} size={1} type="octahedron" opacity={0.35} />
      <FloatingShape position={[2, -3, -2]} color="#8b5cf6" speed={0.6} size={0.8} type="icosahedron" opacity={0.3} />
      <FloatingShape position={[-3, 3, -4]} color="#3b82f6" speed={0.4} size={0.7} type="ring" opacity={0.35} />
      <FloatingShape position={[0, 2.5, -2]} color="#7c3aed" speed={0.8} size={0.6} type="dodecahedron" opacity={0.3} />

      <GlowSphere position={[-5, 2, -6]} color="#7c3aed" size={2} opacity={0.1} />
      <GlowSphere position={[5, -2, -6]} color="#06b6d4" size={2} opacity={0.1} />

      <Particles count={60} color="#7c3aed" size={0.035} />
      <Particles count={40} color="#06b6d4" size={0.03} />
    </Canvas>
  </div>
);

// ─── TECH STACK ───
export const TechScene = () => (
  <div className="absolute inset-0 z-0 pointer-events-none">
    <Canvas camera={{ position: [0, 0, 7], fov: 45 }} dpr={[1, 1.5]} style={{ background: 'transparent' }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[-5, 5, 5]} intensity={0.6} color="#06b6d4" />
      <pointLight position={[5, -3, 3]} intensity={0.4} color="#7c3aed" />

      <FloatingShape position={[-4, 2, -2]} color="#06b6d4" speed={0.6} size={1.1} type="icosahedron" opacity={0.35} />
      <FloatingShape position={[4, -2, -3]} color="#7c3aed" speed={0.4} size={1} type="box" opacity={0.3} />
      <FloatingShape position={[-2, -3, -2]} color="#8b5cf6" speed={0.8} size={0.9} type="torus" opacity={0.35} />
      <FloatingShape position={[3, 3, -4]} color="#06b6d4" speed={0.5} size={0.7} type="dodecahedron" opacity={0.3} />
      <FloatingShape position={[0, -1, -1]} color="#3b82f6" speed={0.7} size={0.6} type="ring" opacity={0.35} />

      <GlowSphere position={[4, 3, -6]} color="#06b6d4" size={2} opacity={0.1} />
      <GlowSphere position={[-4, -3, -6]} color="#7c3aed" size={2.5} opacity={0.1} />

      <Particles count={70} color="#06b6d4" size={0.035} />
      <Particles count={40} color="#7c3aed" size={0.03} />
    </Canvas>
  </div>
);

// ─── PROJECTS ───
export const ProjectsScene = () => (
  <div className="absolute inset-0 z-0 pointer-events-none">
    <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 1.5]} style={{ background: 'transparent' }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[8, 3, 5]} intensity={0.6} color="#8b5cf6" />
      <pointLight position={[-8, -3, 5]} intensity={0.4} color="#06b6d4" />

      <FloatingShape position={[5, 4, -3]} color="#7c3aed" speed={0.4} size={1.3} type="torus" opacity={0.35} />
      <FloatingShape position={[-5, -3, -4]} color="#06b6d4" speed={0.3} size={1.1} type="icosahedron" opacity={0.3} />
      <FloatingShape position={[3, -5, -3]} color="#3b82f6" speed={0.5} size={0.9} type="octahedron" opacity={0.35} />
      <FloatingShape position={[-3, 5, -5]} color="#8b5cf6" speed={0.6} size={0.8} type="dodecahedron" opacity={0.3} />
      <FloatingShape position={[0, 0, -2]} color="#7c3aed" speed={0.35} size={0.7} type="ring" opacity={0.3} />
      <FloatingShape position={[-6, 0, -4]} color="#06b6d4" speed={0.45} size={1} type="box" opacity={0.25} />

      <GlowSphere position={[6, 2, -7]} color="#7c3aed" size={2.5} opacity={0.1} />
      <GlowSphere position={[-6, -4, -7]} color="#06b6d4" size={2} opacity={0.1} />

      <Particles count={80} color="#8b5cf6" size={0.04} />
      <Particles count={50} color="#06b6d4" size={0.03} />
    </Canvas>
  </div>
);

// ─── FOOTER ───
export const FooterScene = () => (
  <div className="absolute inset-0 z-0 pointer-events-none">
    <Canvas camera={{ position: [0, 0, 7], fov: 45 }} dpr={[1, 1.5]} style={{ background: 'transparent' }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 5, 5]} intensity={0.5} color="#7c3aed" />
      <pointLight position={[5, -3, 3]} intensity={0.4} color="#06b6d4" />

      <FloatingShape position={[4, 1.5, -2]} color="#7c3aed" speed={0.3} size={1.1} type="torus" opacity={0.35} />
      <FloatingShape position={[-4, -1, -3]} color="#06b6d4" speed={0.5} size={1} type="octahedron" opacity={0.35} />
      <FloatingShape position={[-2, 2, -2]} color="#8b5cf6" speed={0.4} size={0.8} type="icosahedron" opacity={0.3} />
      <FloatingShape position={[3, -2.5, -4]} color="#3b82f6" speed={0.6} size={0.7} type="dodecahedron" opacity={0.3} />
      <FloatingShape position={[0, 3, -3]} color="#7c3aed" speed={0.35} size={0.6} type="ring" opacity={0.35} />

      <GlowSphere position={[-5, 2, -6]} color="#7c3aed" size={2} opacity={0.1} />
      <GlowSphere position={[5, -2, -6]} color="#06b6d4" size={2} opacity={0.1} />

      <Particles count={60} color="#7c3aed" size={0.035} />
      <Particles count={40} color="#06b6d4" size={0.03} />
    </Canvas>
  </div>
);
