import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "../styles/About.css";
import { useSelector } from "react-redux";
import { VscDebugStart } from "react-icons/vsc";
import { RiComputerLine } from "react-icons/ri";
import { TbApi } from "react-icons/tb";
import { MdAlarmOn } from "react-icons/md";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";

/* ABOUT ME FACTS */
const Facts = ({ facts }) => {
  const dark = useSelector((state) => state.auth.dark);
  const [factNumber, setFactNumber] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <div className="flex flex-col justify-center items-center gap-10">
      {/* FACT AND ARROWS CONTAINER */}
      <div
        className={`flex flex-row w-full justify-between items-center gap-2`}
      >
        <div
          className={`p-3 hover:transition hover:duration-400 rounded-full cursor-pointer transition duration-400 ${
            dark
              ? "hover:bg-neutral-800 text-neutral-600"
              : "hover:bg-neutral-400 text-neutral-800"
          } `}
        >
          <IoIosArrowBack
            className={`flex items-center justify-center  text-4xl  font-bold m-0 `}
            onClick={() =>
              setFactNumber((prev) => (prev - 1 + facts.length) % facts.length)
            }
          />
        </div>
        {facts !== null &&
          facts.map((fact, index) => (
            <motion.p
              key={index}
              initial={{ x: 50, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: { duration: 0.4, ease: "easeInOut" },
              }}
              className={`fact-text text-md tracking-wider font-medium ml-3 ${
                dark ? "text-neutral-600" : "text-neutral-800"
              } ${index === factNumber ? "" : "hidden"}`}
            >
              {fact}
            </motion.p>
          ))}
        <div
          className={`p-3 hover:transition hover:duration-400 rounded-full cursor-pointer transition duration-400 ${
            dark
              ? "hover:bg-neutral-800 text-neutral-600"
              : "hover:bg-neutral-400 text-neutral-800"
          } `}
        >
          <IoIosArrowForward
            className={`flex items-center justify-center  text-4xl  font-bold m-0 `}
            onClick={() => setFactNumber((prev) => (prev + 1) % facts.length)}
          />
        </div>
      </div>
      {/* Circles on the bottom */}
      <div className="relative w-3/4 m-auto flex flex-row justify-between items-center gap-4">
        <motion.div
          style={{
            y: inView ? "0" : "50px",
            opacity: inView ? 1 : 0,
            transition: "all .4s ease-in-out .7s",
          }}
          className="flex flex-col justify-center items-center gap-2"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setFactNumber(0)}
            className={`shadow-md text-3xl font-light p-3 cursor-pointer rounded-full border-2 border-solid ${
              dark
                ? "border-cyan-300 text-neutral-200"
                : "border-cyan-400 text-neutral-800"
            }
            ${
              factNumber === 0
                ? "bg-gradient-to-br from-cyan-400 to-sky-500 border-none"
                : "bg-none"
            }
            `}
          >
            <VscDebugStart />
          </motion.div>

          <p
            className={`font-medium tracking-wider text-sm ${
              dark ? "text-neutral-600" : " text-neutral-800"
            }`}
          >
            The Start
          </p>
        </motion.div>

        <motion.div
          style={{
            y: inView ? "0" : "50px",
            opacity: inView ? 1 : 0,
            transition: "all .4s ease-in-out .9s",
          }}
          className="flex flex-col justify-center items-center gap-2"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setFactNumber(1)}
            className={`shadow-md text-3xl font-light p-3 cursor-pointer rounded-full border-2 border-solid ${
              dark
                ? "border-sky-300 text-neutral-200"
                : "border-sky-400 text-neutral-800"
            }
            ${
              factNumber === 1
                ? "bg-gradient-to-br from-sky-400 to-blue-400 border-none"
                : "bg-none"
            }
            `}
          >
            <RiComputerLine />
          </motion.div>

          <p
            className={`font-medium tracking-wider text-sm ${
              dark ? "text-neutral-600" : " text-neutral-800"
            }`}
          >
            First Languages
          </p>
        </motion.div>
        <motion.div
          style={{
            y: inView ? "0" : "50px",
            opacity: inView ? 1 : 0,
            transition: "all .4s ease-in-out 1.1s",
          }}
          className="flex flex-col justify-center items-center gap-2"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setFactNumber(2)}
            className={`shadow-md text-3xl font-light p-3 cursor-pointer rounded-full border-2 border-solid ${
              dark
                ? "border-blue-300 text-neutral-200"
                : "border-blue-400 text-neutral-800"
            }
            ${
              factNumber === 2
                ? "bg-gradient-to-br from-blue-400 to-blue-700 border-none"
                : "bg-none"
            }
            `}
          >
            <TbApi />
          </motion.div>

          <p
            className={`font-medium tracking-wider text-sm ${
              dark ? "text-neutral-600" : " text-neutral-800"
            }`}
          >
            Full-Stack Projects
          </p>
        </motion.div>
        <motion.div
          style={{
            y: inView ? "0" : "50px",
            opacity: inView ? 1 : 0,
            transition: "all .4s ease-in-out 1.3s",
          }}
          className="flex flex-col justify-center items-center gap-2"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setFactNumber(3)}
            className={`shadow-md text-3xl font-light p-3 cursor-pointer rounded-full border-2 border-solid ${
              dark
                ? "border-purple-500 text-neutral-200"
                : "border-purple-600 text-neutral-800"
            }
            ${
              factNumber === 3
                ? "bg-gradient-to-br from-purple-400 to-purple-600 border-none"
                : "bg-none"
            }
            `}
          >
            <MdAlarmOn />
          </motion.div>

          <p
            className={`font-medium tracking-wider text-sm ${
              dark ? "text-neutral-600" : " text-neutral-800"
            }`}
          >
            Today
          </p>
        </motion.div>
        <div className="absolute bottom-[-100px] left-0 w-full flex justify-center items-center">
          <motion.h1
            ref={ref}
            style={{
              y: inView ? "0" : "50px",
              opacity: inView ? "1" : "0",
              transition: "all .4s ease-in-out 1.4s",
            }}
            className={`text-6xl hidden xl:block font-black tracking-widest whitespace-nowrap ${
              dark ? "bg-dark-text" : "text-neutral-200"
            }`}
          >
            My Journey
          </motion.h1>
        </div>
      </div>
    </div>
  );
};

export default Facts;
