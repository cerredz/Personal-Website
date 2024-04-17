import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { useInView } from "framer-motion";
import "../styles/Label.css";

const Label = ({
  icon,
  text,
  fontStyle,
  color,
  textColor,
  bgClassName,
  borderColor,
}) => {
  const dark = useSelector((state) => state.auth.dark);
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      style={{
        opacity: isInView ? "1" : 0,
        transition: "all .6s ease-in-out .3s",
      }}
      className={`overflow-hidden flex flex-row items-center justify-between w-min gap-3 label rounded-2xl relative border border-solid  py-1 px-4 ${bgClassName} ${borderColor}`}
    >
      {icon}
      <p
        className={`whitespace-nowrap text-sm tracking-wider font-bold ${textColor}`}
      >
        {text}
      </p>
    </motion.div>
  );
};

export default Label;
