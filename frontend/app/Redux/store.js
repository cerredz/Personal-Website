import { configureStore, createSlice } from "@reduxjs/toolkit";

const volume = JSON.parse(localStorage.getItem("cerreto-volume"));
const music = JSON.parse(localStorage.getItem("cerreto-music"));

const initialState = {
  dark: JSON.parse(localStorage.getItem("dark-mode")) === true,
  volume: volume !== null ? parseFloat(volume) : 1,
  music: music != null ? music : "Jazz",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLightMode: (state, action) => {
      state.dark = false;
    },
    setDarkMode: (state, action) => {
      state.dark = true;
    },
    setVolume: (state, action) => {
      state.volume = action.amount;
    },
  },
});

export const { setLightMode, setDarkMode, setVolume } = authSlice.actions;
export default authSlice.reducer;
