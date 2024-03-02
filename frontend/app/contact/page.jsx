"use client";
import "../../styles/globals.css";
import { useSelector } from "react-redux";
import Image from "next/image";
import { useState } from "react";
import "./styles.css";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedinIn, FaLocationPin, FaDiscord } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";
import { GiStarsStack } from "react-icons/gi";
import { BackgroundBeams } from "@/AceternityUi/background-beams";

const page = () => {
  const dark = useSelector((state) => state.auth.dark);
  const [step, setStep] = useState(1);
  return (
    <main
      className={`overflow-hidden font-primary p-0 m-0 min-h-screen relative bg-primary-dark flex flex-col xl:flex-row gap-20 items-center justify-center `}
    >
      {/* BACKGROUND IMAGE */}
      <Image
        priority={true}
        quality={100}
        src={"/images/contactmeBG.png"}
        alt=""
        layout="fill"
        className="absolute top-0 left-0 h-full w-full opacity-10 hidden lg:block"
      ></Image>

      {/* CONTACT FORM CONTAINER */}
      <div className="flex flex-col w-1/2 xl:w-2/5 h-[500px] contact-form-container relative backdrop-blur-xl py-6 px-6 lg:px-12 rounded-xl">
        {step === 1 ? (
          <>
            <StepOne></StepOne>
          </>
        ) : (
          <></>
        )}
      </div>
    </main>
  );
};

const StepOne = () => {
  const socialIcons = [
    {
      title: "linkedin",
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/michael-cerreto-b3348524b/",
    },
    {
      title: "github",
      icon: <FaGithub />,
      link: "https://github.com/cerredz",
    },
    {
      title: "discord",
      icon: <FaDiscord />,
      link: "https://discordid.netlify.app/?id=665620730670481409",
    },
    {
      title: "devpost",
      icon: <SiDevpost />,
      link: "https://devpost.com/422michaelcerreto?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav",
    },
  ];

  return (
    <div className="relative flex flex-col h-full w-full justify-center items-center gap-4">
      {/* TITLE TEXT */}
      <div className="flex flex-col justify-center items-center w-full gap-2">
        <h1 className="text-2xl md:text-4xl lg:text-6xl tracking-widest font-bold text-sky-500 text-center">
          Contact Me 📝
        </h1>
        <p className="text-center w-10/12 mx-auto font-medium tracking-wider text-sm text-neutral-600">
          Lets Get In Touch, if there are any questions you want to ask me feel
          free to either email me or give me a call.
        </p>
      </div>
      {/* PHONE NUMBER, EMAIL ADDRESS, LOCATION */}
      <div className="w-10/12 flex flex-col justify-center lg:flex-row flex-wrap lg:flex-nowrap lg:justify-between items-center gap-2 mt-4">
        <div className="relative flex flex-row items-center justify-center gap-2 bg-[rgba(0,0,0,.2)] rounded-xl px-4 py-2 personal-info-container">
          <FaPhone className="z-10 flex items-center justify-center p-0 m-0 text-sky-500" />
          <p className="z-10 tracking-widest text-sm font-medium text-neutral-600 whitespce-nowrap">
            (732)-673-1556
          </p>
          <span className="border-bottom"></span>
        </div>
        <div className="relative  flex flex-row items-center justify-center gap-2 bg-[rgba(0,0,0,.2)] rounded-xl px-4 py-2 personal-info-container">
          <MdOutlineEmail className="flex items-center justify-center p-0 m-0 text-sky-500" />
          <p className="tracking-widest text-sm font-medium text-neutral-600">
            retto12345678@gmail.com
          </p>
          <span className="border-bottom"></span>
        </div>
      </div>
      <div className="relative w-10/12  mx-auto flex flex-row justify-start items-center bg-[rgba(0,0,0,.2)] gap-2 rounded-xl px-4 py-2 personal-info-container">
        <FaLocationPin className="flex items-center justify-center p-0 m-0 text-sky-500" />
        <p className="tracking-widest text-sm font-medium text-neutral-600">
          New Jersey United States (EST)
        </p>
        <span className="border-bottom"></span>
      </div>
      {/* SOCIALS */}
      <div className="flex flex-row gap-6 justify-center items-center mt-2">
        {socialIcons.map((icon, index) => (
          <div
            key={index}
            className={`cursor-pointer text-lg rounded-full social-icon p-6 relative text-neutral-600 flex items-center justify-center transition duration-500 ${icon.title}-icon`}
          >
            <a
              className="z-10 absolute text-2xl "
              href={icon.link}
              target="_blank"
            >
              {icon.icon}
            </a>
          </div>
        ))}
      </div>
      {/* GET STARTED BUTTON */}
      <div className="cursor-pointer flex mt-4 flex-row gap-2 justify-center items-center get-started-btn bg-gradient-to-br from-sky-500 via-blue-500 to-sky-500 opacity-90 px-4 py-2 rounded-lg">
        <p className="font-bold tracking-widest italic text-lg text-neutral-300">
          Get Started
        </p>
        <GiStarsStack className="font-bold text-xl text-neutral-300" />
      </div>
    </div>
  );
};
export default page;
