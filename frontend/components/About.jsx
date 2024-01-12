"use client";
import Title from "@/Widgets/Title";
import { useSelector } from "react-redux";
import "../styles/About.css";
import Image from "next/image";
import { IoHome } from "react-icons/io5";
import { phoneIcons } from "@/data";
import { useState, useEffect } from "react";

const About = () => {
  const dark = useSelector((state) => state.auth.dark);
  const [icons, setIcons] = useState(null);

  // render in icons upon load
  useEffect(() => {
    setIcons(phoneIcons);
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center gap-6"
    >
      <Title
        text={"About"}
        backgroundText={"<About Me />"}
        dark={dark}
        color={"bg-blue-400"}
        translateX="-translate-x-64"
        translateY={"-translate-y-2"}
      />
      {/* PHONE IN THE CENTER OF THE SCREEN */}
      <div
        className={`phone flex flex-col p-2 m-0 rounded-xl px-8 py-2  justify-center items-center ${
          dark ? "dark-shadow" : "light-shadow"
        }`}
      >
        {/* PHONE HEADER */}
        <div className="flex flex-col items-center justify-center">
          <h1>Michel Cerreto</h1>
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row justify-between ">
              <p>Age:</p>
              <p>Education:</p>
              <p>From:</p>
            </div>
            <div className="flex flex-row justify-between ">
              <p>19</p>
              <p>Rutgers</p>
              <p>New Jersey</p>
            </div>
          </div>
        </div>

        <Image
          src={`${
            dark ? "/images/darkHeadshot.png" : "/images/lightHeadShot.png"
          } `}
          alt="picture of me"
          height={140}
          width={180}
        />

        <div>
          <h3>Software Engineer</h3>
          <p className="text-sm">retto12345678@gmail.com</p>
        </div>
        {/* PHONE ICONS */}

        {icons != null ? (
          <div className="grid grid-cols-3 gap-4">
            {icons.map((icon, index) => (
              <div key={index}>
                <Image
                  src={icon.src}
                  alt={`${icon.icon} logo`}
                  height={55}
                  width={55}
                />
              </div>
            ))}
          </div>
        ) : (
          <></>
        )}

        {/* PHONE FOOTER */}
        <p>@2024, All Rights Reserved</p>
        <hr className="m-0 p-0"></hr>
        <div className="flex flex-row items-center justify-between">
          <div>
            <p>View My Skills</p>
          </div>
          <div>
            <IoHome />
          </div>
          <div>
            <p>View My Projects</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
