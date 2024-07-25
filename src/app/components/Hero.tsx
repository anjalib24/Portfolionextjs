"use client"
import React from 'react'
import Image from 'next/image'
import Typewriter from 'typewriter-effect';
import Link from 'next/link';
function Hero() {
  return (
    <div>
      <section className="text-gray-600 body-font bg-fixed bg-cover bg-center custom-image">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-2xl mb-4 font-medium text-gray-900">
        Hello,I'm Anjali Birla
        <br className="hidden lg:inline-block" />
        I'm a<Typewriter
  options={{
    strings: ['software developer', 'React developer','Full stack web developer'],
    autoStart: true,
    loop: true,
  }}
/>

      </h1>
      <hr/>
      <div className='W-[100px] h-[2px] bg-blue-700'></div>
      <p className="mb-8 leading-relaxed">
      I am a skilled Next.js and MERN stack developer with 1+ years of experience. Proficient in HTML, CSS, JavaScript, and frameworks like React.js, Node.js, Express.js, and MongoDB, I excel in crafting dynamic and responsive web applications. With a proactive approach to problem-solving and a commitment to staying updated with industry trends, I deliver high-quality solutions that exceed expectations. Eager to collaborate on impactful projects, I am ready to contribute their expertise to drive innovation in web development.






      </p>
      <div className="flex justify-center">
        <Link href="#Contact">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Contact
        </button>
        </Link>
      
      </div>
    </div>
    <div className="lg:max-w-sm lg:w-full md:w-1/2 w-3/6 ">
    
      <Image
       src={require("../../../public/assets/picture/fullstack.webp")}
       alt="hero"
        className="object-cover object-center rounded"
       
         height={400}
         width={500}
        
      />
    </div>
  </div>
</section>

    </div>
  )
}

export default Hero
