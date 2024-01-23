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

const HomePage = () => {
  const dark = useSelector((state) => state.auth.dark);
  const volume = useSelector((state) => state.auth.volume);
  const music = useSelector((state) => state.auth.music);
  const [audioTags, setAudioTags] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    // update background song whenever the category changed
    const playBackgroundMusic = async () => {
      audioTags.forEach((audio) => audio.pause());
      if (music == "Mute") {
        dispatch(setVolume({ amount: 0 }));
        return;
      }
      const song = await playSong(music, volume);
      setAudioTags((prev) => [...prev, song]);
      await song.play().catch(() => {
        // user not yet interacted with window, add one time event listeners
        ["click", "keydown"].forEach((eventType) =>
          window.addEventListener(eventType, () => playBackgroundMusic(), {
            once: true,
          })
        );
      });
    };

    playBackgroundMusic();
  }, [music]);

  useEffect(() => {
    // update the volume of the background song whenever the volume is changed
    const currentSong = audioTags[audioTags.length - 1];
    if (currentSong) currentSong.volume = parseFloat(volume).toFixed(2);
  }, [volume]);

  return (
    <main
      className={`overflow-hidden font-primary p-0 m-0 min-h-screen ${
        dark ? "bg-primary-dark" : "bg-primary-light"
      }`}
    >
      <Navbar />
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
        </Suspense>
      </section>
    </main>
  );
};

export default HomePage;
