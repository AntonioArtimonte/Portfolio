import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Antonio Artimonte",
  initials: "AA",
  url: "https://github.com/AntonioArtimonte",
  location: "São Paulo, SP",
  locationLink: "https://www.google.com/maps/place/S%C3%A3o+Paulo,+SP/@-23.6814347,-46.9249405,10z/data=!3m1!4b1!4m6!3m5!1s0x94ce448183a461d1:0x9ba94b08ff335bae!8m2!3d-23.5557714!4d-46.6395571!16zL20vMDIycGZt?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D",
  description:
    "Computer Engineering student passionate about technology and agile methodologies like SCRUM. Skilled in team collaboration and leadership, eager to apply knowledge to impactful projects.",
  summary:
    "At the start of 2023, I began pursuing a degree in [Computer Engineering at Inteli](/#education), combining my passion for technology with leadership skills. Throughout my academic journey, I’ve worked on impactful projects like developing AI-driven robotic solutions for process automation with companies like ATVOS and the Sírio Libanês Hospital. I’ve competed in several programming competitions, including placing 28th in the ICPC São Paulo regional, the largest in Latin America. [I also had the opportunity to participate and win a hackathon organized by NTT Data](/#hackathons).",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Java",
    "C++",
    "Ruby",
    "C#",
    "Nuxt",
    "Machine Learning",
    "Data Engineering",
    "Feature Engineering",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "antonio.artimonte@gmail.com",
    tel: "+55 (19) 99783-2005",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/AntonioArtimonte",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/antonio-guimarães2005",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://www.instagram.com/antonio_artimonte/",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "https://mail.google.com/mail/?view=cm&fs=1&to=antonio.artimonte@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [

    {
      company: "None",
      href: "None",
      badges: [],
      location: "None",
      title: "None",
      logoUrl: "/atomic.png",
      start: "None",
      end: "None",
      description:
        "None",
    },

  ],
  education: [
    {
      school: "INTELI (Instituto de Tecnologia e Liderança)",
      href: "https://www.inteli.edu.br/",
      degree: "Bachelor's Degree of Computer Engineering (CE)",
      logoUrl: "/laurier.png",
      start: "2023",
      end: "2026",
    },
    {
      school: "Colégio Rio Branco Campinas",
      href: "https://www.riobranco.org.br/",
      degree: "High School",
      logoUrl: "/ib.png",
      start: "2007",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "Machine Learning for Process Automation",
      href: "https://github.com/Inteli-College/2024-T0008-EC05-G03",
      dates: "April 2024 - June 2024",
      active: true,
      description:
        "Developed a fullstack system for automating the inspection of sugarcane fermentation reboilers. I built a React web app, implemented the control logic for the Turtlebot3, and managed real-time video feed transmission. Additionally, I created a custom YOLO dataset to enable AI-powered detection of cleanliness, improving operational efficiency in the facility.",
      technologies: [
        "Vite",
        "Typescript",
        "TinyDB",
        "Python",
        "TailwindCSS",
        "Yolo",
        "Turtlebot3",
        "ROS",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/Inteli-College/2024-T0008-EC05-G03",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Process Automation with Robotics",
      href: "https://github.com/Inteli-College/2024-1B-T08-EC06-G04",
      dates: "Feb 2024 - April 2024",
      active: true,
      description:
        "Designed a fullstack solution to automate processes at Sírio Libanês Hospital. I developed both the frontend in React and the backend logic for controlling the DobotMagicianLite robot, enabling it to sort expired products and organize emergency carts autonomously. This project enhanced inventory and emergency resource management within the hospital.",
      technologies: [
        "Vite",
        "Typescript",
        "TinyDB",
        "TailwindCSS",
        "Python",
        "FastAPI",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/Inteli-College/2024-1B-T08-EC06-G04",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "IoT Solution for Connected Companies",
      href: "https://github.com/InteliProjects/2023M4T8Inteli-grupo4",
      dates: "Oct 2023 - Dec 2023",
      active: true,
      description:
        "Built a fullstack IoT asset tracking system using ESP32 microcontrollers and a web interface for real-time monitoring. I handled both hardware integration and the development of a user-friendly interface for tracking critical assets. The system improved asset management efficiency at RNP, allowing for real-time updates and better resource control.",
      technologies: [
        "MySQL",
        "C++",
        "ESP32",
        "GPS",
        "BootStrap",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/InteliProjects/2023M4T8Inteli-grupo4",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Predictive Maintenance Model",
      href: "https://automatic.chat",
      dates: "Aug 2024 - Present",
      active: true,
      description:
        "Developing an AI model to predict potential failures in Volkswagen vehicles before they undergo physical testing. This fullstack project includes building a NUXT application to provide an interface for inputting vehicle data and displaying prediction results. The system aims to improve the efficiency of vehicle testing by identifying issues early in the process, reducing time and costs.",
      technologies: [
        "Nuxt.js",
        "Typescript",
        "MongoDB",
        "SKLearn",
        "TailwindCSS",
        "Feature Engineering",
        "Data Engineering",
        "Machine Learning",
        "Data Visualization",
        "Data Analysis",
        "Data Cleaning",
        "Data Preprocessing",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/Inteli-College/2024-2A-T08-EC07-G01",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "NTTData Hackathon",
      dates: "Aug 15rd - 21th, 2024",
      location: "São Paulo, SP",
      description:
        "As part of the winning team, RogersAI, we developed a solution using drones to detect people in post-disaster scenarios. The project utilized synthetic data and machine learning, aligning with ESG principles to improve disaster response efforts. The drones analyzed affected areas in real-time, helping expedite rescue operations. This fullstack project demonstrated the potential of AI-driven technology for humanitarian impact.",
      image:
        "/hack.png",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/AntonioArtimonte/Hackathon-NTT",
        },
      ],
    },
  ],
} as const;
