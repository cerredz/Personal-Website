import Title from "@/Widgets/Title";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { projectFilters } from "@/data";
import Loading from "@/app/loading";
import "../styles/projects.css";
import { motion } from "framer-motion";
const Projects = () => {
  const dark = useSelector((state) => state.auth.dark);
  const [filters, setFilters] = useState(null);
  const [activeFilter, setActiveFilter] = useState(0);
  useEffect(() => {
    setFilters(projectFilters);
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
    </section>
  );
};

export default Projects;
