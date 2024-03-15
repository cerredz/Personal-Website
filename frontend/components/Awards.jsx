"use client";
import Title from "@/Widgets/Title";
import { useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { client, urlFor } from "@/utils/Sanity";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import "../styles/Awards.css";
import { FaGithub } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";
import Link from "next/link";

const Awards = () => {
  const dark = useSelector((state) => state.auth.dark);
  const [awards, setAwards] = useState([]);

  // get the awards data from sanity upon render
  useEffect(() => {
    const fetchAwards = async () => {
      try {
        const query = `*[_type == "awards"]`;
        const result = await client.fetch(query);
        setAwards(result);
      } catch (error) {
        console.error("Error Getting the Awards Data", error);
      }
    };
    fetchAwards();
  }, []);

  return (
    <section
      id="awards"
      className="relative flex flex-col items-center justify-center py-20"
    >
      <Title
        text={"Awards"}
        backgroundText={"<My Accomplishments />"}
        subtitle="Learn About my Relevant Software Engineering Related Awards"
        dark={dark}
        color={`${dark ? "bg-fuchsia-600" : "bg-fuchsia-400"}`}
        translateX="-translate-x-[37.5rem]"
        translateY={"-translate-y-2"}
        beforeGradient={"awards-before-gradient"}
        afterGradient={"awards-after-gradient"}
      />

      {/* AWARDS CONTAINER */}
      <div className="relative w-10/12 lg:w-3/4 xl:w-7/12 mx-auto flex flex-col items-center justify-center mt-10 gap-6 lg:gap-0">
        {awards.map((award, index) => (
          <Award key={index} index={index} award={award} dark={dark} />
        ))}
      </div>
    </section>
  );
};

const Award = ({ key, index, award, dark }) => {
  return (
    <>
      {/*AWARD ROW CONTAINER */}
      <div
        className={`relative w-full lg:w-10/12 flex flex-row items-center justify-center ${
          index % 2 == 0
            ? "lg:justify-start lg:mr-auto"
            : "lg:justify-end lg:ml-auto"
        } ${index == 1 && "lg:second-award"} `}
      >
        {/* IMAGE CONTAINER */}
        <div className="relative flex justify-center items-center">
          <Image
            src={urlFor(award.img).url()}
            alt={award.title}
            height={300}
            width={400}
            quality={100}
            priority={true}
            className="w-1/2 md:w-[300px] lg:w-[400px] rounded-md opacity-90 award-img"
          />

          {/* LEFT HAND TEXT */}
          <div className="hidden lg:flex absolute left-0 top-0 h-full flex-col items-center justify-center -translate-x-1/2 gap-2">
            {/* TITLE */}
            <AwardText award={award} index={index} dark={dark} />
          </div>
          {/* DEVPOST / GITHUB ICONS */}
          <div className="absolute bottom-[-50px] w-fit flex left-0 flex-row items-center justify-center gap-4 opacity-100">
            <AwardIcons award={award} index={index} dark={dark} />
          </div>
        </div>
      </div>
    </>
  );
};

const AwardText = ({ index, award, dark }) => {
  // Splitting the award text into two parts
  const words = award.award.split(" ");
  const firstWord = words.shift();
  const restWords = words.join(" ");
  return (
    <div
      className={`${
        dark ? "text-neutral-300" : "text-neutral-800"
      } font-bold tracking-widest text-4xl text-center `}
    >
      <h1>{firstWord}</h1>
      <h1>{restWords}</h1>

      <h3
        className={`${
          dark ? "text-neutral-600" : "text-neutral-500"
        } tracking-widest font-bold text-xl italic`}
      >
        {award.event}
      </h3>

      <h1
        className={`${
          dark ? "text-neutral-300" : "text-neutral-800"
        } font-bold tracking-widest text-6xl text-center `}
      >
        0{index + 1}
      </h1>
    </div>
  );
};

const AwardIcons = ({ index, award, dark }) => {
  const git = useRef(null);
  const dev = useRef(null);
  const gitInView = useInView(git);
  const devInView = useInView(dev);
  return (
    <>
      {/* GITHUB ICON */}
      {award.github && (
        <Link href={`${award.github}`} target="_blank">
          <div
            ref={git}
            style={{
              scale: gitInView ? 1 : 0,
              opacity: gitInView ? 1 : 0,
              transition:
                "opacity .5s ease-in-out .4s, scale .5s ease-in-out .4s",
            }}
            className="cursor-pointer p-2 rounded-lg bg-[#1b1f23] award-icon z-20"
          >
            <FaGithub className="text-2xl" />
          </div>
        </Link>
      )}

      {/* DEVPOST ICON */}
      {award.devpost && (
        <Link href={award.devpost} target="_blank">
          <div
            ref={dev}
            style={{
              scale: devInView ? 1 : 0,
              opacity: devInView ? 1 : 0,
              transition:
                "opacity .5s ease-in-out .4s, scale .5s ease-in-out .4s",
            }}
            className="cursor-pointer p-2 rounded-lg bg-[#084459] award-icon z-20"
          >
            <SiDevpost className="text-2xl" />
          </div>
        </Link>
      )}
    </>
  );
};

export default Awards;
