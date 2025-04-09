import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Box } from '@react-three/drei';
import { Mesh, Group } from 'three';

interface PlantModelProps {
  position?: [number, number, number];
}

export default function PlantModel({ position = [0, 0, 0] }: PlantModelProps) {
  const leafRef = useRef<Mesh>(null!);
  const stemRef = useRef<Mesh>(null!);
  const groupRef = useRef<Group>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (leafRef.current) {
      leafRef.current.rotation.x = Math.sin(time) * 0.1;
      leafRef.current.rotation.y = Math.cos(time) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <Box
        ref={stemRef}
        args={[0.1, 1, 0.1]}
        position={[0, 0.5, 0]}
      >
        <meshStandardMaterial color="#2d5a27" />
      </Box>
      <Sphere
        ref={leafRef}
        args={[0.3, 16, 16]}
        position={[0, 1, 0]}
      >
        <meshStandardMaterial color="#4ade80" />
      </Sphere>
    </group>
  );
}