import React from 'react'
// import bg from '../assets/bg.jpeg'
const Hero = () => {
  return (
    <div className="hero-container hero h-1/2" style={{backgroundImage: "url(/bg.jpeg"}}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content w-full lg:pl-12">
      <div className="w-full text-left">
        <h1 className='text-2xl text-white font-extrabold font-sans'>Hi!</h1>
        <h1 className="mb-5 text-5xl font-bold text-white font-sans">{"I'm"} Mohib from Pakistan</h1>
        <p className="mb-5 text-xl text-accent font-thin">{"I'm "} passionate about programming</p>
        <p className="mb-5 text-xl text-accent font-thin">I like to learn new things and write about programming {'&'} tech!</p>
        <button onClick={() => {
          location.href = "mailto:dev.mohib@gmail.com?subject:Dev Mohib | Portfolio ";
        }} className="btn btn-primary px-5 mt-3">Get in touch</button>
      </div>
    </div>
</div>
  )
}

export default Hero