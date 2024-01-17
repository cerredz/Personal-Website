"use client";
import Image from "next/image";
import { Suspense } from "react";
import Loading from "./loading";
import { Provider } from "react-redux";
import authReducer from "./Redux/store";
import { configureStore } from "@reduxjs/toolkit";
import Navbar from "@/components/Navbar";
import "../styles/globals.css";
import HomePage from "@/Scenes/HomePage";
import BackgroundSkillsIcons from "@/Widgets/BackgroundSkillsIcons";
import { useRouter } from "next/router";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

/*
TODO:
- create the content for our homepage
- play around with threejs and add moving shapes
- add particles with 
- volume, 3d or gradient logos
- framer motion
- 
*/

export default function Home() {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}
