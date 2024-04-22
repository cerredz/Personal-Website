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
import "../styles/Globals.css";

export default function Footer({ children }) {
  const dark = useSelector((state) => state.auth.dark);
  const [socials, setSocials] = useState([]);
  useEffect(() => {
    setSocials(sidebarLinks);
  }, []);

  const sections = ["Home", "About", "Skills", "Projects", "Awards"];
  const [showScreenSwipe, setShowScreenSwipe] = useState(false);

  return (
    <section
      id="footer"
      className={`w-full py-12 relative flex flex-col gap-4 px-[10%] ${
        dark
          ? "bg-neutral-900 footer-dark-border"
          : "bg-gray-200 footer-light-border"
      } footer-container`}
    >
      {/* SCREEN SWIPE ANIMTION WHEN A LINK IS CLICKED ON THE FOOTER */}
      <AnimatePresence>
        {showScreenSwipe && <ScreenSwipe></ScreenSwipe>}
      </AnimatePresence>
      {/* ACTUAL FOOTER CONTENT */}
      <div
        className={`w-full flex flex-col gap-4 p-8 rounded-sm footer-content-container my-12 ${
          dark ? "bg-primary-dark" : "bg-primary-light"
        }`}
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
        <div className="flex flex-row items-center justify-between">
          {/* SECTIONS OF THE WEBSITE */}
          <div className="flex flex-col items-start justify-start gap-2">
            <p
              className={`text-md tracking-wider font-medium ${
                dark ? "text-neutral-300" : "text-neutral-800"
              }`}
            >
              Sections
            </p>
            {sections.map((section, index) => (
              <p
                className={`cursor-pointer text-sm tracking-wider font-medium transition duration-500 hover:transition hover:duration-500 ${
                  dark
                    ? "text-neutral-600 hover:text-neutral-300 "
                    : "text-neutral-500 hover:text-neutral-800"
                }`}
                onClick={() => scroll(section, setShowScreenSwipe)}
              >
                {section}
              </p>
            ))}
          </div>
          {/* CONTACT DIV */}
          <div className="flex flex-col items-start justify-start gap-2">
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
            <button className="w-full rounded-md text-lg font-bold text-neutral-300 footer-contact-btn bg-gradient-to-br from-sky-500 via-blue-500 to-sky-500 px-4 py-1">
              Contact
            </button>
          </div>
        </div>
        <hr
          className={`${
            dark ? "bg-[rgba(255,255,255,.05)]" : "bg-[rgba(0,0,0,.05)]"
          }`}
        ></hr>
        {/* FOOTER OF FOOTER */}
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row justify-center items-center gap-2">
            <div className="flex flex-row items-center justify-center gap-1">
              <FaLocationDot className="text-neutral-600 text-sm" />
              <p className="text-sm font-medium text-neutral-600 tracking-wide">
                United States
              </p>
            </div>

            <p className="text-sm font-medium text-neutral-600 tracking-wide">
              @ 2024, Michael Cerreto
            </p>
          </div>
          {/* SOCIALS */}
          <div className="flex flex-row items-center justify-center gap-2 ">
            {socials.map((link, index) => (
              <motion.a
                key={index}
                href={link.redirect}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`rounded-full text-lg p-2 cursor-pointer transition-all duration-600  ${
                  dark
                    ? "bg-[rgba(255,255,255,.05)] social-container-dark"
                    : "bg-[rgba(0,0,0,.05)] social-container-light"
                }`}
              >
                {link.social === "LinkedIn" && (
                  <FaLinkedinIn className="transition-all duration-600 hover:text-socials-linkedin z-1" />
                )}
                {link.social === "Github" && (
                  <FaGithub className="transition-all duration-600 hover:text-socials-github z-1" />
                )}
                {link.social === "Twitter" && (
                  <AiFillTwitterCircle className="transition-all duration-600 hover:text-socials-twitter z-1" />
                )}
                {link.social === "Discord" && (
                  <FaDiscord className="transition-all duration-600 hover:text-socials-discord z-1" />
                )}
                {link.social === "Devpost" && (
                  <SiDevpost className="transition-all duration-600 hover:text-socials-devpost z-1" />
                )}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ScreenSwipe({ children }) {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: `100%` }}
      exit={{ left: `100%` }}
      className="fixed  top-0 left-0 bottom-0 z-100 bg-gradient-to-r from-sky-500 via-purple-500 to-fuchsia-500"
    ></motion.div>
  );
}
