"use client";
import Image from "next/image";
import { Suspense } from "react";
import Loading from "@/app/loading";
import { Provider } from "react-redux";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { setLightMode, setDarkMode } from "@/app/Redux/store";
import { toggle } from "@/utils/Navbar";
import "../styles/globals.css";

const HomePage = () => {
  const dark = useSelector((state) => state.auth.dark);
  const dispatch = useDispatch();
  return (
    <main
      className={`font-primary p-0 m-0 min-h-screen ${
        dark ? "bg-primary-dark" : "bg-primary-light"
      }`}
    >
      <Navbar />
      <Sidebar />

      <section id="home">
        <Suspense fallback={<Loading />}>
          <h1 className="pt-20 blue">Home</h1>
        </Suspense>
      </section>
    </main>
  );
};

export default HomePage;
