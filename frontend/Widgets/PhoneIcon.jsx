"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export const PhoneIcon = ({
  className,
  background,
  src,
  alt,
  text,
  dark,
  clickEvent,
  redirect,
}) => {
  const [hoveringIcon, setHoveringIcon] = useState(null);
  let hoveringTextColor = dark ? "text-neutral-300" : "text-neutral-800";
  let hoveringBackgroundColor = dark ? "bg-[#0F0F0F]" : "bg-neutral-100";

  useEffect(() => {
    hoveringTextColor = dark ? "text-neutral-300" : "text-neutral-800";
    hoveringBackgroundColor = dark ? "bg-[#0F0F0F]" : "bg-neutral-100";
  }, [dark]);

  return (
    <motion.div
      onMouseEnter={() => setHoveringIcon(className)}
      onMouseLeave={() => setHoveringIcon(null)}
      onClick={() => (clickEvent ? window.open(redirect, "_blank") : "")}
      className="relative overflow-visible cursor-pointer "
      whileTap={{ scale: 0.9 }}
    >
      <div
        className={`z-10 relative phone-icon-container py-3 cursor-pointer flex justify-center rounded-lg items-center 
    ${background}  ${className}`}
      >
        <Image
          src={src}
          alt={alt}
          height={30}
          width={30}
          className={`phone-icon relative ${className}-icon`}
        />
      </div>

      {/* HOVERING ANIMATION */}
      <AnimatePresence>
        {hoveringIcon == className && (
          <motion.div
            initial={{ y: 25, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.5, ease: "easeInOut" },
            }}
            exit={{
              y: 25,
              opacity: 0,
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
            className={`shadow-md absolute bottom-[-40px] left-0 overflow-visible z-50  whitespace-nowrap`}
          >
            <div className="relative z-50 flex flex-col">
              <p
                className={`-mt-2 rounded-md hovering-text font-normal italic ${hoveringTextColor} ${hoveringBackgroundColor} px-3 py-1 relative z-10`}
              >
                {text}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
