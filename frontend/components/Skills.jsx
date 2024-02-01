import Title from "@/Widgets/Title";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { skillsIconData, compSciSkillsData, bestSkills } from "@/data";
import Loader from "@/Widgets/Loader";
import { inView, motion } from "framer-motion";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import "../styles/Skills.css";
import Label from "@/Widgets/Label";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { PiMoonStarsFill } from "react-icons/pi";
import { shortenedDescription } from "@/utils/Skills";
import { FaArrowRightLong } from "react-icons/fa6";

const Skills = () => {
  const dark = useSelector((state) => state.auth.dark);
  const [skills, setSkills] = useState(null);
  const [topSkills, setTopSkills] = useState(null);
  const [computerScienceSkills, setComputerScienceSkills] = useState(null);
  const [currentSkillsIndex, setCurrentSkillIndex] = useState(null);
  const [otherSkillsDivHeight, setOtherSkillsDivHeight] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref);

  // load skills data
  useEffect(() => {
    setSkills(skillsIconData);
    setComputerScienceSkills(compSciSkillsData);
    setTopSkills(bestSkills);
  }, []);

  useEffect(() => {
    console.log(otherSkillsDivHeight);
  }, [otherSkillsDivHeight]);

  useEffect(() => {
    const divElement = document.getElementById("other-skills-container"); // Replace with your actual div ID
    if (divElement) {
      setOtherSkillsDivHeight(divElement.offsetHeight);
    }
  }, [computerScienceSkills]);

  return (
    <section
      id="skills"
      className="min-h-screen relative flex flex-col items-center justify-center  pt-10 md:pt-0"
    >
      <div className="flex items-center justify-center mb-16">
        <Title
          text={"Skills"}
          backgroundText={"<My Skills />"}
          dark={dark}
          color={`${dark ? "bg-sky-600" : "bg-sky-400"}`}
          translateX="-translate-x-60"
          translateY={"-translate-y-2"}
        />
      </div>

      <div className="w-9/12 mx-auto flex flex-col justify-center items-center  gap-10 lg:gap-20 ">
        <div className="flex flex-col justify-center items-center gap-4">
          <Label
            text={"Concepts / Practices"}
            icon={
              <BsFillRocketTakeoffFill
                className={`${dark ? "text-blue-700" : "text-sky-500"}`}
              />
            }
            borderColor={`${dark ? "border-blue-700" : "border-sky-500"}`}
            textColor={`${dark ? "text-gray-600" : "text-gray-500"}`}
            bgClassName={`${dark ? "concepts-dark" : "concepts-light"}`}
          />

          <div
            className={` flex flex-row gap-10 items-center justify-center relative flex-wrap `}
          >
            {computerScienceSkills !== null ? (
              computerScienceSkills.map((skill, index) => (
                <Skill
                  key={index}
                  title={skill.title}
                  icon={skill.icon}
                  dark={dark}
                  className={skill.className}
                  index={index}
                  description={skill.description}
                  src={skill.src}
                  words={skill.words}
                />
              ))
            ) : (
              <Loader />
            )}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-12">
          <Label
            text={"Languages / Frameworks"}
            icon={
              <PiMoonStarsFill
                className={`${dark ? "text-fuchsia-700" : "text-fuchsia-600"}`}
              />
            }
            borderColor={`${
              dark ? "border-fuchsia-700" : "border-fuchsia-600"
            }`}
            textColor={`text-fuchsia-400`}
            bgClassName={`${dark ? "languages-dark" : "languages-light"}`}
          />

          <div className="flex flex-row gap-10 justify-center items-center w-full flex-wrap lg:w-10/12 mx-auto ">
            {skills !== null ? (
              skills.map((skill, index) => (
                <SkillIcon
                  key={index}
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

        {/* LEFT */}
        <div className="lg:basis-1/2 flex flex-col max-w-xl">
          {/* TOP SKILLS CONTAINER */}
          {/* 
          <motion.div
            ref={ref}
            style={{
              y: inView ? "0" : "50px",
              opacity: inView ? 1 : 0,
              transition: "all .4s ease-in-out .4s",
            }}
            className={`rounded-xl p-10 mb-10 relative ${
              dark ? "top-skills-dark-bg" : "top-skills-light-bg"
            }`}
          >
            <motion.h1
              ref={ref}
              style={{
                y: inView ? "0" : "50px",
                opacity: inView ? 1 : 0,
                transition: "all .4s ease-in-out .7s",
              }}
              className={`relative top-skills-title font-bold text-3xl tracking-widest mb-8 text-center w-min mx-auto whitespace-nowrap ${
                dark ? "text-neutral-300" : "text-neutral-800"
              }`}
            >
              My Top Skills
            </motion.h1>
            */}
          {/* LIST OF TOP SKILLS */}
          {/*
            {topSkills !== null ? (
              <div
                className={` flex flex-col items-center justify-center gap-5 `}
              >
                {topSkills.map((skill, index) => (
                  <>
                    <motion.div
                      ref={ref}
                      style={{
                        y: inView ? "0" : `100px`,
                        opacity: inView ? 1 : 0,
                        transition: `all .6s ease-in-out ${0.8 * index + 1.1}s`,
                      }}
                      className="flex flex-row items-center justify-center w-full  gap-6"
                    >
                      <p
                        className={`italic basis-1/2 lg:basis-1/3  text-center text-lg xl:text-xl font-bold tracking-wider  ${
                          dark ? "text-neutral-600" : "text-neutral-700"
                        }`}
                      >
                        {skill.skill}
                      </p>
                      <div
                        className={`relative flex basis-1/2 lg:basis-2/3  h-7 rounded-md top-skill ${
                          dark
                            ? "bg-[rgba(255,255,255,.025)]"
                            : "bg-[rgba(0,0,0,.05)]"
                        }`}
                      >
                        <motion.span
                          ref={ref}
                          style={{
                            width: inView
                              ? `calc(${skill.rating}% - 5px)`
                              : `0`,
                            transition: `width 2.2s ease-in-out ${skill.delay}s`,
                          }}
                          className={`absolute top-[5px] bottom-[5px] left-[5px] rounded-md bg-gradient-to-r from-[#2563eb] via-[#6d28d9] to-[#c026d3] top-skill-gradient`}
                        ></motion.span>
                      </div>
                    </motion.div>
                  </>
                ))}
              </div>
            ) : (
              <Loader />
            )}
          </motion.div>
          */}

          {/* 
          <div className="flex flex-row gap-10 justify-center items-center w-full flex-wrap lg:justify-start">
            {skills !== null ? (
              skills.map((skill, index) => (
                <SkillIcon
                  key={index}
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
           */}
        </div>

        {/* RIGHT */}
        {/* 
        <div
          id="other-skills-container "
          className={`lg:basis-1/2 flex flex-col relative grow`}
        >
          {computerScienceSkills !== null ? (
            computerScienceSkills.map((skill, index) => (
              <AnimatePresence key={index}>
                {(currentSkillsIndex === null ||
                  currentSkillsIndex == index) && (
                  <Skill
                    title={skill.title}
                    icon={skill.icon}
                    dark={dark}
                    className={skill.className}
                    index={index}
                    description={skill.description}
                    currentIndex={currentSkillsIndex}
                    changeCurrentIndex={(index) => setCurrentSkillIndex(index)}
                  />
                )}
              </AnimatePresence>
            ))
          ) : (
            <Loader />
          )}
        </div>
        */}
      </div>
    </section>
  );
};

// code for a singular skill icon, used to improve readability
const SkillIcon = ({ index, name, src, alt, dark }) => {
  const [isHoveringSkillIcon, setIsHoveringSkillIcon] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref);
  const delay = 1.5 + index / 10;
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
        className={` cursor-pointer p-3 relative z-10 rounded-full ${
          dark ? "dark-icon-bg" : "light-icon-bg"
        } `}
        src={src}
        alt={alt}
        width={50}
        height={50}
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

/* SINGLUAR OTHER-SKILLS CONTAINER, SEPERATED FOR CODE READABILTIY */
const Skill = ({
  title,
  description,
  icon,
  dark,
  className,
  index,
  currentIndex,
  changeCurrentIndex,
  src,
  words,
  clickEvent,
}) => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const [isHoveringReadMore, setIsHoveringReadMore] = useState(false);

  // shorten description of skill to 20 words
  const newDesc = shortenedDescription(description, words);
  return (
    <>
      <motion.div
        ref={ref}
        onClick={() => changeCurrentIndex(currentIndex === null ? index : null)}
        className={`flex flex-col gap-2 items-center justify-center p-4 rounded-2xl other-skills-container ${
          dark ? "dark-skills-bg" : "light-skills-bg"
        } `}
      >
        {/* IMAGE */}
        <div className="h-[60px] flex justify-center items-center ">
          <Image
            priority
            quality={100}
            src={src}
            alt=""
            height={50}
            width={50}
          />
        </div>

        {/* TEXT */}
        <div className="flex flex-col justify-start items-center gap-2 h-[125px]">
          <h1
            className={`font-bold tracking-wider text-xl ${
              dark ? "text-neutral-300" : "text-neutral-800"
            }`}
          >
            {title}
          </h1>
          <p
            className={`text-center ${
              dark ? "text-neutral-700" : "text-neutral-400"
            }`}
          >
            {newDesc}
          </p>
        </div>

        {/* READ MORE */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{
            scale: 0.9,
            transition: { duration: 0.2, ease: "easeInOut" },
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          onMouseEnter={() => setIsHoveringReadMore(true)}
          onMouseLeave={() => setIsHoveringReadMore(false)}
          className={`relative z-10 read-more-text cursor-pointer my-3  flex flex-row justify-center gap-4 items-center ${
            dark ? "text-neutral-300" : "text-neutral-800"
          } ${className}`}
          onClick={clickEvent}
        >
          <p className="z-10 text-md tracking-widest font-medium">Read More</p>
          <FaArrowRightLong
            className="z-10 transform translate-y-[1px]"
            style={{
              transform: isHoveringReadMore
                ? "translateY(1px) translateX(5px)"
                : "",
              transition: "all .4s ease-in-out",
            }}
          />
        </motion.div>
      </motion.div>
    </>
  );
};
export default Skills;
