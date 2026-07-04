"use client";

import Link from 'next/link';
import { useEffect } from "react";

function page() {
  useEffect(() => {
    document.title = "DEV-BRO | Home";
  });
  return (
    <>
      <div className="w-full flex justify-center ">
        <div className="flex flex-col w-[70%] justify-between text-white text-center">
          <p className="text-[70px] font-medium">
            Hi I'm{" "}
            <span className="text-cyan-300 font-extrabold">
              Dadaxanov Ubaydulloh
            </span>{" "}
          </p>
          <p className="text-cyan-400 font-bold text-[30px]">
            My Full Stack developer
          </p>
          <div className="flex gap-[20px]">
            <Link href={'/projects'}>My Projects</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
