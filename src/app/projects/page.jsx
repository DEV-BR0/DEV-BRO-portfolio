"use client";
import { useEffect } from "react";
import { Icon } from "@iconify/react";
function page() {
  useEffect(() => {
    document.title = "DEV-BRO | Projects";
  });

  const projects = [
    {
      id: 1,
      title: "KFC",
      photo: "https://i.ibb.co/cc81QwC2/photo-7-2026-07-06-10-03-24.jpg",
      caption:
        "A modern and fully responsive KFC landing page built from a Figma design. This project focuses on creating a clean user interface, smooth user experience, and pixel-perfect implementation while following modern frontend development practices.",
      demo: "https://kfc-figma.netlify.app/",
      texnologiya: ["Html", "Css"],
      github: "https://github.com/DEV-BR0/media__kfc.git",
    },
    {
      id: 2,
      title: "",
      photo: "https://i.ibb.co/yFFCxQZR/photo-6-2026-07-06-10-03-24.jpg",
      caption:
        "A modern and fully responsive KFC landing page built from a Figma design. This project focuses on creating a clean user interface, smooth user experience, and pixel-perfect implementation while following modern frontend development practices.",
      demo: "https://kfc-figma.netlify.app/",
      texnologiya: ["Html", "Css"],
      github: "https://github.com/DEV-BR0/media__kfc.git",
    },
    {
      id: 1,
      title: "KFC",
      photo: "https://i.ibb.co/cc81QwC2/photo-7-2026-07-06-10-03-24.jpg",
      caption:
        "A modern and fully responsive KFC landing page built from a Figma design. This project focuses on creating a clean user interface, smooth user experience, and pixel-perfect implementation while following modern frontend development practices.",
      demo: "https://kfc-figma.netlify.app/",
      texnologiya: ["Html", "Css"],
      github: "https://github.com/DEV-BR0/media__kfc.git",
    },
    {
      id: 1,
      title: "KFC",
      photo: "https://i.ibb.co/cc81QwC2/photo-7-2026-07-06-10-03-24.jpg",
      caption:
        "A modern and fully responsive KFC landing page built from a Figma design. This project focuses on creating a clean user interface, smooth user experience, and pixel-perfect implementation while following modern frontend development practices.",
      demo: "https://kfc-figma.netlify.app/",
      texnologiya: ["Html", "Css"],
      github: "https://github.com/DEV-BR0/media__kfc.git",
    },
  ];

  return (
    <>
      <div className="projects flex lg:flex-wrap flex-row rounded-xl ">
        {projects.map((i) => {
          return (
            <div
              key={i.id}
              className="backdrop-blur-[9px] border border-white/20 rounded-2xl shadow-xl text-white hover:border-white/60 hover:text-white/60 transition duration-200 flex gap-[8px] items-center p-[10px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px]  flex-col w-[330px]"
            >
              <img src={i.photo} alt="Projects-photo" className="rounded-xl" />
              <div className="flex flex-col p-[10px] gap-[10px]">
                <p className="text-[24px] text-white font-bold">{i.title}</p>
                <p className="text-sm text-gray-400 leading-7 line-clamp-3  ">
                  {i.caption}
                </p>
                <div className="flex gap-[10px]">
                  {i.texnologiya.map((tex) => {
                    return (
                      <p
                        key={tex}
                        className=" backdrop-blur-[9px] border border-white/20 rounded-2xl shadow-xl text-white hover:border-white/60 hover:text-white/60 transition duration-200 flex gap-[8px]  p-[6px] cursor-pointer"
                      >
                        {tex}
                      </p>
                    );
                  })}
                </div>
                <div className="flex gap-[20px]">
                  <a
                    target="_blank"
                    href={`${i.demo}`}
                    className="p-[10px] backdrop-blur-[9px] border border-white/20 rounded-2xl shadow-xl text-white hover:border-white/60 hover:text-white/60 transition duration-200 text-[17px] flex gap-[10px] items-center"
                  >
                    Demo Site
                  </a>
                  <a
                    target="_blank"
                    href={`${i.github}`}
                    className="p-[10px] backdrop-blur-[9px] border border-white/20 rounded-2xl shadow-xl text-white hover:border-white/60 hover:text-white/60 transition duration-200 text-[17px] flex gap-[10px] items-center"
                  >
                    <Icon icon={"simple-icons:github"} />
                    GitHub Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default page;
