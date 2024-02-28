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
import Label from "@/Widgets/Label";
import { TypewriterEffect } from "@/AceternityUi/typewriter-effect";
import { FaChevronDown } from "react-icons/fa";

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
        <motion.div className="lg:right lg:flex-grow flex items-center justify-center md:relative h-full w-full md:h-4/5 max-w-lg lg:max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { delay: 0.7, duration: 0.4, ease: "easeInOut" },
            }}
            className="relative flex justify-center items-center w-full h-full"
          >
            <Image
              src={"/images/bg5.png"}
              height={1000}
              width={1000}
              className="absolute z-10"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;

// left side of the screen, seperated for readability
const LeftContainer = ({ dark }) => {
  const word1 = [
    {
      text: "Michael",
      className: `text-sky-500 text-6xl lg:text-8xl tracking-wide font-bold`,
    },
  ];
  const word2 = [
    {
      text: "Cerreto",
      className: `text-sky-500 text-6xl lg:text-8xl tracking-wide font-bold`,
    },
  ];
  return (
    <>
      <Label
        text={"Software Engineer Portfolio"}
        icon={
          <GiStarSwirl
            className={`text-xl ${dark ? "text-blue-600" : "text-blue-400"}`}
          />
        }
        borderColor={`border-blue-300`}
        textColor={`${dark ? "text-gray-600 " : "text-gray-500 "}`}
        bgClassName={`${dark ? "portfolio-dark" : "portfolio-light"}`}
      />

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
      <div className="w-full flex justify-center items-center flex-col">
        <TypewriterEffect words={word1} />
        <TypewriterEffect words={word2} />
      </div>

      {/* 
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
      */}
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
      <div className="w-full flex flex-row justify-start items-center gap-8 mt-5">
        <motion.button
          initial={{ x: -50, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.4, ease: "easeInOut", delay: 0.8 },
          }}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.8 }}
          className={`z-50 font-normal contact-btn relative flex flex-row items-center justify-center w-min gap-2 tracking-widest whitespace-nowrap transition-opacity duration-500 text-lg rounded-3xl py-2 px-6 cursor-pointer bg-gradient-to-r 
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
          whileHover={{ scale: 1.1 }}
          className={`z-50 relative overflow-hidden gap-4 inline-flex tracking-widest font-bold h-12 animate-shimmer items-center justify-center rounded-3xl border border-2 border-sky-500 bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 cursor-pointer ${
            dark
              ? "text-neutral-300 bg-[linear-gradient(110deg,#1e1e21,45%,#1e2631,55%,#1e1e21)] "
              : "text-neutral-800 bg-[transparent]"
          }`}
        >
          <p>Resume</p>
          <FaChevronDown className="flex items-center justify-center p-0 m-0" />
        </motion.button>
      </div>
    </>
  );
};
