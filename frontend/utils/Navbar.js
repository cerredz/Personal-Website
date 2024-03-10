import {
  setLightMode,
  setDarkMode,
  setVolume,
  setMusic,
} from "@/app/Redux/store";
import { toggleSound } from "./Sound";
import { clickSound } from "./Sound";
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

export { toggle, adjustVolume, changeMusic };
