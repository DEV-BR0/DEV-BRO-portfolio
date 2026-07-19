"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import Bars from "./Bars";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center p-[10px]">
        <div className="w-full max-w-7xl flex items-center justify-between px-5 py-3 text-white backdrop-blur-md bg-white/5 border border-white/20 rounded-2xl shadow-xl">
          <Link href="/">
            <Image
              src="/fovicon.png"
              alt="Logo"
              width={64}
              height={64}
              className="w-12 sm:w-16 cursor-pointer"
              priority
            />
          </Link>

          <button
            onClick={() => setIsOpen(true)}
            className="block sm:hidden p-3 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 transition"
          >
            <FaBars className="text-xl" />
          </button>

          <div className="hidden sm:flex items-center gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-xl transition-all duration-300 ${
                  pathname === link.href
                    ? "bg-white/10 backdrop-blur-md border border-white/20"
                    : "hover:bg-white/10"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {isOpen && (
        <Bars
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
    </>
  );
}

export default Navbar;