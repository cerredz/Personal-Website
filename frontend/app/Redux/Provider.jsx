"use client";
import { Provider } from "react-redux";
import authReducer from "./store";
import { configureStore } from "@reduxjs/toolkit";

export function Providers({ children }) {
  const store = configureStore({
    reducer: {
      auth: authReducer,
    },
  });
  return <Provider store={store}>{children}</Provider>;
}
