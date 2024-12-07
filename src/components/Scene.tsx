import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Loader } from '@react-three/drei';
import Dog from './Dog';

export default function Scene() {
  return (
    <>
      <div className="w-full h-screen">
        <Canvas
          camera={{
            position: [5, 5, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <Environment preset="sunset" />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Dog />
          <OrbitControls />
          <gridHelper args={[20, 20]} />
        </Canvas>
      </div>
      <Loader />
    </>
  );
}