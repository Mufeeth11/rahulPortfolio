"use client";

import React, { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

interface GearProps {
  teethCount: number;
  radius: number;
  speed: number;
  direction: number;
  position: [number, number, number];
  color: string;
  hovered: boolean;
}

function Gear({ teethCount, radius, speed, direction, position, color, hovered }: GearProps) {
  const meshRef = useRef<THREE.Group>(null);
  const toothWidth = (2 * Math.PI * radius) / teethCount * 0.5;
  const toothHeight = 0.4;
  const thickness = 0.6;

  // Render teeth positions
  const teeth = useMemo(() => {
    const arr = [];
    for (let i = 0; i < teethCount; i++) {
      const angle = (i / teethCount) * Math.PI * 2;
      arr.push({
        angle,
        position: [
          Math.cos(angle) * radius,
          Math.sin(angle) * radius,
          0,
        ] as [number, number, number],
      });
    }
    return arr;
  }, [teethCount, radius]);

  useFrame((state) => {
    if (meshRef.current) {
      const elapsed = state.clock.getElapsedTime();
      const currentSpeed = speed * (hovered ? 2.5 : 1.0);
      meshRef.current.rotation.z = elapsed * currentSpeed * direction * 0.4;
    }
  });

  return (
    <group ref={meshRef} position={position}>
      {/* Central shaft */}
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[0.3, 0.3, thickness + 0.2, 16]} />
        <meshStandardMaterial color="#475569" roughness={0.2} metalness={0.8} />
      </mesh>
      
      {/* Gear Hub */}
      <mesh castShadow receiveShadow rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[radius * 0.8, radius * 0.8, thickness, 32]} />
        <meshStandardMaterial 
          color={hovered ? "#22C55E" : color} 
          roughness={0.1} 
          metalness={0.9} 
          emissive={hovered ? "#22C55E" : "#000000"}
          emissiveIntensity={hovered ? 0.3 : 0}
        />
      </mesh>

      {/* Gear Spokes (cross shape) */}
      <mesh rotation={[0, 0, 0]}>
        <boxGeometry args={[radius * 1.6, 0.4, thickness - 0.05]} />
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.7} />
      </mesh>
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[radius * 1.6, 0.4, thickness - 0.05]} />
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.7} />
      </mesh>

      {/* Outer Rim */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[radius - 0.1, 0.1, 8, 32]} />
        <meshStandardMaterial color={color} roughness={0.2} metalness={0.8} />
      </mesh>

      {/* Teeth */}
      {teeth.map((t, idx) => (
        <mesh
          key={idx}
          position={t.position}
          rotation={[0, 0, t.angle]}
        >
          <boxGeometry args={[toothHeight, toothWidth, thickness]} />
          <meshStandardMaterial 
            color={hovered ? "#16A34A" : color} 
            roughness={0.2} 
            metalness={0.8} 
          />
        </mesh>
      ))}
    </group>
  );
}

