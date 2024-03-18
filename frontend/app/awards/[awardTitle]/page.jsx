"use client";
import { useSelector } from "react-redux";
import { client, urlFor } from "@/utils/Sanity";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import "../../../styles/navbar.css";
import "../../../styles/globals.css";

export default function Page() {
  const dark = useSelector((state) => state.auth.dark);
  const pathname = usePathname();
  const [awardData, setAwardData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      // extract the award Title from the url, then find it in sanity
      const awardTitle = pathname.split("/").pop().replace(/-/g, " ");
      const query = `*[_type == "awards" && title == "${awardTitle}"][0]`;
      const result = await client.fetch(query);

      if (!result) {
        console.log("Error Getting the Award Data for", awardTitle);
        console.log(result);
        return;
      }

      setAwardData(result);
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log(awardData);
  }, [awardData]);
  return (
    <main
      className={`overflow-hidden font-primary p-0 m-0 min-h-screen ${
        dark ? "bg-primary-dark" : "bg-primary-light"
      }`}
    >
      {awardData && awardData.award}
    </main>
  );
}
