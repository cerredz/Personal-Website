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
import { clickSound } from "@/utils/Sound";
import volumeBackground from "../public/images/volume.png";
import { Canvas } from "@react-three/fiber";
import BackgroundBlob from "@/Widgets/BackgroundBlob";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { easeInOut, motion } from "framer-motion";

const Navbar = () => {
  const [links, setLinks] = useState([]);
  const [mute, setMute] = useState(true);
  const [isHoveringToggle, setIsHoveringToggle] = useState(false);
  const [isHoveringVolume, setIsHoveringVolume] = useState(false);
  const dispatch = useDispatch();
  const dark = useSelector((state) => state.auth.dark);
  const volume = useSelector((state) => state.auth.volume);

  // load the links upon render
  useEffect(() => {
    setLinks(NavbarLinks);
  }, []);

  return (
    <nav
      className={`z-20 fixed w-full p-0 m-0 ${
        dark ? "dark-border " : "light-border"
      }`}
    >
      <div className="w-full flex flex-row justify-between align-center p-3 sm:p-5 md:p-7 lg:p-9">
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

        <div className="flex justify-end items-center gap-3 z-10 relative">
          {/* VOLUME BUTTON */}
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: "easeInOut" },
            }}
            exit={{ opacity: 0 }}
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            onMouseEnter={() => setIsHoveringVolume(true)}
            onMouseLeave={() => setIsHoveringVolume(false)}
            onClick={() => clickSound(volume)}
            className={`z-25 flex relative text-2xl cursor-pointer p-2 mr-4 rounded-lg`}
          >
            <div className="z-1 absolute left-[-10px] top-[-7px] w-14 h-14">
              <BackgroundBlob
                dark="#E26EE5"
                light="#FF90BC"
                distort=".44"
                speed="1.9"
              />
            </div>

            {volume ? (
              <BsVolumeUpFill className="z-20" />
            ) : (
              <BsVolumeOffFill className="z-20" />
            )}

            {!isHoveringVolume && (
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.5, ease: "easeInOut" },
                }}
                className="absolute flex items-center justify-center flex-col left-0 bottom-[-35px] bg-red-400 pt-3"
              >
                <div className="flex flex-row">
                  <label>1</label>
                  <input
                    type="range"
                    id="volume-slider"
                    min={1}
                    max={100}
                  ></input>
                  <label>100</label>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* LIGHT / DARK MODE */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: "easeInOut" },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            onMouseEnter={() => setIsHoveringToggle(true)}
            onMouseLeave={() => setIsHoveringToggle(false)}
            onClick={() => toggle(dark, dispatch, volume)}
            className={`z-25 flex items-center justify-center relative text-2xl cursor-pointer p-2 mr-4 rounded-lg`}
          >
            <div className="z-1 absolute left-[-20px] top-[-20px] w-14 h-14">
              <BackgroundBlob
                light="#040D12"
                dark="#F3F8FF"
                distort=".35"
                speed="2.6"
              />
            </div>
            {dark ? (
              <div className="absolute z-25">
                <LuSunDim className={`z-2 text-black`} />
              </div>
            ) : (
              <div className="absolute z-25">
                <GoMoon className="z-25 text-white" />
              </div>
            )}
          </motion.div>

          {/* SIDEBAR TOGGLE */}
          <div
            className={`z-20 text-bold cursor-pointer p-0 m-0 text-2xl block md:hidden  p-2  ${
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
