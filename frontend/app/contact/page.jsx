"use client";
import { useSelector } from "react-redux";
import Image from "next/image";
import { useEffect, useState } from "react";
import "./styles.css";
import "../../styles/globals.css";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedinIn, FaLocationPin, FaDiscord } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";
import { GiStarsStack } from "react-icons/gi";
import { BackgroundBeams } from "@/AceternityUi/background-beams";
import { motion, AnimatePresence } from "framer-motion";
import { slidesData } from "./data";
import { BsFillMoonStarsFill, BsDownload } from "react-icons/bs";
import { updateFormData, checkUserInput, send, store } from "./utils";
import { AiFillHome } from "react-icons/ai";
import Link from "next/link";
import Axios from "axios";
import { clickSound, projectTabClickSound } from "@/utils/Sound";

const page = () => {
  const dark = useSelector((state) => state.auth.dark);
  const [step, setStep] = useState(1);
  const [slides, setSlides] = useState(slidesData);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    company: "",
    message: "",
  });
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    console.log(error);
    console.log(errorMessage);
  }, [error]);

  return (
    <main
      id="Contact"
      className={`overflow-hidden font-primary p-0 m-0 min-h-screen relative bg-primary-dark flex flex-col xl:flex-row gap-20 items-center justify-center `}
    >
      {/* BACKGROUND VIDEO */}
      <video
        className="absolute top-0 left-0 h-full w-full object-cover opacity-25"
        autoPlay
        loop
        muted
      >
        <source src={"/videos/contactbg.mp4"} />
      </video>

      {/* CONTACT FORM CONTAINER */}
      <div className="flex flex-col w-11/12 sm:w-1/2 xl:w-2/5 h-fit md:h-[500px] contact-form-container relative backdrop-blur-2xl rounded-xl">
        {/* INFO STEP */}
        <AnimatePresence>
          {step == 1 && (
            <StepOne
              onClick={() => {
                projectTabClickSound();
                setStep((prev) => prev + 1);
              }}
            />
          )}
        </AnimatePresence>

        {/* INFORMATION THE USER WILL HAVE TO FILL OUT */}
        {slides.map((slide, index) => (
          <AnimatePresence key={index}>
            {step == index + 2 && (
              <Slide
                index={index}
                error={error}
                errorMessage={errorMessage}
                length={slides.length}
                question={slide.question}
                required={slide.required}
                placeholders={slide.placeholders}
                expanded_text_field={slide.expanded_text_field}
                formName={slide.formName}
                formData={formData}
                setFormData={setFormData}
                nextClick={
                  slide.required
                    ? () =>
                        checkUserInput(
                          formData,
                          setFormData,
                          slide.formName,
                          setError,
                          setErrorMessage,
                          setStep
                        )
                    : () => setStep((prev) => prev + 1)
                }
                submitClick={async (e) => {
                  e.preventDefault();
                  try {
                    const isErrors = await checkUserInput(
                      formData,
                      setFormData,
                      slide.formName,
                      setError,
                      setErrorMessage,
                      setStep
                    );

                    if (!isErrors) {
                      await send(formData);
                      await store(formData);
                    }
                  } catch (error) {
                    console.error("Error sending data:", error);
                  }
                }}
                previousClick={() => {
                  clickSound();
                  setStep((prev) => prev - 1);
                }}
              />
            )}
          </AnimatePresence>
        ))}

        {/* SUCCESS SLIDE */}
        <AnimatePresence>{step == 7 && <SuccessSlide />}</AnimatePresence>
      </div>
    </main>
  );
};

