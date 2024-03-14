"use client"
import Title from "@/Widgets/Title";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { client, urlFor } from "@/utils/Sanity";


const Awards = () => {
  const dark = useSelector((state) => state.auth.dark);
  const [awards, setAwards] = useState([]);

  useEffect(())
  return (
    <section
      id="awards"
      className="relative flex flex-col items-center justify-center py-20"
    >
      <Title
        text={"Awards"}
        backgroundText={"<My Accomplishments />"}
        subtitle="Learn About my Relevant Software Engineering Related Awards"
        dark={dark}
        color={`${dark ? "bg-fuchsia-600" : "bg-fuchsia-400"}`}
        translateX="-translate-x-[37.5rem]"
        translateY={"-translate-y-2"}
        beforeGradient={"awards-before-gradient"}
        afterGradient={"awards-after-gradient"}
      />

      
    </section>
  );
};

const Award = ({key, award, dark}) => {

}

export default Awards;
