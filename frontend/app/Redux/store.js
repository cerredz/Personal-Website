import { configureStore, createSlice } from "@reduxjs/toolkit";

const volume = JSON.parse(localStorage.getItem("cerreto-volume"));
const music = JSON.stringify(localStorage.getItem("cerreto-music")).slice(
  1,
  -1
);

const initialState = {
  dark: JSON.parse(localStorage.getItem("dark-mode")) === true,
  volume: volume !== null ? parseFloat(volume) : 0.5,
  music: music != null ? music : "Relaxed",
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
      state.volume = action.payload.amount;
    },
    setMusic: (state, action) => {
      state.music = action.payload.music;
    },
  },
});

export const { setLightMode, setDarkMode, setVolume, setMusic } =
  authSlice.actions;
export default authSlice.reducer;
