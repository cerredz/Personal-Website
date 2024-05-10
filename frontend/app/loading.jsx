"use client";
import { useSelector } from "react-redux";
import "../styles/Loading.css";
const Loading = () => {
  const dark = useSelector((state) => state.auth.dark);
  return (
    <div
      className={`absolute top-0 left-0 w-[200vh] h-[100vh] p-0 m-0 ${
        dark ? "bg-primary-dark" : "bg-primary-light"
      } z-100 flex items-center justify-center`}
    >
      <div className="flex flex-col gap-1 justify-center items-center">
        <p
          className={`text-md tracking-widest font-bold ${
            dark ? "text-neutral-300" : "text-neutral-800"
          }`}
        >
          <span className="loading-spinner"></span>
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Loading;
