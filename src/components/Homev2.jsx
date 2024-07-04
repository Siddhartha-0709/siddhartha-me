/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import backgroundVideo from '../assets/background.mp4';
import profilePic from '../assets/dp.jpeg';
import line from '../assets/line.gif';
import { Link } from "react-router-dom";

const Homev2 = () => {
  const handleBlogPressed = () => {
    window.location.href = '/authentication'
  }
  const handleGitHubPressed = () => {
    window.location.href = 'https://github.com/Siddhartha-0709'
  }
  const handleLinkedInPressed = () => {
    window.location.href = 'https://www.linkedin.com/in/sidd-myself/'
  }
  const handleDownloadPressed = ()=>{
    window.location.href = 'https://sidd_2003.hackerresume.io/23697efd-4ec7-4130-8c88-6780a8991790'
  }

  return (
    <main style={{ position: 'relative', fontFamily: 'Ubuntu' }}>
      <video autoPlay loop muted style={{ position: 'absolute', zIndex: -1, width: '100%', height: '100%', objectFit: 'cover'  }}>
        <source src={backgroundVideo} type="video/mp4"/>
      </video>
      <section className='grid grid-cols-2 h-full flex items-center pl-5 pr-5 pb-5' style={{ position: 'relative', display: 'flex', paddingTop: 100 }}>
        <div className='text-white md:w-1/2'>
          <img className='md:hidden' src={profilePic} alt="" style={{ width: '400px', borderRadius: '50%', boxShadow: '2px 2px 4px rgba(0,0,0,0.5)', marginBottom: '20px', transition: 'box-shadow 0.3s ease', marginLeft: 'auto', marginRight: 'auto', }} onMouseOver={(e) => { e.currentTarget.style.boxShadow = '0 0 20px 5px rgba(255, 255, 255, 0.5)'; }} onMouseOut={(e) => { e.currentTarget.style.boxShadow = '2px 2px 4px rgba(0,0,0,0.5)'; }} />
          <h1 className='text-4xl'>Hi There Everyone!</h1>
          <h1 className='text-7xl'>I am <span className='text-violet-500'>Siddhartha</span></h1>
          <h1 className='text-3xl mt-4'>I am an aspiring Software Engineer who aims to architect the world with Lines of Code!</h1>
          <h1 className='text-xl mt-4'>From crafting elegant code to orchestrating seamless DevOps workflows, my passion for technology fuels my odyssey through the ever-evolving landscape of software development, where every challenge is an opportunity and every line of code is a step forward into the limitless possibilities of tech.</h1>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mt-8'>
            <button className="text-white bg-gradient-to-br from-purple-700 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm text-center h-10 text-lg" onClick={handleBlogPressed}>Read Blogs</button>
            <button className="text-white bg-gradient-to-br from-purple-700 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm text-center h-10 text-lg" onClick={handleGitHubPressed}>GitHub</button>
            <button className="text-white bg-gradient-to-br from-purple-700 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm text-center h-10 text-lg" onClick={handleLinkedInPressed}>LinkedIn</button>
            <button className="text-white bg-gradient-to-br from-purple-700 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm text-center h-10 text-lg" onClick={handleDownloadPressed}>Resume</button>
          </div>
          <img src={line} alt="" style={{ width: '100%', marginTop: '20px' }} />
        </div>
        <div className='w-1/2 h-1/2 p-8 hidden md:block'>
          <img src={profilePic} alt="" style={{ width: '400px', borderRadius: '50%', boxShadow: '2px 2px 4px rgba(0,0,0,0.5)', marginBottom: '20px', transition: 'box-shadow 0.3s ease', marginLeft: 'auto', marginRight: 'auto', }} onMouseOver={(e) => { e.currentTarget.style.boxShadow = '0 0 20px 5px rgba(255, 255, 255, 0.5)'; }} onMouseOut={(e) => { e.currentTarget.style.boxShadow = '2px 2px 4px rgba(0,0,0,0.5)'; }}
          />
        </div>
      </section>
      <section className='p-5'>
        <h1 className='text-4xl text-white'>I offer some top notch <span className='text-violet-500'>services!</span></h1>
        <br />
        <div className="md:grid grid-cols-4 gap-3 pt-4 font-sans">
          <div
            className="p-4 mb-2 transition duration-300 ease-in-out transform hover:bg-gray-800 hover:shadow-lg hover:scale-105"
            style={{ backgroundColor: "#151515", borderRadius: 10, opacity: 0.8 }}
          >
            <h1 className="text-white text-2xl font-bold">
              Tech Consultancy | <span className="text-violet-500">Services</span>
            </h1>
            <p className="text-white text-lg mt-8">
              Building a new product, you can use my knowledge to have
              frictionless development. Stop worrying about tech stack,
              deployment, scalability.
            </p>
          </div>
          <div
            className="p-4 mb-2 transition duration-300 ease-in-out transform hover:bg-gray-800 hover:shadow-lg hover:scale-105"
            style={{ backgroundColor: "#151515", borderRadius: 10, opacity: 0.8 }}
          >
            <h1 className="text-white text-2xl font-bold">Android Development | <span className="text-violet-500">Native</span></h1>
            <p className="text-white text-lg">
              <br />
              As a seasoned React Native developer, I specialize in crafting
              high-performance mobile solutions that transcend platform
              boundaries. From ideation to deployment, let's collaborate to
              bring your vision to life.
            </p>
          </div>
          <div
            className="p-4 mb-2 transition duration-300 ease-in-out transform hover:bg-gray-800 hover:shadow-lg hover:scale-105"
            style={{ backgroundColor: "#151515", borderRadius: 10, opacity: 0.8 }}
          >
            <h1 className="text-white text-2xl font-bold">Full Stack Dev. | <span className="text-violet-500">Node JS</span></h1>
            <p className="text-white text-lg">
              <br />
              From crafting interactive front-end experiences to designing
              robust back-end solutions, I bring a holistic approach to web
              development. You can leverage my knowledge to build scalable and
              responsive web applications.
            </p>
          </div>
          <div
            className="p-4 mb-2 transition duration-300 ease-in-out transform hover:bg-gray-800 hover:shadow-lg hover:scale-105"
            style={{ backgroundColor: "#151515", borderRadius: 10, opacity: 0.8 }}
          >
            <h1 className="text-white text-2xl font-bold">Cloud & DevOps | <span className="text-violet-500">Practices</span></h1>
            <p className="text-white text-lg">
              <br />
              With a passion for continuous learning, I am dedicated to gaining
              expertise in cloud technologies and DevOps practices.
            </p>
          </div>
        </div>
      </section>
      <section className='p-5'>
        <h1 className='text-4xl text-white'>Explore a showcase of my crafted <span className='text-violet-500'>projects,</span></h1>
        <br />
        <div className="md:grid grid-cols-3 gap-3 font-sans">
          <div
            className="bg-gray-300 p-4 mb-2 transition duration-300 ease-in-out transform hover:bg-gray-800 hover:shadow-lg hover:scale-105"
            style={{ backgroundColor: "#151515", borderRadius: 10, opacity: 0.8 }}
          >
            <h1 className="text-violet-500 font-bold text-xl">
              PlantIT | Plant Care and E-Commerce
            </h1>
            <p className="text-white text-lg">
              <br />
              Revolutionizing plant care and commerce, this platform merges buying, selling, and cutting-edge AI technology.
            </p>
            <br />
            <a
              href="https://myplantit.vercel.app/"
              className="text-lg font-bold hover:underline hover:text-violet-500  text-white"
            >
              Link to Project
            </a>
          </div>
          <div
            className="bg-gray-300 p-4 mb-2 transition duration-300 ease-in-out transform hover:bg-gray-800 hover:shadow-lg hover:scale-105"
            style={{ backgroundColor: "#151515", borderRadius: 10, opacity: 0.8 }}
          >
            <h1 className="text-violet-500 font-bold text-xl">
              Video Handling HLS | FFmpeg
            </h1>
            <p className="text-white text-lg">
              <br />
              This project is a proof of concept (POC) for handling videos on the web using HLS (HTTP Live Streaming) and FFmpeg.
            </p>
            <br />
            <a
              href="https://github.com/Siddhartha-0709/Video-Player-HLS-POC"
              className="text-lg font-bold hover:underline hover:text-violet-500 text-white"
            >
              Link to Project
            </a>
          </div>
          <div
            className="bg-gray-300 p-4 mb-2 transition duration-300 ease-in-out transform hover:bg-gray-800 hover:shadow-lg hover:scale-105"
            style={{ backgroundColor: "#151515", borderRadius: 10, opacity: 0.8 }}
          >
            <h1 className="text-violet-500 font-bold text-xl">
              Retrix Social Chat Application
            </h1>
            <p className="text-white text-lg">
              <br />
              This is an android based social chatting application with one-to-one user chat, and image
              sharing capabilities.
            </p>
            <br />
            <a
              href="https://github.com/Siddhartha-0709/Retrix"
              className="text-lg font-bold hover:underline hover:text-violet-500 text-white"
            >
              Link to Project
            </a>
          </div>
          <div
            className="bg-gray-300 p-4 mb-2 transition duration-300 ease-in-out transform hover:bg-gray-800 hover:shadow-lg hover:scale-105"
            style={{ backgroundColor: "#151515", borderRadius: 10, opacity: 0.8 }}
          >
            <h1 className="text-violet-500 font-bold text-xl">HaemoLink |  Blood Donation </h1>
            <p className="text-white text-lg">
              <br />A revolutionary android application designed to bridge the gap between blood
              donors and those who need blood.
            </p>
            <br />
            <a
              href="https://github.com/Siddhartha-0709/HaemoLink"
              className="text-lg font-bold hover:underline hover:text-violet-500 text-white"
            >
              Link to Project
            </a>
          </div>
          <div
            className="bg-gray-300 p-4 mb-2 transition duration-300 ease-in-out transform hover:bg-gray-800 hover:shadow-lg hover:scale-105"
            style={{ backgroundColor: "#151515", borderRadius: 10, opacity: 0.8 }}
          >
            <h1 className="text-violet-500 font-bold text-xl">Shrink It | URL Shortner Service</h1>
            <p className="text-white text-lg">
              <br />
              Easily transform long URLs into concise links perfect for sharing
              across platforms with QR code of the links.
            </p>
            <br />
            <a
              href="https://github.com/Siddhartha-0709/Url-Shortner"
              className="text-lg font-bold hover:underline hover:text-violet-500 text-white"
            >
              Link to Project
            </a>
          </div>
          <div
            className="bg-gray-300 p-4 mb-2 transition duration-300 ease-in-out transform hover:bg-gray-800 hover:shadow-lg hover:scale-105"
            style={{ backgroundColor: "#151515", borderRadius: 10, opacity: 0.8 }}
          >
            <h1 className="text-violet-500 font-bold text-xl">Shaajo Online Jewellery</h1>
            <p className="text-white text-lg">
              <br />
              E-Commerce website which allows sellers come online, list their
              products for generating sales.
            </p>
            <br />
            <a href="https://shaajo.vercel.app/" className="text-lg font-bold hover:underline hover:text-violet-500 text-white">
              Link to Project
            </a>
          </div>
        </div>
      </section>
      <section className='p-5'>
        <div className="text-white mt-20" id="contact">
          <h1 className="text-4xl">Get in Touch with <span className="text-violet-500">Me,</span> </h1>
          <div className="md:grid grid-cols-3 gap-3 mt-10 font-mono text-white mb-20">
            <div className="mb-10">
              <a
                className="text-xl font-bold hover:underline hover:text-violet-500"
                href="https://www.instagram.com/sidd_myself/"
              >
                Instagram
              </a>
              <p>For all regular and urgent questions.</p>
            </div>
            <div className="mb-10">
              <a
                className="text-xl font-bold hover:underline hover:text-violet-500"
                href="https://www.linkedin.com/in/sidd-myself/"
              >
                LinkedIn
              </a>
              <p>For collaboration related services.</p>
            </div>
            <div className="mb-10">
              <a
                className="text-xl font-bold hover:underline hover:text-violet-500"
                href="mailto:siddhartham09@gmail.com"
              >
                Mail
              </a>
              <p>For cooporate conversations.</p>
            </div>
          </div>
        </div>
      </section>
      <section className='p-5'>
        <div className=" pt-0 pb-10 text-white h-screen">
          <h1 className="text-4xl">Let's Work Together on</h1>
          <h1 className="text-4xl">your next <span className="text-violet-500">project</span> . . . </h1>
          <center className="text-2xl font-bold mt-40">
            <h1>
              © 2024 <br />
              &lt; siddhartha.dev /&gt; <br />
              Dont hesitate to reach out
            </h1>

            <br />
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/6f027f63393359.5ab4ecb5ebad9.gif" alt="" className='w-1/2' />
          </center>
        </div>
      </section>
    </main>
  )
};

export default Homev2;
