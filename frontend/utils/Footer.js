// scroll to the inputted section passed into the parameter
export const scroll = (section) => {
  try {
    const element = document.getElementById(section);
    if (element) {
      const options = {
        behavior: "smooth",
      };
      // Add offset if section is not "Home"
      if (section !== "Home") {
        const yOffset = -100;
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset; // if no added offset, the navbar will block the title of the section

        window.scrollTo({ top: y, behavior: "smooth" });
      } else {
        element.scrollIntoView(element);
      }
    } else {
      console.error(`Section "${section}" not found.`);
    }
  } catch (error) {
    console.error("Error while scrolling:", error);
  }
};
