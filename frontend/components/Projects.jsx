import Title from "@/Widgets/Title";
import { useSelector } from "react-redux";
const Projects = () => {
  const dark = useSelector((state) => state.auth.dark);
  return (
    <section
      id="skills"
      className=" relative flex flex-col items-center justify-center mt-24 pt-10 md:pt-0 "
    >
      <div className="flex items-center justify-center mb-16">
        <Title
          text={"Projects"}
          backgroundText={"<Explore My Work />"}
          dark={dark}
          color={`${dark ? "bg-sky-600" : "bg-sky-400"}`}
          translateX="-translate-x-[27rem]"
          translateY={"-translate-y-2"}
        />
      </div>
    </section>
  );
};

export default Projects;
