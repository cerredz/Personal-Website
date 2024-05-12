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
import { Meteors } from "@/AceternityUi/meteors";
import { LuArrowDownToLine } from "react-icons/lu";
import { Nextjs } from "@/icons/Nextjs";
import { useRouter } from "next/navigation";

const Landing = () => {
  const dark = useSelector((state) => state.auth.dark);

  return (
    <section id="Home" className="relative h-screen ">
      {/* BACKGROUND IMAGE */}
      <motion.span className="absolute top-0 left-0 w-full h-full ">
        <Image
          src={`${dark ? "/images/herobgdark.png" : "/images/herobglight.png"}`}
          alt="background image"
          layout="fill"
          quality={100}
          priority
          className="z-1"
        />
      </motion.span>
      {/* <Meteors number={20} /> */}

      <div className="lg:basis-2/5 lg:gap-10 h-full w-11/12 mt-10 lg:mt-0 items-center flex-col m-auto justify-center flex xl:flex-row xl:justify-center xl:w-10/12">
        {/* LEFT */}
        <div className="mt-16 md:mt-0 flex flex-col gap-2 justify-center left-container backdrop-blur-lg p-8 rounded-xl ">
          <LeftContainer dark={dark} />
        </div>
        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
            transition: { delay: 0.7, duration: 0.8, ease: "easeInOut" },
          }}
          className="lg:basis-3/5 flex items-end justify-center md:relative h-full w-full xl:h-9/12"
        >
          <motion.span className="relative">
            <Image
              src={"/images/rightimg.png"}
              width={625}
              height={700}
              quality={100}
              priority
              className="flex items-center justify-center right-img"
            />
            {/* RESUME BUTTON */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="hidden xl:flex absolute top-[20%] right-[5%] flex flex-col items-center justify-center p-3 z-10 cursor-pointer"
            >
              <LuArrowDownToLine className="z-10 text-4xl text-neutral-300" />
              <p className="text-neutral-300 font-bold text-md italic tracking-wider z-10">
                Resume
              </p>
              <motion.span className="absolute h-24 w-24 rounded-full bg-blue-500 resume-circle "></motion.span>
            </motion.div>
          </motion.span>
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
  const router = useRouter();
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
        } z-50`}
      >
        Hi 👋, my name is
      </motion.p>
      <div className="w-full flex justify-center items-start flex-col z-10">
        <TypewriterEffect words={word1} />
        <TypewriterEffect words={word2} />
      </div>

      <motion.p
        initial={{ x: -50, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: { duration: 0.4, ease: "easeInOut", delay: 0.7 },
        }}
        className={`max-w-sm ${
          dark ? "dark-landing-text" : "light-landing-text"
        } z-10`}
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
          className={`z-50 font-normal contact-btn relative flex flex-row items-center justify-center w-min gap-2 tracking-widest whitespace-nowrap transition-opacity duration-500 text-lg rounded-3xl py-[.62rem] px-6 cursor-pointer bg-gradient-to-r 
         ${
           dark
             ? "text-neutral-300 from-sky-500  to-blue-600"
             : "text-neutral-800 from-sky-400  to-blue-500"
         }`}
          onClick={() => router.push("/contact")}
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
          className={`inline-flex xl:hidden z-50 relative overflow-hidden gap-4 inline-flex tracking-widest font-bold h-12 animate-shimmer items-center justify-center rounded-3xl border border-2 border-sky-500 bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 cursor-pointer ${
            dark
              ? "text-neutral-300 bg-[linear-gradient(110deg,#1e1e21,45%,#1e2631,55%,#1e1e21)] "
              : "text-neutral-800 bg-[transparent]"
          }`}
        >
          <p>Resume</p>
          <FaChevronDown className="flex items-center justify-center p-0 m-0" />
        </motion.button>
        {/* ARROW */}
        <Image
          src={"/images/arrow.png"}
          alt="arrow"
          width={75}
          height={75}
          initial={{ width: 0, height: 0, opacity: 0 }}
          animate={{
            width: 75,
            height: 75,
            opacity: 1,
            transition: { delay: 1, duration: 2 },
          }}
          className="absolute bottom-[-30px] left-[50px] z-10 arrow"
        />
      </div>
    </>
  );
};
