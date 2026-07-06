"use client";
import { useEffect } from "react";
import { FaReact } from "react-icons/fa";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiPreact,
  SiSvelte,
  SiSvelte,
  SiElectron,
  SiSass,
  SiTailwindcss,
  SiGsap,
  SiNodedotjs,
  SiExpress,
  SiWebpack,
  SiOpenapiinitiative,
  SiTelegram,
} from "react-icons/si";

function page() {
 const skills = [
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Preact", icon: SiPreact },
  { name: "Svelte", icon: SiSvelte },
  { name: "SvelteKit", icon: SiSvelte },
  { name: "Electron", icon: SiElectron },
  { name: "SASS", icon: SiSass },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "GSAP", icon: SiGsap },
  { name: "React Native", icon: FaReact },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express.js", icon: SiExpress },
  { name: "Webpack", icon: SiWebpack },
  { name: "REST API", icon: SiOpenapiinitiative },
  { name: "node-telegram-bot-api", icon: SiTelegram },
];






  useEffect(() => {
    document.title = "DEV-BRO | About";
  }, []);
  return (
    <div className="flex gap-[20px] flex-col h-[70vh] justify-center">
      <div className="flex flex-col gap-[20px]">



      <div className="flex flex-col gap-[20px]">
        <h1 className="text-[40px] font-bold text-white">About Me</h1>
        <pre className="text-white font-medium font-sans text-[20px]">
          {`I'm Ubaydulloh Dadaxonov, a passionate Full-Stack Developer
focused on building modern, responsive, and scalable web
applications. I enjoy creating clean and user-friendly
digital experiences while continuously learning new
technologies and improving my skills. My goal is to build
high-quality software that makes a real impact.`}
        </pre>
      </div>
      <div className="overflow-hidden whitespace-nowrap">
        <div className="flex w-max animate-marquee gap-8">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="rounded-full border hover:border-white/60 hover: border-white/20 bg-white/5 px-4 py-2 text-white backdrop-blur transition duration-200"
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
      </div>
      <div className="f"></div>
    </div>
  );
}

export default page;
