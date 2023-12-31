"use client";
import Image from "next/image";
import { Suspense } from "react";
import Loading from "./loading";
import { Provider } from "react-redux";
import authReducer from "./Redux/store";
import { configureStore } from "@reduxjs/toolkit";
import Navbar from "@/components/Navbar";
import { useSelector } from "react-redux";
import "../styles/globals.css";
import HomePage from "@/Scenes/HomePage";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
/*
TODO:
- create the sidebar for socials
- on small screens, create the sidebar navbar
- finish navbar
*/

export default function Home() {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}
