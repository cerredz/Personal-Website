"use client";
import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Title from "@/Widgets/Title";
import { AnimatePresence } from "framer-motion";
import "../styles/About.css";
import Image from "next/image";
import { PhoneIcon } from "@/Widgets/PhoneIcon";
import Link from "next/link";
import { FaRegLightbulb } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { motion } from "framer-motion";
import { languages } from "@/data";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useInView } from "framer-motion";

const About = () => {
  const dark = useSelector((state) => state.auth.dark);
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const [prevTabIndex, setPrevTabIndex] = useState(0);

  const tabs = ["Start & Overview", "First Languages", "Projects", "Today"];

  const [titleColor, setTitleColor] = useState(
    dark ? "text-neutral-300" : "text-neutral-800"
  );
  const [subtitleColor, setSubtitleColor] = useState(
    dark ? "text-neutral-500" : "text-neutral-400"
  );
  const titleStyle = "z-10 tracking-wider font-bold";
  const subtitleStyle = "z-10 font-normal tracking-wide";

  useEffect(() => {
    if (dark) {
      setTitleColor("text-neutral-300");
      setSubtitleColor("text-neutral-500");
    } else {
      setTitleColor("text-neutral-800");
      setSubtitleColor("text-neutral-400");
    }
  }, [dark]);

  const handleTabClick = (index) => {
    setPrevTabIndex(currentTabIndex);
    setCurrentTabIndex(index);
  };

  return (
    <section id="about" className="my-20 relative gap-10 min-h-screen">
      <Title
        text={"About"}
        backgroundText={"<About Me />"}
        dark={dark}
        color={`${dark ? "bg-blue-600" : "bg-blue-400"}`}
        translateX="-translate-x-72"
        translateY={"-translate-y-2"}
        beforeGradient={`about-me-before-title-gradient`}
        afterGradient={`about-me-after-title-gradient`}
      />

      {/* TABS */}
      <ul
        className={`w-fit flex flex-row items-center justify-center gap-2 p-1 rounded-md mx-auto mt-10 ${
          dark ? "bg-[rgba(255,255,255,.025)]" : "bg-[rgba(0,0,0,.025)]"
        }`}
      >
        {tabs.map((tab, index) => (
          <li
            key={index}
            onClick={() => handleTabClick(index)}
            className={`cursor-pointer rounded-md px-3 py-1 text-medium tracking-widest font-medium hover:transition transition duration-500 hover:duration-500  ${
              dark
                ? `${
                    currentTabIndex == index
                      ? "text-neutral-300 bg-[rgba(255,255,255,.2)]"
                      : "text-neutral-600 hover:bg-[rgba(255,255,255,.1)]"
                  }`
                : `${
                    currentTabIndex == index
                      ? "text-neutral-800 bg-[rgba(0,0,0,.2)]"
                      : "text-neutral-500 hover:bg-[rgba(0,0,0,.1)]"
                  }`
            }`}
          >
            {tab}
          </li>
        ))}
      </ul>
      {/* ABOUT ME CONTENT CONTAINER */}
      <div className="w-10/12 max-w-7xl p-8 relative mt-12 mx-auto">
        <AnimatePresence>
          {currentTabIndex === 0 ? (
            <Start
              key={0}
              dark={dark}
              titleColor={titleColor}
              titleStyle={titleStyle}
              subtitleColor={subtitleColor}
              subtitleStyle={subtitleStyle}
            />
          ) : currentTabIndex === 1 ? (
            <FirstLanguages
              key={1}
              dark={dark}
              titleColor={titleColor}
              titleStyle={titleStyle}
              subtitleColor={subtitleColor}
              subtitleStyle={subtitleStyle}
            />
          ) : currentTabIndex == 2 ? (
            <Projects
              dark={dark}
              titleColor={titleColor}
              titleStyle={titleStyle}
              subtitleColor={subtitleColor}
              subtitleStyle={subtitleStyle}
            />
          ) : (
            currentTabIndex == 3 && (
              <Today
                dark={dark}
                titleColor={titleColor}
                titleStyle={titleStyle}
                subtitleColor={subtitleColor}
                subtitleStyle={subtitleStyle}
              />
            )
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

const Start = ({
  dark,
  titleStyle,
  titleColor,
  subtitleStyle,
  subtitleColor,
}) => {
  const phoneIconData = [
    {
      src: "/images/gmailIcon.png",
      alt: "gmail icon",
      clickEvent: false,
      text: "retto12345678@gmail.com",
      className: "gmail",
    },
    {
      src: "/images/locationIcon.png",
      alt: "waypoint icon",
      clickEvent: false,
      text: "New Jersey, United States",
      className: "location",
    },
    {
      src: "/images/phoneIcon.png",
      alt: "phone icon",
      clickEvent: false,
      text: "(732) - 673 - 1556",
      className: "phone",
    },
  ];
  const [cardBackground, setCardBackground] = useState(
    dark ? "about-generic-card-dark" : "about-generic-card-light"
  );

  useEffect(() => {
    setCardBackground(
      dark ? "about-generic-card-dark" : "about-generic-card-light"
    );
  }, [dark]);

  const beginningTitle = useRef(null);
  const beginningSubtitle = useRef(null);
  const generalTitle = useRef(null);
  const generalSubtitle = useRef(null);
  const mainPicture = useRef(null);
  const profilePicture = useRef(null);
  const phoneIcons = useRef(null);
  const githubLink = useRef(null);
  const goalTitle = useRef(null);
  const goalSubTitle = useRef(null);
  const rutgersText = useRef(null);
  const rutgersImg = useRef(null);
  const freedomIcon = useRef(null);
  const freedomText = useRef(null);

  const [
    titleInView,
    subtitleInView,
    generalTitleInView,
    generalSubtitleInView,
    mainPictureInView,
    profilePictureInView,
    phoneIconsInView,
    githubLinkInView,
    goalTitleInView,
    goalSubTitleInView,
    rutgersTextInView,
    rutgersImgInView,
    freedomIconInView,
    freedomTextInView,
  ] = [
    useInView(beginningTitle),
    useInView(beginningSubtitle),
    useInView(generalTitle),
    useInView(generalSubtitle),
    useInView(mainPicture),
    useInView(profilePicture),
    useInView(phoneIcons),
    useInView(githubLink),
    useInView(goalTitle),
    useInView(goalSubTitle),
    useInView(rutgersText),
    useInView(rutgersImg),
    useInView(freedomIcon),
    useInView(freedomText),
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, position: "absolute" }}
      className="w-full flex flex-col items-center justify-center gap-6"
    >
      {/* FIRST ROW */}
      <div className="w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-10">
        {/* MAIN CARD */}
        <div className="basis-2/3 start-main h-[60vh] lg:h-[40vh] rounded-xl px-10 pt-6 flex flex-col justify-between relative">
          <div className="w-full z-10">
            <motion.h1
              ref={beginningTitle}
              style={{
                opacity: titleInView ? 1 : 0,
                y: titleInView ? "0" : "10px",
                transition: `all .6s ease-in-out `,
              }}
              className={`w-3/4 lg:w-full text-start start-title text-2xl ${titleColor} ${titleStyle} `}
            >
              The Beginning of my Journey
            </motion.h1>
            <motion.p
              ref={beginningSubtitle}
              style={{
                opacity: subtitleInView ? 1 : 0,
                y: subtitleInView ? "0" : "10px",
                transition: `all .7s ease-in-out .1s`,
              }}
              className={`w-full lg:w-9/12 text-start  text-sm ${subtitleStyle}  text-neutral-400`}
            >
              I am Michael Cerreto, and my journey into coding began at the age
              of 17 during my senior year of High School. Let me take you
              through my journey.
            </motion.p>
          </div>
          <Image
            ref={mainPicture}
            src={"/images/aboutme/codesnippet1.png"}
            alt="start main pic"
            width={700}
            height={450}
            quality={100}
            priority={true}
            className="mx-auto z-10 main-pic"
            style={{
              opacity: mainPictureInView ? 1 : 0,
              transition: `.6s ease-in-out .7s`,
            }}
          />
        </div>
        {/* GENERAL INFO CARD */}
        <div
          className={`basis-1/3 h-auto w-[300px] lg:w-auto lg:h-[40vh] relative p-8 rounded-xl flex flex-col overflow-hidden items-start justify-between ${
            dark
              ? "slanted-bg-dark dark-border"
              : "slanted-bg-light light-border"
          }`}
        >
          <div className="flex flex-col items-start justify-center ">
            <div
              className={`p-2 rounded-full flex items-center justify-center relative z-10 ${
                dark ? "headshot-dark " : "headshot-light "
              }`}
            >
              <Image
                ref={profilePicture}
                src={"/images/aboutme/headshot.png"}
                alt="headshot"
                width={75}
                height={75}
                className="z-10 "
                style={{
                  opacity: profilePictureInView ? 1 : 0,
                  transition: ".6s ease-in-out",
                }}
              />
            </div>
            <motion.h1
              ref={generalTitle}
              style={{
                x: generalTitleInView ? 0 : 25,
                transition: ".6s ease-in-out .3s",
              }}
              className={`w-full text-start text-2xl mt-2  ${titleColor} ${titleStyle}`}
            >
              General Info
            </motion.h1>
            <motion.p
              ref={generalSubtitle}
              style={{
                x: generalSubtitleInView ? 0 : 25,
                transition: ".7s ease-in-out .4s",
              }}
              className={` w-9/12 text-start  text-sm ${subtitleStyle} ${subtitleColor} `}
            >
              Take a look at some more generic information about myself
            </motion.p>
          </div>
          <motion.div
            ref={phoneIcons}
            style={{
              opacity: phoneIconsInView ? 1 : 0,
              y: phoneIconsInView ? "0" : "30px",
              transition: `.6s ease-in-out .5s`,
            }}
            className="relative z-10 grid grid-cols-3 gap-y-2 gap-x-6 mt-2 w-full "
          >
            {phoneIconData.map((icon, index) => (
              <PhoneIcon
                key={index}
                className={icon.className}
                src={icon.src}
                alt={icon.alt}
                text={icon.text}
                dark={dark}
                clickEvent={icon.clickEvent}
                redirect={icon.clickEvent ? icon.redirect : ""}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* SECOND ROW */}
      <div className="w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-8">
        {/* SECOND ROW LEFT CARD */}
        <div
          className={`w-[300px] lg:w-auto lg:basis-1/3 flex relative goal-bg-img flex-col items-center justify-start pt-8 rounded-xl overflow-hidden h-[300px] goal `}
        >
          <Image
            src={"/images/aboutme/goalbg.jpg"}
            alt="neural network background"
            layout="fill"
            objectFit="cover"
            className="rounded-xl  opacity-10 "
          />
          <div className="w-full flex flex-col items-start justify-start px-8">
            <motion.h1
              ref={goalTitle}
              style={{
                y: goalTitleInView ? "0" : "30px",
                opacity: goalTitleInView ? 1 : 0,
                transition: ".6s ease-in-out .5s",
              }}
              className={`w-full text-start text-2xl ${titleColor} ${titleStyle} `}
            >
              Goal
            </motion.h1>
            <motion.p
              ref={goalSubTitle}
              style={{
                y: goalSubTitleInView ? "0" : "30px",
                opacity: goalSubTitleInView ? 1 : 0,
                transition: ".6s ease-in-out .65s",
              }}
              className={`w-[11/12] text-start text-xs ${subtitleStyle} ${subtitleColor}  `}
            >
              Strive to become the most skillful, talented, and masterful
              Software Engineer that I am capable of becoming.
            </motion.p>
          </div>
          <Link
            ref={githubLink}
            style={{
              opacity: githubLinkInView ? 1 : 0,
              transition: ".6s ease-in-out .8s",
            }}
            className={`w-full text-center py-2 z-10 cursor-pointer tracking-wider mt-12 ${
              dark
                ? "bg-[rgba(255,255,255,.05)] text-neutral-300 "
                : "bg-[rgba(0,0,0,.05)] text-neutral-800"
            }`}
            href={"https://github.com/cerredz"}
            target="_blank"
          >
            https://github.com/cerredz
          </Link>
        </div>
        <div
          className={`w-[300px] lg:w-auto lg:basis-1/3 h-[300px] flex flex-col relative items-center justify-center p-8 rounded-xl overflow-hidden ${
            dark
              ? "slanted-bg-dark dark-border"
              : "slanted-bg-light light-border"
          } `}
        >
          <motion.div
            ref={rutgersText}
            style={{
              opacity: rutgersTextInView ? 1 : 0,
              scale: rutgersTextInView ? 1 : 0,
              transition: ".6s ease-in-out .6s",
            }}
            className="flex flex-col items-start justify-start w-full"
          >
            <p
              className={` w-9/12 text-start  text-sm  ${subtitleStyle} ${subtitleColor} `}
            >
              Education:
            </p>
            <h1
              className={`w-full text-start  text-2xl  ${titleColor} ${titleStyle}`}
            >
              Rutgers
            </h1>
          </motion.div>
          <Image
            ref={rutgersImg}
            style={{
              opacity: rutgersImgInView ? 1 : 0,
              scale: rutgersImgInView ? 1 : 0,
              transition: ".6s ease-in-out .7s",
            }}
            src={"/images/aboutme/rutgers.png"}
            alt="rutgers logo"
            width={200}
            height={200}
          />
        </div>
        <div
          className={`w-[300px] lg:w-auto lg:basis-1/3 flex flex-col items-start justify-between p-8 rounded-xl  h-[300px] relative freedom overflow-hidden ${
            dark ? "freedom-dark" : "freedom-light"
          }`}
        >
          <Image
            ref={freedomIcon}
            style={{
              opacity: freedomIconInView ? 1 : 0,
              scale: freedomIconInView ? 1 : 0,
              transition: ".6s ease-in-out .7s",
            }}
            src={"/images/aboutme/freedomIcon.png"}
            alt="freedom logo"
            width={100}
            height={100}
            className="mx-auto"
          />
          <motion.div
            ref={freedomText}
            style={{
              opacity: freedomTextInView ? 1 : 0,
              y: freedomTextInView ? 0 : "10px",
              transition: ".6s ease-in-out .8s",
            }}
            className="w-full flex flex-col justify-start items-start"
          >
            <h1
              className={` w-full text-start text-xl  ${titleColor} ${titleStyle}  `}
            >
              Freedom & Intuition
            </h1>
            <p
              className={` w-9/12 text-start text-xs  ${subtitleStyle} ${subtitleColor} `}
            >
              Since writing my first program, I've been captivated by the
              freedom and intuition inherent in programming.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const FirstLanguages = ({
  dark,
  titleStyle,
  titleColor,
  subtitleColor,
  subtitleStyle,
}) => {
  const iconURLS = [
    "/images/skills/java.png",
    "/images/skills/c++.png",
    "/images/skills/python.png",
  ];

  const leetcodeProblems = [
    { type: "Easy", amount: "140" },
    { type: "Medium", amount: "216" },
    { type: "Hard", amount: "14" },
  ];

  const [leetcodeProblemType, setLeetcodeProblemType] = useState("Easy");
  const [leetcodeProblemAmount, setLeetcodeProblemAmount] = useState("140");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setLeetcodeProblemType(leetcodeProblems[index].type);
    setLeetcodeProblemAmount(leetcodeProblems[index].amount);
  }, [index]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, position: "absolute" }}
      className="w-full flex flex-col xl:flex-row items-center justify-between gap-4"
    >
      {/* LEFT CONTAINER DIV */}
      <div
        className={`basis-1/3 h-[70vh] p-8 rounded-xl flex flex-col items-start justify-between relative intro intro-card ${
          dark ? "intro-dark" : "intro-light"
        } bg-gradient-to-br from-cyan-500 via-sky-600 to-blue-700 overflow-hidden`}
      >
        <div className="flex flex-col items-start justify-start">
          <div
            className={`rounded-3xl py-3 px-8 intro relative bg-gradient-to-br from-cyan-500 via-sky-600 to-blue-700 ${
              dark ? "intro-dark" : "intro-light"
            } flex items-center justify-center`}
          >
            <p
              style={{
                backgroundImage:
                  "linear-gradient(-45deg, #06b6d4, #0284c7, #1d4ed8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="absolute text-xs font-bold tracking-widest z-10"
            >
              2021+
            </p>{" "}
          </div>
          <h1 className={`${titleColor} ${titleStyle} mt-2 text-2xl`}>
            Intro To Comp Sci
          </h1>
          <p className={`${subtitleStyle} ${subtitleColor}`}>
            The first languages I ended up learning were Java, then C++, and
            then Python.
          </p>
        </div>

        <div className="w-full h-full relative flex items-end justify-center">
          <Image
            src={"/images/aboutme/firstLanguages.png"}
            alt="first langugaes logo"
            width={400}
            height={400}
            quality={100}
            priority={true}
            className="z-10"
          />
        </div>
      </div>
      {/* MIDDLE CONTAINER DIV */}
      <div className="basis-1/3 h-[70vh] flex flex-col items-center justify-between ">
        {/* FIRST LANGUAGES DIV */}
        <div className="basis-1/4 mb-4 w-full flex bg-[rgba(255,255,255,.01)] flex-col items-start justify-between p-6 rounded-xl first-languages relative overflow-hidden ">
          <h1 className={`${titleStyle} ${titleColor} text-2xl`}>
            First Languages
          </h1>
          <div className="w-1/2 flex flex-row items-center justify-between">
            {iconURLS.map((icon, index) => (
              <Image key={index} src={icon} width={40} height={40} />
            ))}
          </div>
        </div>
        {/* LINEAR GRADIENT BACKGROUND DIV */}
        <div className="basis-1/4 mb-4 w-full flex flex-row gap-4 items-center justify-between px-6 py-3 rounded-xl bg-gradient-to-br from-cyan-500 via-sky-600 to-blue-700">
          <div className="p-3 rounded-full bg-neutral-100">
            <FaRegLightbulb className="text-4xl text-sky-500" />
          </div>
          <p
            className={`${subtitleStyle} text-neutral-300 text-sm tracking-widest font-bold `}
          >
            It here at this stage where I started to learn about data stuctures
            and complex algorithmns
          </p>
        </div>
        {/* FULL STACK CONTAINER */}
        <div
          className={`basis-1/2 w-full rounded-xl p-8 ${
            dark ? "dark-border" : "light-border"
          } fullstack relative overflow-hidden`}
        >
          {/* HEADING */}
          <div className="w-full flex flex-col items-start justify-start">
            <h1 className={`${titleStyle} ${titleColor} text-2xl`}>
              Fullstack
            </h1>
            <p className={`${subtitleColor} ${subtitleStyle} text-xs`}>
              My passion for web development grew, leading me to complete an
              online course covering the following:
            </p>

            <div className="grid grid-cols-2 gap-3 mx-auto mt-4">
              {languages.map((languages, index) => (
                <div
                  key={index}
                  className={`py-1 px-3 rounded-3xl flex flex-row items-center justify-start gap-2 backdrop-blur-md fullstack-btn`}
                >
                  <div className="text-sky-500">{languages.img}</div>
                  <p className="text-neutral-300 text-sm tracking-wider font-normal">
                    {languages.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* LANGUAGES */}
        <div></div>
      </div>

      {/* LEFT CONTAINER DIV */}
      <div className="basis-1/3 h-[70vh] flex flex-col items-center justify-between gap-4">
        <div
          className={`basis-7/12 w-full  flex flex-col items-center justify-between p-8 rounded-xl relative overflow-hidden ${
            dark
              ? "slanted-bg-dark dark-border"
              : "slanted-bg-light light-border"
          }`}
        >
          <div className="w-full flex flex-col items-start justify-start">
            <h1 className={`${titleStyle} ${titleColor} text-2xl`}>
              Web Development
            </h1>
            <p className={`${subtitleStyle} ${subtitleColor} text-sm `}>
              I then dove into web development, learning basis HTML, CSS, and
              Javascript
            </p>
          </div>
          <Image
            src={"/images/aboutme/webdev.png"}
            alt="web dev background image"
            width={250}
            height={250}
            quality={100}
            priority={true}
          />
        </div>
        {/* LEETCODE PROBLEMS DIV */}
        <div
          className={`basis-5/12 w-full flex flex-col items-center justify-between rounded-xl p-6 bg-[rgba(0,0,0,.3)]  ${
            dark ? "dark-border" : "light-border"
          }`}
        >
          <h1
            className={`${
              dark ? "text-neutral-600" : "text-neutral-800"
            } font-bold tracking-widest text-lg w-full text-left `}
          >
            Leetcode Problems
          </h1>
          <div className="flex flex-col justify-center items-center gap-4">
            {/* LEETCODE CIRCLE */}
            <div className="flex flex-row justify-center items-center gap-6">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="cursor-pointer p-3 text-neutral-600 rounded-full leet-arrow hover:text-neutral-300 hover:transition hover:duration-500 transition duration-500"
              >
                <BiSolidLeftArrow
                  onClick={() =>
                    setIndex((prev) => (prev > 0 ? prev - 1 : prev))
                  }
                />
              </motion.div>
              <div
                className={`rounded-full p-16 relative leetcode-big-circle leetcode-${leetcodeProblemType} bg-[#ffffff] flex flex-col items-center justify-center z-10`}
              >
                <p
                  className={`absolute ${subtitleColor} italic text-xs font-medium -translate-y-6`}
                >
                  {leetcodeProblemType}
                </p>
                <h1
                  className={`absolute text-3xl  ${titleStyle} ${titleColor}`}
                >
                  {leetcodeProblemAmount}
                </h1>
              </div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="cursor-pointer p-3 text-neutral-600 rounded-full leet-arrow hover:text-neutral-300 hover:transition hover:duration-500 transition duration-500"
              >
                <BiSolidRightArrow
                  onClick={() =>
                    setIndex((prev) => (prev < 2 ? prev + 1 : prev))
                  }
                />
              </motion.div>
            </div>
            {/* LEETCODE SMALL CIRCLES */}
            <div className="flex flex-row w-1/2 items-center justify-between">
              <span
                className={`h-2 w-2 rounded-full ${
                  index == 0 ? "active-circle-easy" : "leet-circle"
                }`}
              ></span>
              <span
                className={`h-2 w-2 rounded-full ${
                  index == 1 ? "active-circle-medium" : "leet-circle"
                }`}
              ></span>
              <span
                className={`h-2 w-2 rounded-full  ${
                  index == 2 ? "active-circle-hard" : "leet-circle"
                }`}
              ></span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = ({
  dark,
  titleColor,
  titleStyle,
  subtitleColor,
  subtitleStyle,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, position: "absolute" }}
      className="flex flex-col xl:flex-row items-center justify-between w-full gap-4"
    >
      {/* LEFT COLUMN CONTAINER */}
      <div className="flex flex-col items-between justify-center h-[70vh] gap-4 w-full basis-2/3">
        <div className="basis-2/5 flex flex-row items-center justify-between gap-4 w-full">
          {/* PROJECTS CARD */}
          <div
            className={`basis-1/2 h-full rounded-xl p-8 flex flex-col items-start justify-start gap-6 ${
              dark ? "dark-border" : "light-border"
            } projects relative overflow-hidden`}
          >
            <div
              className={`rounded-3xl py-3 px-12 intro relative bg-gradient-to-br from-purple-600 via-purple-800 to-purple-600 w-fit ${
                dark ? "intro-dark" : "intro-light"
              } flex items-center justify-center`}
            >
              <p
                style={{
                  backgroundImage:
                    "linear-gradient(-45deg, #9333ea, #6b21a8, #9333ea)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                className="absolute text-xs font-bold tracking-widest z-10 w-fit"
              >
                Projects
              </p>
            </div>
            <h1 className="z-10 text-xl text-neutral-600 font-normal tracking-wider">
              I then started to create full-stack projects, translating my
              knowledge into{" "}
              <span
                className={`${dark ? "text-neutral-300" : "text-neutral-800"}`}
              >
                {" "}
                real-world applications{" "}
              </span>
            </h1>
          </div>
          {/* HACKATHONS CONTAINER */}
          <div
            className={`basis-1/2 bg-gradient-to-br px-6 rounded-xl from-purple-600 via-fuchsia-700 to-purple-600 h-full intro relative ${
              dark ? "intro-dark" : "intro-light"
            } flex flex-col items-center justify-center gap-6 overflow-hidden`}
          >
            <span className="hackathon-glow-1"></span>

            <div className="z-10 w-full flex flex-col items-center justify-center">
              <h1
                className={`w-full text-start ${titleColor} ${titleStyle} text-2xl `}
              >
                Hackathons
              </h1>
              <p
                className={`${subtitleColor} ${subtitleStyle} w-full text-start text-sm`}
              >
                I actually ended up winning the 2023 TCNJ Hackathon, to check it
                out click{" "}
                <Link
                  href={"https://devpost.com/software/artificial-tjs5mf"}
                  target="_blank"
                  className="text-sky-500"
                >
                  here
                </Link>
              </p>
            </div>

            <Image
              src={"/images/aboutme/trophy.png"}
              alt="trophy"
              width={125}
              height={125}
              quality={100}
              priority={true}
              className="z-10"
            />
          </div>
        </div>
        {/* LSR KICKS CONTAINER */}
        <div className="basis-3/5 w-full bg-gradient-to-br from-purple-500 via-purple-800 to-fuchsia-800 rounded-xl flex flex-col overflow-hidden ">
          <div className="basis-2/3 w-full flex items-start justify-end">
            <Image
              src={"/images/aboutme/lsrkicks.png"}
              alt="lsr kicks code"
              width={670}
              height={425}
              quality={100}
              priority={true}
              className="lsr-code"
            />
          </div>
          <div className="flex flex-col w-full basis-1/3 pt-2 pb-4 justify-between px-6 gap-1">
            <h1 className={`${titleStyle} ${titleColor} text-3xl start-title`}>
              LSR Kicks
            </h1>
            <div className="w-full flex flex-row items-center justify-between px-5">
              <p
                className={`text-2xl font-bold tracking-wider start-title w-[125px] tenk ${
                  dark ? "text-neutral-300" : "text-neutral-800"
                }`}
              >
                MERN{" "}
                <span className="text-sm text-neutral-500 tracking-wide font-medium">
                  stack
                </span>
              </p>
              <p
                className={`text-2xl font-bold tracking-wider start-title w-[125px] tenk ${
                  dark ? "text-neutral-300" : "text-neutral-800"
                }`}
              >
                10k+{" "}
                <span className="text-sm text-neutral-500 tracking-wide font-medium">
                  lines of code written
                </span>
              </p>
              <p className="text-md text-gray-500 tracking-wider font-medium ">
                Check it out{" "}
                <motion.a
                  whileHover={{ y: -5 }}
                  className="text-2xl text-sky-500 cursor-pointer font-bold here relative"
                  href="https://lsrkicks.com/"
                  target="_blank"
                >
                  here
                </motion.a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* RIGHT COLUMN CONTAINER */}
      <div className="basis-1/3 flex flex-col items-between justify-center gap-4 h-[70vh]">
        {/* REFINED AI CONTAINER */}
        <div
          className={`refined-container relative overflow-hidden basis-7/12 w-full flex rounded-xl flex-col items-center justify-center p-[10px] bg-[rgba(0,0,0,.2)] gap-2 ${
            dark ? "dark-border" : "light-border"
          }`}
        >
          <div className="basis-1/2 w-full flex items-center justify-center ">
            <Image
              src={"/images/aboutme/refinedai.png"}
              alt="refined ai pic"
              width={365}
              height={190}
              quality={100}
              priority={true}
              className="rounded-xl z-10"
            />
          </div>
          <div className="basis-1/2 flex flex-col items-center justify-between w-full px-3 pb-2 gap-1">
            <div className="w-full flex flex-col items-start justify-start">
              <h1
                className={`w-full text-start ${titleColor} ${titleStyle} text-2xl`}
              >
                RefinedAI
              </h1>
              <p className={`${subtitleColor} ${subtitleStyle} text-xs`}>
                {" "}
                Full-Stack application designed to provide customers with
                upscaling services through artificial intelligence (AI).
              </p>
            </div>
            <Link
              href="https://github.com/cerredz/RefinedAi"
              target="_blank"
              className="bg-gradient-to-br from-purple-600 via-fuchsia-700 to-purple-700 cursor-pointer w-full py-1 rounded-lg flex items-center justify-center refined-view "
            >
              <p className="text-lg text-neutral-300 tracking-widest font-bold">
                View
              </p>
            </Link>
          </div>
        </div>
        {/* TECHNIQUES CONTAINER */}
        <div
          className={`relative overflow-hidden basis-5/12 w-full rounded-xl p-8 flex flex-col items-start justify-center gap-2 ${
            dark ? "dark-border" : "light-border"
          }`}
        >
          <h1 className={`${titleColor} ${titleStyle} text-2xl`}>Techniques</h1>
          <p
            className={`${subtitleColor} ${subtitleStyle} text-xs font-medium tracking-widest`}
          >
            As time went on, I started to learn many software engineering tools,
            techniques, and frameworks (Next.js, Tailwind.css, Firebase, etc).
            Each project became an opportunity to apply new tools, refine
            techniques, and deepen my understanding of software engineering
            principles.
          </p>
          <Image
            src={"/images/aboutme/techniques.jpg"}
            alt="bg-img"
            layout="fill"
            quality={100}
            priority={true}
            className="opacity-50"
          />
        </div>
      </div>
    </motion.div>
  );
};

const Today = ({
  dark,
  titleStyle,
  titleColor,
  subtitleColor,
  subtitleStyle,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, position: "absolute" }}
      className={`flex flex-col xl:flex-row items-center justify-between w-full gap-10 h-[70vh] ${
        dark ? "dark-border" : "light-border"
      } rounded-xl overflow-hidden relative p-20`}
    >
      {/* BACKGROUND IMAGE */}
      <Image
        src={"/images/aboutme/todaybg.png"}
        alt="bg img"
        layout="fill"
        quality={100}
        priority={true}
        className="blur-3xl"
      />

      {/* TEXT CONTAINER */}
      <div className="basis-2/5 h-full p-8 flex flex-col items-start justify-between rounded-xl backdrop-blur-lg today-text">
        <h1 className={`${titleColor} ${titleStyle} text-6xl start-title`}>
          Today 🏆
        </h1>
        <p className={`${subtitleColor} ${subtitleStyle} text-sm `}>
          Today, now knowing over 20+ languages / frameworks, I continually try
          to become the best software engineer I can be everyday.
        </p>
        <p className={`${subtitleColor} ${subtitleStyle} text-sm `}>
          I regularly work on improving my algorithmic thinking abilities,
          completing unique full-stack projects, exposing my self to as many
          different languages / frameworks / practices as I can, and also watch
          software engineering related videos to learn off of what other people
          do.
        </p>
        <p className={`${subtitleColor} ${subtitleStyle} text-sm `}>
          Software Engineering is a passion of mine and I dont plan on slowing
          down anytime soon.
        </p>
      </div>

      <div className="basis-3/5 rounded-xl relative h-full flex items-center justify-center ">
        <Image
          src={"/images/aboutme/todayphone.png"}
          alt="phone img"
          layout="fill"
          quality={100}
          className="border-2 border-blue-600 rounded-xl today-img"
        />
      </div>
    </motion.div>
  );
};

export default About;
