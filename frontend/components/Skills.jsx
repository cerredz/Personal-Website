import Title from "@/Widgets/Title";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { skillsIconData, compSciSkillsData } from "@/data";
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
import { ReadMore } from "./ReadMore";

const Skills = () => {
  const dark = useSelector((state) => state.auth.dark);
  const [skills, setSkills] = useState(null);

  const [computerScienceSkills, setComputerScienceSkills] = useState(null);
  const [currentSkillsIndex, setCurrentSkillIndex] = useState(null);
  const [otherSkillsDivHeight, setOtherSkillsDivHeight] = useState(0);
  const [readMore, setReadMore] = useState(null);
  const ref = useRef(null);
  const inView = useInView(ref);

  // load skills data
  useEffect(() => {
    setSkills(skillsIconData);
    setComputerScienceSkills(compSciSkillsData);
  }, []);

  useEffect(() => {
    console.log(readMore);
  }, [readMore]);

  useEffect(() => {
    const divElement = document.getElementById("other-skills-container"); // Replace with your actual div ID
    if (divElement) {
      setOtherSkillsDivHeight(divElement.offsetHeight);
    }
  }, [computerScienceSkills]);

  return (
    <section
      id="Skills"
      className="min-h-screen relative flex flex-col items-center justify-center py-20 "
    >
      <Image
        src={`${
          dark
            ? "/images/skills/skillsbgdark.png"
            : "/images/skills/skillsbglight.png"
        }`}
        alt=""
        layout="fill"
        quality={100}
        className="absolute top-0 left-0 w-full h-full "
      />
      <div className="flex items-center justify-center mb-16">
        <Title
          text={"Skills"}
          backgroundText={"<My Skills />"}
          dark={dark}
          color={`${dark ? "bg-sky-600" : "bg-sky-400"}`}
          translateX="-translate-x-[18.5rem]"
          translateY={"-translate-y-2"}
          beforeGradient={"skills-before-gradient"}
          afterGradient={"skills-after-gradient"}
        />
      </div>

      <div className="w-9/12 mx-auto flex flex-col justify-center items-center  gap-10 lg:gap-20 ">
        <div className="flex flex-col justify-center items-center gap-8 relative">
          {/* BACKGROUND IMAGE */}

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
            className={`flex flex-row gap-10 items-center justify-center relative flex-wrap `}
          >
            {computerScienceSkills !== null ? (
              computerScienceSkills.map((skill, index) => (
                <>
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
                    hoverBackground={skill.hover}
                    clickEvent={() => setReadMore(index)}
                  />
                  <AnimatePresence>
                    {readMore === index && (
                      <ReadMore
                        key={index}
                        title={skill.title}
                        description={skill.description}
                        dark={dark}
                        bgColor={skill.bgColor}
                        className={skill.className}
                        textColor={skill.textColor}
                        background={skill.background}
                        clickEvent={() => setReadMore(null)}
                        images={skill.images}
                      />
                    )}
                  </AnimatePresence>
                </>
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

          <div className="flex flex-row gap-12 justify-center items-center w-full flex-wrap lg:w-11/12 mx-auto ">
            {skills !== null ? (
              skills.map((skill, index) => (
                <>
                  <SkillIcon
                    key={index}
                    index={index}
                    name={skill.name}
                    src={skill.src}
                    alt={skill.alt}
                    dark={dark}
                  />
                </>
              ))
            ) : (
              <Loader />
            )}
          </div>
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
  const delay = 0.2 + index * 0.1;
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
      className={`flex justify-center items-center relative `}
    >
      <Image
        priority
        quality={100}
        className={` cursor-pointer p-3 relative z-10 rounded-full backdrop-blur-lg ${
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
            className={`absolute bottom-[-35px] left-1/2 z-75`}
          >
            <p
              className={`py-1 px-3 rounded-md backdrop-blur-lg whitespace-nowrap relative z-75 transform -translate-x-1/2 font-light tracking-wider font-xs ${
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
  dark,
  className,
  src,
  words,
  clickEvent,
  icon,
  hoverBackground,
  index,
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
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? `` : `translate(200px)`,
          scale: inView ? 1 : 0,
          transition: `opacity .6s ease-in-out ${
            index * 0.3 + 0.6
          }s, transform .6s ease-in-out ${
            index * 0.3 + 0.6
          }s, scale .6s ease-in-out ${index * 0.3 + 0.6}s`,
        }}
        whileHover={{ y: -5, transition: { duration: 0.4, delay: 0 } }}
        className={`origin-center flex flex-col gap-2 items-center justify-center p-4 rounded-2xl other-skills-container ${
          dark ? "dark-skills-bg" : "light-skills-bg"
        } `}
      >
        {/* IMAGE */}
        <div
          className={`mt-2 flex shadow-md justify-center items-center p-4 rounded-full ${className}-icon text-2xl ${
            dark ? "text-[#1e1e21]" : "text-neutral-200"
          } `}
        >
          {icon}
        </div>

        {/* TEXT */}
        <div className="flex flex-col justify-start items-center gap-2 h-[125px]">
          <h1
            className={`text-center font-bold tracking-wider text-xl ${
              dark ? "text-neutral-300" : "text-neutral-800"
            }`}
          >
            {title}
          </h1>
          <p
            className={`text-center tracking-wider font-medium text-neutral-500`}
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
