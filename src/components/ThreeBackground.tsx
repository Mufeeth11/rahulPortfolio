"use client";

import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 3600; // 60 x 60 grid

  // Generate a structured 2D grid of positions
  const [positions, randoms] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const rnd = new Float32Array(count);
    const size = 60; // 60 columns & 60 rows
    const step = 1.0; // Space between points
    
    let index = 0;
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        // Center the grid around [0, 0, 0]
        pos[index * 3] = (i - size / 2) * step;
        pos[index * 3 + 1] = 0; // Height is computed dynamically in shader
        pos[index * 3 + 2] = (j - size / 2) * step;
        
        rnd[index] = Math.random();
        index++;
      }
    }
    return [pos, rnd];
  }, []);

  const uniforms = useMemo(() => {
    return {
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
    };
  }, []);

  // Update uniforms and rotate points on frame update
  useFrame((state) => {
    const { clock, pointer } = state;
    if (pointsRef.current) {
      // Tilt the grid plane so it extends like a horizon slanting into the distance
      pointsRef.current.rotation.x = -1.1; 
      pointsRef.current.rotation.z = clock.getElapsedTime() * 0.03; // Very slow spin

      // Safe guard against material not being attached or initialized yet
      const material = pointsRef.current.material;
      if (material && !Array.isArray(material) && "uniforms" in material && material.uniforms) {
        const shaderMaterial = material as THREE.ShaderMaterial;
        if (shaderMaterial.uniforms.uTime) {
          shaderMaterial.uniforms.uTime.value = clock.getElapsedTime();
        }
        
        // Smooth interpolate mouse position [-1, 1]
        if (shaderMaterial.uniforms.uMouse && shaderMaterial.uniforms.uMouse.value) {
          shaderMaterial.uniforms.uMouse.value.x += (pointer.x - shaderMaterial.uniforms.uMouse.value.x) * 0.08;
          shaderMaterial.uniforms.uMouse.value.y += (pointer.y - shaderMaterial.uniforms.uMouse.value.y) * 0.08;
        }
      }
    }
  });

  // Custom Shaders for dynamic landscape mesh
  const vertexShader = `
    uniform float uTime;
    uniform vec2 uMouse;
    attribute float aRandom;
    varying vec3 vColor;
    varying float vAlpha;

    void main() {
      vec3 pos = position;

      // Project uMouse (which is [-1, 1]) to grid coordinates [-25, 25]
      vec2 mouseGrid = uMouse * 25.0;
      
      // Distance in the XZ plane of the grid
      float distToMouse = distance(pos.xz, mouseGrid);

      // Create a waving motion (cyber wave)
      float wave1 = sin(pos.x * 0.15 + uTime * 0.6) * cos(pos.z * 0.15 + uTime * 0.5) * 1.8;
      float wave2 = sin(length(pos.xz) * 0.08 - uTime * 0.4) * 1.2;
      pos.y = wave1 + wave2;

      // Mouse warp effect: depress the grid near the cursor (like gravity)
      float warpInfluence = smoothstep(15.0, 0.0, distToMouse);
      pos.y -= warpInfluence * 5.0; // Warp height downwards

      vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
      gl_Position = projectionMatrix * mvPosition;

      // Color scheme: very dark charcoal base grid (to keep background black)
      vec3 baseGridColor = vec3(0.04, 0.05, 0.06);     // Dark charcoal grey
      vec3 crestColor = vec3(0.13, 0.77, 0.37);        // Neon Green #22C55E
      vec3 mouseColor = vec3(0.06, 0.70, 0.75);        // Cyan #0EA5E9

      // Mix colors based on height
      float heightFactor = smoothstep(-2.5, 2.5, pos.y);
      vec3 tempColor = mix(baseGridColor, crestColor, heightFactor * 0.45);
      
      // Highlight the cursor warp area
      vColor = mix(tempColor, mouseColor, warpInfluence);

      // Point size attenuation
      float size = (1.2 + heightFactor * 1.5);
      gl_PointSize = size * (160.0 / -mvPosition.z);

      // Keep it subtle: fade points at the edge and make it dark background-friendly
      float edgeFade = 1.0 - smoothstep(15.0, 30.0, length(pos.xz));
      vAlpha = (0.04 + 0.20 * heightFactor) * edgeFade * (1.0 + warpInfluence * 2.0);
    }
  `;

  const fragmentShader = `
    varying vec3 vColor;
    varying float vAlpha;

    void main() {
      // Circular points
      vec2 uv = gl_PointCoord - vec2(0.5);
      float dist = length(uv);
      if (dist > 0.5) discard;
      
      // Smooth fade to edge
      float glow = 1.0 - smoothstep(0.1, 0.5, dist);
      gl_FragColor = vec4(vColor, glow * vAlpha);
    }
  `;

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-aRandom"
          args={[randoms, 1]}
        />
      </bufferGeometry>
      <shaderMaterial
        depthWrite={false}
        transparent
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function isWebGLAvailable() {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch (e) {
    return false;
  }
}

export default function ThreeBackground() {
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    setWebglSupported(isWebGLAvailable());
  }, []);

  if (!webglSupported) {
    return (
      <div className="fixed inset-0 w-full h-full -z-10 bg-black grid-pattern opacity-10 pointer-events-none" />
    );
  }

  return (
    <div className="fixed inset-0 w-full h-full -z-10 bg-black overflow-hidden pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 20], fov: 60 }}
        dpr={[1, 2]}
      >
        <ParticleField />
      </Canvas>
    </div>
  );
}
