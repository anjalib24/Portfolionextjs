import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const About=()=> {
  return (
    <div id="About">
      <>
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-sm lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded-full"
        alt="hero"
        src={require('../../../public/assets/picture/anjalipassport.jpg')}
        width={720}
        height={600}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        Anjali birla
        <br className="hidden lg:inline-block" />
       software enginer </h1>
       <p className="mb-8 leading-relaxed">
      {/* MCA and BCA graduate with expertise in Next.js and the MERN stack. Skilled in MongoDB, Express.js, React.js, and Node.js. Experienced in building scalable web applications and optimizing performance. Passionate about innovation and continuous learning in software development. */}

     I have completed master's degree from RGPV university and bachler's degree from DAVV university.



      </p>
      <p className="mb-8 leading-relaxed">
      MCA and BCA graduate with expertise in Next.js and the MERN stack. Skilled in MongoDB, Express.js, React.js, and Node.js. Experienced in building scalable web applications and optimizing performance. Passionate about innovation and continuous learning in software development.





      </p>
      <div className="flex justify-center">
       <Link href={"/assets/cv/mcaanjalibirla.pdf"}> <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          View cv
        </button>
        </Link>
      </div>
    </div>
  </div>
</section>
</>
</div>
  )
}

export default About