const StepOne = ({ onClick }) => {
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
    <motion.div
      exit={{ x: -100, opacity: 0 }}
      className="relative flex flex-col h-full w-full justify-center items-center gap-4 py-6 px-6 lg:px-12 rounded-xl"
    >
      {/* TITLE TEXT */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, transition: { delay: 0.2 } }}
        className="flex flex-col justify-center items-center w-full gap-2 "
      >
        <h1 className="text-2xl xl:text-4xl  tracking-widest font-bold text-sky-500 text-center">
          Contact Me 📝
        </h1>
        <p className="text-center w-10/12 mx-auto font-medium tracking-wider text-sm text-neutral-600">
          Lets Get In Touch, if there are any questions you want to ask me feel
          free to either email me or give me a call.
        </p>
      </motion.div>
      {/* PHONE NUMBER, EMAIL ADDRESS, LOCATION */}
      <div className="w-full xl:w-10/12 flex flex-col justify-center xl:flex-row flex-wrap xl:flex-nowrap xl:justify-between items-center gap-2 mt-4">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.4, delay: 0.3 },
          }}
          className="relative flex flex-row items-center justify-center gap-2 bg-[rgba(0,0,0,.2)] rounded-xl px-4 py-2 personal-info-container w-full md:w-3/4 xl:w-fit"
        >
          <FaPhone className="z-10 flex items-center justify-center p-0 m-0 text-blue-600" />
          <p className="z-10 tracking-widest text-sm font-medium text-neutral-600 whitespce-nowrap">
            (732)-673-1556
          </p>
          <span className="border-bottom"></span>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.4, delay: 0.3 },
          }}
          className="relative  flex flex-row items-center justify-center gap-2 bg-[rgba(0,0,0,.2)] rounded-xl px-4 py-2 personal-info-container w-full md:w-3/4 xl:w-fit"
        >
          <MdOutlineEmail className="flex items-center justify-center p-0 m-0 text-blue-600" />
          <p className="tracking-widest text-sm font-medium text-neutral-600">
            retto12345678@gmail.com
          </p>
          <span className="border-bottom"></span>
        </motion.div>
      </div>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          transition: { duration: 0.4, delay: 0.4 },
        }}
        className="relative mx-auto flex flex-row justify-center xl:justify-start items-center bg-[rgba(0,0,0,.2)] gap-2 rounded-xl px-4 py-2 personal-info-container w-full md:w-3/4 xl:w-10/12"
      >
        <FaLocationPin className="flex items-center justify-center p-0 m-0 text-blue-600 " />
        <p className="tracking-widest text-sm font-medium text-neutral-600">
          New Jersey United States (EST)
        </p>
        <span className="border-bottom"></span>
      </motion.div>
      {/* SOCIALS */}
      <div className="flex flex-row gap-6 justify-center items-center mt-2 flex-wrap z-10 ">
        {socialIcons.map((icon, index) => (
          <motion.div
            initial={{ y: 25, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.25,
                delay: `${(index + 1) * 0.2 + 0.4}`,
              },
            }}
            key={index}
            className={`cursor-pointer text-lg rounded-full social-icon p-6 relative text-neutral-600 flex items-center justify-center transition duration-500 ${icon.title}-icon z-10`}
          >
            <a
              className="z-10 absolute text-2xl "
              href={icon.link}
              target="_blank"
            >
              {icon.icon}
            </a>
          </motion.div>
        ))}
      </div>
      {/* GET STARTED BUTTON */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 1 } }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onClick}
        className="cursor-pointer flex mt-4 flex-row gap-2 justify-center items-center get-started-btn bg-gradient-to-br from-sky-500 via-blue-500 to-sky-500 opacity-90 px-4 py-2 rounded-lg z-10"
      >
        <p className="font-bold tracking-widest italic text-lg text-neutral-300">
          Get Started
        </p>
        <GiStarsStack className="font-bold text-xl text-neutral-300" />
      </motion.div>
    </motion.div>
  );
};

