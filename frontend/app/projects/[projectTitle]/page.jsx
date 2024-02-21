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

export default function Page() {
  const dark = useSelector((state) => state.auth.dark);
  const pathname = usePathname();
  const [projectData, setProjectData] = useState(null);
  // get matching project data upon load
  useEffect(() => {
    const projectTitle = pathname.split("/").pop();
    setProjectData(getProjectData(projectTitle, projectsData()));
  }, []);

  return (
    <div>
      {projectData !== null ? (
        <>
          <main
            className={`overflow-hidden font-primary p-0 m-0 min-h-screen ${
              dark ? "bg-primary-dark" : "bg-primary-light"
            } flex flex-col lg:flex-row gap-20 items-center justify-center px-20 lg:px-36 mx-auto `}
          >
            {/* IMAGE CONTAINER */}
            <div className="flex items-center justify-center lg:basis-1/2 ">
              <Image
                quality={100}
                priority={true}
                src={projectData.readMoreImg}
                alt={projectData.title}
                height={1000}
                width={1000}
                className="  rounded-2xl"
                sizes=""
              />
            </div>
            {/* TEXT CONTAINER */}
            <div className="flex flex-col items-start justify-start lg:basis-1/2 gap-6">
              <h1
                style={{
                  backgroundImage: `${projectData.textColor}`,
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
                className={`font-bold text-5xl tracking-widest`}
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
              {projectData.paragraphs.awards !== null && (
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
                    {projectData.paragraphs.award.text}
                  </p>
                  {projectData.paragraphs.award.devpost && (
                    <p
                      className={`text-sm tracking-wide font-medium ${
                        dark ? "text-neutral-600" : "text-neutral-400"
                      }`}
                    >
                      To to view the devpost
                      <a
                        className="text-sky-500"
                        href={projectData.paragraphs.award.link}
                        target="_blank"
                      >
                        {" "}
                        click here
                      </a>
                    </p>
                  )}
                </div>
              )}
            </div>
          </main>
          <a href="/">back</a>
        </>
      ) : (
        <Loading></Loading>
      )}
    </div>
  );
}
