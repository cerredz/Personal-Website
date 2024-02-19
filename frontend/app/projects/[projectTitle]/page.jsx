"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { projectsData } from "@/data";
import { getProjectData } from "@/utils/Project";
import Loading from "@/app/loading";
export default function Page() {
  const pathname = usePathname();
  const [projectData, setProjectData] = useState(null);
  // get matching project data upon load
  useEffect(() => {
    const projectTitle = pathname.split("/").pop();
    setProjectData(getProjectData(projectTitle, projectsData()));
  }, []);

  return (
    <div>
      {projectData !== null ? (
        <div>
          <h1>{projectData.title}</h1>
        </div>
      ) : (
        <Loading></Loading>
      )}
    </div>
  );
}
