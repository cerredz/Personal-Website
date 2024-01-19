import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Title = ({
  text,
  backgroundText,
  color,
  dark,
  translateX,
  translateY,
}) => {
  const [ref, inView] = useInView();
  return (
    <div className="flex flex-row justify-between items-center relative gap-2 ">
      <motion.span
        ref={ref}
        style={{
          transform: inView ? "none" : "translateY(50px)",
          opacity: inView ? 1 : 0,
          transition: "all .4s ease-in-out .4s",
        }}
        className={`h-1 w-12 rounded-sm ${color} relative z-10`}
      ></motion.span>
      <motion.h3
        ref={ref}
        style={{
          transform: inView ? "none" : "translateY(50px)",
          opacity: inView ? 1 : 0,
          transition: "all .4s ease-in-out .4s",
        }}
        className={`text-3xl tracking-widest font-light tracking-wide relative z-10 ${
          dark ? "text-neutral-200" : "text-neutral-700"
        }`}
      >
        {text}
      </motion.h3>
      <div
        className={`absolute whitespace-nowrap hidden lg:block text-8xl transform ${translateY} ${translateX}`}
      >
        <motion.h1
          ref={ref}
          style={{
            transform: inView ? "none" : "translateY(50px)",
            opacity: inView ? 1 : 0,
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
  );
};

export default Title;
