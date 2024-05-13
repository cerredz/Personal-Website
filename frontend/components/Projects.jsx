import Title from "@/Widgets/Title";
import { useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { projectFilters, projectsData } from "@/data";
import { BsArrowsAngleExpand } from "react-icons/bs";
import Loading from "@/app/loading";
import "../styles/projects.css";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import { useInView } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import { BackgroundBeams } from "@/AceternityUi/background-beams";
import { CardItem, CardContainer } from "@/AceternityUi/3dCard";
import Link from "next/link";
import {
  clickSound,
  githubIconClick,
  projectTabClickSound,
} from "@/utils/Sound";

const Projects = () => {
  const dark = useSelector((state) => state.auth.dark);
  const [filters, setFilters] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeFilterIndex, setActiveFilterIndex] = useState(0);
  const [projects, setProjects] = useState([]);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    setFilters(projectFilters);
    setProjects(projectsData);
  }, []);
  useEffect(() => {
    setActiveCardIndex(projects.length / 2);
  }, [projects]);

  /* HANDLE THE USER CLICKING A FILTER FOR THE PROJECTS */
  const handleFilterClick = (index, filter) => {
    setActiveFilterIndex(index);
    setActiveFilter(filter);
    // update active index of new filtered projects
    const newProjects = projects.filter((project) =>
      project.tags.includes(filter)
    );
    filter === "All"
      ? setActiveCardIndex(projects.length / 2)
      : setActiveCardIndex(newProjects.length / 2);
  };

  return (
    <section
      id="Projects"
      className="relative flex flex-col items-center justify-center py-16 overflow-hidden"
    >
      <span className="glow glow1"></span>
      <span className="glow glow2"></span>
      <span className="glow glow3"></span>
      <div className="flex items-center justify-center mb-16">
        <Title
          text={"Projects"}
          backgroundText={"<Explore My Work />"}
          subtitle="Browse through my latest Software Engineering creations and projects."
          dark={dark}
          color={`${dark ? "bg-fuchsia-600" : "bg-fuchsia-400"}`}
          translateX="-translate-x-[28rem]"
          translateY={"-translate-y-2"}
          beforeGradient={"projects-before-gradient"}
          afterGradient={"projects-after-gradient"}
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
                onClick={() => {
                  projectTabClickSound();
                  handleFilterClick(index, filter);
                }}
                className={`relative cursor-pointer text-lg font-bold tracking-widest px-4 py-3 italic z-10 filter-text overflow-hidden hover:transition hover:duration-500 ${
                  activeFilterIndex == index ? `text-[#fff] ${filter} ` : ""
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
        <BackgroundBeams />
      </div>

      {/* Projects */}
      <div className="flex flex-row gap-6 flex-wrap relative justify-center items-center w-full mt-10 h-[400px] overflow-visible">
        {activeFilter === "All" ? (
          <>
            {/* 'ALL' IS SELECTECD, APPLY NO FILTERS */}
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                dark={dark}
                index={index}
                activeIndex={activeCardIndex}
                onClick={() => setActiveCardIndex(index)}
              />
            ))}
          </>
        ) : (
          <>
            {/* APPLY THE FILTER IF 'ALL' IS NOT SELECTED */}
            {projects
              .filter((project) => project.tags.includes(activeFilter))
              .map((project, index) => (
                <ProjectCard
                  key={index}
                  project={project}
                  dark={dark}
                  index={index}
                  activeIndex={activeCardIndex}
                  onClick={() => setActiveCardIndex(index)}
                />
              ))}
          </>
        )}
      </div>
      {/* ARROWS */}
      <div className="relative flex flex-row justify-center items-center mt-10 gap-6 w-full">
        <motion.div
          ref={ref}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="cursor-pointer p-6 rounded-full left-project-btn hover:scale-110 flex items-center justify-center border border-2 border-fuchsia-500 z-10"
          style={{
            x: inView ? 0 : -300,
            opacity: inView ? 1 : 0,
            transition:
              "x .6s ease-in-out 1s, x .6s ease-in-out 1s, scale .2s ease-in-out, box-shadow .3s ease-in-out",
          }}
          onClick={() => {
            clickSound();
            setActiveCardIndex((prev) => Math.max(prev - 1, 0));
          }}
        >
          <FaLongArrowAltLeft
            className={` text-2xl font-bold z-10 absolute text-fuchsia-500  `}
          />
        </motion.div>

        <motion.div
          ref={ref}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="cursor-pointer p-6 rounded-full right-project-btn flex items-center justify-center border border-2 border-sky-500  z-10 "
          style={{
            x: inView ? 0 : 300,
            opacity: inView ? 1 : 0,
            transition:
              "x .6s ease-in-out 1s, x .6s ease-in-out 1s, scale .2s ease-in-out, box-shadow .3s ease-in-out",
          }}
          onClick={() => {
            clickSound();
            setActiveCardIndex((prev) =>
              Math.min(prev + 1, projects.length - 1)
            );
          }}
        >
          <FaLongArrowAltRight
            className={`text-2xl font-bold z-10 absolute text-sky-500 `}
          />
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, dark, index, activeIndex, onClick }) => {
  const containerRef = useRef(null);
  const inView = useInView(containerRef);
  const [isHoveringExpand, setIsHoveringExpand] = useState(false);

  return (
    <motion.div
      ref={containerRef}
      onClick={onClick}
      className={`absolute h-[290px] w-[350px] rounded-2xl cursor-pointer `}
      style={{
        transform: `scale(1) translateX(${(index - activeIndex) * 120}%) `,
        opacity: inView ? 1 : 0,
        transition: `transform .4s ease-in-out, opacity .7s ease-in-out ${
          0.2 * Math.abs(activeIndex - index)
        }s`,
      }}
    >
      <div
        className={`relative w-full h-full rounded-2xl p-3 ${
          dark ? "project-card-dark" : "project-card-light"
        } ${
          activeIndex == index
            ? `transform transition duration-200 scale-110`
            : "opacity-40 transform scale-100 transition duration-600 hover:opacity-80"
        }`}
      >
        <Image
          quality={100}
          priority={true}
          src={project.img}
          alt={project.title}
          layout="fill"
          className="w-full h-full rounded-2xl"
          sizes=""
        />
        {/* CONTENT OVER IMAGE */}
        <div
          onMouseEnter={() => setIsHoveringExpand(true)}
          onMouseLeave={() => setIsHoveringExpand(false)}
          className={`cursor-pointer absolute backdrop-blur-xl bottom-0 left-0 right-0 h-[30%] ${
            activeIndex == index &&
            "transition-all duration-500 delay-200 hover:h-[75%] hover:pt-6"
          } flex flex-col justify-start items-start pt-3 px-4 rounded-tl-[25%] rounded-tr-[25%] rounded-bl-2xl rounded-br-2xl`}
        >
          <div className="flex flex-row gap-1 items-start justify-between">
            {/* TAGS / TITLE */}
            <div className="flex flex-col w-full justify-between items-start basis-11/12">
              <h3
                className={`text-md tracking-widest font-bold text-neutral-300`}
              >
                {project.title}
              </h3>
              {/* TAGS */}
              <div className="flex flex-row items-center flex-wrap justify-start gap-y-1 gap-x-1 basis-1/12">
                {project.tags.map((tag, index) => (
                  <p
                    key={index}
                    className={`${tag}-tag text-xs font-medium tracking-wider rounded-lg px-2`}
                  >
                    {tag}
                  </p>
                ))}
              </div>
            </div>
            {/* ON-HOVER EXPAND SVG */}
            <BsArrowsAngleExpand
              className={`font-black text-xl hover:scale-110 hover:transition hover:duration-600 transition duration-600 mt-5 ${
                dark ? "text-neutral-300" : "text-neutral-900"
              }`}
            />
          </div>
          {/* ON HOVER CONTENT */}
          <AnimatePresence>
            {isHoveringExpand && activeIndex == index && (
              <motion.div className="flex flex-col w-full items-start justify-between h-full py-3">
                {/* TEXT */}
                <motion.p
                  initial={{ y: 25, opacity: 0 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.4,
                      ease: "easeInOut",
                      delay: 0.4,
                    },
                  }}
                  exit={{
                    opacity: 0,
                    transition: {
                      duration: 0.2,
                      ease: "easeInOut",
                    },
                  }}
                  className="font-normal text-neutral-300 text-xs tracking-wider"
                >
                  {project.preview}
                </motion.p>
                {/* BUTTONS */}
                <div className="flex flex-row gap-3 justify-between w-full items-center">
                  {/* GITHUB BUTTON */}
                  <motion.a
                    initial={{ x: -25, opacity: 0 }}
                    animate={{
                      x: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.4,
                        ease: "easeInOut",
                        delay: 0.5,
                      },
                    }}
                    exit={{
                      x: -25,
                      opacity: 0,
                      transition: {
                        duration: 0.2,
                        ease: "easeInOut",
                      },
                    }}
                    href={project.github}
                    target="_blank"
                    onClick={() => githubIconClick()}
                    className="bg-[#171515] rounded-xl px-4 h-[40px] github-btn relative overflow-hidden flex items-center justify-center"
                  >
                    <FaGithub className=" text-neutral-300 text-2xl" />
                  </motion.a>

                  {/* READ MORE BUTTON */}

                  <motion.span
                    initial={{ translateX: 25, opacity: 0 }}
                    animate={{
                      translateX: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.5,
                        ease: "easeInOut",
                        delay: 0.6,
                      },
                    }}
                    exit={{
                      translateX: 25,
                      opacity: 0,
                      transition: {
                        duration: 0.2,
                        ease: "easeInOut",
                      },
                    }}
                    className="flex items-center justify-center read-more-project-btn w-full relative rounded-xl px-4 h-[40px] text-lg font-bold tracking-widest text-neutral-300 bg-[rgba(255,255,255,.1)] hover:bg-[rgba(255,255,255,.2)]"
                  >
                    <Link
                      href={`${
                        project.live
                          ? `${project.redirect}`
                          : `/projects/${project.redirect}`
                      }`}
                      onClick={() => clickSound()}
                    >
                      {project.live ? "View" : "Read More"}
                    </Link>
                  </motion.span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <script></script>
    </motion.div>
  );
};

export default Projects;
