"use client";
import Title from "@/Widgets/Title";
import { useSelector } from "react-redux";
import "../styles/About.css";
import Image from "next/image";
import { IoHome } from "react-icons/io5";
import { phoneIcons } from "@/data";
import { useState, useEffect, use } from "react";
import { IoIosHome } from "react-icons/io";
import { GrWaypoint } from "react-icons/gr";

const About = () => {
  const dark = useSelector((state) => state.auth.dark);
  let primaryTextColor = dark ? "text-neutral-300" : "text-neutral-700";
  let secondaryTextColor = dark ? "text-neutral-600" : "text-neutral-400";
  let phoneIconsBackground = dark ? "bg-[#18181A]" : "bg-[#C7C7C7]";
  const [icons, setIcons] = useState(null);

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
      className="min-h-screen flex flex-col items-center justify-center gap-6"
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
      <div
        className={`phone flex flex-col p-2 m-0 rounded-2xl px-8 py-2  justify-center items-center ${
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
          <div className="grid grid-cols-3 gap-y-2 gap-x-5 mt-2 w-full px-6">
            {icons.map((icon, index) => (
              <div
                key={index}
                className={`relative phone-icon-container cursor-pointer flex justify-center rounded-lg items-center 
                ${phoneIconsBackground} py-3 ${icon.className}`}
              >
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  height={19}
                  width={19}
                  className={`phone-icon relative ${icon.className}-icon`}
                />
              </div>
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
        <div className="flex flex-row w-full h-full items-center justify-between my-3 px-3">
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
      </div>
    </section>
  );
};

export default About;
