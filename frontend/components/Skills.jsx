import Title from "@/Widgets/Title";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { skillsIconData, compSciSkillsData } from "@/data";
import Loader from "@/Widgets/Loader";
import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";

const Skills = () => {
  const dark = useSelector((state) => state.auth.dark);
  const [skills, setSkills] = useState(null);
  const [computerScienceSkills, setComputerScienceSkills] = useState(null);
  useEffect(() => {
    setSkills(skillsIconData);
    setComputerScienceSkills(compSciSkillsData);
  }, {});
  return (
    <section id="skills" className="min-h-screen relative">
      <div className="flex items-center justify-center mt-56 mb-28">
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
        <div className="lg:basis-1/2 relative flex flex-wrap flex-col justify-between items-center gap-3 h-full">
          {computerScienceSkills !== null ? (
            computerScienceSkills.map((skill, index) => (
              <Skill title={skill.title} />
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
  return (
    <motion.div
      onMouseEnter={() => setIsHoveringSkillIcon(true)}
      onMouseLeave={() => setIsHoveringSkillIcon(false)}
      className="flex justify-center items-center relative"
    >
      <Image
        priority
        quality={100}
        className={`drop-shadow-lg cursor-pointer p-2 relative z-10 rounded-full ${
          dark ? "bg-neutral-700" : "bg-neutral-300"
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
              className={`py-1 px-3 rounded-md backdrop-blur-lg whitespace-nowrap relative z-20 transform -translate-x-1/2 font-normal tracking-wider font-xs ${
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

const Skill = ({ title, description }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};
export default Skills;
