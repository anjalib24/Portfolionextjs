import React from 'react'

const Contact=()=>{
  return (
    <div id="Contact">
      <>
  {/* Hello world */}
  <section className="text-gray-600 body-font relative">
    <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
      <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
        
        <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.5020692008966!2d75.87250977205801!3d22.672346429313325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fc960b1cba49%3A0x6885cfef19452a8b!2s139%2C%20Ganesh%20Nagar%20Main%20Rd%2C%20Krishnodaya%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh%20452020!5e0!3m2!1sen!2sin!4v1710367226000!5m2!1sen!2sin"
  width="100%"
  height="100%"
  style={{ filter: " contrast(1.2) opacity(0.4)" }}
  className="absolute inset-0"     
marginHeight={0}
marginWidth={0}
scrolling="no"
title="map"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
          <div className="lg:w-1/2 px-6">
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
              ADDRESS
            </h2>
            <p className="mt-1">
             139,Ganesh nagar khandwa road,indore(M.P.)
            </p>
          </div>
          <div className="lg:w-500 px-6 mt-4 lg:mt-0">
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
              EMAIL
            </h2>
            <a className="text-indigo-500 leading-relaxed">anjalibirlabirla@gmail.com</a>
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
              PHONE
            </h2>
            <p className="leading-relaxed">8815636590</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
        <h2 className="title-font sm:text-4xl text-2xl mb-4 font-medium text-gray-900">
          Contact
        </h2>
        <p className="leading-relaxed mb-5 text-gray-600">
         Feel free to contact
        </p>
        <form  action="https://formspree.io/f/xleqlkzp"
  method="POST">
        <div className="relative mb-4">
          <label htmlFor="name" className="leading-7 text-sm text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
         required
         />
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
         required />
        </div>

        <div className="relative mb-4">
          <label htmlFor="sub" className="leading-7 text-sm text-gray-600">
            Subject
          </label>
          <input
            type="text"
            id="sub"
            name="sub"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        required  />
        </div>


        <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            defaultValue={""}
         required />
        </div>
        <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Send message
        </button>
        </form>
        <p className="text-xs text-gray-500 mt-3">
          
        </p>
      </div>
    </div>
  </section>
</>

    </div>
  )
}

export default Contact
{/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.5020692008966!2d75.87250977205801!3d22.672346429313325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fc960b1cba49%3A0x6885cfef19452a8b!2s139%2C%20Ganesh%20Nagar%20Main%20Rd%2C%20Krishnodaya%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh%20452020!5e0!3m2!1sen!2sin!4v1710367226000!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}