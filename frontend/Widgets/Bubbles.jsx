"use client";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

const Bubbles = ({ amount, colors }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    })
      .then(() => {
        setInit(true);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: {
        enable: false,
      },
      fpsLimit: 60,
      interactivity: {}, // no events
      particles: {
        color: {
          value: colors,
        },
        links: {
          enable: false,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: amount,
        },
        opacity: {
          value: 1,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        height="50%"
        options={options}
        className="absolute top-0 left-0 right-0 bottom-0"
      />
    );
  }

  return <></>;
};

export default Bubbles;
