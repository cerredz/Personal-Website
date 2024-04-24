import { motion, LazyMotion, domAnimation, m } from "framer-motion";
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
  // random indexes for animations
  function generateRandomIndexes() {
    const randomIndexes = [];
    while (randomIndexes.length < 3) {
      const randomIndex = Math.floor(Math.random() * 7);
      if (!randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex);
      }
    }
    return randomIndexes;
  }

  const [numbers, setNumbers] = useState(generateRandomNumbers());
  const [indexes, setIndexes] = useState(generateRandomIndexes());

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
          exit={{
            width: "0%",
            height: "10px",
            top: "0%",

            transition: {
              width: { duration: 0.6, delay: 1.9 },
              height: { duration: 0.8, delay: 1 },
              top: { duration: 0.9, delay: 0.1 },
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
          exit={{
            width: "0%",
            height: "10px",
            top: "0%",
            transition: {
              width: { duration: 0.6, delay: 1.9 },
              height: { duration: 0.8, delay: 1 },
              top: { duration: 0.9, delay: 0.1 },
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
        exit={{
          zIndex: 74,
          opacity: 0,
          transition: { opacity: { delay: 0.9 } },
        }}
        className={`${
          background === "blue" ? "blue-bg" : "pink-bg"
        } fixed top-0 left-0 w-screen h-screen backdrop-blur-lg flex justify-center items-center flex-col gap-8 overflow-hidden `}
      >
        <div
          className={`cursor-pointer absolute right-[25px] p-2 rounded-full top-[25px] transition duration-400 hover:transition hover:duration-400 ${
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
          className={`relative z-10 leading-relaxed text-center flex items-center justify-center flex-col gap-4  mx-auto w-4/5 md:w-2/3 lg:w-1/2 xl:w-2/5 read-more-container `}
        >
          {/* TITLE */}
          <div
            className={`py-2 rounded-xl bg-[rgba(255,255,255,.05)] flex items-center justify-center text-center backdrop-blur-2xl w-full container-inset-shadow`}
          >
            <h1
              className={` text-3xl font-bold tracking-widest lg:text-5xl ${
                className === "teamwork" && "text-xl lg:text-3xl"
              } ${textColor} `}
            >
              {title}
            </h1>
          </div>

          {/* DESCRIPTION */}
          <div
            className={`rounded-xl flex bg-[rgba(255,255,255,.05)] items-center justify-center flex-col gap-4 text-center backdrop-blur-2xl w-full py-6 px-12 container-inset-shadow`}
          >
            <p
              className={`z-10 text-sm font-medium lg:w-11/12 lg:mx-auto tracking-wider text-neutral-300`}
            >
              {description}
            </p>
            <motion.button
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              className={`py-1 px-4 rounded-md backdrop-blur-xl  tracking-widest text-medium font-bold
              transition duration-400 text-neutral-600 ${className}-text hover:transition hover:duration-400 hover:bg-[rgba(255,255,255,.1)]`}
              onClick={clickEvent}
            >
              View More Skills
            </motion.button>
          </div>

          {/* BACKGROUND IMAGES */}
          {images.map((image, index) => (
            <motion.div
              className={`hidden md:block bg-image bg-image-index-${index} flex items-center justify-center `}
              key={index}
              animate={indexes.includes(index) ? { y: [0, -20, 0] } : {}}
              transition={{
                repeat: Infinity,
                duration: 10,
                ease: "easeInOut",
                delay: Math.random() * 3 + 1,
              }}
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
