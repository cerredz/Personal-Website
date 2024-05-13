"use client";
import "../../styles/globals.css";
import { useSelector } from "react-redux";
import { LuDownload } from "react-icons/lu";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Label from "@/Widgets/Label";
import { HiOutlineNewspaper } from "react-icons/hi2";
import "./styles.css";
import { useState } from "react";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { clickSound, whooshSound } from "@/utils/Sound";
import { expandResumeClick } from "./utils";
import { IoCloseOutline } from "react-icons/io5";

export default function Page() {
  const dark = useSelector((state) => state.auth.dark);
  const [isHoveringResume, setIsHoveringResume] = useState(false);
  const [expandResumeAnimation, setExpandResumeAnimation] = useState(false);
  const [expandResume, setExpandResume] = useState(false);
  const resumeFeatures = [
    "Education",
    "Skills",
    "Projects",
    "Awards",
    "Github",
    "LinkedIn",
    "Email",
    "Important Info",
  ];
  return (
    <section
      id="Resume"
      className={`overflow-hidden font-primary p-0 m-0 min-h-screen ${
        dark ? "bg-primary-dark" : "bg-primary-light"
      } scrollbar flex flex-col xl:flex-row items-center justify-center gap-4 pt-32 xl:pt-0 `}
    >
      {/* BACKGROUND IMAGE */}
      <Image
        src={"/images/resumeBG.png"}
        alt="resume background"
        layout="fill"
        quality={100}
        priority={true}
        className="blur-xl"
      />
      {/* EXPAND RESUME SCREEN SWIPE ANIMATION */}
      <AnimatePresence>
        {expandResumeAnimation && <ExpandResumeScreenSwipe />}
      </AnimatePresence>

      {/* TEXT CONTAINER */}
      <div
        className={`flex flex-col items-center justify-center xl:items-start xl:justify-start ${
          expandResume && "hidden"
        }`}
      >
        <motion.div
          initial={{ x: -150, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { duration: 0.4 } }}
          className="mx-auto xl:mx-0"
        >
          <Label
            text={"Resume / CV"}
            icon={<HiOutlineNewspaper className="text-sky-500" />}
            borderColor={"border-sky-500"}
            textColor={"text-sky-500"}
            bgClassName={"resume"}
          />
        </motion.div>
        <motion.h1
          initial={{ x: -150, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.4, delay: 0.2 },
          }}
          className="z-10 text-xl sm:text-4xl lg:text-8xl tracking-widest font-bold text-neutral-300 text-center xl:text-left"
        >
          My Resume
        </motion.h1>
        <motion.p
          initial={{ x: -150, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.4, delay: 0.3 },
          }}
          className="z-10 text-md text-neutral-600 tracking-wider font-medium mt-1 px-6 text-center xl:text-left xl:px-0"
        >
          An insight to the history of my computer science journey
        </motion.p>
        {/* RESUME FEATURES TABS  */}
        <div className="z-10 flex flex-row items-center justify-start gap-1 max-w-md flex-wrap mt-6">
          {resumeFeatures.map((feature, index) => (
            <motion.button
              key={index}
              className="px-3 py-1 text-neutral-400 tracking-wider font-medium rounded-3xl text-sm border border-solid border-neutral-400"
              initial={{ y: 10, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.4, delay: 0.4 + index * 0.1 },
              }}
            >
              {feature}
            </motion.button>
          ))}
        </div>
        {/* DOWNLOAD RESUME BUTTON */}
        <a
          className="z-10 "
          onClick={() => clickSound()}
          href="/resume.png"
          download
        >
          <motion.div
            initial={{ y: 25, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.4, delay: 1 },
            }}
            whileTap={{ scale: 0.9 }}
            className=" download-hover flex flex-row items-center justify-center gap-2 bg-gradient-to-br from-sky-400 via-blue-500 to-sky-400 py-2 px-4 rounded-md cursor-pointer mt-6 mx-auto xl:mx-0"
          >
            <LuDownload className="text-neutral-300 text-lg" />
            <p className="text-lg tracking-widest font-bold text-neutral-300">
              Download Resume
            </p>
          </motion.div>
        </a>
      </div>

      {/* RESUME CONTAINER */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: `opacity .3s ease-in-out .6s`,
        }}
        className={`z-10 flex items-center justify-center relative  ${
          expandResume &&
          "fixed top-0 left-0 w-[100vw] h-[100vh] z-50 backdrop-blur-xl "
        }`}
        onMouseEnter={() => {
          if (!expandResume) {
            setIsHoveringResume(true);
          }
        }}
        onMouseLeave={() => setIsHoveringResume(false)}
      >
        {/* CLOSE BUTTON WHEN RESUME IS EXPANDED */}

        {expandResume && (
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="rounded-full p-2 absolute z-100 top-[30px] right-[5%] bg-[rgba(255,255,255,.1)] close-btn cursor-pointer"
            onClick={() =>
              expandResumeClick(setExpandResumeAnimation, setExpandResume)
            }
          >
            <IoCloseOutline className="text-3xl" />
          </motion.div>
        )}
        <Image
          src={"/resume.png"}
          alt="resume"
          width={608}
          height={784}
          quality={100}
          priority={true}
          className={`rounded resume-img border-solid border-[rgba(255,255,255,.075)] ${
            expandResume ? "scale-100" : "scale-[.6]"
          }  transition-all duration-500`}
        />
        {/* EXPAND RESUME BUTTON ON HOVER */}
        <AnimatePresence>
          {isHoveringResume && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`backdrop-blur-sm absolute top-0 left-0 w-full h-full ${
                expandResume ? "scale-100" : "scale-[.6]"
              } flex items-center justify-center`}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="rounded-full p-4 bg-[rgba(0,0,0,.2)] cursor-pointer"
                onClick={() => {
                  expandResumeClick(setExpandResumeAnimation, setExpandResume);
                }}
              >
                <FaExpandArrowsAlt className="text-4xl " />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

/* SCREEN SWIPE ANIMATION WHEN THE USER WANTS TO EXPAND THE RESUME */
const ExpandResumeScreenSwipe = () => {
  return (
    <motion.div
      initial={{ left: `100%` }}
      animate={{ left: 0, transition: { duration: 0.8 } }}
      exit={{ left: `-100%`, transition: { duration: 0.8 } }}
      className="fixed top-0 z-100 w-full h-full bg-black"
    ></motion.div>
  );
};
