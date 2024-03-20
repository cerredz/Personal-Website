"use client";
import { useSelector } from "react-redux";
import { client, urlFor } from "@/utils/Sanity";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import "../../../styles/navbar.css";
import "../../../styles/globals.css";
import "./styles.css";
import Image from "next/image";
import Label from "@/Widgets/Label";
import { FaAward } from "react-icons/fa";
import Loader from "@/Widgets/Loader";

export default function Page() {
  const dark = useSelector((state) => state.auth.dark);
  const pathname = usePathname();
  const [awardData, setAwardData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      // extract the award Title from the url, then find it in sanity
      const awardTitle = pathname.split("/").pop().replace(/-/g, " ");
      const query = `*[_type == "awards" && award == "${awardTitle}"][0]`;
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
  return (
    <main
      className={`overflow-hidden font-primary p-0 m-0 min-h-screen flex items-center justify-center ${
        dark ? "bg-primary-dark" : "bg-primary-light"
      }`}
    >
      {awardData != null ? (
        <>
          {/* BACKGROUND IMAGE */}
          <Image
            src={dark ? "/images/awardDark.png" : "/images/awardLight.png"}
            alt="award-bg"
            layout="fill"
            quality={100}
            priority={true}
            className="fixed top-0 left-0 h-full w-full"
          />

          {/* MAIN CONTENT CONTAINER */}
          <div
            className={`py-10 px-20 relative award-container w-10/12 mx-auto backdrop-blur-sm rounded-2xl ${
              dark ? "bg-[rgba(255,255,255,.025)]" : "bg-[rgba(0,0,0,.025)]"
            } flex justify-center items-center flex-row`}
          >
            {/* TEXT CONTENT */}
            <div className="flex flex-col gap-2 items-start justify-start basis-1/3">
              <Label
                text={"Award"}
                icon={
                  <FaAward
                    className={`${
                      dark ? "text-yellow-400" : "text-yellow-300"
                    }`}
                  />
                }
                borderColor={`${
                  dark ? "border-yellow-400" : "border-yellow-300"
                }`}
                textColor={`${dark ? "text-yellow-400" : "text-yellow-300"}`}
                bgClassName={`award`}
              />
              {/* AWARD TITLE */}
              <h1
                className={`font-bold tracking-widest text-4xl ${
                  dark ? "text-neutral-300" : "text-neutral-800"
                }`}
              >
                {awardData.award}
              </h1>
              {/* OVERVIEW */}
              <div>
                <h3>Overview</h3>
                <p>{awardData.overview}</p>
              </div>

              {/* TECHNOLOGIES */}
              <div>
                <h3>Technologies</h3>
                <div className="flex flex-row items-start justify-start flex-wrap">
                  {awardData.technologies.map((tech, index) => (
                    <div>
                      <Image
                        src={`/images/skills/${tech.toLowerCase()}.png`}
                        alt={`${tech.toLowerCase()} logo`}
                        width={30}
                        height={30}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* LINKS */}
              <div>
                <h3>Links</h3>
                <p></p>
              </div>
            </div>

            {/* IMAGE CONTENT */}
            <div className="relative flex items-center justify-center flex basis-2/3 items-center justify-center">
              <Image
                src={urlFor(awardData.readMoreImage).url()}
                width={1000}
                height={1000}
                quality={100}
                priority={true}
                alt={awardData.award}
                className="relative w-[90%] mx-auto rounded-xl"
              />
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </main>
  );
}
