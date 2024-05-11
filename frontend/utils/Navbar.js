import {
  setLightMode,
  setDarkMode,
  setVolume,
  setMusic,
} from "@/app/Redux/store";
import { toggleSound } from "./Sound";
import { clickSound } from "./Sound";
import { useState } from "react";
// toggle between light and dark mode
const toggle = async (isDarkMode, dispatch, volume) => {
  try {
    if (isDarkMode) {
      await dispatch(setLightMode());
      toggleSound(volume);
      localStorage.setItem("dark-mode", false);
      console.log("🟢 Successfully Toggled to Light Mode");
    } else {
      await dispatch(setDarkMode());
      toggleSound(volume);
      localStorage.setItem("dark-mode", true);
      console.log("🟢 Successfully Toggled to Dark Mode");
    }
  } catch {
    console.log("🔴: Error Toggling Dark / Light mode");
  }
};

// change the volume of the music playing
const adjustVolume = async (event, dispatch) => {
  try {
    const newVolume = Number(parseFloat(event.target.value / 100).toFixed(2));
    localStorage.setItem("cerreto-volume", newVolume);
    dispatch(setVolume({ amount: newVolume }));
  } catch {
    console.log("🔴: Error Changing the Volume of the Music");
  }
};

// change the type of background music that is playing
const changeMusic = async (music, dispatch) => {
  try {
    const newMusic = music;
    clickSound(0.5);
    dispatch(setMusic({ music: newMusic }));
    localStorage.setItem("cerreto-music", newMusic);
  } catch {
    console.log("🔴: Error Changing the type of Background Music");
  }
};

// when the navbar loads, set the correct link to the active link
const navbarLinkSetActive = (
  router,
  pathname,
  section,
  activeLink,
  setActiveLink
) => {
  console.log(pathname);
  console.log(section);
  try {
    if (section !== null) {
      // on home page, direct to the section
      setActiveLink(section);
    } else if (pathname === "/contact") {
      setActiveLink("Contact");
    } else if (pathname === "/") {
      setActiveLink("Home");
    }
  } catch (error) {
    console.error("🔴: Error Setting the Initial Active Navbar Link", error);
  }
};

// logic for when a navbar link is pressed
const navbarLinkOnChange = (redirect) => {};
export {
  toggle,
  adjustVolume,
  changeMusic,
  navbarLinkOnChange,
  navbarLinkSetActive,
};
