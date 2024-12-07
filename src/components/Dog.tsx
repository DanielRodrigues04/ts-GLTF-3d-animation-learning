import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';

export default function Dog() {
  const group = useRef();
  const { scene, animations } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/dog/model.gltf');
  const { actions, names } = useAnimations(animations, scene);
  const walkDirection = useRef(new THREE.Vector3(1, 0, 0));
  const rotationAngle = useRef(0);

  useEffect(() => {
    // Play the walking animation if available
    if (names.includes('Survey')) {
      actions['Survey'].reset().fadeIn(0.5).play();
    } else if (names.includes('Walk')) {
      actions['Walk'].reset().fadeIn(0.5).play();
    }
  }, [actions, names]);

  useFrame((state, delta) => {
    if (!group.current) return;

    // Update position
    const walkSpeed = 1;
    group.current.position.x += walkDirection.current.x * walkSpeed * delta;
    group.current.position.z += walkDirection.current.z * walkSpeed * delta;

    // Change direction when reaching boundaries
    if (Math.abs(group.current.position.x) > 8) {
      walkDirection.current.x *= -1;
      rotationAngle.current = walkDirection.current.x > 0 ? 0 : Math.PI;
      group.current.rotation.y = rotationAngle.current;
    }
  });

  return (
    <group ref={group} scale={[0.8, 0.8, 0.8]}>
      <primitive object={scene} />
    </group>
  );
}

// Pre-load the model
useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/dog/model.gltf');