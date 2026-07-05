"use client";
import { useEffect } from "react";

function page() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Preact",
    "Svelte",
    "SvelteKit",
    "Electron",
    "SASS",
    "Tailwind CSS",
    "GSAP",
    "React Native",
    "Node.js",
    "Express.js",
    "Webpack",
    "REST API",
    "node-telegram-bot-api",
  ];
  useEffect(() => {
    document.title = "DEV-BRO | About";
  }, []);
  return (
    <div className="flex gap-[20px] flex-col h-[70vh] justify-center">
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
              {skill}
            </span>
          ))}
          
        </div>
      </div>
    </div>
  );
}

export default page;
