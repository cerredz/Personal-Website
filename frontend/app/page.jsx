"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import "../styles/globals.css";
import HomePage from "@/Scenes/HomePage";
import BackgroundSkillsIcons from "@/Widgets/BackgroundSkillsIcons";
import { LazyMotion, domAnimation } from "framer-motion";
import { Suspense } from "react";
import Loading from "./loading";

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <LazyMotion features={domAnimation}>
        <HomePage />
      </LazyMotion>
    </Suspense>
  );
}
