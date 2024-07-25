import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Project=()=> {
  return (
    <div id="Project">
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
       My Projects
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
       Here is my project related to web technology and computer applications
      </p>
    </div>
    <div className="flex flex-wrap -m-5 -mt-12">
        {/* projects */}
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image src={require('../../../public/assets/picture/Screenshot 2024-03-13 172409.png')}
          alt="pic"
          className="absolute w-full h-auto object-cover object-center hover:cursor-pointer"
          height={600}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              Project1
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Web page clone
            </h1>
            <p className="leading-relaxed line-clamp-2" >
            Built responsive layout webpage clone with header and footer using HTML&CSS.
        
            </p>
            <Link target="_blank" href="https://anjalib24.github.io/webpageclone/"><p className="leading-relaxed text-blue-500 hover:underline">View projects:-</p></Link>
          </div>
        </div>
      </div>
      {/* 2 */}
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          {/* <Image src={require('../../../public/assets/picture/Screenshot 2024-03-14 174458.png')}
          alt="pic"
          className="absolute w-[720px] h-full object-cover object-center hover:cursor-pointer"
          width={720}
          height={600}
          /> */}
          <Image
    src={require('../../../public/assets/picture/Screenshot 2024-03-14 174458.png')} 
    alt="pic" 
    className="absolute w-full h-auto object-cover object-center hover:cursor-pointer" 
    height={600} 
/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              Project2
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Ecommerce website
            </h1>
            <p className="leading-relaxed line-clamp-3" >
           Built a ecommerce website and generate print bill and addto cart functionality using reactjs.
        
            </p>
            <Link target="_blank" href="https://invoice-e6kiw1n0b-anjali-birlas-projects.vercel.app/"><p className="leading-relaxed text-blue-500 hover:underline">View projects:-</p></Link>
          </div>
        </div>
      </div>     
       <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image src={require('../../../public/assets/picture/crud.png')}
          alt="pic"
          className="absolute w-full h-full object-cover object-center hover:cursor-pointer"
          width={1100}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              Project3
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
             Crud operations in Javascript
            </h1>
            <p className="leading-relaxed line-clamp-2" >
            {/* Create: Add new data.
         Read: Retrieve existing data.
        Update: Modify existing data.
Delete: Remove data. */}
CRUD operations are essential for managing data in applications.
        
            </p>
            <Link target="_blank" href="https://anjalib24.github.io/crud-operation/"><p className="leading-relaxed text-blue-500 hover:underline">View projects:-</p></Link>
          </div>
        </div>
      </div>    
        <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image src={require('../../../public/assets/picture/news.png')}
          alt="pic"
          className="absolute w-full h-full object-cover object-center hover:cursor-pointer"
          width={1100}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              Project4
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            News website
            </h1>
            <p className="leading-relaxed line-clamp-2" >
            Stay updated with breaking news, in-depth articles, and expert analysis on global events, politics, technology, and more.
            </p>
            <Link target="_blank" href=""><p className="leading-relaxed text-blue-500 hover:underline">View projects:-</p></Link>
          </div>
        </div>
      </div>    
        <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image src={require('../../../public/assets/picture/figma.png')}
          alt="pic"
          className="absolute w-full h-full object-cover object-center hover:cursor-pointer"
          width={1100}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              Project5
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
               Web page clone on the basis of figma file
            </h1>
            <p className="leading-relaxed line-clamp-2" >
            Built responsive layout webpage clone on the basis of figma file with header and footer using HTML&CSS.
        
            </p>
            <Link target="_blank" href="https://anjalib24.github.io/ephtml1/index.html"><p className="leading-relaxed text-blue-500 hover:underline">View projects:-</p></Link>
          </div>
        </div>
      </div>  

       <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image src={require('../../../public/assets/picture/company.png')}
          alt="pic"
          className="absolute w-full h-full object-cover object-center hover:cursor-pointer"
          width={1100}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              Project6
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Built a software company
            </h1>
            <p className="leading-relaxed line-clamp-2" >
            Our website utilizes React for a dynamic user interface,and Bootstrap for responsive design,and CSS for custom styling.
             </p>
            <Link target="_blank" href=""><p className="leading-relaxed text-blue-500 hover:underline">View projects:-</p></Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Project

