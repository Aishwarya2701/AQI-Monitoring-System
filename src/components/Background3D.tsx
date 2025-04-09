import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { useMemo } from 'react';
import PlantModel from './PlantModel';
import AQIModel from './AQIModel';

export default function Background3D() {
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 50; i++) {
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 10;
      temp.push({ position: [x, y, z] as [number, number, number] });
    }
    return temp;
  }, []);

  return (
    <Canvas className="fixed top-0 left-0 -z-10" camera={{ position: [0, 0, 10], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      
      <PlantModel position={[-3, -1, 0]} />
      <PlantModel position={[3, -2, -2]} />
      <AQIModel position={[2, 0, 1]} value="Good" color="#22c55e" />
      <AQIModel position={[-2, 1, -1]} value="Moderate" color="#eab308" />
      
      {particles.map((props, i) => (
        <Sphere key={i} position={props.position} scale={0.1}>
          <meshStandardMaterial color="#88c8ff" opacity={0.6} transparent />
        </Sphere>
      ))}
      <OrbitControls 
        autoRotate 
        enableZoom={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
      />
    </Canvas>
  );
}