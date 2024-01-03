import { useSelector, useDispatch } from "react-redux";
import { setLightMode, setDarkMode, setVolume } from "@/app/Redux/store";
import { toggleSound } from "./Sound";
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
    const newVolume = parseFloat(event.target.value / 100);
    localStorage.setItem("cerreto-volume", newVolume);
    dispatch(setVolume({ amount: newVolume }));
  } catch {
    console.log("🔴: Error Chaning the Volume of the Muisc");
  }
};

export { toggle, adjustVolume };
