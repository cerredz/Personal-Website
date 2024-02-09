import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import "../styles/Skills.css";
import { useState } from "react";
import Image from "next/image";

export const ReadMore = ({
  title,
  description,
  clickEvent,
  className,
  dark,
  textColor,
  background,
  images,
}) => {
  // random height and width values for the background images
  function generateRandomNumbers() {
    const numbers = [];
    for (let i = 0; i < 7; i++) {
      const randomNumber = Math.floor(Math.random() * (100 - 60 + 1)) + 40;
      numbers.push(randomNumber);
    }
    return numbers;
  }

  const [numbers, setNumbers] = useState(generateRandomNumbers());

  return (
    <>
      {/* DIV USED FOR TRANSITIONS */}
      <motion.div className="fixed top-0 left-0 w-screen h-screen z-75">
        <motion.span
          initial={{ width: 0, zIndex: 101 }}
          animate={{
            width: "50%",
            height: "100%",
            top: "100%",
            transition: {
              width: { duration: 0.6, delay: 0.1 },
              height: { duration: 0.8, delay: 0.8 },
              top: { duration: 0.9, delay: 1.6 },
            },
          }}
          className={`fixed top-0 left-0 h-[10px] ${className}-span`}
        ></motion.span>
        <motion.span
          initial={{ width: 0, zIndex: 101 }}
          animate={{
            width: "50%",
            height: "100%",
            top: "100%",
            transition: {
              width: { duration: 0.6, delay: 0.1 },
              height: { duration: 0.8, delay: 0.8 },
              top: { duration: 0.9, delay: 1.6 },
            },
          }}
          className={`fixed right-0 top-0 h-[10px] ${className}-span`}
        ></motion.span>
      </motion.div>

      {/* ACTUAL CONTENT DIV */}
      <motion.div
        initial={{ opacity: 0, zIndex: 74 }}
        animate={{
          opacity: 1,
          zIndex: 100,
          transition: { opacity: { delay: 1.5 }, zIndex: { delay: 2.5 } },
        }}
        className={`${
          background === "blue" ? "blue-bg" : "pink-bg"
        } fixed top-0 left-0 w-screen h-screen backdrop-blur-lg flex justify-center items-center flex-col gap-8 overflow-hidden`}
      >
        <div
          className={`cursor-pointer absolute right-[25px] p-2 rounded-full top-[25px] transition duration-400 hover:transition hover:duration-400 hover:rotate-180 ${
            dark
              ? "bg-[rgba(255,255,255,.05)] hover:bg-[rgba(255,255,255,.15)] "
              : "bg-[rgba(0,0,0,.05)] hover:bg-[rgba(0,0,0,.15)]"
          }`}
        >
          <IoMdClose
            onClick={clickEvent}
            className="text-3xl font-bold "
            style={{ zIndex: 101 }}
          />
        </div>

        <div
          className={`relative z-10 leading-relaxed text-center flex items-center justify-center flex-col gap-4  mx-auto w-4/5 md:w-2/3 lg:w-2/5 read-more-container `}
        >
          {/* TITLE */}
          <div
            className={`py-2 rounded-xl flex items-center justify-center text-center backdrop-blur-2xl w-full ${
              dark
                ? "bg-[rgba(255,255,255,.05)] dark-inset-shadow"
                : "bg-[rgba(0,0,0,.05)] light-inset-shadow "
            }`}
          >
            <h1
              className={` text-3xl font-bold tracking-widest lg:text-5xl ${
                className === "teamwork" && "text-xl lg:text-3xl"
              }`}
              style={{
                backgroundImage: textColor,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                textShadow: "1px 1px 50px #000",
              }}
            >
              {title}
            </h1>
          </div>

          {/* DESCRIPTION */}
          <div
            className={`rounded-xl flex items-center justify-center flex-col gap-4 text-center backdrop-blur-2xl w-full py-6 px-12   ${
              dark
                ? "bg-[rgba(255,255,255,.05)] dark-inset-shadow"
                : "bg-[rgba(0,0,0,.05)] light-inset-shadow"
            }`}
          >
            <p
              className={`z-10 text-sm font-medium lg:w-11/12 lg:mx-auto ${
                dark ? "text-neutral-400" : "text-neutral-600"
              } tracking-wider `}
            >
              {description}
            </p>
            <button
              className="border py-1 px-4 rounded-md"
              onClick={clickEvent}
            >
              View More Skillssss
            </button>
          </div>

          {/* BACKGROUND IMAGES */}
          {images.map((image, index) => (
            <motion.div
              className={`hidden lg:block bg-image bg-image-index-${index}`}
              key={index}
            >
              <Image
                src={image.src}
                alt="bg-image"
                height={numbers[index]}
                width={numbers[index]}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
};
