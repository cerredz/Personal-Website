import React from "react";

const SpinningBorderButton = ({
  content,
  background,
  textStyle,
  gradient,
  onClick,
}) => {
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] ">
      <span
        className={`absolute inset-[-1000%] animate-[spin_2s_linear_infinite] ${gradient}`}
      />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full ${background} px-3 py-1 ${textStyle} backdrop-blur-3xl`}
      >
        {content}
      </span>
    </button>
  );
};

export default SpinningBorderButton;
