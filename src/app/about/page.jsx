"use client";
import { useEffect } from "react";

function page() {
  useEffect(() => {
    document.title = "DEV-BRO | About";
  }, []);
  return (
    <div>
      <h1 className="text-[40px] font-bold text-white">About Me</h1>
      <pre>
        
      </pre>
    </div>
  );
}

export default page;
