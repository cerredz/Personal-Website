import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import Image from "next/image";
import { useSelector } from "react-redux";

const Landing = () => {
  const dark = useSelector((state) => state.auth.dark);
  return (
    <div className="h-screen scroll-snap-align-center items-center justify-between">
      <div className="h-full scroll-snap-align-center w-full items-center justify-center flex lg:flex-row lg:justify-between lg:w-4/5 lg:m-auto">
        {/* LEFT */}
        <div className="lg:flex-2 flex flex-col justify-center gap-2 flex-1 md:items-center">
          <p>Hi 👋, im</p>
          <h1>Michael</h1>
          <h1>Cerreto</h1>
          <h3 className="text-yellow-200">
            Software Engineer / Full-Stack Developer 📱
          </h3>
          <p>
            Aspiring software engineer with a passion for coding and
            problem-solving. Have Any questions?
          </p>
          <button>Contact Me</button>
        </div>
        {/* Right */}
        <div className="md:flex-3 md:relative flex-1 h-full w-full">
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2}>
                <MeshDistortMaterial
                  color={`${dark ? "#11009E" : "#7FC7D9"}`}
                  attach="material"
                  distort={0.5}
                  speed={3}
                />
              </Sphere>
            </Suspense>
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default Landing;