// Glowing node grid representing IT/Software
function DataNodes() {
  const pointsRef = useRef<THREE.Group>(null);
  const count = 30;

  const [nodes, lines] = useMemo(() => {
    const tempNodes = [];
    for (let i = 0; i < count; i++) {
      tempNodes.push({
        position: [
          (Math.random() - 0.5) * 14,
          (Math.random() - 0.5) * 14,
          (Math.random() - 0.5) * 6 - 2,
        ] as [number, number, number],
        speed: 0.2 + Math.random() * 0.5,
        offset: Math.random() * Math.PI * 2,
      });
    }

    // Connect nodes that are close to each other
    const tempLines = [];
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = tempNodes[i].position[0] - tempNodes[j].position[0];
        const dy = tempNodes[i].position[1] - tempNodes[j].position[1];
        const dz = tempNodes[i].position[2] - tempNodes[j].position[2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < 4) {
          tempLines.push([i, j]);
        }
      }
    }

    return [tempNodes, tempLines];
  }, []);

  const lineGeo = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(lines.length * 6);
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    return geo;
  }, [lines]);

  useFrame((state) => {
    const elapsed = state.clock.getElapsedTime();
    if (pointsRef.current) {
      // Rotate grid slowly
      pointsRef.current.rotation.y = elapsed * 0.05;
      pointsRef.current.rotation.z = elapsed * 0.02;

      // Update line vertex positions dynamically
      const posAttr = lineGeo.getAttribute("position") as THREE.BufferAttribute;
      let lineIndex = 0;

      lines.forEach(([i, j]) => {
        // Node i position
        const nI = nodes[i];
        const nJ = nodes[j];
        
        const yI = nI.position[1] + Math.sin(elapsed * nI.speed + nI.offset) * 0.2;
        const xI = nI.position[0] + Math.cos(elapsed * nI.speed * 0.8 + nI.offset) * 0.2;
        
        const yJ = nJ.position[1] + Math.sin(elapsed * nJ.speed + nJ.offset) * 0.2;
        const xJ = nJ.position[0] + Math.cos(elapsed * nJ.speed * 0.8 + nJ.offset) * 0.2;

        posAttr.setXYZ(lineIndex++, xI, yI, nI.position[2]);
        posAttr.setXYZ(lineIndex++, xJ, yJ, nJ.position[2]);
      });
      posAttr.needsUpdate = true;
    }
  });

  return (
    <group ref={pointsRef}>
      {/* Node Spheres */}
      {nodes.map((node, i) => (
        <mesh key={i} position={node.position}>
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshBasicMaterial color="#22C55E" transparent opacity={0.6} />
        </mesh>
      ))}

      {/* Network Lines */}
      <lineSegments geometry={lineGeo}>
        <lineBasicMaterial color="#1E293B" transparent opacity={0.3} />
      </lineSegments>
    </group>
  );
}

export default function ThreeMechanical() {
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      className="w-full h-[400px] md:h-[450px] relative rounded-2xl glass-premium overflow-hidden transition-all duration-500 cursor-grab active:cursor-grabbing glow-box-green"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="absolute top-4 left-4 z-10 text-xs text-[#22C55E] uppercase tracking-wider font-mono bg-black/80 px-3 py-1.5 rounded-full border border-[#22C55E]/30 backdrop-blur-sm pointer-events-none">
        Interactive 3D Engine: Mechanical meets IT
      </div>
      
      <Canvas
        camera={{ position: [0, 0, 8], fov: 55 }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} castShadow />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#22C55E" />
        
        {/* Gears assembly */}
        <group rotation={[0.2, 0.4, 0]}>
          {/* Main central gear */}
          <Gear 
            teethCount={16} 
            radius={1.6} 
            speed={0.8} 
            direction={1} 
            position={[0, 0, 0]} 
            color="#334155" // slate-700
            hovered={hovered}
          />
          {/* Secondary gear left */}
          <Gear 
            teethCount={8} 
            radius={0.8} 
            speed={1.6} 
            direction={-1} 
            // Meshing distance = R1 + R2 = 1.6 + 0.8 = 2.4 (offset slightly for tooth mesh)
            position={[-2.43, 0.05, 0]} 
            color="#475569" // slate-600
            hovered={hovered}
          />
          {/* Secondary gear right */}
          <Gear 
            teethCount={8} 
            radius={0.8} 
            speed={1.6} 
            direction={-1} 
            position={[2.43, -0.05, 0]} 
            color="#475569" // slate-600
            hovered={hovered}
          />
          
          {/* Floating Data Grid Nodes */}
          <DataNodes />
        </group>
        
        <OrbitControls enableZoom={false} autoRotate={!hovered} autoRotateSpeed={0.5} />
      </Canvas>
      
      <div className="absolute bottom-4 right-4 z-10 text-[10px] text-slate-400 font-mono bg-black/95 px-3 py-1 rounded-md pointer-events-none border border-slate-800">
        Drag to Rotate | Hover to Accelerate
      </div>
    </div>
  );
}
