/* eslint-disable no-unused-vars */
import React from 'react'
import backgroundVideo from '../assets/background.mp4'
import { Link } from 'react-router-dom'
const Homev2 = () => (
  <main>
    <section>
      <video autoPlay loop muted style={{}}>
        <source src={backgroundVideo} type="video/mp4" style={{ position: 'absolute', zIndex: -10, width: '100%', height: '100%' }} />
      </video>
      <div style={{ position: 'absolute', top: '40%', width: '70%', left: '5%' }}>
        <h1 style={{ color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }} className='text-4xl text-left ml-1'>Hi There Everyone!</h1>
        <h1 style={{ color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }} className='text-7xl text-left  ml-1'>I am <span className='text-violet-500'>Siddhartha</span></h1>
        <h1 style={{ color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }} className='text-3xl text-left  ml-1'>I am an aspiring Software Engineer who aims to architect the world with Lines of Code!</h1>
        <h1 style={{ color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }} className='text-xl text-left ml-1  mr-1 mt-2'>From crafting elegant code to orchestrating seamless DevOps workflows, my passion for technology fuels my odyssey through the ever-evolving landscape of software development, where every challenge is an opportunity and every line of code is a step forward into the limitless possibilities of tech. . .
        </h1>
        <div className='grid grid-cols-5 mt-8 gap-2 w-1/2'>
          <button type="button" className="text-white bg-gradient-to-br from-purple-700 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm text-center h-10 w-30 text-lg"><Link to="/authentication">Read Blogs</Link></button>
          <button type="button" className="text-white bg-gradient-to-br from-purple-700 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm text-center h-10 w-30 text-lg"><Link to="/authentication">GitHub</Link></button>
          <button type="button" className="text-white bg-gradient-to-br from-purple-700 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm text-center h-10 w-30 text-lg"><Link to="/authentication">Projects</Link></button>
          <button type="button" className="text-white bg-gradient-to-br from-purple-700 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm text-center h-10 w-30 text-lg"><Link to="/authentication">Contact Me</Link></button>
        </div>
        <div >
          <h1 className='text-3xl text-left text-white'>Projects</h1>
        </div>
      </div>
    </section>
  </main>
)

export default Homev2

