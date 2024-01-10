"use client";
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import Image from "next/image";
import { useSelector } from "react-redux";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import "../styles/landing.css";
import { GiStarSwirl } from "react-icons/gi";
import { FaArrowLeftLong } from "react-icons/fa6";
import BackgroundSkillsIcons from "@/Widgets/BackgroundSkillsIcons";

const Landing = () => {
  const dark = useSelector((state) => state.auth.dark);

  return (
    <div className="h-screen items-center justify-between landing">
      <div className="lg:left lg:gap-10 h-full w-10/12 mt-10 lg:mt-0 items-center flex-col m-auto justify-center flex md:flex-row md:justify-center md:w-4/5 xl:w-3/4">
        {/* LEFT */}
        <div className="mt-16 md:mt-0 flex flex-col gap-2 justify-center ">
          <LeftContainer dark={dark} />
        </div>
        {/* Right */}
        <motion.div
          animate={{
            y: ["-10px", "10px", "-10px"],
            opacity: [0.8, 1, 0.8], // Fade in animation
          }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="lg:right lg:flex-grow flex items-center justify-center md:relative h-full w-full md:h-4/5 max-w-lg lg:max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { delay: 0.7, duration: 0.4, ease: "easeInOut" },
            }}
          >
            <Image src={"/images/bg5.png"} height={1000} width={1000} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;

// left side of the screen, seperated for readability
const LeftContainer = ({ dark }) => {
  const [isHoveringContact, setIsHoveringContact] = useState(false);
  return (
    <>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { delay: 0.4, duration: 0.4, ease: "easeInOut" },
        }}
        className={`flex flex-row items-center justify-between w-min gap-3 rounded-2xl portfolio-label border border-solid border-blue-300 relative`}
      >
        <GiStarSwirl
          className={`text-xl ${dark ? "text-blue-600" : "text-blue-400"}`}
        />
        <p
          className={`whitespace-nowrap text-sm tracking-wider  ${
            dark ? "text-gray-600 font-bold" : "text-nuetral-800 font-normal"
          }`}
        >
          Software Engineer Portfolio
        </p>
      </motion.div>

      <motion.p
        initial={{ x: -50, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: { duration: 0.4, ease: "easeInOut", delay: 0.4 },
        }}
        className={` text-xl lg:text-2xl tracking-wide font-medium ${
          dark ? "dark-landing-text" : "light-landing-text"
        } `}
      >
        Hi 👋, my name is
      </motion.p>
      <motion.h1
        initial={{ x: -50, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: { duration: 0.4, ease: "easeInOut", delay: 0.4 },
        }}
        className={`origin-left text-6xl lg:text-8xl tracking-wide font-bold ${
          dark ? "dark-text-gradient" : "light-text-gradient"
        }`}
      >
        Michael
      </motion.h1>
      <motion.h1
        initial={{ x: -50, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: { duration: 0.4, ease: "easeInOut", delay: 0.4 },
        }}
        className={`origin-left text-6xl lg:text-8xl tracking-wide font-bold ${
          dark ? "dark-text-gradient" : "light-text-gradient"
        }`}
      >
        Cerreto
      </motion.h1>
      <motion.p
        initial={{ x: -50, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: { duration: 0.4, ease: "easeInOut", delay: 0.7 },
        }}
        className={`max-w-sm ${
          dark ? "dark-landing-text" : "light-landing-text"
        } `}
      >
        I'm an Aspiring Full-Stack Software Engineer with a passion for coding,
        problem-solving, and software developement. Have Any questions?
      </motion.p>

      {/* CONTACT ME BUTTON */}
      <motion.button
        initial={{ x: -50, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: { duration: 0.4, ease: "easeInOut", delay: 0.8 },
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.8 }}
        onMouseEnter={() => setIsHoveringContact(true)}
        onMouseLeave={() => setIsHoveringContact(false)}
        className={`w-min tracking-widest whitespace-nowrap transition-opacity duration-500 mt-2 text-lg rounded-md cursor-pointer contact-btn bg-gradient-to-br ${
          dark
            ? "text-black from-blue-500 to-blue-400"
            : "text-neutral-800 from-blue-400 to-blue-300"
        }`}
      >
        Contact Me
        <AnimatePresence>
          {isHoveringContact && (
            <motion.div
              initial={{ x: 150, opacity: 0 }}
              animate={{
                x: 25,
                opacity: 1,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
              exit={{
                x: 150,
                opacity: 0,
                transition: { duration: 0.4, ease: "easeInOut" },
              }}
              className="absolute flex items-center justify-center right-0 top-0 h-full"
            >
              <FaArrowLeftLong
                className={`p-0 m-0 ${
                  dark ? "text-blue-500" : "text-blue-400"
                }`}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
};
