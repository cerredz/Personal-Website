"use client";
import { useSelector } from "react-redux";
import { client, urlFor } from "@/utils/Sanity";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import "../../../styles/navbar.css";
import "./styles.css";
import Image from "next/image";
import Label from "@/Widgets/Label";
import { FaAward } from "react-icons/fa";
import Loader from "@/Widgets/Loader";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { SiDevpost } from "react-icons/si";

export default function Page() {
  const dark = useSelector((state) => state.auth.dark);
  const pathname = usePathname();
  const [awardData, setAwardData] = useState(null);
  const [isHoveringTech, setIsHoveringTech] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      // extract the award Title from the url, then find it in sanity
      const awardTitle = pathname.split("/").pop().replace(/-/g, " ");
      const query = `*[_type == "awards" && award == "${awardTitle}"][0]`;
      const result = await client.fetch(query);

      if (!result) {
        console.log("Error Getting the Award Data for ", awardTitle);
        console.log(result);
        return;
      }

      setAwardData(result);
    };

    fetchData();
  }, []);
  return (
    <main
      className={`overflow-hidden font-primary p-0 m-0 min-h-screen flex items-center justify-center ${
        dark ? "bg-primary-dark" : "bg-primary-light"
      }`}
    >
      {awardData != null ? (
        <>
          {/* BACKGROUND IMAGE */}
          <Image
            src={dark ? "/images/awardDark.png" : "/images/awardLight.png"}
            alt="award-bg"
            layout="fill"
            quality={100}
            priority={true}
            className="fixed top-0 left-0 h-full w-full"
          />

          {/* MAIN CONTENT CONTAINER */}
          <div
            className={`py-10 px-20 relative award-container w-10/12 mx-auto backdrop-blur-sm rounded-2xl ${
              dark ? "bg-[rgba(255,255,255,.025)]" : "bg-[rgba(0,0,0,.025)]"
            } flex justify-center xl:items-center items-start flex-col xl:flex-row min-h-[70vh] gap-10 xl:gap-0`}
          >
            {/* TEXT CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
              className="flex flex-col gap-4 items-start justify-start basis-1/3 max-w-md"
            >
              <Label
                text={"Award"}
                icon={
                  <FaAward
                    className={`${
                      dark ? "text-yellow-400" : "text-yellow-300"
                    }`}
                  />
                }
                borderColor={`${
                  dark ? "border-yellow-400" : "border-yellow-300"
                }`}
                textColor={`${dark ? "text-yellow-400" : "text-yellow-300"}`}
                bgClassName={`award`}
              />
              {/* AWARD TITLE */}
              <h1
                className={`font-bold tracking-widest text-4xl ${
                  dark ? "text-neutral-300" : "text-neutral-800"
                }`}
              >
                {awardData.award}
              </h1>
              {/* OVERVIEW */}
              <div>
                <h3
                  className={`font-medium tracking-wider text-xl  ${
                    dark ? "text-neutral-400" : "text-neutral-700"
                  }`}
                >
                  Overview
                </h3>
                <p
                  className={`award-overview mt-2 text-sm font-medium max-h-[100px] overflow-y-auto scroll-smooth ${
                    dark ? "text-neutral-600" : "text-neutral-500"
                  }`}
                >
                  {awardData.overview}
                </p>
              </div>

              {/* TECHNOLOGIES */}
              <div>
                <h3
                  className={`font-medium tracking-wider text-xl ${
                    dark ? "text-neutral-400" : "text-neutral-700"
                  }`}
                >
                  Technologies
                </h3>
                <div className="mt-2 flex flex-row items-start justify-start flex-wrap gap-4 ">
                  {awardData.technologies.map((tech, index) => (
                    <div
                      onMouseEnter={() => setIsHoveringTech(tech)}
                      onMouseLeave={() => setIsHoveringTech(null)}
                      className="cursor-pointer relative p-2 rounded-full bg-[rgba(255,255,255,.05)] tech-icon "
                    >
                      <Image
                        src={`/images/skills/${tech.toLowerCase()}.png`}
                        alt={`${tech.toLowerCase()} logo`}
                        width={30}
                        height={30}
                      />
                      <AnimatePresence>
                        {isHoveringTech == tech && (
                          <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            className={`absolute bottom-[-35px] z-10 backdrop-blur-xl left-0 py-1 px-3 rounded-md text-sm font-medium tracking-widest ${
                              dark
                                ? "bg-[rgba(255,255,255,.05)] text-neutral-300"
                                : "bg-[rgba(0,0,0,.1)] text-neutral-800"
                            }`}
                          >
                            {tech}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>

              {/* LINKS */}
              <div>
                <h3
                  className={`font-medium tracking-wider text-xl ${
                    dark ? "text-neutral-400" : "text-neutral-700"
                  }`}
                >
                  Links
                </h3>
                <div className="mt-2 flex flex-row flex-wrap gap-2 ">
                  {awardData.github !== null && (
                    <>
                      <Link href={`${awardData.github}`} target="_blank">
                        <motion.div
                          whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.3, delay: 0 },
                          }}
                          whileTap={{ scale: 0.9 }}
                          className="cursor-pointer p-2 rounded-lg bg-[#1b1f23] award-icon z-20 w-fit "
                        >
                          <FaGithub className="text-2xl" />
                        </motion.div>
                      </Link>
                    </>
                  )}

                  {awardData.devpost && (
                    <Link href={awardData.devpost} target="_blank">
                      <motion.div
                        whileHover={{
                          scale: 1.1,
                          transition: { duration: 0.3, delay: 0 },
                        }}
                        whileTap={{ scale: 0.9 }}
                        className="cursor-pointer p-2 rounded-lg bg-[#084459] award-icon z-20 w-fit"
                      >
                        <SiDevpost className="text-2xl" />
                      </motion.div>
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>

            {/* IMAGE CONTENT */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                transition: { duration: 0.9, delay: 0.2 },
              }}
              className="relative flex items-center justify-center flex basis-2/3 items-center justify-center"
            >
              <Image
                src={urlFor(awardData.readMoreImage).url()}
                width={1000}
                height={1000}
                quality={100}
                priority={true}
                alt={awardData.award}
                className="relative w-full xl:w-[95%] mx-auto rounded-xl"
              />
            </motion.div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </main>
  );
}
