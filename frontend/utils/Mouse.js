export const scrollToSection = (sectionID) => {
  try {
    const section = document.getElementById(sectionID);
    console.log(sectionID);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
        duration: 500,
      });
    } else {
      console.log(`🔴: Section with ID ${sectionID} not found`);
    }
  } catch (err) {
    console.log("🔴: Error Scrolling to a Section", err);
  }
};
