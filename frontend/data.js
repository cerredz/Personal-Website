import { BiSolidBrain } from "react-icons/bi";
import { FaLaptopCode } from "react-icons/fa";
import { AiFillCode } from "react-icons/ai";
import { IoPeople } from "react-icons/io5";
import { FaDatabase } from "react-icons/fa";
import "./styles/Skills.css";

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
  "I am Michael Cerreto, and my journey into coding began at the age of 17 during my senior year of high school. As soon as I wrote my first program I discovered the freedom and intuition that was involved in programming. This ability to create one-of-a-kind pieces of software is what has fueled my passion till this day.",
  "Java and C++ were the first coding languages in which I gained significant experience. Within these languages, I first encountered data structures and tackled challenging computer science problems (leetcode). As my proficiency in Java and C++ grew, I then delved into the the world of web development, learning basic HTML, CSS, and Javascript. My passion for web development grew, leading me to complete an online course covering React, RESTful APIs, SQL, MongoDB and more.",
  "After Completing the online Web Developement course, I started to create full-stack projects, translating my knowledge into real-world applications. As time went on, I started to learn many software engineering tools, techniques, and frameworks (Next.js, Express.js, Flask, Firebase, etc).  Each project became an opportunity to apply new tools, refine techniques, and deepen my understanding of software engineering principles. ",
  "Today, now knowing over 15+ languages / frameworks, I continually try to become the best software engineer I can be everyday. I regularly work on improving my algorithmic thinking abilities, completing unique full-stack projects, exposing my self to as many different languages / frameworks / practices as I can, and also watch software engineering related videos to learn off of what other people do. ",
];

export const skillsIconData = [
  {
    name: "C",
    src: "/images/skills/c.png",
    alt: "c icon",
  },
  {
    name: "C++",
    src: "/images/skills/c++.png",
    alt: "c++ icon",
  },
  {
    name: "Java",
    src: "/images/skills/java.png",
    alt: "java icon",
  },
  {
    name: "Python",
    src: "/images/skills/python.png",
    alt: "python icon",
  },
  {
    name: "React.js",
    src: "/images/skills/react.png",
    alt: "react.js icon",
  },
  {
    name: "Next.js",
    src: "/images/skills/nextjs.png",
    alt: "next.js icon",
  },
  {
    name: "Redux",
    src: "/images/skills/redux.png",
    alt: "redux icon",
  },
  {
    name: "HTML",
    src: "/images/skills/html.png",
    alt: "html icon",
  },
  {
    name: "CSS",
    src: "/images/skills/css.png",
    alt: "css icon",
  },
  {
    name: "SASS",
    src: "/images/skills/sass.png",
    alt: "sass icon",
  },
  {
    name: "Tailwind CSS",
    src: "/images/skills/tailwindcss.png",
    alt: "tailwind css icon",
  },
  {
    name: "Javascript",
    src: "/images/skills/javascript.png",
    alt: "css icon",
  },
  {
    name: "Node.js",
    src: "/images/skills/nodejs.png",
    alt: "node.js icon",
  },
  {
    name: "Express.js",
    src: "/images/skills/expressjs.png",
    alt: "express.js icon",
  },
  {
    name: "MongoDB",
    src: "/images/skills/mongodb.png",
    alt: "mongodb icon",
  },
  {
    name: "SQL",
    src: "/images/skills/sql.png",
    alt: "sql icon",
  },
  {
    name: "Firebase",
    src: "/images/skills/firebase.png",
    alt: "firebase icon",
  },
  {
    name: "Flask",
    src: "/images/skills/flask.png",
    alt: "flask icon",
  },
  {
    name: "Framer Motion",
    src: "/images/skills/framermotion.png",
    alt: "framer motion icon",
  },
  {
    name: "Figma",
    src: "/images/skills/figma.png",
    alt: "figma icon",
  },
  {
    name: "Axios",
    src: "/images/skills/axios.png",
    alt: "axios icon",
  },
];

export const compSciSkillsData = [
  {
    title: "Problem Solver",
    description:
      "I enjoy solving problems within the realm of computer science, and especially software engineering. With a solid understanding of data structures and algorithms, combined with experience in tackling tough challenges and increasingly complex problems, I have noticed a significant enhancement in my ability to devise effective solutions. The beauty of problem solving in computer science lies in the uniqueness of each obstacle, compelling me to approach challenges with creativity, intuition, and innovation. This process not only has made my problem-solving ability more efficient, fast-paced, and accurate, but it also facilitates continuous growth and learning the world of problem solving.",
    icon: <BiSolidBrain className="fill-pink-500 text-xl" />,
    className: "brain",
  },
  {
    title: "Software Development",
    description:
      "Being able to put multiple different skillsets together allows me to approach software development comprehensively. With expertise in full-stack applications, database management, algorithmic thinking, user authentication, and various other standard software engineering practices, I am able to put these different skills together in order to create unique, creative, and high-end solutions that effectively address challenges. This approach ensures the development of software that is not only functional but also stands out in terms of ingenuity and user satisfaction. ",
    icon: <FaDatabase className="fill-purple-400 text-xl" />,
    className: "database",
  },
  {
    title: "Algorithms",
    description:
      "When implementing code, my focus is on achieving optimal efficiency. Algorithmic thinking is essential to me bacause I know that as systems and data sizes grow, the optimization and performance of your code becomes increasingly more important. Whether tackling simple or intricate problems in frontend or backend developemenent, I consistently strive to implement solutions that not only deliver the desired functionality but also exhibit scalability, responsiveness, and speed. ",
    icon: <AiFillCode className="fill-blue-700 text-xl" />,
    className: "algorithmns",
  },
  {
    title: "Web Development",
    description:
      "Web development provides software engineers the ability to create applications and services that can be accessed globally. In the broad scope of web developement, I have personally undertaken a wide range of diverse projects, including full-stack applications, real-world applications, frontend-only projects, Node vs Flask backends, MongoDB vs SQL databases, React vs Next frameworks, and more. These experiences have given me a comprehensive understanding or various tools and technologies within the web developement landscape.  ",
    icon: <FaLaptopCode className="fill-sky-500 text-xl" />,
    className: "web",
  },
  {
    title: "Collaboration / Teamwork",
    description:
      "Teammwork is crucial when it comes to software engineering. Being able to effectively communicate, collaborate, share ideas, and overall work togther with other fellow software engineers is a very valuable skill due to its ability to speed up the production cycle. This is something that I have firsthand experience in; I have competed in multiple hackathons where me and fellow computer science students have worked together to create the best project possible within a 24-hour timeframe. Me and my team made sure that we were organized, our code was synchronized, and were working toward the same goal. Due to this I was actually able to win one of the hackathons I attended.",
    icon: <IoPeople className="fill-cyan-300 text-xl" />,
    className: "teamwork",
  },
];

export const bestSkills = [
  {
    skill: "C / C++",
    rating: 96,
  },
  {
    skill: "React.js",
    rating: 94,
  },
  {
    skill: "Node.js",
    rating: 93,
  },
  {
    skill: "MongoDB",
    rating: 91,
  },
  {
    skill: "Python",
    rating: 89,
  },
  {
    skill: "Javascript",
    rating: 86,
  },
];
