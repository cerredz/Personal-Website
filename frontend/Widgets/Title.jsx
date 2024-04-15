import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "../styles/title.css";
const Title = ({
  text,
  backgroundText,
  color,
  dark,
  translateX,
  translateY,
  subtitle,
  beforeGradient,
  afterGradient,
}) => {
  const [spanRef, spanInView] = useInView();
  const [h3Ref, h3InView] = useInView();
  const [h1Ref, h1InView] = useInView();
  const [pRef, pInView] = useInView();

  return (
    <div className="flex flex-col items-center justify-between gap-8">
      <div className="flex flex-row justify-between items-center relative gap-2 ">
        {/* TITLE */}
        <motion.h3
          ref={h3Ref}
          style={{
            transform: h3InView ? "none" : "translateY(50px)",
            opacity: h3InView ? 1 : 0,
            transition: "all .4s ease-in-out .4s",
          }}
          className={`sm:text-6xl lg:text-4xl tracking-widest font-light relative z-10 title ${
            dark ? "text-neutral-200" : "text-neutral-700"
          } ${beforeGradient} ${afterGradient}`}
        >
          {text}
        </motion.h3>
        {/* GRAY BACKGROUND TEXT */}
        <div
          className={`absolute whitespace-nowrap hidden lg:block text-8xl transform ${translateY} ${translateX} z-10`}
        >
          <motion.h1
            ref={h1Ref}
            style={{
              transform: h1InView ? "none" : "translateY(50px)",
              opacity: h1InView ? 1 : 0,
              transition: "all .4s ease-in-out .2s",
            }}
            className={`relative z-0 font-normal tracking-widest text-opacity-5 ${
              dark ? "text-neutral-200" : "text-neutral-700"
            }  `}
          >
            {backgroundText}
          </motion.h1>
        </div>
      </div>
      {/* SUBTITLE */}
      {subtitle !== null && (
        <motion.p
          ref={pRef}
          style={{
            transform: h1InView ? "none" : "translateY(50px)",
            opacity: h1InView ? 1 : 0,
            transition: "all .4s ease-in-out .2s",
          }}
          className={`text-md font-bold tracking-widest ${
            dark ? "text-neutral-500" : "text-neutral-400"
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default Title;
