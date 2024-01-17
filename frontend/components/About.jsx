"use client";
import Title from "@/Widgets/Title";
import { useSelector } from "react-redux";
import "../styles/About.css";
import Image from "next/image";
import { phoneIcons } from "@/data";
import { useState, useEffect } from "react";
import { IoIosHome } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

import { aboutMeFacts } from "@/data";
import Facts from "@/Widgets/Facts";

const About = () => {
  const dark = useSelector((state) => state.auth.dark);
  let primaryTextColor = dark ? "text-neutral-300" : "text-neutral-700";
  let secondaryTextColor = dark ? "text-neutral-600" : "text-neutral-400";
  let phoneIconsBackground = dark ? "bg-[#18181A]" : "bg-[#C7C7C7]";
  const [icons, setIcons] = useState(null);
  const ref = useRef(null);
  const inView = useInView(ref);

  // render in icons upon load
  useEffect(() => {
    setIcons(phoneIcons);
    phoneIconsBackground = dark ? "bg-[#18181A]" : "bg-[#C7C7C7]";
  }, []);

  // change text color when switching from light to dark mode
  useEffect(() => {
    primaryTextColor = dark ? "text-neutral-200" : "text-neutral-700";
    secondaryTextColor = dark ? "text-neutral-600" : "text-neutral-400";
  }, [dark]);

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center gap-12"
    >
      <Title
        text={"About"}
        backgroundText={"<About Me />"}
        dark={dark}
        color={`${dark ? "bg-blue-600" : "bg-blue-400"}`}
        translateX="-translate-x-64"
        translateY={"-translate-y-2"}
      />
      {/* PHONE IN THE CENTER OF THE SCREEN */}
      <motion.div
        ref={ref}
        style={{
          y: inView ? "0" : "100px",
          opacity: inView ? "1" : "0",
          transition: "all .4s ease-in-out .8s",
        }}
        className={`phone relative flex flex-col p-2 m-0 rounded-2xl px-10 py-4  justify-center items-center origin-top ${
          dark ? "dark-shadow" : "light-shadow"
        } ${primaryTextColor}`}
      >
        {/* PHONE HEADER */}
        <div className="flex flex-col items-center justify-center">
          <h1 className="mt-3 text-3xl font-bold tracking-widest text-center">
            Michel Cerreto
          </h1>
          <div className="flex flex-row justify-between items-center w-full gap-4">
            <div className="flex flex-col justify-center items-start">
              <p className={`${secondaryTextColor} tracking-wider`}>Age:</p>
              <p className="transform -translate-y-2 tracking-wider">19</p>
            </div>
            <div className="flex flex-col justify-center items-start">
              <p className={`${secondaryTextColor} tracking-wider`}>
                Education:
              </p>
              <p className="transform -translate-y-2 tracking-wider">Rutgers</p>
            </div>
            <div className="flex flex-col justify-center items-start">
              <p className={`${secondaryTextColor} tracking-wider`}>From:</p>
              <p className="transform -translate-y-2 tracking-wider">NJ</p>
            </div>
          </div>
        </div>

        {/* PHONE IMAGE */}
        <Image
          src={`${
            dark ? "/images/darkHeadshot.png" : "/images/lightHeadShot.png"
          } `}
          alt="picture of me"
          height={120}
          width={150}
          className="invert-1"
        />

        <div className="w-full text-center">
          <h3
            className={`text-2xl font-medium tracking-wider ${
              dark ? "text-blue-600" : "text-blue-400"
            }`}
          >
            Software Engineer
          </h3>
          <p className={`text-sm ${secondaryTextColor} tracking-wide`}>
            retto12345678@gmail.com
          </p>
        </div>
        {/* PHONE ICONS */}

        {icons != null ? (
          <div className="relative z-1 grid grid-cols-3 gap-y-2 gap-x-5 mt-2 w-full px-6">
            {icons.map((icon, index) => (
              <PhoneIcon
                key={index}
                className={icon.className}
                background={phoneIconsBackground}
                src={icon.src}
                alt={icon.alt}
                text={icon.text}
                dark={dark}
                clickEvent={icon.clickEvent}
                redirect={icon.clickEvent ? icon.redirect : ""}
              />
            ))}
          </div>
        ) : (
          <></>
        )}

        {/* PHONE FOOTER */}
        <p
          className={`${secondaryTextColor} my-3 tracking-wide font-light text-xs`}
        >
          @ 2024, All Rights Reserved
        </p>
        <hr
          className={`m-0 p-0 h-.5 w-full rounded-lg ${
            dark ? "bg-neutral-400" : "bg-neutral-800"
          } `}
        ></hr>
        <div className="flex flex-row w-full h-full items-center justify-between my-3 px-2">
          <div>
            <p>Skills</p>
          </div>
          <div className="flex items-center justify-center">
            <IoIosHome />
          </div>
          <div>
            <p> Projects</p>
          </div>
        </div>

        {/* PHONE CLOUDS */}
        <motion.div
          ref={ref}
          style={{
            y: inView ? "0" : "50px",
            opacity: inView ? "1" : "0",
            transition: "all .4s ease-in-out 2.5s",
          }}
          className="hidden xl:block absolute right-[-500px] top-0 origin-left"
        >
          <Image
            src={`${dark ? "/images/cloud1.png" : "/images/cloud1light.png"} `}
            alt="cloud1"
            width={500}
            height={500}
          ></Image>
          <div className="absolute transform translate-x-28 -translate-y-56">
            <Facts facts={aboutMeFacts[0]} />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;

/* CODE FOR SINGULAR PHONE ICON, Seperated for better Readability */
const PhoneIcon = ({
  className,
  background,
  src,
  alt,
  text,
  dark,
  clickEvent,
  redirect,
}) => {
  const [hoveringIcon, setHoveringIcon] = useState(null);
  let hoveringTextColor = dark ? "text-neutral-300" : "text-neutral-800";
  let hoveringBackgroundColor = dark ? "bg-[#0F0F0F]" : "bg-neutral-100";

  useEffect(() => {
    hoveringTextColor = dark ? "text-neutral-300" : "text-neutral-800";
    hoveringBackgroundColor = dark ? "bg-[#0F0F0F]" : "bg-neutral-100";
  }, [dark]);

  return (
    <motion.div
      onMouseEnter={() => setHoveringIcon(className)}
      onMouseLeave={() => setHoveringIcon(null)}
      onClick={() => (clickEvent ? window.open(redirect, "_blank") : "")}
      className="relative overflow-visible cursor-pointer"
      whileTap={{ scale: 0.9 }}
    >
      <div
        className={`z-10 relative phone-icon-container cursor-pointer flex justify-center rounded-lg items-center 
  ${background} py-3 ${className}`}
      >
        <Image
          src={src}
          alt={alt}
          height={19}
          width={19}
          className={`phone-icon relative ${className}-icon`}
        />
      </div>

      {/* HOVERING ANIMATION */}
      <AnimatePresence>
        {hoveringIcon == className && (
          <motion.div
            initial={{ y: 25, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.5, ease: "easeInOut" },
            }}
            exit={{
              y: 25,
              opacity: 0,
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
            className={`shadow-md absolute bottom-[-40px] left-0 overflow-visible z-50  whitespace-nowrap`}
          >
            <div className="relative z-50 flex flex-col">
              <div
                className={`h-4 w-4 rotate-45 top-0 left-0 z-1 ${hoveringBackgroundColor} ml-4`}
              ></div>
              <p
                className={`-mt-2 rounded-md hovering-text font-normal italic ${hoveringTextColor} ${hoveringBackgroundColor} px-3 py-1 relative z-10`}
              >
                {text}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
