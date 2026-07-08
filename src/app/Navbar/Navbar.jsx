"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";
import Bars from "./Bars";

function Navbar() {
  const [active, setActive] = useState("home");
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") {
      setActive("home");
    } else if (pathname === "/about") {
      setActive("about");
    } else if (pathname === "/projects") {
      setActive("projects");
    } else if (pathname === "/contact") {
      setActive("contact");
    }
  }, [pathname]);

  return (
    <div className="fixed top-6 left-0 right-0 flex justify-center z-40">
      <div className="contenr w-[95%] max-w-7xl items-center fixed gap-[40px]  backdrop-blur-[6px] border border-white/20 rounded-2xl shadow-xl flex justify-between  text-white p-[12px] pl-[20px] pr-[20px] ">
        <div className="logo">
          <img src="./fovicon.png" alt="Logo" className="w-[70px]" />
        </div>
        <div
          onClick={() => setActive("modal")}
          className="sm:hidden block p-[10px] backdrop-blur-[6px] border border-white/20 rounded-2xl shadow-xl items-center justify-center "
        >
          <FaBars />
        </div>
        {active == "modal" ? <Bars modal={active} setModal={setActive} /> : ""}

        <div className=" flex gap-5 sm:block hidden">
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
