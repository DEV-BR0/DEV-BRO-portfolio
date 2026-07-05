"use client";

import Link from "next/link";
import { useEffect } from "react";
import { FaGithub, FaLinkedin, FaTelegramPlane } from "react-icons/fa";
function page() {
  useEffect(() => {
    document.title = "DEV-BRO | Home";
  });
  return (
    <>
      <div className="lg:flex-row flex flex-col-reverse lg:justify-between justify-center items-center w-full h-full items-center pt-[120px]">
        <div className="flex flex-col items-center gap-[20px]">
          <div className="flex flex-col items-center">
            <p className="text-white lg:text-[80px] md:text-[70px] text-[30px] font-medium text-center">
              Hi I'm{" "}
              <span className="text-gray-400 font-bold">
                Dadaxanov Ubaydulloh
              </span>
            </p>
            <p className="text-white lg:text-[30px] md:text-[24px] text-[20px]">
              I am a Full-Stack Developer.
            </p>
          </div>
          <div className="flex gap-[20px]">
            <Link
              href={"/about"}
              className="backdrop-blur-[9px] border border-white/20 rounded-2xl shadow-xl p-[15px] pr-[40px] pl-[40px] text-white hover:border-white/60 hover:text-white/60 transition duration-200  "
            >
              About
            </Link>
            <Link
              href={"/projects"}
              className="backdrop-blur-[9px] border border-white/20 rounded-2xl shadow-xl p-[15px] pr-[40px] pl-[40px] text-white hover:border-white/60 hover:text-white/60 transition duration-200  "
            >
              Projects
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center gap-[20px]">
          <img
            src="./hom.jpg"
            alt="Photo"
            className="rounded-[50%] w-[350px] md:w-[400px] lg:w-[450px]"
          />
          <div className="flex gap-[20px] lg:flex-nowrap flex-wrap justify-center">
            <Link
              href={"https://github.com/DEV-BR0"}
              target="_blank"
              rel="noopener noreferrer"
              className="backdrop-blur-[9px] border border-white/20 rounded-2xl shadow-xl text-white hover:border-white/60 hover:text-white/60 transition duration-200 flex gap-[8px] items-center p-[10px] text-[20px]"
            >
              <FaGithub />
              Github
            </Link>
            <Link
              href={"https://www.linkedin.com/in/ubaydulloh-dadahanov-8219a43b3"}
              target="_blank"
              rel="noopener noreferrer"
              className="backdrop-blur-[9px] border border-white/20 rounded-2xl shadow-xl text-white hover:border-white/60 hover:text-white/60 transition duration-200 flex gap-[8px] items-center p-[10px] text-[20px]"
            >
              <FaLinkedin />
              Linkedin
            </Link>
            <Link
              href={"https://t.me/DEV_BR0"}
              target="_blank"
              rel="noopener noreferrer"
              className="backdrop-blur-[9px] border border-white/20 rounded-2xl shadow-xl text-white hover:border-white/60 hover:text-white/60 transition duration-200 flex gap-[8px] items-center p-[10px] text-[20px]"
            >
              <FaTelegramPlane />
              Telegram
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
