"use client";
import { NavbarLinks } from "@/data";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import "../styles/navbar.css";
import { TfiAlignJustify } from "react-icons/tfi";
import { GoMoon } from "react-icons/go";
import { toggle } from "@/utils/Navbar";
import { useDispatch } from "react-redux";
import { LuSunDim } from "react-icons/lu";
import { BsVolumeUpFill, BsVolumeOffFill } from "react-icons/bs";

const Navbar = () => {
  const [links, setLinks] = useState([]);
  const [volume, setVolume] = useState(true);
  const [isHoveringToggle, setIsHoveringToggle] = useState(false);
  const dispatch = useDispatch();
  const dark = useSelector((state) => state.auth.dark);

  // load the links upon render
  useEffect(() => {
    setLinks(NavbarLinks);
  }, []);

  return (
    <nav
      className={` relative w-full p-0 m-0 relative z-2 ${
        dark ? "dark-border " : "light-border"
      }`}
    >
      <div className="w-full flex flex-col sm:flex-row justify-between align-center p-3 sm:p-5 md:p-7 lg:p-9">
        <div className="flex p-6 sm:p-0 gap-4 w-full align-center justify-start">
          <Image src="/logo.png" width={45} height={100} alt="logo"></Image>

          {/* NAVBAR LINKS */}
          <div
            className={`p-0 m-0 z-1 relative flex sm:flex-row items-center gap-8 flex-wrap hidden md:flex`}
          >
            {links.map((link, index) => (
              <p
                key={index}
                className={`z-10 h-full flex items-center cursor-pointer relative tracking-wider font-medium  text-sm sm:text-base md:text-lg lg:text-xl ${
                  dark && "dark-text"
                }`}
              >
                {link.title}
              </p>
            ))}
          </div>
        </div>
        {/* NAVBAR WIDGETS */}
        {/* VOLUME BUTTON */}
        <div className="flex justify-end items-center gap-3 z-10">
          <div
            className={`flex text-2xl cursor-pointer p-2 m-0 rounded-lg ${
              dark ? "bg-purple-600" : "bg-purple-500"
            }`}
          >
            {volume ? <BsVolumeUpFill /> : <BsVolumeOffFill />}
          </div>

          {/* LIGHT / DARK MODE */}
          <div
            onMouseEnter={() => setIsHoveringToggle(true)}
            onMouseLeave={() => setIsHoveringToggle(false)}
            onClick={() => toggle(dark, dispatch)}
            className={`shadow-xl relative m-0 text-2xl bg-blue-400 rounded-lg p-2 cursor-pointer transition-all duration-300 ${
              dark ? " bg-blue-600 hover:bg-white" : "hover:bg-black"
            }`}
          >
            {dark ? <LuSunDim /> : <GoMoon className="hover:text-white" />}
          </div>

          {/* SIDEBAR TOGGLE */}
          <div
            className={`text-bold cursor-pointer p-0 m-0 text-2xl block md:hidden  p-2  ${
              dark ? "dark-text dark-background " : "bg-gray-300 "
            }`}
          >
            <TfiAlignJustify />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
