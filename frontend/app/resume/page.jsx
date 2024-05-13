"use client";
import "../../styles/globals.css";
import { useSelector } from "react-redux";
import { LuDownload } from "react-icons/lu";
import { motion } from "framer-motion";
import Image from "next/image";
import Label from "@/Widgets/Label";
import { HiOutlineNewspaper } from "react-icons/hi2";
import "./styles.css";

export default function Page() {
  const dark = useSelector((state) => state.auth.dark);
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
      {/* TEXT CONTAINER */}
      <div className="flex flex-col items-center justify-center xl:items-start xl:justify-start">
        <div className="mx-auto xl:mx-0">
          <Label
            text={"Resume / CV"}
            icon={<HiOutlineNewspaper className="text-sky-500" />}
            borderColor={"border-sky-500"}
            textColor={"text-sky-500"}
            bgClassName={"resume"}
          />
        </div>
        <motion.h1 className="z-10 text-xl sm:text-4xl lg:text-8xl tracking-widest font-bold text-neutral-300 text-center xl:text-left">
          My Resume
        </motion.h1>
        <motion.p className="z-10 text-md text-neutral-600 tracking-wider font-medium mt-1 px-6 text-center xl:text-left xl:px-0">
          An insight to the history of my computer science journey
        </motion.p>
        {/* RESUME FEATURES TABS  */}
        <div className="z-10 flex flex-row items-center justify-start gap-1 max-w-md flex-wrap mt-6">
          {resumeFeatures.map((feature, index) => (
            <motion.button
              key={index}
              className="px-3 py-1 text-neutral-400 tracking-wider font-medium rounded-3xl text-sm border border-solid border-neutral-400"
            >
              {feature}
            </motion.button>
          ))}
        </div>
        {/* DOWNLOAD RESUME BUTTON */}
        <motion.div className="z-10 flex flex-row items-center justify-center gap-2 bg-gradient-to-br from-sky-400 via-blue-500 to-sky-400 py-2 px-4 rounded-md cursor-pointer mt-6 mx-auto xl:mx-0">
          <LuDownload className="text-neutral-300 text-lg" />
          <p className="text-lg tracking-widest font-bold text-neutral-300">
            Download Resume
          </p>
        </motion.div>
      </div>

      {/* RESUME CONTAINER */}
      <div className="z-10 ">
        <Image
          src={"/resume.png"}
          alt="resume"
          width={608}
          height={784}
          quality={100}
          priority={true}
          className="z-10 rounded resume-img border-solid border-[rgba(255,255,255,.075)] scale-[.6]"
        />
      </div>
    </section>
  );
}
