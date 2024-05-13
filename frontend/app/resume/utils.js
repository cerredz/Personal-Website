import { whooshSound } from "@/utils/Sound";

// function / animation for when the user clicks the expand resume button
export const expandResumeClick = (
  setExpandResumeAnimation,
  setExpandResume
) => {
  try {
    whooshSound();

    setExpandResumeAnimation(true);
    setTimeout(() => {
      // expand the resume a little bit before screen swipe animation is complete
      setExpandResume((prev) => !prev);
    }, 600);
    setTimeout(() => {
      // have the animation take 800 milliseconds
      setExpandResumeAnimation(false);
    }, 800);
  } catch (error) {
    console.error("Failed to Expand the resume");
  }
};
