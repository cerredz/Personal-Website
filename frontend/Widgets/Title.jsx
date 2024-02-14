import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Title = ({
  text,
  backgroundText,
  color,
  dark,
  translateX,
  translateY,
  subtitle,
}) => {
  const [spanRef, spanInView] = useInView();
  const [h3Ref, h3InView] = useInView();
  const [h1Ref, h1InView] = useInView();
  const [pRef, pInView] = useInView();

  return (
    <div className="flex flex-col items-center justify-between gap-8">
      <div className="flex flex-row justify-between items-center relative gap-2 ">
        <motion.span
          ref={spanRef}
          style={{
            transform: spanInView ? "none" : "translateY(50px)",
            opacity: spanInView ? 1 : 0,
            transition: "all .4s ease-in-out .4s",
          }}
          className={`h-1 w-12 rounded-sm ${color} relative z-10`}
        ></motion.span>
        <motion.h3
          ref={h3Ref}
          style={{
            transform: h3InView ? "none" : "translateY(50px)",
            opacity: h3InView ? 1 : 0,
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
