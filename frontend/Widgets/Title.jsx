const Title = ({
  text,
  backgroundText,
  color,
  dark,
  translateX,
  translateY,
}) => {
  return (
    <div className="flex flex-row justify-between items-center relative gap-2 ">
      <span className={`h-1 w-12 rounded-sm ${color} relative z-10`}></span>
      <h3
        className={`text-3xl tracking-widest font-light tracking-wide relative z-10 ${
          dark ? "text-neutral-200" : "text-neutral-700"
        }`}
      >
        {text}
      </h3>
      <div
        className={`absolute whitespace-nowrap hidden md:block text-8xl transform ${translateY} ${translateX}`}
      >
        <h1
          className={`relative z-0 font-normal tracking-widest text-opacity-5 ${
            dark ? "text-neutral-200" : "text-neutral-700"
          }  `}
        >
          {backgroundText}
        </h1>
      </div>
    </div>
  );
};

export default Title;
