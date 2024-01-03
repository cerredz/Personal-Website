import { useSelector, useDispatch } from "react-redux";
import { setLightMode, setDarkMode } from "@/app/Redux/store";
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

export { toggle };
