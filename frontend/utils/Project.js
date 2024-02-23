import { projectsData } from "@/data";
/* USER CLICKED ON READ MORE FOR A PROJECT, FIND PROJECT INFOR AFTER REDIRECT */
export const getProjectData = (projectTitle, projects) => {
  const formattedProjectTitle = projectTitle.replace(/-/g, " ");
  const matchingProject = projects.find((project) => {
    return project.title === formattedProjectTitle;
  });
  if (!matchingProject) {
    console.log("No project found for: ", projectTitle);
    return null;
  }
  return matchingProject;

  return null;
};

/* USER WANTS TO VIEW MORE PROJECTS, REDIRECT THEM TO THE PROJECTS ON THE HOMEPAGE */
export const viewMoreProjects = () => {};
