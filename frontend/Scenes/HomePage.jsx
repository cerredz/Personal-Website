"use client";
import { useEffect } from "react";
import { Suspense } from "react";
import Loading from "@/app/loading";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Landing from "@/components/Landing";
import { useSelector, useDispatch } from "react-redux";
import { playSong } from "@/utils/Sound";

import "../styles/globals.css";

const HomePage = () => {
  const dark = useSelector((state) => state.auth.dark);
  const volume = useSelector((state) => state.auth.volume);
  const music = useSelector((state) => state.auth.music);
  const dispatch = useDispatch();

  useEffect(() => {
    playSong(music, volume);
  }, []);
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
        </Suspense>
      </section>
    </main>
  );
};

export default HomePage;
