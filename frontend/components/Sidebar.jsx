"use client";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { SiDevpost } from "react-icons/si";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa6";
import { FaSlack } from "react-icons/fa";
import { sidebarLinks } from "@/data";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { easeInOut, motion } from "framer-motion";

const Sidebar = () => {
  const dark = useSelector((state) => state.auth.dark);
  const [links, setLinks] = useState([]);

  // load links upon render
  useEffect(() => {
    setLinks(sidebarLinks);
  }, []);
  return (
    <div
      className={`text-3xl justify-between bottom-0 w-full 
        items-center sm:text-4xl lg:text-5xl fixed md:top-0 md:h-full
        md:right-0 z-10 gap-6 md:justify-center flex md:flex-col gap-5 p-3 sm:p-5 md:p-7 lg:p-9 md:w-min 
        md:bg-opacity-0 
        ${
          dark
            ? "dark-text md:bg-transparent bg-dark-background"
            : "md:bg-transparent bg-gray-200"
        }
      `}
    >
      {/* Social Media Links */}
      {links.map((link, index) => (
        <motion.a
          key={index}
          href={link.redirect}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer transition-all duration-600 hover:translate-y-[-5px] md:hover:translate-y-0 md:hover:translate-x-[-5px]"
          initial={{ x: 100, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: {
              delay: index * 0.2 + 1,
              duration: 0.2,
              ease: "easeInOut",
            },
          }}
        >
          {link.social === "LinkedIn" && (
            <FaLinkedinIn className="transition-all duration-600 hover:text-socials-linkedin" />
          )}
          {link.social === "Github" && (
            <FaGithub className="transition-all duration-600 hover:text-socials-github" />
          )}
          {link.social === "Twitter" && (
            <AiFillTwitterCircle className="transition-all duration-600 hover:text-socials-twitter" />
          )}
          {link.social === "Discord" && (
            <FaDiscord className="transition-all duration-600 hover:text-socials-discord" />
          )}
          {link.social === "Devpost" && (
            <SiDevpost className="transition-all duration-600 hover:text-socials-devpost" />
          )}
        </motion.a>
      ))}
    </div>
  );
};

export default Sidebar;
