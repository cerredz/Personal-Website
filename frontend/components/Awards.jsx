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
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { motion } from "framer-motion";

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
      id="Awards"
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
      <div className="relative w-10/12 lg:w-3/4 xl:w-7/12 mx-auto flex flex-col items-center justify-center mt-10 gap-20 lg:gap-0">
        {awards.map((award, index) => (
          <Award key={index} index={index} award={award} dark={dark} />
        ))}
      </div>
    </section>
  );
};

const Award = ({ key, index, award, dark }) => {
  const imgRef = useRef(null);
  const expandRef = useRef(null);
  const imgInView = useInView(imgRef);
  const expandInView = useInView(expandRef);
  const [readMore, setReadMore] = useState(false);
  const awardWithDashes = award.award.replace(/ /g, "-");

  return (
    <>
      {/*AWARD ROW CONTAINER */}
      <div
        className={`relative w-full lg:w-fit flex flex-row items-center justify-center ${
          index % 2 == 0
            ? "lg:justify-start lg:mr-auto"
            : "lg:justify-end lg:ml-auto"
        } ${index == 1 && "lg:second-award"} `}
      >
        {/* IMAGE CONTAINER */}
        <div
          ref={imgRef}
          style={{
            scale: imgInView ? 1 : 0,
            opacity: imgInView ? 1 : 0,
            transition:
              "scale .4s ease-in-out .1s, opacity .4s ease-in-out .1s",
          }}
          className="relative flex justify-center items-center"
        >
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
          <div className="flex absolute left-0 top-0 h-full flex-col items-center justify-center -translate-x-1/2 gap-2">
            {/* TITLE */}
            <AwardText award={award} index={index} dark={dark} />
          </div>
          {/* DEVPOST / GITHUB ICONS */}
          <div className="absolute bottom-[-50px] w-fit flex left-0 flex-row items-center justify-center gap-4 opacity-100">
            <AwardIcons award={award} index={index} dark={dark} />
          </div>
          {/* YEAR / LOGO */}
          <div className="absolute left-[100%] top-[25px] w-fit flex flex-col items-start justify-start gap-2 opacity-100 ml-4">
            <AwardsEvent award={award} index={index} dark={dark} />
          </div>

          {/* READ MORE ARROW */}
          <Link href={`/awards/${awardWithDashes}`}>
            <motion.div
              onMouseEnter={() => setReadMore(true)}
              onMouseLeave={() => setReadMore(false)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              ref={expandRef}
              style={{
                scale: expandInView ? 1 : 0,
                opacity: expandInView ? 1 : 0,
                transition:
                  "opacity .5s ease-in-out 1.2s, scale .5s ease-in-out 1.2s",
              }}
              className="cursor-pointer absolute bottom-[-50px] w-fit right-0 py-2 px-4 rounded-xl expand-btn bg-gradient-to-br from-fuchsia-600 via-purple-500 to-fuchsia-600 opacity-80 hover:opacity-100 transition duration-500 hover:transition hover:duration-500"
            >
              <FaArrowUpRightFromSquare className="text-2xl text-neutral-300" />
            </motion.div>
          </Link>

          {/* READ MORE TEXT */}
          <AnimatePresence>
            {readMore && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, transition: { duration: 0.35 } }}
                exit={{ scale: 0, transition: { delay: 0.4 } }}
                className="origin-bottom absolute left-0 right-0 bottom-0 h-fit pt-12 pb-2 preview-text backdrop-blur-xl bg-[rgba(255,255,255,.05)] text-center"
              >
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.4 } }}
                  exit={{ opacity: 0 }}
                  className={`text-neutral-400 font-medium text-xs tracking-wide w-11/12 mx-auto`}
                >
                  {award.preview}
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
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

  const titleRefOne = useRef(null);
  const titleRefTwo = useRef(null);
  const subTitleRef = useRef(null);
  const numberRef = useRef(null);

  const titleOneInView = useInView(titleRefOne);
  const titleTwoInView = useInView(titleRefTwo);
  const subTitleInView = useInView(subTitleRef);
  const numberInView = useInView(numberRef);

  return (
    <div
      className={`${
        dark ? "text-neutral-300" : "text-neutral-800"
      } font-bold tracking-widest text-2xl lg:text-4xl text-center `}
    >
      <h1
        ref={titleRefOne}
        style={{
          transform: titleOneInView ? "" : "translateX(-200px)",
          opacity: titleOneInView ? 1 : 0,
          transition: ".4s ease-in-out .4s",
        }}
      >
        {firstWord}
      </h1>
      <h1
        ref={titleRefTwo}
        style={{
          transform: titleTwoInView ? "" : "translateX(-200px)",
          opacity: titleTwoInView ? 1 : 0,
          transition: ".4s ease-in-out .5s",
        }}
      >
        {restWords}
      </h1>

      <h3
        ref={subTitleRef}
        style={{
          transform: subTitleInView ? "" : "translateX(-200px)",
          opacity: subTitleInView ? 1 : 0,
          transition: ".4s ease-in-out .6s",
        }}
        className={`${
          dark ? "text-neutral-600" : "text-neutral-500"
        } tracking-widest font-bold text-lg lg:text-xl italic`}
      >
        {award.event}
      </h3>

      <h1
        ref={numberRef}
        style={{
          transform: numberInView ? "" : "translateX(-200px)",
          opacity: numberInView ? 1 : 0,
          transition: ".4s ease-in-out .7s",
        }}
        className={`${
          dark ? "text-neutral-300" : "text-neutral-800"
        } font-bold tracking-widest text-4xl lg:text-6xl text-center `}
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
          <motion.div
            whileHover={{ scale: 1.1, transition: { duration: 0.3, delay: 0 } }}
            whileTap={{ scale: 0.9 }}
            ref={git}
            style={{
              scale: gitInView ? 1 : 0,
              opacity: gitInView ? 1 : 0,
              transition:
                "opacity .5s ease-in-out 1.2s, scale .5s ease-in-out 1.2s",
            }}
            className="cursor-pointer p-2 rounded-lg bg-[#1b1f23] award-icon z-20"
          >
            <FaGithub className="text-2xl" />
          </motion.div>
        </Link>
      )}

      {/* DEVPOST ICON */}
      {award.devpost && (
        <Link href={award.devpost} target="_blank">
          <motion.div
            ref={dev}
            style={{
              scale: devInView ? 1 : 0,
              opacity: devInView ? 1 : 0,
              transition:
                "opacity .5s ease-in-out 1.2s, scale .5s ease-in-out 1.2s",
            }}
            whileHover={{ scale: 1.1, transition: { duration: 0.3, delay: 0 } }}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer p-2 rounded-lg bg-[#084459] award-icon z-20"
          >
            <SiDevpost className="text-2xl" />
          </motion.div>
        </Link>
      )}
    </>
  );
};

const AwardsEvent = ({ index, award, dark }) => {
  const textRef = useRef(null);
  const imgRef = useRef(null);
  const textInView = useInView(textRef);
  const imgInView = useInView(imgRef);
  return (
    <>
      {/* YEAR */}
      <div
        ref={textRef}
        style={{
          transform: textInView ? "" : "translateX(200px)",
          opacity: textInView ? 1 : 0,
          transition: ".4s ease-in-out .6s",
        }}
        className={`flex flex-row items-center justify-center gap-2 ${
          dark ? "text-neutral-600" : "text-neutral-500"
        }`}
      >
        <span
          className={`h-1 w-8 rounded-lg  ${
            dark ? "bg-neutral-600" : "bg-neutral-500"
          } `}
        ></span>
        <h1 className="italic tracking-widest font-normal text-xl">
          {award.year}
        </h1>
      </div>
      {/* EVENT LOGO */}
      <Image
        ref={imgRef}
        src={urlFor(award.logo).url()}
        alt={award.title}
        quality={100}
        width={40}
        height={40}
        style={{
          transform: imgInView ? "" : "translateX(200px)",
          opacity: imgInView ? 1 : 0,
          transition: ".4s ease-in-out .7s",
        }}
      />
    </>
  );
};
export default Awards;
