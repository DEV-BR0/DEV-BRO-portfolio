"use client"
import { useEffect } from 'react';

function page() {

  useEffect(()=>{
    document.title = 'DEV-BRO | Projects'
  })


  const projects = [
    {
      id: 1,
      title: "KFC",
      caption:
        "A modern and fully responsive KFC landing page built from a Figma design. This project focuses on creating a clean user interface, smooth user experience, and pixel-perfect implementation while following modern frontend development practices.",
    },
  ];

  return (
    <>
      <h1 className='text-white'>
         ali
         cencel
      </h1>
    </>
  );
}

export default page