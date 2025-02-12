"use client"
import Link from 'next/link'
import React from 'react'
import { FaCloudDownloadAlt } from "react-icons/fa";
import Image from 'next/image';

function Navbar() {
  return (
    <div className='z-50 sticky bg-white top-0'>
      <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     
      <Image src={require("../../../public/assets/picture/portfoliologo.png")} alt='pic'  width={120}/>
      {/* <span className="ml-3 text-xl">Portfolio</span> */}
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href={"/"}className="mr-5 hover:text-blue-600">Home</Link>
      <Link href={"#About"}className="mr-5 hover:text-blue-600">About</Link>
      <Link href={"#Skills"}className="mr-5 hover:text-blue-600">Skills</Link>
      <Link href={"#Project"}className="mr-5 hover:text-blue-600">Projects</Link>
      <Link href={"#Contact"}className="mr-5 hover:text-blue-600">Contact</Link>
    </nav>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
      
      <a href="/assets/cv/mcaanjalibirla.pdf">
      Downloadcv<FaCloudDownloadAlt className='text-xl' />
      </a>
        </button>
        
    
  </div>
</header>
    </div>
  )
}

export default Navbar
