import Image from "next/image";
import "../styles/Quotes.css";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
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
  landing,
}) => {
  const dark = useSelector((state) => state.auth.dark);
  const ref = useRef(null);
  const inView = useInView(ref);
  let quoteArray = quote.split(" ");
  const [audio, setAudio] = useState(new Audio("/sounds/typing.mp3"));
  const [audioPlayed, setAudioPlayed] = useState(false);

  // handle background typing audio
  useEffect(() => {
    if (inView && !audioPlayed) {
      audio.volume = 0.5;
      // synce the audio with the typing animation
      setTimeout(() => {
        audio.play();
        setAudioPlayed(true);
      }, [500]);
      setTimeout(() => {
        audio.pause();
        audio.currentTime = 0;
      }, [quoteArray.length * 1000 * 0.15 + 1000]);
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  }, [inView]);

  return (
    <div
      className={`${
        dark
          ? "quotes-container bg-[#18181a]"
          : "quotes-light-container bg-[#c6c6c6]"
      } relative flex flex-col items-center justify-center w-full h-auto py-24 hidden md:flex `}
    >
      {/* SPECIAL CASE FOR TOP HAlf circle right below the landing page */}
      {landing && (
        <>
          <span className="left-glow"></span>
          <span className="right-glow"></span>
        </>
      )}
      {/* QUOTATION MARK ICONS */}
      <motion.div
        ref={ref}
        style={{
          opacity: inView ? 1 : 0,
          transition: "all .5s ease-in-out .3s",
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
          transition: "all .5s ease-in-out .3s",
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
      <div
        className={`flex flex-row flex-wrap gap-1 justify-center items-center z-10 max-w-xl tracking-wider font-normal text-center text-md ${
          dark ? "text-neutral-700" : "text-neutral-400"
        }`}
      >
        {quoteArray.map((word, index) => (
          <p
            key={index}
            ref={ref}
            style={{
              opacity: inView ? 1 : 0,
              transition: `.4s ease-in-out ${index * 0.15 + 0.5}s`,
            }}
          >
            {word + " "}{" "}
          </p>
        ))}
      </div>

      <motion.p
        ref={ref}
        style={{
          y: inView ? "0" : "20px",
          opacity: inView ? 1 : 0,
          transition: `all .8s ease-in-out ${quoteArray.length * 0.15 + 0.5}s`,
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
