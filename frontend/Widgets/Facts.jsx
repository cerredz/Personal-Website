import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "../styles/About.css";
import { useSelector } from "react-redux";
/* FACT SLIDESHOW FOR A CLOUD */
const Facts = ({ facts }) => {
  const dark = useSelector((state) => state.auth.dark);
  const [factNumber, setFactNumber] = useState(0);

  return (
    <div className="flex flex-col justify-center items-center gap-3">
      {/* FACT AND ARROWS CONTAINER */}
      <div
        className={`flex flex-row w-full justify-between items-center gap-2`}
      >
        <IoIosArrowBack
          className={`flex items-center justify-center p-1 text-3xl font-bold m-0 cursor-pointer transition duration-400 rounded-full ${
            dark ? "hover:bg-neutral-700" : "hover:bg-neutral-400"
          }`}
          onClick={() =>
            setFactNumber((prev) => (prev - 1 + facts.length) % facts.length)
          }
        />
        {facts !== null &&
          facts.map((fact, index) => (
            <AnimatePresence key={index}>
              {index == factNumber && (
                <motion.p
                  key={index}
                  initial={{ x: 50 }}
                  animate={{
                    x: 0,
                  }}
                  className={`fact-text-cloud-1 text-sm ml-3 ${
                    dark ? "text-neutral-200" : "text-neutral-800"
                  }`}
                >
                  {fact}
                </motion.p>
              )}
              <motion.p className={`fact-text-cloud-1 text-sm ml-3 hidden`}>
                {fact}
              </motion.p>
            </AnimatePresence>
          ))}
        <IoIosArrowForward
          className={`flex items-center justify-center p-1 text-3xl font-bold m-0 cursor-pointer transition duration-400 rounded-full ${
            dark ? "hover:bg-neutral-700" : "hover:bg-neutral-400"
          }`}
          onClick={() => setFactNumber((prev) => (prev + 1) % facts.length)}
        />
      </div>
      {/* DOTS ON THE BOTTOM */}
      <div className="relative w-1/6 m-auto flex flex-row justify-between items-center">
        {facts !== null &&
          facts.map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-full ${
                index === factNumber ? "bg-white" : "bg-neutral-500"
              }`}
            ></span>
          ))}
      </div>
    </div>
  );
};

export default Facts;
