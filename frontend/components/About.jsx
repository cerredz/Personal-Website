import Title from "@/Widgets/Title";
import { useSelector } from "react-redux";
const About = () => {
  const dark = useSelector((state) => state.auth.dark);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Title
        text={"About"}
        backgroundText={"About Me"}
        dark={dark}
        color={"bg-blue-400"}
        translateX="-translate-x-32"
        translateY={"-translate-y-2"}
      />
    </div>
  );
};

export default About;
