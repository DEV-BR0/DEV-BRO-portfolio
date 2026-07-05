"use client";

import gsap from "gsap";
import Link from "next/link";
import { useEffect } from "react";

function page() {
  useEffect(() => {
    document.title = "DEV-BRO | Home";
  });
  return (
    <>
      <h1>home</h1>
    </>
  );
}

export default page;
