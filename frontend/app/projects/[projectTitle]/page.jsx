"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { projectsData } from "@/data";
import { getProjectData } from "@/utils/Project";
import Loading from "@/app/loading";
import { useSelector } from "react-redux";
import "../../../styles/navbar.css";
import "../../../styles/globals.css";
import Image from "next/image";
import { client, urlFor } from "@/utils/Sanity";
import { motion } from "framer-motion";
import { viewMoreProjects } from "@/utils/Project";
import { IoLogoReact } from "react-icons/io5";
import { IoCodeSlash } from "react-icons/io5";

import "./styles.css";

export default function Page() {
  const dark = useSelector((state) => state.auth.dark);
  const pathname = usePathname();
  const [projectData, setProjectData] = useState(null);
  // get matching project data upon load
  useEffect(() => {
    const fetchData = async () => {
      // extract the title from the url, then find it in sanity
      const projectTitle = pathname.split("/").pop().replace(/-/g, " ");
      const query = `*[_type == "projects" && title == "${projectTitle}"][0]`;
      const result = await client.fetch(query);

      if (!result) {
        console.log("Error Getting the Project Data for", projectTitle);
        console.log(result);
        return;
      }

      setProjectData(result);
    };

    fetchData();
  }, []);

  return (
    <div>
      {projectData !== null ? (
        <>
          <div
            className={`overflow-hidden font-primary p-0 m-0 min-h-screen ${
              dark ? "bg-primary-dark" : "bg-primary-light"
            } flex flex-col xl:flex-row gap-20 items-center justify-center px-20 xl:px-36 mx-auto pt-40 pb-20 `}
          >
            {/* BACKGOUND ICONS */}
            <BackgroundIcons />
            {/* BACKGROUND IMAGE */}
            <Image
              quality={100}
              priority={true}
              src={"/images/projects/readMoreBackground.png"}
              alt=""
              width={1920}
              height={1080}
              className="absolute z-1 top-0 left-0 w-full h-[full] background-img hidden xl:block"
            />
            {/* IMAGE CONTAINER */}
            <div className="flex items-center justify-center xl:basis-3/5 ">
              <Image
                quality={100}
                priority={true}
                src={urlFor(projectData.readMoreImg).url()}
                alt={projectData.title}
                height={1000}
                width={1000}
                className="z-10  rounded-2xl"
                sizes=""
              />
            </div>
            {/* TEXT CONTAINER */}
            <div className="flex flex-col items-start justify-start xl:basis-2/5 gap-6 z-10">
              <h1
                style={{
                  backgroundImage: `${projectData.textColor}`,
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
                className={`font-bold text-5xl tracking-widest text-center`}
              >
                {projectData.title}
              </h1>
              {/* OVERVIEW  */}
              <div
                className={`flex flex-col gap-2 items-start justify-start  `}
              >
                <h1
                  className={` text-lg tracking-widest font-medium ${
                    dark ? "text-neutral-300" : "text-neutral-800"
                  }`}
                >
                  Overview
                </h1>
                <p
                  className={`text-sm tracking-wide font-medium ${
                    dark ? "text-neutral-600" : "text-neutral-400"
                  }`}
                >
                  {projectData.paragraphs.overview}
                </p>
              </div>
              {/* TECHNOLOGIES USED  */}
              {projectData.paragraphs.technologies !== null && (
                <div className="flex flex-col gap-2 items-start justify-start">
                  <h1
                    className={` text-lg tracking-widest font-medium ${
                      dark ? "text-neutral-300" : "text-neutral-800"
                    }`}
                  >
                    Technologies Used
                  </h1>
                  <p
                    className={`text-sm tracking-wide font-medium ${
                      dark ? "text-neutral-600" : "text-neutral-400"
                    }`}
                  >
                    {projectData.paragraphs.technologies}
                  </p>
                </div>
              )}
              {/* FEATURES  */}
              <div className="flex flex-col gap-2 items-start justify-start">
                <h1
                  className={` text-lg tracking-widest font-medium ${
                    dark ? "text-neutral-300" : "text-neutral-800"
                  }`}
                >
                  Features
                </h1>
                <ul>
                  {projectData.paragraphs.features.map((feature, index) => (
                    <li
                      key={index}
                      className={`text-sm tracking-wide font-medium ${
                        dark ? "text-neutral-600" : "text-neutral-400"
                      }`}
                    >
                      {" "}
                      - {feature}
                    </li>
                  ))}
                </ul>
              </div>
              {/* AWARDS  */}
              {projectData.paragraphs.awards && (
                <div className="flex flex-col gap-2 items-start justify-start">
                  <h1
                    className={` text-lg tracking-widest font-medium ${
                      dark ? "text-neutral-300" : "text-neutral-800"
                    }`}
                  >
                    Awards Won
                  </h1>
                  <p
                    className={`text-sm tracking-wide font-medium ${
                      dark ? "text-neutral-600" : "text-neutral-400"
                    }`}
                  >
                    {projectData.paragraphs.awards.text}
                  </p>
                </div>
              )}
              {projectData.paragraphs.devpost && (
                <p
                  className={`text-sm tracking-wide font-medium ${
                    dark ? "text-neutral-600" : "text-neutral-400"
                  }`}
                >
                  To to view the devpost
                  <a
                    className="text-sky-500"
                    href={projectData.paragraphs.devpost}
                    target="_blank"
                  >
                    {" "}
                    click here
                  </a>
                </p>
              )}
            </div>
            <div
              className={`absolute bottom-[20px] flex items-center justify-center pb-10 ${
                dark ? "bg-primary-dark" : "bg-primary-light"
              }`}
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  background: `${projectData.textColor}`,
                  boxShadow: "inset 0 0 15px rgba(255,255,255,.2)",
                }}
                className={`px-6 py-2 rounded-lg italic font-bold tracking-wider text-neutral-300 `}
                onClick={() => viewMoreProjects()}
              >
                View More Projects
              </motion.button>
            </div>
          </div>
        </>
      ) : (
        <Loading></Loading>
      )}
    </div>
  );
}

const BackgroundIcons = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 0.25, y: 0, transition: { delay: 0.6 } }}
        className="absolute bottom-[150px] left-[25px] z-10 hidden xl:block"
      >
        <IoLogoReact className="text-5xl rotate-45 text-neutral-500 " />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 0.25, x: 0, transition: { delay: 0.8 } }}
        className="absolute bottom-[40px] left-[300px] z-10"
      >
        <IoCodeSlash className="text-5xl -rotate-12 text-neutral-500 hidden xl:block" />
      </motion.div>
    </>
  );
};
