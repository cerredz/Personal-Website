"use client";
import React, { useState, useEffect } from "react";
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

const About = () => {
  const dark = useSelector((state) => state.auth.dark);
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
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
            onClick={() => setCurrentTabIndex(index)}
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
          {currentTabIndex == 0 && (
            <Start
              dark={dark}
              titleColor={titleColor}
              titleStyle={titleStyle}
              subtitleColor={subtitleColor}
              subtitleStyle={subtitleStyle}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {currentTabIndex == 1 && (
            <FirstLanguages
              dark={dark}
              titleColor={titleColor}
              titleStyle={titleStyle}
              subtitleColor={subtitleColor}
              subtitleStyle={subtitleStyle}
            />
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

  return (
    <div className="w-full flex flex-col items-center justify-center gap-6">
      {/* FIRST ROW */}
      <div className="w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-10">
        {/* MAIN CARD */}
        <div className="basis-2/3 start-main h-[40vh] rounded-xl px-10 pt-6 flex flex-col justify-between relative">
          <div className="w-full z-10">
            <h1
              className={`w-3/4 lg:w-full text-start start-title text-2xl ${titleColor} ${titleStyle} `}
            >
              The Beginning of my Journey
            </h1>
            <p
              className={`w-9/12 text-start  text-sm ${subtitleStyle}  text-neutral-400`}
            >
              I am Michael Cerreto, and my journey into coding began at the age
              of 17 during my senior year of High School. Let me take you
              through my journey.
            </p>
          </div>
          <Image
            src={"/images/aboutme/codesnippet1.png"}
            alt="start main pic"
            width={700}
            height={450}
            quality={100}
            priority={true}
            className="mx-auto z-10 main-pic"
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
                src={"/images/aboutme/headshot.png"}
                alt="headshot"
                width={75}
                height={75}
                className="z-10 "
              />
            </div>
            <h1
              className={`w-full text-start text-2xl mt-2  ${titleColor} ${titleStyle}`}
            >
              General Info
            </h1>
            <p
              className={` w-9/12 text-start  text-sm ${subtitleStyle} ${subtitleColor} `}
            >
              Take a look at some more generic information about myself
            </p>
          </div>
          <div className="relative z-10 grid grid-cols-3 gap-y-2 gap-x-6 mt-2 w-full ">
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
          </div>
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
            <h1
              className={`w-full text-start text-2xl ${titleColor} ${titleStyle} `}
            >
              Goal
            </h1>
            <p
              className={`w-[11/12] text-start text-xs ${subtitleStyle} ${subtitleColor}  `}
            >
              Strive to become the most skillful, talented, and masterful
              Software Engineer that I am capable of becoming.
            </p>
          </div>
          <Link
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
          <div className="flex flex-col items-start justify-start w-full">
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
          </div>
          <Image
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
            src={"/images/aboutme/freedomIcon.png"}
            alt="freedom logo"
            width={100}
            height={100}
            className="mx-auto"
          />
          <div className="w-full flex flex-col justify-start items-start">
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
          </div>
        </div>
      </div>
    </div>
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
    <div className="w-full flex flex-row items-center justify-between gap-4">
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
      <div className="basis-1/3 h-[70vh] flex flex-col items-center justify-between gap-4">
        {/* FIRST LANGUAGES DIV */}
        <div className="basis-1/4 w-full flex bg-[rgba(255,255,255,.01)] flex-col items-start justify-between p-6 rounded-xl first-languages relative overflow-hidden ">
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
        <div className="basis-1/4 w-full flex flex-row gap-4 items-center justify-between px-6 py-3 rounded-xl bg-gradient-to-br from-cyan-500 via-sky-600 to-blue-700">
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
        <div className="basis-1/2 w-full bg-cyan-400"></div>
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
            className={`${subtitleColor} font-bold tracking-widest text-lg w-full text-left `}
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
    </div>
  );
};

export default About;
