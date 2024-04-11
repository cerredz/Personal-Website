import { FaBrain, FaPeopleGroup, FaDatabase } from "react-icons/fa6";
import { GoTerminal } from "react-icons/go";
import { FaLaptopCode, FaGithub, FaReact, FaNode } from "react-icons/fa";
import { GiFamilyTree } from "react-icons/gi";
import { PiFileSql } from "react-icons/pi";
import { SiMongodb, SiPostman, SiExpress, SiFlask } from "react-icons/si";

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

export const languages = [
  { name: "SQL", img: <PiFileSql /> },
  { name: "Node.js", img: <FaNode /> },
  { name: "React.js", img: <FaReact /> },
  { name: "MongoDB", img: <SiMongodb /> },
  { name: "Git", img: <FaGithub /> },
  { name: "RESTful APIs", img: <SiPostman /> },
  { name: "Express.js", img: <SiExpress /> },
  { name: "Flask", img: <SiFlask /> },
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
    icon: <FaBrain />,
    className: "brain",
    words: 13,
    //textColor:"bg-gradient-to-br from-fuchsia-400 via-fuchsia-500 to-fuchsia-400",
    hover:
      "hover:bg-gradient-to-br from-fuchsia-400 via-purple-500 to-fuchsia-400 hover:transition hover:duration-500",
    background: "pink",
    images: [
      { src: "/images/readmore/roadmap.png" },
      { src: "/images/readmore/creative.png" },
      { src: "/images/readmore/files.png" },
      { src: "/images/readmore/brain.png" },
    ],
  },
  {
    title: "Backend Development",
    description:
      "In my journey through software engineering, backend development has been something that I have really enjoyed learning. It's where you basically create the functionality to your application, and create the purpose behind it. My experience in backend development extends across many different areas of backend development, including database management, user authentication, and seamless API integration. As far as the tools and languages that I have used for backend development, this includes Flask, Node.js, JavaScript, C / C++, Python, MongoDB, SQL, Firebase, and Axios. The way I approach backend development is very detailed and organized, ensuring that as code / systems becomes more complex, sophisticated, and complicates, I can make sure to achieve optimal performance and scalability.",
    icon: <GiFamilyTree />,
    className: "backend",
    words: 13,
    hover:
      "hover:bg-gradient-to-br from-purple-500 via-purple-800 to-purple-500 hover:transition hover:duration-500",
    background: "pink",
    images: [
      { src: "/images/readmore/c++.png" },
      { src: "/images/readmore/python.png" },
      { src: "/images/readmore/nodejs.png" },
      { src: "/images/readmore/mongodb.png" },
      { src: "/images/readmore/flask.png" },
      { src: "/images/readmore/sql.png" },
      { src: "/images/readmore/javascript.png" },
    ],
  },
  {
    title: "Software Development",
    description:
      "Being able to put multiple different skillsets together allows me to approach software development comprehensively. With expertise in full-stack applications, database management, algorithmic thinking, user authentication, and various other standard software engineering practices, I am able to put these different skills together in order to create unique, creative, and high-end solutions that effectively address challenges. This approach ensures the development of software that is not only functional but also stands out in terms of ingenuity and user satisfaction. ",
    icon: <FaDatabase />,
    className: "database",
    words: 13,
    hover:
      "hover:bg-gradient-to-br from-purple-900 via-blue-700 to-purple-900 hover:transition hover:duration-500",
    background: "pink",
    images: [
      { src: "/images/readmore/c++.png" },
      { src: "/images/readmore/react.png" },
      { src: "/images/readmore/vscode.png" },
      { src: "/images/readmore/nodejs.png" },
      { src: "/images/readmore/githubIcon.png" },
      { src: "/images/readmore/firebase.png" },
    ],
  },
  {
    title: "Algorithms",
    description:
      "When implementing code, my focus is on achieving optimal efficiency. Algorithmic thinking is essential to me bacause I know that as systems and data sizes grow, the optimization and performance of your code becomes increasingly more important. Whether tackling simple or intricate problems in frontend or backend developemenent, I consistently strive to implement solutions that not only deliver the desired functionality but also exhibit scalability, responsiveness, and speed. ",
    src: "/images/terminalIcon.png",
    icon: <GoTerminal />,
    className: "algorithmns",
    words: 12,
    hover:
      "hover:bg-gradient-to-br from-blue-600 via-blue-800 to-blue-600 hover:transition hover:duration-500",
    background: "blue",
    images: [
      { src: "/images/readmore/binary.png" },
      { src: "/images/readmore/tree.png" },
      { src: "/images/readmore/c++.png" },
      { src: "/images/readmore/python.png" },
      { src: "/images/readmore/graph.png" },
      { src: "/images/readmore/leetcode.png" },
      { src: "/images/readmore/codeforces.png" },
    ],
  },
  {
    title: "Web Development",
    description:
      "Web development provides software engineers the ability to create applications and services that can be accessed globally. In the broad scope of web developement, I have personally undertaken a wide range of diverse projects, including full-stack applications, real-world applications, frontend-only projects, Node vs Flask backends, MongoDB vs SQL databases, React vs Next frameworks, and more. These experiences have given me a comprehensive understanding or various tools and technologies within the web developement landscape.  ",
    src: "/images/laptop.png",
    icon: <FaLaptopCode />,
    className: "web",
    words: 11,
    hover:
      "hover:bg-gradient-to-br from-sky-500 via-blue-600 to-sky-500 hover:transition hover:duration-500",
    background: "blue",
    images: [
      { src: "/images/readmore/react.png" },
      { src: "/images/readmore/nextjs.png" },
      { src: "/images/readmore/mongodb.png" },
      { src: "/images/readmore/nodejs.png" },
      { src: "/images/readmore/expressjs.png" },
      { src: "/images/readmore/javascript.png" },
      { src: "/images/readmore/axios.png" },
    ],
  },
  {
    title: "Collaboration / Teamwork",
    description:
      "Teammwork is crucial when it comes to software engineering. Being able to effectively communicate, collaborate, share ideas, and overall work togther with other fellow software engineers is a very valuable skill due to its ability to speed up the production cycle. This is something that I have firsthand experience in; I have competed in multiple hackathons where me and fellow computer science students have worked together to create the best project possible within a 24-hour timeframe. Me and my team made sure that we were organized, our code was synchronized, and were working toward the same goal. Due to this I was actually able to win one of the hackathons I attended.",
    src: "/images/people.png",
    icon: <FaPeopleGroup />,
    className: "teamwork",
    words: 13,
    hover:
      "hover:bg-gradient-to-br from-cyan-400 via-sky-500 to-cyan-400 hover:transition hover:duration-500",
    background: "blue",
    images: [
      { src: "/images/readmore/devpost.png" },
      { src: "/images/readmore/githubIcon.png" },
      { src: "/images/readmore/vscode.png" },
    ],
  },
];

