"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Title from "@/Widgets/Title";
import { AnimatePresence } from "framer-motion";
import "../styles/About.css";

const About = () => {
  const dark = useSelector((state) => state.auth.dark);
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const tabs = ["Start & Overview", "First Languages", "Projects", "Today"];
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
          {currentTabIndex == 0 && <Start dark={dark} />}
        </AnimatePresence>
      </div>
    </section>
  );
};

const Start = ({ dark }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-6">
      {/* FIRST ROW */}
      <div className="w-full flex flex-row justify-between items-center gap-10">
        <div className="basis-2/3 start-main h-[40vh] rounded-xl px-10 pt-6 flex flex-col items-center justify-start relative">
          <h1>The Beginning of my Journey</h1>
          <p>
            I am Michael Cerreto, and my journey into coding began at the age of
            17 during my senior year of high school.
          </p>
        </div>
        <div className="basis-1/3 bg-red-400 h-[40vh]">hello world</div>
      </div>

      {/* SECOND ROW */}
      <div className="w-full flex flex-row justify-between items-center gap-8">
        <div className="basis-1/3 bg-blue-400 h-[300px]">hello world</div>
        <div className="basis-1/3 bg-green-400 h-[300px]">hello world</div>
        <div className="basis-1/3 bg-yellow-400 h-[300px]">hello world</div>
      </div>
    </div>
  );
};

export default About;
