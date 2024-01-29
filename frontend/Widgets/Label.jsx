import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { useInView } from "framer-motion";
import "../styles/Label.css";

const Label = ({
  style,
  icon,
  text,
  fontStyle,
  color,
  textColor,
  bgClassName,
  borderColor,
}) => {
  const dark = useSelector((state) => state.auth.dark);

  return (
    <motion.div
      style={style}
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
