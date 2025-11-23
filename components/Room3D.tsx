import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const GeometricShapes = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.02;
    }
  });

  const materialProps = {
    transparent: true,
    roughness: 0.1,
    metalness: 0.1,
  };

  return (
    <group ref={groupRef}>
      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5} position={[3, 0, -5]}>
        <mesh>
          <icosahedronGeometry args={[0.8, 0]} />
          <MeshDistortMaterial 
            color="#4f46e5"
            opacity={0.8}
            speed={1} 
            distort={0.3} 
            {...materialProps}
          />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4} position={[-4, 3, -6]}>
        <mesh>
          <torusGeometry args={[0.6, 0.2, 16, 32]} />
          <meshStandardMaterial 
            color="#818cf8" 
            opacity={0.6}
            {...materialProps}
          />
        </mesh>
      </Float>
    </group>
  );
};

const DeskSetup = ({ isDark }: { isDark: boolean }) => {
  // In Light Mode: Ghost white appearance (very subtle)
  const deskColor = isDark ? "#1a1a1a" : "#ffffff"; 
  const legColor = isDark ? "#000" : "#f0f0f0";
  const laptopColor = isDark ? "#333" : "#e5e5e5";

  return (
    <group position={[1, -2.5, -1]} rotation={[0, -Math.PI / 5, 0]}>
      {/* Desk Surface */}
      <mesh receiveShadow castShadow position={[0, 0, 0]}>
        <boxGeometry args={[5, 0.15, 2.5]} />
        <meshStandardMaterial color={deskColor} roughness={0.2} />
      </mesh>

      {/* Legs */}
      <mesh position={[-2.2, -1.25, 1]} castShadow>
        <boxGeometry args={[0.15, 2.5, 0.15]} />
        <meshStandardMaterial color={legColor} />
      </mesh>
      <mesh position={[2.2, -1.25, 1]} castShadow>
        <boxGeometry args={[0.15, 2.5, 0.15]} />
        <meshStandardMaterial color={legColor} />
      </mesh>
      <mesh position={[-2.2, -1.25, -1]} castShadow>
        <boxGeometry args={[0.15, 2.5, 0.15]} />
        <meshStandardMaterial color={legColor} />
      </mesh>
      <mesh position={[2.2, -1.25, -1]} castShadow>
        <boxGeometry args={[0.15, 2.5, 0.15]} />
        <meshStandardMaterial color={legColor} />
      </mesh>

      {/* Laptop */}
      <group position={[0, 0.1, 0.4]}>
        <mesh receiveShadow castShadow>
            <boxGeometry args={[1.4, 0.05, 0.9]} />
            <meshStandardMaterial color={laptopColor} metalness={0.4} roughness={0.3} />
        </mesh>
        {/* Screen */}
        <group position={[0, 0.45, -0.45]} rotation={[-0.15, 0, 0]}>
             <mesh castShadow>
                <boxGeometry args={[1.4, 0.85, 0.05]} />
                <meshStandardMaterial color={laptopColor} />
            </mesh>
            <mesh position={[0, 0, 0.03]}>
                <planeGeometry args={[1.3, 0.75]} />
                <meshBasicMaterial color={isDark ? "#1e1b4b" : "#ffffff"} />
            </mesh>
        </group>
      </group>

      {/* Minimal Lamp */}
      <group position={[-1.8, 0.1, -0.8]} rotation={[0, 0.8, 0]}>
        <mesh castShadow>
            <cylinderGeometry args={[0.15, 0.2, 0.1]} />
            <meshStandardMaterial color={isDark ? "#222" : "#f5f5f5"} />
        </mesh>
        <mesh position={[0, 0.8, 0]}>
            <cylinderGeometry args={[0.03, 0.03, 1.6]} />
            <meshStandardMaterial color={isDark ? "#222" : "#e5e5e5"} />
        </mesh>
        <mesh position={[0.4, 1.5, 0]} rotation={[0, 0, -0.8]}>
            <coneGeometry args={[0.25, 0.6, 32]} />
            <meshStandardMaterial color={isDark ? "#222" : "#f5f5f5"} />
        </mesh>
         {/* Lamp Light */}
         <spotLight 
            position={[0.4, 1.4, 0]} 
            target-position={[0, 0, 0]} 
            angle={0.5} 
            penumbra={0.5} 
            intensity={isDark ? 3 : 0} 
            color="#ffaa00" 
            castShadow
         />
      </group>
    </group>
  );
};

const Room3D: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const bgColor = isDark ? '#0a0a0a' : '#ffffff'; 
  const fogColor = isDark ? '#0a0a0a' : '#ffffff';

  return (
    <>
      <color attach="background" args={[bgColor]} />
      {/* Heavy fog to seamlessly blend floor into infinity */}
      <fog attach="fog" args={[fogColor, 5, 20]} />

      <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={40} />
      
      {/* Lighting Configuration */}
      {isDark ? (
        // Dark Mode: Moody, contrasting
        <>
            <ambientLight intensity={0.4} />
            <spotLight position={[5, 10, 5]} angle={0.3} penumbra={1} intensity={1} castShadow />
            <pointLight position={[-5, 2, -5]} intensity={0.8} color="#6366f1" />
        </>
      ) : (
        // Light Mode: Very soft, studio "Beauty Dish" lighting
        <>
            <ambientLight intensity={1.5} />
            <directionalLight position={[5, 10, 5]} intensity={0.5} castShadow shadow-bias={-0.0001} />
            {/* Fill light to remove harsh shadows */}
            <rectAreaLight width={20} height={20} position={[0, 10, 0]} intensity={1} color="#ffffff" />
        </>
      )}

      {isDark && <GeometricShapes />}
      <DeskSetup isDark={isDark} />

      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3.25, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial 
            color={bgColor}
            roughness={isDark ? 0.5 : 1} 
            metalness={isDark ? 0.1 : 0} 
        />
      </mesh>
    </>
  );
};

export default Room3D;