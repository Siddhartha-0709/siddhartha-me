/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

import React from "react";
import { Link } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"

function Home() {
    return (
        <body className="bg-gray-950">
            <Analytics />
            <div className="grid grid-cols-2 gap-4 font-mono">
                <div
                    className="col-span-1 bg-gray-950"
                    style={{ paddingTop: 200 }}
                >
                    <p
                        className="text-xl font-bold text-white"
                        style={{ fontSize: 20, marginBottom: 5 }}
                    >
                        Hi There Everyone!
                    </p>
                    <div className="text-left">
                        <h2 className="text-3xl font-bold text-white">
                            I am <span className="text-violet-500">Siddhartha</span>
                        </h2>
                        <h1 className="font-bold text-white text-sm md:text-5xl">
                            Passionate Programmer
                        </h1>
                        <h1 className="font-bold text-white text-md md:text-4xl">
                            Enthusiastic Learner
                        </h1>
                        <h1 className="font-bold text-white text-md md:text-3xl">
                            Devoted Engineer
                        </h1>
                    </div>

                </div>
                <div className="col-span-1 bg-gray-950" style={{}}>
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/shaajo-online-jewellery-a2f57.appspot.com/o/profilepic.png?alt=media&token=edbd6865-1e9d-421a-bae1-a28ec0469569"
                        alt="Your Image"
                        className="rounded-xl"
                        style={{ marginLeft: "auto" }}
                    />
                </div>
            </div>
            <div style={{ paddingTop: 20 }}>
                <p className="font-bold text-white text-base md:text-lg lg:text-xl text-right md:text-left mr-2 mt-1 font-mono">
                    I am a Software Engineer who aims to architect the world with Lines of Code!
                </p>
            </div>
            <div className="md:grid grid-cols-2 font-mono h-1/2">
                <div className="col-span-1" style={{}}>
                    <h1 className="text-white text-2xl mt-20 mb-20 font-bold">
                        From crafting elegant code to orchestrating seamless DevOps
                        workflows, my passion for technology fuels my odyssey through the
                        ever-evolving landscape of software development, where every
                        challenge is an opportunity and every line of code is a step forward
                        into the limitless possibilities of tech. . .
                    </h1>
                </div>
            </div>
            <div
                className="col-span-1 font-mono h-1/2 mt-10 mb-20"
                style={{ paddingTop: 20 }}
            >
                <h1 className="text-white text-5xl font-bold ">
                    I offer some top notch <span className="text-violet-500">services!</span>
                </h1>
                <br />
                <div className="md:grid grid-cols-4 gap-3 p-4 font-mono">
                    <div
                        className="p-4 mb-2 transition duration-300 ease-in-out transform hover:bg-gray-800 hover:shadow-lg hover:scale-105"
                        style={{ backgroundColor: "#151515", borderRadius: 10 }}
                    >
                        <h1 className="text-white text-2xl font-bold">
                            Tech Consultancy | <span className="text-violet-500">Services</span>
                        </h1>
                        <p className="text-white text-lg mt-2">
                            Building a new product, you can use my knowledge to have
                            frictionless development. Stop worrying about tech stack,
                            deployment, scalability.
                        </p>
                    </div>

                    <div
                        className="p-4 mb-2 transition duration-300 ease-in-out transform hover:bg-gray-800 hover:shadow-lg hover:scale-105"
                        style={{ backgroundColor: "#151515", borderRadius: 10 }}
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
                        style={{ backgroundColor: "#151515", borderRadius: 10 }}
                    >
                        <h1 className="text-white text-2xl font-bold">Full Stack Development | <span className="text-violet-500">Web and Android</span></h1>
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
                        style={{ backgroundColor: "#151515", borderRadius: 10 }}
                    >
                        <h1 className="text-white text-2xl font-bold">Cloud & DevOps | <span className="text-violet-500">Practices</span></h1>
                        <p className="text-white text-lg">
                            <br />
                            With a passion for continuous learning, I am dedicated to gaining
                            expertise in cloud technologies and DevOps practices.
                        </p>
                    </div>
                </div>
            </div>
            <div className="font-mono bg-gray-950 text-white pt-20 pb-20">
                <p className="text-2xl font-bold">
                    In a short timeframe, I've explored diverse domains—development,
                    photography, travelling and teaching. Dive into my blogs, where I distill my
                    experiences and insights, offering a unique blend of expertise and
                    exploration.
                </p>
                <br />
                <center className="mt-2 pb-4">
                    {/* <a className="text-lg font-bold hover:underline hover:text-violet-500" href="https://siddhartha-speaks.notion.site/siddhartha-speaks/Siddhartha-Speaks-fde87972ee5b4eb39d878ebf17738e3d">
                        &lt; Link to My Blog Page /&gt;
                    </a> */}

                    <Link to="/authentication" className="block bg-violet-600 text-white py-2 w-80 rounded font-mono text-lg mt-5 hover:bg-violet-800" style={{ textDecoration: 'none' }}>
                        <h1 className="">
                            Check out my Blogs!
                        </h1>
                    </Link>

                </center>
            </div>
            <div className="bg-gray-950 text-white pt-20">
                <h1 className="text-5xl font-mono mb-20 font-bold">
                    Explore a Showcase of My Crafted <span className="text-violet-500">Projects,</span>
                </h1>
                <div className="md:grid grid-cols-6 gap-3 p-4 bg-gray-950 font-mono">
                    <div
                        className="bg-gray-300 p-4 mb-2 transition duration-300 ease-in-out transform hover:bg-gray-800 hover:shadow-lg hover:scale-105"
                        style={{ backgroundColor: "#151515", borderRadius: 10 }}
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
                            className="text-lg font-bold hover:underline hover:text-violet-500"
                        >
                            Link to Project
                        </a>
                    </div>
                    <div
                        className="bg-gray-300 p-4 mb-2 transition duration-300 ease-in-out transform hover:bg-gray-800 hover:shadow-lg hover:scale-105"
                        style={{ backgroundColor: "#151515", borderRadius: 10 }}
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
                            className="text-lg font-bold hover:underline hover:text-violet-500"
                        >
                            Link to Project
                        </a>
                    </div>
                    <div
                        className="bg-gray-300 p-4 mb-2 transition duration-300 ease-in-out transform hover:bg-gray-800 hover:shadow-lg hover:scale-105"
                        style={{ backgroundColor: "#151515", borderRadius: 10 }}
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
                            className="text-lg font-bold hover:underline hover:text-violet-500"
                        >
                            Link to Project
                        </a>
                    </div>
                    <div
                        className="bg-gray-300 p-4 mb-2 transition duration-300 ease-in-out transform hover:bg-gray-800 hover:shadow-lg hover:scale-105"
                        style={{ backgroundColor: "#151515", borderRadius: 10 }}
                    >
                        <h1 className="text-violet-500 font-bold text-xl">HaemoLink |  Blood Donation </h1>
                        <p className="text-white text-lg">
                            <br />A revolutionary android application designed to bridge the gap between blood
                            donors and those who need blood.
                        </p>
                        <br />
                        <a
                            href="https://github.com/Siddhartha-0709/HaemoLink"
                            className="text-lg font-bold hover:underline hover:text-violet-500"
                        >
                            Link to Project
                        </a>
                    </div>
                    <div
                        className="bg-gray-300 p-4 mb-2 transition duration-300 ease-in-out transform hover:bg-gray-800 hover:shadow-lg hover:scale-105"
                        style={{ backgroundColor: "#151515", borderRadius: 10 }}
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
                            className="text-lg font-bold hover:underline hover:text-violet-500"
                        >
                            Link to Project
                        </a>
                    </div>
                    <div
                        className="bg-gray-300 p-4 mb-2 transition duration-300 ease-in-out transform hover:bg-gray-800 hover:shadow-lg hover:scale-105"
                        style={{ backgroundColor: "#151515", borderRadius: 10 }}
                    >
                        <h1 className="text-violet-500 font-bold text-xl">Shaajo Online Jewellery</h1>
                        <p className="text-white text-lg">
                            <br />
                            E-Commerce website which allows sellers come online, list their
                            products for generating sales.
                        </p>
                        <br />
                        <a href="https://shaajo.vercel.app/" className="text-lg font-bold hover:underline hover:text-violet-500">
                            Link to Project
                        </a>
                    </div>

                </div>
                <h1 className="text-xl text-center font-bold font-mono mt-10">For more information on my projects, please visit my Github!</h1>
                <center>
                    <a href="https://github.com/Siddhartha-0709">
                        <button className="hover:bg-violet-800 text-white py-2 px-4 rounded font-mono text-lg bg-violet-600 mt-5">
                            GitHub Link
                        </button>
                    </a>
                </center>
            </div>

            <div className=" text-white font-mono pt-20 bg-gray-950">
                <h1 className="text-5xl font-bold">
                    Experience Gained from Notable  <span className="text-violet-500">Organisations,</span>
                </h1>
                <br />
                <br />
                <div className="grid grid-cols-2 gap-3 p-4 bg-gray-950 font-mono text-white">
                    {/* <div>
                        <a
                            className="text-lg font-bold hover:underline hover:text-violet-500"
                            href="https://rnpsoft.framer.website/"
                        >
                            RnPsoft Pvt Ltd.
                        </a>
                        <p>Native Android Application Developer</p>
                    </div> */}
                    <div>
                        <a className="text-lg font-bold hover:underline hover:text-violet-500" href="https://www.codechef.com">
                            CodeChef
                        </a>
                        <p>Coding Video Editorial and Publishing</p>
                    </div>
                </div>
            </div>
            <div className="bg-grey-950 text-white font-mono mt-20" id="contact">
                <br />
                <h1 className="text-5xl font-bold">Get in Touch with <span className="text-violet-500">Me,</span> </h1>
                <br />
                <br />
                <br />
                <div className="md:grid grid-cols-3 gap-3 p-4 bg-gray-950 font-mono text-white mb-20">
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
            <div className="bg-gray-950 pt-0 pb-20 font-mono text-white h-screen">
                <h1 className="text-5xl font-bold">Let's Work Together on</h1>
                <h1 className="text-5xl font-bold">your next <span className="text-violet-500">project</span> . . . </h1>
                <center className="text-2xl font-bold mt-40">
                    <h1>
                        © 2024 <br />
                        &lt; siddhartha.dev /&gt; <br />
                        Dont hesitate to reach out
                    </h1>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <h1>- - - - - - - -</h1>
                </center>
            </div>
        </body>
    );
}

export default Home;
