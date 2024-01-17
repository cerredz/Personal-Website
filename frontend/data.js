export const NavbarLinks = () => [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    section: "about",
  },
  {
    title: "Projects",
    section: "projects",
  },
  {
    title: "Contact",
    link: "/contact",
  },
  {
    title: "Awards",
    link: "/awards",
  },
];

export const sidebarLinks = () => [
  {
    social: "LinkedIn",
    redirect: "https://www.linkedin.com/in/michael-cerreto-b3348524b/",
  },
  {
    social: "Github",
    redirect: "https://github.com/cerredz",
  },
  {
    social: "Twitter",
    redirect: "https://twitter.com/rettooooo",
  },
  {
    social: "Discord",
    redirect: "https://discordid.netlify.app/?id=665620730670481409",
  },
  {
    social: "Devpost",
    redirect:
      "https://devpost.com/422michaelcerreto?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav",
  },
];

export const musicTypes = () => [
  {
    type: "Relaxed",
  },
  {
    type: "Uplifting",
  },
  {
    type: "Mysterious",
  },
  {
    type: "Playful",
  },
  {
    type: "Mute",
  },
];

export const phoneIcons = () => [
  {
    src: "/images/gmailIcon.png",
    alt: "gmail icon",
    clickEvent: true,
    text: "Contact Me",
    redirect: "/contact",
    className: "gmail",
  },
  {
    src: "/images/clockIcon.png",
    alt: "clock icon",
    clickEvent: false,
    text: "Eastern Standard Time (EST)",
    className: "timezone",
  },
  {
    src: "/images/phoneIcon.png",
    alt: "phone icon",
    clickEvent: false,
    text: "(732) - 673 - 1556",
    className: "phone",
  },
  {
    src: "/images/locationIcon.png",
    alt: "waypoint icon",
    clickEvent: false,
    text: "New Jersey, United States",
    className: "location",
  },
  {
    src: "/images/awardIcon.png",
    alt: "medal icon",
    clickEvent: true,
    text: "Awards",
    redirect: "/awards",
    className: "awards",
  },
  {
    src: "/images/twitterIcon.png",
    alt: "twitter icon",
    clickEvent: true,
    text: "Twitter Profile",
    redirect: "https://twitter.com/rettooooo",
    className: "twitter",
  },
  {
    src: "/images/linkedInIcon.png",
    alt: "linked in icon",
    clickEvent: true,
    text: "LinkedIn Profile",
    redirect: "https://www.linkedin.com/in/michael-cerreto-b3348524b/",
    className: "linkedin",
  },
  {
    src: "/images/githubIcon.png",
    alt: "github icon",
    clickEvent: true,
    text: "Github Profile",
    redirect: "https://github.com/cerredz",
    className: "github",
  },
  {
    src: "/images/instagramIcon.png",
    alt: "instagram icon",
    clickEvent: true,
    text: "Instagram Profile",
    redirect: "",
    className: "instagram",
  },
];

export const aboutMeFacts = [
  [
    "I am Michael Cerreto, and my journey into coding began at the age of 17 during my senior year of high school. ",
    "As soon as I wrote my first program I discovered the freedom and intuition that was involved in programming.",
    "This ability to create one-of-a-kind pieces of software is what has fueled my passion till this day",
  ],
  [
    "Java and C++ were the first coding languages in which I gained significant experience. ",
    "Within these languages, I first encountered data structures and tackled challenging computer science problems (leetcode). ",
    "As my proficiency in Java and C++ grew, I then delved into the the world of web development, learning basic HTML, CSS, and Javascript.",
    "My passion for web development grew, leading me to complete an online course covering React, RESTful APIs, SQL, MongoDB and more.",
  ],
];
