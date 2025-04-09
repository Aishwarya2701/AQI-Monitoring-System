import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Text } from '@react-three/drei';
import { Group } from 'three';

interface AQIModelProps {
  position?: [number, number, number];
  value?: string;
  color?: string;
}

export default function AQIModel({ 
  position = [0, 0, 0],
  value = "Good",
  color = "#22c55e"
}: AQIModelProps) {
  const groupRef = useRef<Group>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.5;
      groupRef.current.position.y = position[1] + Math.sin(time) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <Sphere args={[0.5, 32, 32]}>
        <meshStandardMaterial color={color} opacity={0.6} transparent />
      </Sphere>
      <Text
        position={[0, 0, 0.6]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {value}
      </Text>
    </group>
  );
}