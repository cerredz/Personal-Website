"use client";
import { useEffect, useState } from "react";
import { Suspense } from "react";
import Loading from "@/app/loading";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Landing from "@/components/Landing";
import { useSelector, useDispatch } from "react-redux";
import { playSong } from "@/utils/Sound";
import { setVolume } from "@/app/Redux/store";
import "../styles/globals.css";
import Quote from "@/Widgets/Quote";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import { useSearchParams } from "next/navigation";

const HomePage = () => {
  const searchParams = useSearchParams();
  const dark = useSelector((state) => state.auth.dark);
  const volume = useSelector((state) => state.auth.volume);
  const music = useSelector((state) => state.auth.music);
  const [audioTags, setAudioTags] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    // scroll to correct section if passed into the url query
    const section = searchParams.get("section");
    if (section) {
      const projectsSection = document.getElementById(section);
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <main
      className={`overflow-hidden font-primary p-0 m-0 min-h-screen ${
        dark ? "bg-primary-dark" : "bg-primary-light"
      }`}
    >
      <Sidebar />

      <section className="relative" id="home">
        <Suspense fallback={<Loading />}>
          <Landing />
          <Quote
            quote="The most important single aspect of software development is to be clear about what you are trying to build"
            name="Bjarne Stroustrup"
            translateYOpen="-translate-y-10"
            translateXOpen="-translate-x-80"
            translateYClose="-translate-y-10"
            translateXClose="translate-x-80"
          />
          <About />
          <Quote
            quote="The art of programming is the art of organizing complexity, of mastering multitude, and avoiding its bastard chaos as effectively as possible."
            name="Edsger Dijkstra"
            translateYOpen="-translate-y-10"
            translateXOpen="-translate-x-80"
            translateYClose="-translate-y-10"
            translateXClose="translate-x-80"
          />
          <Skills />
          <Quote
            quote="Programming is a skill best acquired by practice and example rather than from books"
            name="Alan Turing"
            translateYOpen="-translate-y-10"
            translateXOpen="-translate-x-80"
            translateYClose="-translate-y-10"
            translateXClose="translate-x-80"
          />
          <Projects />
        </Suspense>
      </section>
    </main>
  );
};

export default HomePage;
