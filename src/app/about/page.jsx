"use client";
import { useEffect } from "react";

function page() {
  useEffect(() => {
    document.title = "DEV-BRO | About";
  }, []);
  return (
    <div>
      <h1 className="">aboutga hush kkelibsiz</h1>
    </div>
  );
}

export default page;
