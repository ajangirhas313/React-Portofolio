import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, OrbitControls } from '@react-three/drei';

// Komponen untuk objek yang berputar
function SpinningBox() {
  const meshRef = useRef();

  // Animasi rotasi setiap frame
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <Box ref={meshRef} args={[2.5, 2.5, 2.5]}>
      <meshStandardMaterial color={'#4A90E2'} />
    </Box>
  );
}

// Komponen utama untuk Scene 3D
export default function Scene3D() {
  return (
    <div style={{ width: '100%', height: '350px', cursor: 'grab' }}>
      <Canvas>
        {/* Pencahayaan */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} />

        {/* Objek 3D */}
        <SpinningBox />
        
        {/* Kontrol untuk user bisa memutar objek */}
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}