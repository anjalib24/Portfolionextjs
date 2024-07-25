import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';
function Footer() {
  return (
    <div>
      <>
  {/* Hello world */}
  <footer className="text-gray-600 body-font">
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col bg-gray-200">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
        <span className="ml-3 text-xl">Footer</span>
      </a>
      <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
        © 2024 
       
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">

       
        <Link className="ml-3 text-blue-600 text-3xl  hover:bg-blue-300" href={"https://www.linkedin.com/in/anjali-birla-63b2b7249/"} target="_blank">
        <FaLinkedin />
        </Link>
       
        <Link className="ml-3  text-3xl  text-black-600 hover:bg-gray-300" href={"https://github.com/anjalib24"} target="_blank">
        <FaGithub />
        </Link>
       
        <Link className="ml-3 text-blue-500 text-3xl  hover:bg-blue-300" href={""} target="_blank">
        <FaTwitter />
        </Link> 

        <Link className="text-blue-600 text-3xl hover:bg-blue-300" href={""} target="_blank">
        <FaFacebook />
        </Link>
       
      </span>
    </div>
  </footer>
</>

    </div>
  )
}

export default Footer
