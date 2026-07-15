"use client";
import { useGSAP } from "@gsap/react";
import { Icon } from "@iconify/react";
import gsap from "gsap";
import { useEffect } from "react";

function page() {
  const frontendSkills = [
    { name: "HTML", icon: "vscode-icons:file-type-html" },
    { name: "CSS", icon: "vscode-icons:file-type-css" },
    { name: "JavaScript", icon: "logos:javascript" },
    { name: "React", icon: "logos:react" },
    { name: "Next.js", icon: "logos:nextjs-icon" },
    { name: "Vue.js", icon: "logos:vue" },
    { name: "SASS", icon: "logos:sass" },
    { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
    { name: "Webpack", icon: "logos:webpack" },
  ];

  const backendSkills = [
    { name: "Node.js", icon: "logos:nodejs-icon" },
    { name: "Python", icon: "logos:python" },
    { name: "node-telegram-bot-api", icon: "logos:telegram" },
  ];

  const animationSkills = [
    { name: "GSAP", icon: "logos:greensock-icon" },
    { name: "AOS", icon: "solar:magic-stick-3-bold-duotone" },
  ];

  const aiSkills = [
    { name: "OpenAI", icon: "simple-icons:openai" },
    { name: "Claude AI", icon: "simple-icons:anthropic" },
    { name: "Google Gemini", icon: "logos:google-gemini" },
    { name: "GitHub Copilot", icon: "simple-icons:githubcopilot" },
    { name: "Perplexity AI", icon: "simple-icons:perplexity" },
    { name: "Cursor AI", icon: "simple-icons:cursor" },
    { name: "Midjourney", icon: "simple-icons:midjourney" },
    { name: "DeepSeek", icon: "simple-icons:deepseek" },
    { name: "AI-Powered Development", icon: "solar:code-bold-duotone" },
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
  }, []);

  useEffect(() => {
    document.title = "DEV-BRO | About";
  }, []);

  return (
    <div className="flex gap-[20px]  flex-col  justify-center mt-[0px] sm:mt-[-0px]">
      <div className="flex flex-col gap-[20px] justify-end">
        <div className="flex flex-col gap-[30px]">
          <div className="flex flex-col lg:flex-row gap-[30px] lg:items-center items-start ">
            <div className="flex flex-col gap-[30px]">
              <h1 className="about text-[40px] font-bold text-white ">
                About Me
              </h1>
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
              {frontendSkills.map((skill, i) => (
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
          <div className="flex w-max animate-marquee gap-8 mt-[70px]">
            {frontendSkills.map((skill, i) => (
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
      <div className="flex flex-col gap-[20px] ">
        <h1 className="text-white text-[27px] skile">Backend Skills</h1>
        <div className="flex flex-wrap gap-[10px]">
          {backendSkills.map((skill, i) => (
            <div className="skile cursor-pointer" key={i}>
              <span className=" flex rounded-full border hover:border-white/60 hover: border-white/20 bg-white/5 px-4 py-2 text-white backdrop-blur transition duration-200 justify-center items-center gap-[10px] hover:text-white/50">
                <Icon icon={skill.icon} height={30} />
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-[30px]">
        <div className="">
          <h1 className="text-white text-[27px] font-bold skile">Tools</h1>
        </div>
        <div className="flex flex-wrap text-white gap-[10px]">
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
      <div className="flex flex-col gap-[20px] ">
        <h1 className="text-white text-[27px] skile">Animation Skills</h1>
        <div className="flex flex-wrap gap-[10px]">
          {animationSkills.map((skill, i) => (
            <div className="skile cursor-pointer" key={i}>
              <span className=" flex rounded-full border hover:border-white/60 hover: border-white/20 bg-white/5 px-4 py-2 text-white backdrop-blur transition duration-200 justify-center items-center gap-[10px] hover:text-white/50">
                <Icon icon={skill.icon} height={30} />
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-[20px] ">
        <h1 className="text-white text-[27px] skile">AI Skills</h1>
        <div className="flex flex-wrap gap-[10px]">
          {aiSkills.map((skill, i) => (
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
