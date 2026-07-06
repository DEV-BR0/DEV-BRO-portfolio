"use client";
import { useEffect } from "react";
import { FaBrain, FaReact } from "react-icons/fa";
import { FaWandMagicSparkles } from "react-icons/fa6";
import {
  SiCss,
  SiElectron,
  SiExpress,
  SiFlask,
  SiGsap,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenapiinitiative,
  SiPreact,
  SiReact,
  SiSass,
  SiSvelte,
  SiTailwindcss,
  SiTelegram,
  SiVuedotjs,
  SiWebpack,
} from "react-icons/si";

function page() {
  const skills = [
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "CSS", icon: <SiCss /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "React", icon: <SiReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Vue.js", icon: <SiVuedotjs /> },
    { name: "Preact", icon: <SiPreact /> },
    { name: "Svelte", icon: <SiSvelte /> },
    { name: "SvelteKit", icon: <SiSvelte /> }, // alohida icon yo'q
    { name: "Electron", icon: <SiElectron /> },
    { name: "SASS", icon: <SiSass /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "GSAP", icon: <SiGsap /> },
    { name: "AOS", icon: <FaWandMagicSparkles /> },
    { name: "React Native", icon: <FaReact /> }, // alohida icon yo'q
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "Flask", icon: <SiFlask /> },
    { name: "Webpack", icon: <SiWebpack /> },
    { name: "REST API", icon: <SiOpenapiinitiative /> },
    { name: "AI-Powered Development", icon: <FaBrain /> },
    { name: "node-telegram-bot-api", icon: <SiTelegram /> },
  ];

  useEffect(() => {
    document.title = "DEV-BRO | About";
  }, []);
  return (
    <div className="flex gap-[20px] flex-col h-[70vh] justify-center mt-[150px] lg:mt-[-100px] sm:mt-[-0px]">
      <div className="flex flex-col gap-[20px] justify-end">
        <div className="flex flex-col gap-[30px]">
          <h1 className="text-[40px] font-bold text-white">About Me</h1>
          <div className="flex flex-col lg:flex-row gap-[30px] lg:items-center items-start ">
            <pre className="text-white font-medium font-sans lg:text-[20px] md:text-[18px] sm:text-[20px] text-[12px]">
              {`I'm Ubaydulloh Dadaxonov, a passionate Full-Stack Developer
focused on building modern, responsive, and scalable web
applications. I enjoy creating clean and user-friendly
digital experiences while continuously learning new
technologies and improving my skills. My goal is to build
high-quality software that makes a real impact.`}
            </pre>
            <div className="flex flex-wrap gap-[10px]">
              {skills.map((item) => {
                return (
                  <div
                    key={item.name}
                    className="flex rounded-full border hover:border-white/60 hover: border-white/20 bg-white/5 px-4 py-2 text-white backdrop-blur transition duration-200 justify-center items-center gap-[10px] hover:text-white/50 lg:text-[18px] md:text-[16px]"
                  >
                    <span className="" key={item.name}>
                      {item.icon}
                    </span>
                    <p className="">{item.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="overflow-hidden whitespace-nowrap">
          <div className="flex w-max animate-marquee gap-8 mt-[70px]">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="flex rounded-full border hover:border-white/60 hover: border-white/20 bg-white/5 px-4 py-2 text-white backdrop-blur transition duration-200 justify-center items-center gap-[10px] hover:text-white/50"
              >
                {skill.icon}
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
