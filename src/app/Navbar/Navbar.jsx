"use client";

import Link from "next/link";
import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function Navbar({ Functheme }) {
  const [active, setActive] = useState("home");
  const [start, setSart] = useState(false);
  const audioRef = useRef(null);
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio("./1.mp3");
    }
    if (start) {
      audioRef.current.play();
      audioRef.current.loop = true;
    } else {
      audioRef.current.pause();
    }
  }, [start]);

  return (
    <div className=" flex justify-center items-center p-[45px]">
      <div className=" contenr w-full items-center fixed gap-[40px]  backdrop-blur-[9px] border border-white/20 rounded-2xl shadow-xl flex justify-between  text-white p-[12px] pl-[20px] pr-[20px]">
        <div className="logo">
          <img src="./fovicon.png" alt="Logo" className="w-[70px]" />
        </div>
        <div className=" flex gap-[20px]">
          <button className="cursor-pointer" onClick={() => setSart((i) => !i)}>
            {start ? <Pause /> : <Play />}
          </button>

          <Link
            href={"/"}
            onClick={() => setActive("home")}
            className={`${active == "home" ? `backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-[10px] transition duration-300` : "p-[10px]"}`}
          >
            Home
          </Link>
          <Link
            href={"/about"}
            onClick={() => setActive("about")}
            className={`${active == "about" ? `backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-[10px] transition duration-300` : "p-[10px]"}`}
          >
            About
          </Link>
          <Link
            href={"/projects"}
            onClick={() => setActive("projects")}
            className={`${active == "projects" ? `backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-[10px] transition duration-300` : "p-[10px]"}`}
          >
            Projects
          </Link>
          <Link
            href={"/contact"}
            onClick={() => setActive("contact")}
            className={`${active == "contact" ? `backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-[10px] transition duration-300` : "p-[10px] "}`}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
