import Image from "next/image";
import "../styles/Quotes.css";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Quote = ({
  background,
  quote,
  name,
  translateXOpen,
  translateYOpen,
  translateXClose,
  translateYClose,
}) => {
  const dark = useSelector((state) => state.auth.dark);
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <div
      className={`${
        dark
          ? "quotes-container bg-[#18181A]"
          : "quotes-light-container bg-[#c6c6c6]"
      } relative flex flex-col items-center justify-center w-full h-auto py-24 hidden md:flex`}
    >
      {/* QUOTATION MARK ICONS */}
      <motion.div
        ref={ref}
        style={{
          opacity: inView ? 1 : 0,
          transition: "all .5s ease-in-out .7s",
        }}
        className={`absolute transform ${translateXOpen} ${translateYOpen}`}
      >
        <FaQuoteLeft
          className={`text-4xl ${
            dark ? "text-neutral-800" : "text-neutral-400"
          }`}
        />
      </motion.div>
      <motion.div
        ref={ref}
        style={{
          opacity: inView ? 1 : 0,
          transition: "all .5s ease-in-out .7s",
        }}
        className={`absolute transform ${translateXClose} ${translateYClose}`}
      >
        <FaQuoteRight
          className={`text-4xl ${
            dark ? "text-neutral-800" : "text-neutral-400"
          }`}
        />
      </motion.div>

      {/* TEXT */}
      <motion.h3
        ref={ref}
        style={{
          y: inView ? "0" : "50px",
          opacity: inView ? 1 : 0,
          transition: "all .4s ease-in-out .5s",
        }}
        className={`z-10 max-w-xl tracking-wider font-normal text-center text-md ${
          dark ? "text-neutral-700" : "text-neutral-400"
        }`}
      >
        {quote}
      </motion.h3>

      <motion.p
        ref={ref}
        style={{
          y: inView ? "0" : "50px",
          opacity: inView ? 1 : 0,
          transition: "all .4s ease-in-out .5s",
        }}
        className={`z-10 tracking-wider text-center text-lg ${
          dark ? "text-neutral-200" : "text-neutral-700"
        }`}
      >
        - {name}
      </motion.p>
    </div>
  );
};

export default Quote;
