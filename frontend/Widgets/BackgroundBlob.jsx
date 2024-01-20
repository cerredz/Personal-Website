import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useSelector } from "react-redux";

const BackgroundBlob = (props) => {
  const dark = useSelector((state) => state.auth.dark);
  const color = dark ? props.dark : props.light;
  const animate = !props.loop;
  const frameLoop = animate ? "always" : "demand"; // saves performance by stopping the animate of backgroundBlobs we cannot see

  return (
    <Canvas frameloop="demand">
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={1} />
      <directionalLight position={[3, 2, 1]} shadow={true} />
      <Sphere args={[1, 100, 200]} scale={props.scale} castShadow>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={props.distort}
          speed={props.speed}
        />
      </Sphere>
    </Canvas>
  );
};

export default BackgroundBlob;
