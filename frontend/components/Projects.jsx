import Title from "@/Widgets/Title";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { projectFilters, projectsData } from "@/data";
import { BsArrowsAngleExpand } from "react-icons/bs";
import Loading from "@/app/loading";
import "../styles/projects.css";
import { motion } from "framer-motion";
import Image from "next/image";
const Projects = () => {
  const dark = useSelector((state) => state.auth.dark);
  const [filters, setFilters] = useState(null);
  const [activeFilter, setActiveFilter] = useState(0);
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    setFilters(projectFilters);
    setProjects(projectsData);
  }, []);

  return (
    <section
      id="projects"
      className=" relative flex flex-col items-center justify-center mt-24 pt-10 md:pt-0 mb-10 "
    >
      <div className="flex items-center justify-center mb-16">
        <Title
          text={"Projects"}
          backgroundText={"<Explore My Work />"}
          subtitle="Browse through my latest Software Engineering creations and projects."
          dark={dark}
          color={`${dark ? "bg-fuchsia-600" : "bg-fuchsia-400"}`}
          translateX="-translate-x-[27rem]"
          translateY={"-translate-y-2"}
        />
      </div>
      {/* FILTERS */}
      <div
        className={`relative flex flex-row items-center justify-center filters rounded-3xl  z-10`}
      >
        {filters !== null ? (
          <>
            {filters.map((filter, index) => (
              <h1
                key={index}
                onClick={() => setActiveFilter(index)}
                className={`relative cursor-pointer text-lg font-bold tracking-widest px-4 py-3 italic z-10 filter-text overflow-hidden hover:transition hover:duration-500 ${
                  activeFilter == index ? `text-[#fff] ${filter} ` : ""
                } ${
                  dark
                    ? "bg-[rgba(255,255,255,.1)] text-neutral-800 hover:text-[#000]"
                    : "bg-[rgba(0,0,0,.1)] text-neutral-500 hover:text-neutral-800"
                } ${index == 0 && "pl-8  rounded-tl-3xl rounded-bl-3xl"} ${
                  index == 3 && "pr-8 rounded-tr-3xl rounded-br-3xl"
                }`}
              >
                {filter}
              </h1>
            ))}
          </>
        ) : (
          <Loading />
        )}
      </div>

      {/* Projects */}
      <div className="flex flex-row gap-6 flex-wrap">
        {projects.map((project, index) => (
          <ProjectCard project={project} dark={dark} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ project, dark }) => {
  return (
    <div
      className={`relative h-[275px] w-[325px] rounded-2xl p-3 ${
        dark ? "" : ""
      }`}
    >
      <Image
        src={project.img}
        alt={project.title}
        layout="fill"
        className="w-full h-full rounded-2xl"
      />
      {/* CONTENT OVER IMAGE */}
      <div className=" absolute backdrop-blur-md bottom-0 left-0 right-0 h-[30%] flex flex-row justify-between items-center px-4 rounded-tl-[25%] rounded-tr-[25%] rounded-bl-2xl rounded-br-2xl">
        <div className="flex flex-col gap-.5 items-start justify-start basis-11/12">
          <h3
            className={`text-md tracking-widest font-bold ${
              dark ? "text-neutral-300" : "text-neutral-900"
            }`}
          >
            {project.title}
          </h3>
          {/* TAGS */}
          <div className="flex flex-row items-center flex-wrap justify-start gap-y-1 gap-x-1 basis-1/12">
            {project.tags.map((tag, index) => (
              <p
                className={`${tag}-tag text-xs font-medium tracking-wider rounded-lg px-2`}
              >
                {tag}
              </p>
            ))}
          </div>
        </div>
        <BsArrowsAngleExpand />
      </div>
    </div>
  );
};

export default Projects;
