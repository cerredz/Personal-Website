import { BsMouse } from "react-icons/bs";
import { useSelector } from "react-redux";
import "../styles/Mouse.css";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { scrollToSection } from "@/utils/Mouse";

const Mouse = ({ above, below }) => {
  const dark = useSelector((state) => state.auth.dark);
  const [isHoveringMouseIcon, setIsHoveringMouseIcon] = useState(false);

  return (
    <div className="flex flex-row justify-center items-center gap-2">
      <motion.div
        onMouseEnter={() => setIsHoveringMouseIcon(true)}
        onMouseLeave={() => setIsHoveringMouseIcon(false)}
        className={`relative p-3 rounded-full text-2xl cursor-pointer ${
          dark ? "dark-mouse text-neutral-500" : "light-mouse text-neutral-800"
        }`}
      >
        {/* ARROWS */}
        <AnimatePresence>
          {isHoveringMouseIcon && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute top-[2px] mouse-up-arrow "
              >
                <HiOutlineArrowLongRight
                  className={` ${
                    dark ? "text-neutral-500" : "text-neutral-300"
                  }`}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute bottom-[2px] mouse-down-arrow "
              >
                <HiOutlineArrowLongRight
                  className={` ${
                    dark ? "text-neutral-500" : "text-neutral-300"
                  }`}
                />
              </motion.div>

              {/* TEXT */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
                className="absolute top-[2px] left-1/2 text-up text-xs font-medium tracking-widest"
                onClick={() => scrollToSection(above)}
              >
                <p>{above}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
                className="absolute bottom-[2px] left-1/2 text-down text-xs font-medium tracking-widest"
                onClick={() => scrollToSection(below)}
              >
                <p>{below}</p>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <BsMouse
          className={` ${dark ? "text-neutral-300" : "text-neutral-800"}`}
        />
      </motion.div>
      <p className={`text-neutral-500 text-xs font-normal tracking-widest`}>
        Travel to..
      </p>
    </div>
  );
};

export default Mouse;
