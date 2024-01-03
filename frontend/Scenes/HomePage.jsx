"use client";
import Image from "next/image";
import { Suspense } from "react";
import Loading from "@/app/loading";
import { Provider } from "react-redux";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Landing from "@/components/Landing";
import { useSelector, useDispatch } from "react-redux";
import { setLightMode, setDarkMode } from "@/app/Redux/store";
import { toggle } from "@/utils/Navbar";

import "../styles/globals.css";

const HomePage = () => {
  const dark = useSelector((state) => state.auth.dark);
  const dispatch = useDispatch();
  return (
    <main
      className={`overflow-hidden font-primary p-0 m-0 min-h-screen ${
        dark ? "bg-primary-dark" : "bg-primary-light"
      }`}
    >
      {/*
      {dark && (

        <Image
          src={"/background.png"}
          alt=""
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      )}
       */}

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
