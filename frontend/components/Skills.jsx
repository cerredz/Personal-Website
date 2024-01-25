import Title from "@/Widgets/Title";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { skillsIconData, compSciSkillsData } from "@/data";
import Loader from "@/Widgets/Loader";
import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import "../styles/Skills.css";
import { BiSolidBrain } from "react-icons/bi";
import { FaLaptopCode } from "react-icons/fa";
import { AiFillCode } from "react-icons/ai";
import { IoPeople } from "react-icons/io5";
import { FaDatabase } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";

const Skills = () => {
  const dark = useSelector((state) => state.auth.dark);
  const [skills, setSkills] = useState(null);
  const [computerScienceSkills, setComputerScienceSkills] = useState(null);
  useEffect(() => {
    setSkills(skillsIconData);
    setComputerScienceSkills(compSciSkillsData);
  }, {});
  return (
    <section
      id="skills"
      className="min-h-screen relative flex flex-col items-center justify-center gap-6"
    >
      <div className="flex items-center justify-center ">
        <Title
          text={"Skills"}
          backgroundText={"<My Skills />"}
          dark={dark}
          color={`${dark ? "bg-sky-600" : "bg-sky-400"}`}
          translateX="-translate-x-60"
          translateY={"-translate-y-2"}
        />
      </div>

      <div className="w-9/12 mx-auto flex justify-center items-center flex-col lg:flex-row gap-6">
        {/* LEFT */}
        <div className="lg:basis-1/2 flex flex-col">
          <div className="flex flex-row gap-2 jusify-center items-center w-full flex-wrap">
            {skills !== null ? (
              skills.map((skill, index) => (
                <SkillIcon
                  index={index}
                  name={skill.name}
                  src={skill.src}
                  alt={skill.alt}
                  dark={dark}
                />
              ))
            ) : (
              <Loader />
            )}
          </div>
        </div>

        {/* RIGHT */}
        <div className="lg:basis-1/2 relative flex flex-wrap flex-col justify-between items-center h-full">
          {computerScienceSkills !== null ? (
            computerScienceSkills.map((skill, index) => (
              <Skill
                key={index}
                title={skill.title}
                icon={skill.icon}
                dark={dark}
                className={skill.className}
              />
            ))
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </section>
  );
};

// code for a singular skill icon, used to improve readability
const SkillIcon = ({ index, name, src, alt, dark }) => {
  const [isHoveringSkillIcon, setIsHoveringSkillIcon] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref);
  const delay = 0.5 + index / 10;
  return (
    <motion.div
      ref={ref}
      style={{
        y: inView ? 0 : "50px",
        opacity: inView ? 1 : 0,
        transition: `all .3s ease-in-out ${delay}s`,
      }}
      onMouseEnter={() => setIsHoveringSkillIcon(true)}
      onMouseLeave={() => setIsHoveringSkillIcon(false)}
      className={`flex justify-center items-center relative`}
    >
      <Image
        priority
        quality={100}
        className={` cursor-pointer p-2 relative z-10 rounded-full ${
          dark ? "dark-icon-bg" : "light-icon-bg"
        } `}
        src={src}
        alt={alt}
        width={40}
        height={40}
      ></Image>
      <AnimatePresence>
        {isHoveringSkillIcon && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.4, ease: "easeInOut" },
            }}
            exit={{
              opacity: 0,
              y: 10,
              transition: { duration: 0.2, ease: "easeInOut" },
            }}
            className={`absolute bottom-[-35px] left-1/2`}
          >
            <p
              className={`py-1 px-3 rounded-md backdrop-blur-lg whitespace-nowrap relative z-20 transform -translate-x-1/2 font-light tracking-wider font-xs ${
                dark
                  ? "text-neutral-200 bg-neutral-800"
                  : "text-neutral-800 bg-neutral-100"
              }`}
            >
              {name}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Skill = ({ title, description, icon, dark, className }) => {
  return (
    <div
      className={`relative other-skills-container overflow-hidden rounded-md flex flex-row cursor-pointer justify-between items-center py-2 px-4 rounded-md w-full  m-3 ${
        dark
          ? "dark-other-skills text-neutral-600 hover:text-neutral-400"
          : "light-other-skills text-neutral-700 hover:text-neutral-800"
      } ${className} transition duration-500`}
    >
      <div className=" flex flex-row items-center justify-center gap-3">
        <>{icon}</>
        <h1 className={`ml-3 text-xl font-bold tracking-wider `}>{title}</h1>
      </div>

      <FaAngleDown className={`text-xl mr-3 `} />
    </div>
  );
};
export default Skills;
