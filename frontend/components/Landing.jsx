"use client";
import { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import "../styles/landing.css";
import { GiStarSwirl } from "react-icons/gi";
import { FaArrowLeftLong } from "react-icons/fa6";
import { BsStars } from "react-icons/bs";
import { SlArrowDown } from "react-icons/sl";

const Landing = () => {
  const dark = useSelector((state) => state.auth.dark);

  return (
    <section
      id="Home"
      className="relative h-screen items-center justify-between landing"
    >
      <Image
        src={"/images/homebg.png"}
        alt=""
        layout="fill"
        className="absolute top-0 left-0 h-full width-full z-10"
      />
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
    </section>
  );
};

export default Landing;

// left side of the screen, seperated for readability
const LeftContainer = ({ dark }) => {
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
      <div className="w-full flex flex-row justify-start items-center gap-8">
        <motion.button
          initial={{ x: -50, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.4, ease: "easeInOut", delay: 0.8 },
          }}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.8 }}
          className={`z-50 font-normal contact-btn relative flex flex-row items-center justify-center w-min gap-2 tracking-widest whitespace-nowrap transition-opacity duration-500 mt-5 text-lg rounded-3xl py-2 px-6 cursor-pointer bg-gradient-to-r 
         ${
           dark
             ? "text-neutral-300 from-sky-500  to-blue-600"
             : "text-neutral-800 from-sky-400  to-blue-500"
         }`}
        >
          <BsStars className="" />
          <p className=""> Contact me</p>
        </motion.button>

        <motion.button
          initial={{ x: -50, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.4, ease: "easeInOut", delay: 0.8 },
          }}
          className={`z-50 resume-btn font-normal relative flex flex-row items-center justify-center w-min gap-3 tracking-widest whitespace-nowrap transition-opacity duration-500 mt-5 text-lg rounded-3xl px-6 cursor-pointer border-2 border-solid
         ${
           dark
             ? "text-neutral-300 border-sky-500"
             : "text-neutral-800 border-sky-400"
         }`}
        >
          <p>Resume</p>
          <SlArrowDown className="font-bold arrow p-0 m-0 flex items-center justify-center text-sm" />
        </motion.button>
      </div>
    </>
  );
};
