"use client"
import { useEffect } from 'react';

function page() {

  useEffect(()=>{
    document.title = 'DEV-BRO | Projects'
  })

  return (
    <>
      <h1 className='text-white'>projects</h1>
    </>
  );
}

export default page