export const projectFilters = () => ["All", "Fullstack", "Frontend", "Backend"];

export const projectsData = () => [
  {
    title: "Beating Captchas",
    tags: ["Fullstack", "React.js", "Flask", "Python"],

    github: "https://github.com/cerredz/Beating-Captchas-with-CNNs",
    live: false,
    redirect: "/Beating-Captchas",
    img: "/images/projects/beatingcaptchas.png",
    readMoreImg: "/images/projects/beatingCaptchasGit.png",
    textColor: "linear-gradient(135deg, #0ea5e9,#2563eb , #0ea5e9)",
    preview:
      "Beating Captchas uses machine learning (CNNs) to solve human verification tests, captchas, and displays it onto a website.",
    paragraphs: {
      overview:
        "Both me and a fellow computer science student completed this project during a 24-hour hackathon hosted at TCNJ in 2022. Our project uses machine learning (CNN's) to successfully solve human verification tests, captchas, and displays it on a visually pleasing frontend. All the user has to do is press the 'AI Demo' button, and the Ai solves the captcha displayed, and automatically refreshes with 9 new images for a new captcha to solve.",
      technologies:
        "Technologies used for this project include React.js, bootstrap, flask, jQuery, python, and tenserflow.",
      features: [
        "utilizes machine learning to successfully solve captchas",
        "displays the captcha-solving process on a website",
        "integration of Flask backend and React.js frontend to invoke and display the AI algorithm",
        "contains practically an unlimited amount of unique captchas ",
      ],
      award: {
        devpost: true,
        text: "This project won best overall hack at the 2022 TCNJ Hackdown",
        link: "https://devpost.com/software/beating-captcha-b-captcha?ref_content=user-portfolio&ref_feature=in_progress",
      },
    },
  },
  {
    title: "Personal Website",
    tags: [
      "Frontend",
      "Next.js",
      "Redux",
      "Three.js",
      "Tailwind CSS",
      "Framer Motion",
      "Figma",
    ],
    github: "https://github.com/cerredz/Personal-Website",
    live: true,
    redirect: "https://localhost:3000",
    img: "/images/projects/personalwebsite.png",
    preview:
      "Website that displays the journey of my software engineering career. ",
  },
  {
    title: "Leetcode Problems",
    tags: ["Backend", "C++", "Java", "Python"],
    github: "https://github.com/cerredz/LeetCode-Problems",
    live: false,
    redirect: "/Leetcode-Problems",
    textColor: "linear-gradient(135deg, #7e22ce, #581c87 , #7e22ce)",
    img: "/images/projects/leetcodeproblems.png",
    readMoreImg: "/images/projects/leetcodeproblemsGit.png",
    preview:
      "Completed 350+ leetcode problems in order to gain to enhance problem-solving abilities, algorithmic thinking, and build an overall strong foundation in fundamental programming skills. ",
    paragraphs: {
      overview: "Overview text goes here.",
      technologies: "Technologies used text goes here.",
      features: "Features text goes here.",
      awards: "Awards text goes here (if applicable).",
    },
  },
  {
    title: "ImageinateAI",
    tags: [
      "Fullstack",
      "React.js",
      "Flask",
      "MongoDB",
      "Python",
      "Redux",
      "Firebase",
      "API",
    ],
    github: "https://github.com/cerredz/Rutgers-Hackathon",
    live: false,
    redirect: "/ImageinateAI",
    img: "/images/projects/imageinateai.png",
    readMoreImg: "/images/projects/imageinateaiGit.png",
    textColor: "linear-gradient(135deg, #3b82f6,#1d4ed8 , #3b82f6)",
    preview:
      "ImageinateAI is a game where participants compete in guessing captions used to generate AI images. Project won best overall hack at the 2023 TCNJ Hackathon. ",
    paragraphs: {
      overview: "Overview text goes here.",
      technologies: "Technologies used text goes here.",
      features: "Features text goes here.",
      awards: "Awards text goes here (if applicable).",
    },
  },
  {
    title: "Speed Typing",
    tags: ["Backend", "C++"],
    github: "https://github.com/cerredz/SpeedTyping",
    live: false,
    redirect: "/Speed-Typing",
    img: "/images/projects/speedtyping.png",
    readMoreImg: "/images/projects/speedTypingGit.png",
    textColor: "linear-gradient(135deg, #7e22ce, #581c87 , #7e22ce)",
    preview:
      "Speed Typing is an Object-Oriented  C++ game designed to improve typing speed and accuracy through interactive typing challenges and complex data analyzation.",
    paragraphs: {
      overview: "Overview text goes here.",
      technologies: "Technologies used text goes here.",
      features: "Features text goes here.",
      awards: "Awards text goes here (if applicable).",
    },
  },
  {
    title: "LSR Kicks",
    tags: [
      "Fullstack",
      "React.js",
      "Node.js",
      "MySQL",
      "API",
      "Firebase",
      "Javascript",
      "Sanity",
    ],
    github: "https://github.com/cerredz/lsr-kicks",
    live: true,
    redirect: "https://lsrkicks.com/",
    img: "/images/projects/lsrkicks.png",
    preview:
      "LSR Kicks is a MERN stack real-world shoe-selling application offering users a user-friendly online store to browse and purchase desired shoes.",
    paragraphs: {
      overview: "Overview text goes here.",
      technologies: "Technologies used text goes here.",
      features: "Features text goes here.",
      awards: "Awards text goes here (if applicable).",
    },
  },
  {
    title: "RefinedAI",
    tags: [
      "Fullstack",
      "React.js",
      "Node.js",
      "MongoDB",
      "API",
      "Redux",
      "SCSS",
    ],
    github: "https://github.com/cerredz/RefinedAi",
    live: false,
    redirect: "/RefinedAI",
    img: "/images/projects/refinedai.png",
    readMoreImg: "/images/projects/refinedaiGit.png",
    textColor: "linear-gradient(135deg, #a855f7,#7e22ce , #a855f7)",
    preview:
      "RefinedAI is a comprehensive Full-Stack application engineered to provide customers with advanced upscaling services through cutting-edge artificial intelligence (AI) technology.",
    paragraphs: {
      overview: "Overview text goes here.",
      technologies: "Technologies used text goes here.",
      features: "Features text goes here.",
      awards: "Awards text goes here (if applicable).",
    },
  },
  {
    title: "ARTificial",
    tags: ["Fullstack", "React.js", "Flask", "Python"],
    github: "https://github.com/cerredz/ARTificial-TCNJ-Hackathon-2023",
    live: false,
    redirect: "/ARTificial",
    img: "/images/projects/artificial.png",
    readMoreImg: "/images/projects/artificialGit.png",
    textColor: "linear-gradient(135deg, #7e22ce, #581c87 , #7e22ce)",
    preview:
      "ARTificial is a web-based application designed to display and present an AI that uses neural style transfer to apply the style of one image to the content of another.",
    paragraphs: {
      overview: "Overview text goes here.",
      technologies: "Technologies used text goes here.",
      features: "Features text goes here.",
      awards: "Awards text goes here (if applicable).",
    },
  },
  {
    title: "Rocket Math",
    tags: ["Fullstack", "React.js", "Node.js", "MySQL", "Javascript"],
    github: "https://github.com/cerredz/Rocket-Math-Game",
    live: false,
    redirect: "/Rocket-Math",
    img: "/images/projects/rocketmath.png",

    readMoreImg: "/images/projects/rocketmathGit.png",
    textColor: "linear-gradient(135deg, #3b82f6,#1d4ed8 , #3b82f6)",
    preview:
      "Wesbite that displays a game called Rocket Math; a series of math problems that have to be completed in a short amount of time. Includes a database of all users, leaderboard, and ranked system.",
    paragraphs: {
      overview: "Overview text goes here.",
      technologies: "Technologies used text goes here.",
      features: "Features text goes here.",
      awards: "Awards text goes here (if applicable).",
    },
  },

  {
    title: "Net Worth Calculator",
    tags: ["Frontend", "HTML", "CSS", "Javascript"],
    textColor: "linear-gradient(135deg, #a855f7,#7e22ce , #a855f7)",
    github: "https://github.com/cerredz/Net-Worth-Calculator",
    live: false,
    redirect: "/Net-Worth-Calculator",
    img: "/images/projects/networthcalculator.png",
    readMoreImg: "/images/projects/networthcalculatorGit.png",
    preview:
      "Basic HTML, CSS, and Javascript website that asks the user a series of questions in order to calculate their net worth. My first ever software engineering project. ",
    paragraphs: {
      overview: "Overview text goes here.",
      technologies: "Technologies used text goes here.",
      features: "Features text goes here.",
      awards: "Awards text goes here (if applicable).",
    },
  },
];
