import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeDCube = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    camera.position.z = 2.5;

    // Create cube geometry
    const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);

    // Create materials for each face with gradients
    const materials = [
      new THREE.MeshStandardMaterial({ color: 0x2563eb, metalness: 0.6, roughness: 0.3, emissive: 0x1d47a3 }), // Blue
      new THREE.MeshStandardMaterial({ color: 0x7c3aed, metalness: 0.6, roughness: 0.3, emissive: 0x6d28d9 }), // Purple
      new THREE.MeshStandardMaterial({ color: 0x06b6d4, metalness: 0.6, roughness: 0.3, emissive: 0x0891b2 }), // Cyan
      new THREE.MeshStandardMaterial({ color: 0x2563eb, metalness: 0.6, roughness: 0.3, emissive: 0x1d47a3 }), // Blue
      new THREE.MeshStandardMaterial({ color: 0x7c3aed, metalness: 0.6, roughness: 0.3, emissive: 0x6d28d9 }), // Purple
      new THREE.MeshStandardMaterial({ color: 0x06b6d4, metalness: 0.6, roughness: 0.3, emissive: 0x0891b2 }), // Cyan
    ];

    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);

    // Add lighting
    const light1 = new THREE.DirectionalLight(0xffffff, 0.8);
    light1.position.set(5, 5, 5);
    scene.add(light1);

    const light2 = new THREE.DirectionalLight(0xffffff, 0.4);
    light2.position.set(-5, -5, -5);
    scene.add(light2);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.003;
      cube.rotation.y += 0.005;
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (containerRef.current) {
        const width = containerRef.current.clientWidth;
        const height = containerRef.current.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '400px',
        borderRadius: '12px',
        overflow: 'hidden',
      }}
    />
  );
};

export default ThreeDCube;