const Slide = ({
  index,
  error,
  errorMessage,
  length,
  question,
  required,
  placeholders,
  expanded_text_field,
  formName,
  formData,
  setFormData,
  nextClick,
  submitClick,
  previousClick,
}) => {
  const containerExitAnimation =
    index === 0
      ? { display: "none" }
      : { opacity: 0, transition: { duration: 0.3 } };
  return (
    <motion.div
      initial={{ display: "none" }}
      animate={{ display: "flex", transition: { delay: 0.6 } }}
      exit={containerExitAnimation}
      className="relative flex flex-col h-full w-full justify-between items-between gap-4 overflow-hidden py-6 px-6 lg:px-12 rounded-xl"
    >
      {/* QUESTION */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.4, delay: 0.8 },
        }}
        exit={{ y: -10, opacity: 0, zIndex: -1, transition: { duration: 0.3 } }}
        className="w-full flex flex-row justify-between items-center "
      >
        <h1 className="tracking-widest font-bold text-neutral-300 text-lg sm:text-xl lg:text-2xl pt-4">
          {question}
        </h1>
        <p className="tracking-widest font-bold text-neutral-600 text-lg sm:text-xl lg:text-2xl pt-4 whitespace-nowrap">
          {index + 1} / {length}
        </p>
      </motion.div>
      {/* PROGRESS BAR */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, transition: { duration: 0.3, delay: 0.9 } }}
        className="relative rounded-xl h-2 w-full progress-bar overflow-hidden origin-left"
      >
        <motion.span
          initial={{ width: `${(index / length) * 100}%` }}
          animate={{
            width: `${((index + 1) / length) * 100}%`,
            transition: { duration: 0.4, ease: "easeInOut", delay: 1 },
          }}
          className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500"
        ></motion.span>
      </motion.div>

      {/* TEXT FIELDS */}
      <div className="w-full flex flex-row items-center justify-between gap-6 relative">
        {expanded_text_field === true ? (
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: { duration: 0.4, delay: 1.1 },
            }}
            className="contact-input-background relative overflow-hidden w-full rounded-xl px-6 py-3 z-0"
          >
            <textarea
              placeholder={error ? errorMessage : placeholders[0]}
              className={`contact-input relative z-10 w-full  ${
                error && "error-text-area"
              } text-neutral-300`}
              rows={10}
              onChange={(event) =>
                updateFormData(
                  event.target.value,
                  formData,
                  setFormData,
                  formName
                )
              }
            ></textarea>
          </motion.span>
        ) : (
          <>
            {placeholders.map((placeholder, index) => (
              <motion.span
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  transition: { duration: 0.4, delay: 1.1 },
                }}
                className="contact-input-background relative my-[6rem] w-full rounded-xl px-6 py-3 z-0 "
              >
                <input
                  placeholder={placeholder}
                  className="relative z-10 contact-input text-neutral-300 w-full "
                  onChange={(event) =>
                    updateFormData(
                      event.target.value,
                      formData,
                      setFormData,
                      formName,
                      index
                    )
                  }
                ></input>
                {!required && (
                  <label className="absolute top-[-25px] text-neutral-600 italic font-medium left-0 text-sm">
                    * optional *
                  </label>
                )}
              </motion.span>
            ))}
            <AnimatePresence>
              {error && (
                <motion.label
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  className="absolute top-0 text-red-600 font-medium left-0 text-sm tracking-widest"
                >
                  {errorMessage}
                </motion.label>
              )}
            </AnimatePresence>
          </>
        )}
      </div>

      {/* NEXT / PREVIOUS BUTTONS */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, transition: { duration: 0.3, delay: 0.9 } }}
        className="rounded-xl h-2 w-full progress-bar bg-red-400 relative overflow-hidden"
      ></motion.div>
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.4, delay: 0.8 },
        }}
        exit={{ y: 10, opacity: 0, zIndex: -1, transition: { duration: 0.3 } }}
        className="w-full flex flex-row justify-between items-center"
      >
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={previousClick}
          className="relative py-2 px-4 rounded-xl border-2 border-solid border-neutral-300 text-neutral-300 tracking-widest text-lg font-bold previous-btn transiton duration-200 overflow-hidden z-10"
        >
          Previous
        </motion.button>
        {index == length - 1 ? (
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={submitClick}
            className="cursor-pointer flex flex-row items-center justify-center gap-2 text-neutral-300 next-btn bg-gradient-to-br from-cyan-500 via-sky-500 to-blue-500 z-10 py-2 px-4 rounded-xl text-lg tracking-widest font-bold"
          >
            <p className="p-0 m-0">Submit</p>
            <BsDownload className="p-0 m-0 font-bold" />
          </motion.div>
        ) : (
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextClick}
            className="z-10 cursor-pointer flex flex-row items-center justify-center gap-2 text-neutral-300 next-btn bg-gradient-to-br from-cyan-500 via-sky-500 to-blue-500  py-2 px-4 rounded-xl text-lg tracking-widest font-bold"
          >
            <p className="p-0 m-0">Next</p>
            <BsFillMoonStarsFill className="p-0 m-0" />
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

const SuccessSlide = ({}) => {
  return (
    <motion.div
      initial={{ display: "none" }}
      animate={{ display: "flex", transition: { delay: 0.6 } }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      className="relative flex flex-col h-full w-full justify-center items-center w-10/12 md:w-3/4 lg:w-7/12 mx-auto gap-4 overflow-hidden py-6 px-6 lg:px-12 rounded-xl text-center"
    >
      {/* SUCCESS ICON */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.5 } }}
      >
        <Image
          alt=""
          src={"/images/successIcon.png"}
          width={200}
          height={200}
        />
      </motion.span>

      {/* TEXT */}
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.6 } }}
        className="text-neutral-300 font-bold text-3xl tracking-widest"
      >
        Success
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, delay: 0.7 },
        }}
        className="text-neutral-600 font-medium tracking-wider text-sm mx-auto"
      >
        Your Message Was Sent Successfully. I will make sure to get back to you
        as soon as I can.
      </motion.p>
      {/* RETURN HOME BUTTON */}
      <Link href={"/"}>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, delay: 0.9 },
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="cursor-pointer py-2 px-4 rounded-xl flex flex-row gap-4 items-center justify-center bg-gradient-to-br from-sky-500 via-blue-500 to-sky-500 text-neutral-300 font-bold tracking-widest text-md"
        >
          <p className="p-0 m-0">Home</p>
          <AiFillHome className="p-0 m-0 flex items-center justify-center text-lg" />
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default page;
