import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  dark: JSON.parse(localStorage.getItem("dark-mode")) === true,
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
  },
});

export const { setLightMode, setDarkMode } = authSlice.actions;
export default authSlice.reducer;
