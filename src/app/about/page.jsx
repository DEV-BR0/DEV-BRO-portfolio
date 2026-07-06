"use client";
import { useGSAP } from "@gsap/react";
import { Icon } from "@iconify/react";
import gsap from "gsap";
import { useEffect } from "react";

function page() {
  const skills = [
    { name: "HTML", icon: "vscode-icons:file-type-html" },
    { name: "CSS", icon: "vscode-icons:file-type-css" },
    { name: "JavaScript", icon: "logos:javascript" },
    { name: "React", icon: "logos:react" },
    { name: "Next.js", icon: "logos:nextjs-icon" },
    { name: "Vue.js", icon: "logos:vue" },
    { name: "Preact", icon: "logos:preact" },
    { name: "Svelte", icon: "logos:svelte-icon" },
    { icon: "logos:svelte-kit" },
    { name: "Electron", icon: "logos:electron" },
    { name: "SASS", icon: "logos:sass" },
    { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
    { name: "GSAP", icon: "logos:greensock-icon" },
    { name: "AOS", icon: "solar:magic-stick-3-bold-duotone" }, // AOS rasmiysi yo'q
    { name: "React Native", icon: "logos:react" },
    { name: "Node.js", icon: "logos:nodejs-icon" },
    { name: "Express.js", icon: "skill-icons:expressjs-dark" },
    { name: "Flask", icon: "skill-icons:flask-light" },
    { name: "Webpack", icon: "logos:webpack" },
    { name: "REST API", icon: "logos:openapi-icon" },
    { name: "AI-Powered Development", icon: "simple-icons:openai" },
    { name: "node-telegram-bot-api", icon: "logos:telegram" },
    { name: "Python", icon: "logos:python" },
  ];

  const tools = [
    { name: "Git", icon: "logos:git-icon" },
    { name: "GitHub", icon: "simple-icons:github" },
    { name: "VS Code", icon: "logos:visual-studio-code" },
    { name: "Figma", icon: "logos:figma" },
    { name: "Vercel", icon: "simple-icons:vercel" },
    { name: "Netlify", icon: "simple-icons:netlify" },
    { name: "npm", icon: "logos:npm-icon" },
    { name: "Prettier", icon: "logos:prettier" },
    { name: "Vite", icon: "logos:vitejs" },
    { name: "OpenAI", icon: "simple-icons:openai" },
    { name: "Google Gemini", icon: "simple-icons:googlegemini" },
    { name: "Claude", icon: "simple-icons:claude" },
  ];
  useGSAP(() => {
    gsap.from(".skile", {
      y: 70,
      opacity: 0,
      stagger: 0.03,
    });
    gsap.from(".about", {
      x: -100,
      opacity: 0,
      stagger: 0.1,
    });

    gsap.from(".about-bottom ", {
      y: 100,
      opacity: 0,
    });
  });

  useEffect(() => {
    document.title = "DEV-BRO | About";
  }, []);

  return (
    <div className="flex gap-[20px]  flex-col  justify-center mt-[0px] lg:mt-[-100px] sm:mt-[-0px]">
      <div className="flex flex-col gap-[20px] justify-end">
        <div className="flex flex-col gap-[30px]">
          <h1 className="about text-[40px] font-bold text-white ">About Me</h1>
          <div className="flex flex-col lg:flex-row gap-[30px] lg:items-center items-start ">
            <div className="flex flex-col gap-[30px]">
              <pre className="about  text-white font-medium font-sans lg:text-[20px] md:text-[18px] sm:text-[20px] text-[12px]">
                {`I'm Ubaydulloh Dadaxonov, a passionate Full-Stack Developer
focused on building modern, responsive, and scalable web
applications. I enjoy creating clean and user-friendly
digital experiences while continuously learning new
technologies and improving my skills. My goal is to build
high-quality software that makes a real impact.`}
              </pre>
            </div>
            <div className="flex flex-wrap gap-[10px] ">
              {skills.map((skill, i) => (
                <div className="skile cursor-pointer" key={i}>
                  <span className=" flex rounded-full border hover:border-white/60 hover: border-white/20 bg-white/5 px-4 py-2 text-white backdrop-blur transition duration-200 justify-center items-center gap-[10px] hover:text-white/50">
                    <Icon icon={skill.icon} height={30} />
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="about-bottom overflow-hidden whitespace-nowrap">
          <div id="box" className="flex w-max animate-marquee gap-8 mt-[70px]">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="flex rounded-full border hover:border-white/60 hover: border-white/20 bg-white/5 px-4 py-2 text-white backdrop-blur transition duration-200 justify-center items-center gap-[10px] hover:text-white/50 cursor-pointer"
              >
                <Icon icon={skill.icon} height={30} />
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[30px]">
        <div className="">
          <h1 className="text-white text-[27px] font-bold">Tools</h1>
        </div>
        <div className="flex flex-wrap text-white gap-[10px]" id="box">
          {tools.map((skill, i) => (
            <div className="skile cursor-pointer" key={i}>
              <span className=" flex rounded-full border hover:border-white/60 hover: border-white/20 bg-white/5 px-4 py-2 text-white backdrop-blur transition duration-200 justify-center items-center gap-[10px] hover:text-white/50">
                <Icon icon={skill.icon} height={30} />
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
