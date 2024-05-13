"use client";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import "../styles/footer.css";
import { FaLocationDot } from "react-icons/fa6";
import { sidebarLinks } from "@/data";
import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { SiDevpost } from "react-icons/si";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa6";
import { scroll } from "../utils/Footer";
import { clickSound, whooshSound } from "@/utils/Sound";
import { getProjectData } from "@/utils/Global";
import Link from "next/link";

export default function Footer({ children }) {
  const dark = useSelector((state) => state.auth.dark);
  const [socials, setSocials] = useState([]);

  useEffect(() => {
    setSocials(sidebarLinks);
  }, []);

  const sections = ["Home", "About", "Skills", "Projects", "Awards"];
  const skills = [
    "Problem Solver",
    "Bakend Development",
    "Software Development",
    "Algorithms",
    "Web Development",
    "Collaboration / Teamwork",
  ];
  const [showScreenSwipe, setShowScreenSwipe] = useState(false);

  return (
    <section
      id="footer"
      className={`w-full py-12 relative flex flex-col gap-4 px-[10%] overflow-hidden ${
        dark
          ? "bg-neutral-900 footer-dark-border"
          : "bg-gray-200 footer-light-border"
      } footer-container`}
    >
      <span className="top-glow"></span>
      <span className="bottom-glow"></span>
      {/* SCREEN SWIPE ANIMTION WHEN A LINK IS CLICKED ON THE FOOTER */}
      <AnimatePresence>
        {showScreenSwipe && <ScreenSwipe audio={true} />}
      </AnimatePresence>
      {/* ACTUAL FOOTER CONTENT */}
      <div
        className={`w-full flex flex-col gap-4 p-8 rounded-sm footer-content-container my-12 ${
          dark ? "bg-primary-dark" : "bg-primary-light"
        } z-10`}
      >
        {/* HEADER OF THE FOOTER */}
        <div className="flex flew-row justify-start items-center gap-4">
          <BsFillLightningChargeFill className="text-xl text-blue-500" />
          <h1
            className={`tracking-widest font-bold text-xl ${
              dark ? "text-neutral-300" : "text-neutral-800"
            }`}
          >
            Michael Cerreto
          </h1>
        </div>

        <hr
          className={`${
            dark ? "bg-[rgba(255,255,255,.05)]" : "bg-[rgba(0,0,0,.05)]"
          }`}
        ></hr>
        <div className="flex flex-row items-start justify-center gap-4 md:gap-0 flex-wrap md:flex-nowrap md:justify-between py-4 ">
          {/* SECTIONS OF THE WEBSITE */}
          <div className="flex flex-col items-start justify-start gap-2">
            <p
              className={`text-md tracking-wider font-medium ${
                dark ? "text-neutral-300" : "text-neutral-800"
              }`}
            >
              Explore
            </p>
            {sections.map((section, index) => (
              <p
                key={index}
                className={`cursor-pointer text-sm tracking-wider font-medium transition duration-500 hover:transition hover:duration-500 ${
                  dark
                    ? "text-neutral-600 hover:text-neutral-300 "
                    : "text-neutral-500 hover:text-neutral-800"
                }`}
                onClick={() => {
                  clickSound();
                  scroll(section, setShowScreenSwipe);
                }}
              >
                {section}
              </p>
            ))}
          </div>
          {/* OTHER USEFUL LINKS DIV */}
          <div className="flex flex-col items-start justify-start gap-2">
            <p
              className={`text-md tracking-wider font-medium ${
                dark ? "text-neutral-300" : "text-neutral-800"
              }`}
            >
              Useful Links
            </p>
            <Link href={"/resume"}>
              <p
                className={`cursor-pointer text-sm tracking-wider font-medium transition duration-500 hover:transition hover:duration-500 ${
                  dark
                    ? "text-neutral-600 hover:text-neutral-300 "
                    : "text-neutral-500 hover:text-neutral-800"
                }`}
              >
                Resume
              </p>
            </Link>
            <Link href={"/awards/Best-Overall-Hack"}>
              <p
                className={`cursor-pointer text-sm tracking-wider font-medium transition duration-500 hover:transition hover:duration-500 ${
                  dark
                    ? "text-neutral-600 hover:text-neutral-300 "
                    : "text-neutral-500 hover:text-neutral-800"
                }`}
              >
                Hackathon Win
              </p>
            </Link>
            <Link href={"/projects/RefinedAI"}>
              <p
                className={`cursor-pointer text-sm tracking-wider font-medium transition duration-500 hover:transition hover:duration-500 ${
                  dark
                    ? "text-neutral-600 hover:text-neutral-300 "
                    : "text-neutral-500 hover:text-neutral-800"
                }`}
              >
                RefinedAI
              </p>
            </Link>
            <Link href={"https://leetcode.com/422michaelcerreto/"}>
              <p
                className={`cursor-pointer text-sm tracking-wider font-medium transition duration-500 hover:transition hover:duration-500 ${
                  dark
                    ? "text-neutral-600 hover:text-neutral-300 "
                    : "text-neutral-500 hover:text-neutral-800"
                }`}
              >
                Leetcode Profile
              </p>
            </Link>
            <Link href={"/projects/Speed-Typing"}>
              <p
                className={`cursor-pointer text-sm tracking-wider font-medium transition duration-500 hover:transition hover:duration-500 ${
                  dark
                    ? "text-neutral-600 hover:text-neutral-300 "
                    : "text-neutral-500 hover:text-neutral-800"
                }`}
              >
                Speed Typing
              </p>
            </Link>
          </div>

          {/* SOCIAL MEDIA LINKS */}
          <div className="flex flex-col items-start justify-start gap-2">
            <p
              className={`text-md tracking-wider font-medium ${
                dark ? "text-neutral-300" : "text-neutral-800"
              }`}
            >
              Connect
            </p>
            {socials.map((social, index) => (
              <Link key={index} href={social.redirect} target="_blank">
                <p
                  className={`cursor-pointer text-sm tracking-wider font-medium transition duration-500 hover:transition hover:duration-500 ${
                    dark
                      ? "text-neutral-600 hover:text-neutral-300 "
                      : "text-neutral-500 hover:text-neutral-800"
                  }`}
                >
                  {social.social}
                </p>
              </Link>
            ))}
          </div>
          {/* PERSONAL INFO DIV */}
          <div className="flex flex-col items-start justify-start gap-2">
            <p
              className={`text-md tracking-wider font-medium ${
                dark ? "text-neutral-300" : "text-neutral-800"
              }`}
            >
              Personal Info
            </p>
            <div className="flex flex-row items-center justify-center gap-1">
              <FaLocationDot className="text-neutral-600 text-sm" />
              <p className="text-sm font-medium text-neutral-600 tracking-wide">
                New Jersey, United States
              </p>
            </div>
            <p
              className={`cursor-pointer text-sm tracking-wider font-medium transition duration-500 hover:transition hover:duration-500 ${
                dark
                  ? "text-neutral-600 hover:text-neutral-300 "
                  : "text-neutral-500 hover:text-neutral-800"
              }`}
            >
              retto12345678@gmail.com
            </p>
            <p
              className={`cursor-pointer text-sm tracking-wider font-medium transition duration-500 hover:transition hover:duration-500 ${
                dark
                  ? "text-neutral-600 hover:text-neutral-300 "
                  : "text-neutral-500 hover:text-neutral-800"
              }`}
            >
              (732) - 673 - 1556
            </p>
          </div>
          {/* CONTACT DIV */}
          <div className="flex flex-col items-start justify-start gap-2 max-w-[250px]">
            <h1
              className={`text-xl font-medium tracking-wider ${
                dark ? "text-neutral-300" : "text-neutral-800"
              }`}
            >
              Get In Touch
            </h1>
            <p className="text-neutral-500 tracking-wide ">
              Still have any questions, feel free to click the button below to
              contact me
            </p>
            <Link
              href={"/contact"}
              className="w-full"
              onClick={() => clickSound()}
            >
              <button className="w-full rounded-md text-lg font-bold text-neutral-300 footer-contact-btn bg-gradient-to-br from-sky-500 via-blue-500 to-sky-500 px-4 py-1 tracking-widest">
                Contact
              </button>
            </Link>
          </div>
        </div>
        <hr
          className={`${
            dark ? "bg-[rgba(255,255,255,.05)]" : "bg-[rgba(0,0,0,.05)]"
          }`}
        ></hr>
        {/* FOOTER OF FOOTER */}
        <div className="flex flex-row justify-between items-center">
          <p className="text-sm font-medium text-neutral-600 tracking-wide">
            @ 2024, Michael Cerreto
          </p>
        </div>
      </div>
    </section>
  );
}

export function ScreenSwipe(audio) {
  whooshSound();

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: `100%` }}
      exit={{ left: `100%` }}
      className="fixed top-0 left-0 h-[100vh] z-100 bg-gradient-to-r from-sky-500 via-purple-500 to-fuchsia-500"
    ></motion.div>
  );
}
