"use client"

import { useEffect } from 'react';



function page() {
  useEffect(()=>{
    document.title = 'DEV-BRO | Contact'
  })
  return (
    <>
      <h1>contact</h1>
    </>
  );
}

export default page