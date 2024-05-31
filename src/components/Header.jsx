/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
function Header() {
    

    return (
        <header className="text-white py-6 border-b border-gray-200 sticky top-0 bg-gray-950 z-10">
            <div className="container mx-auto flex items-center justify-between">
                <Link className="text-2xl font-bold text-violet-500 font-mono hover:underline" to={"/"}>
                    &gt; siddhartha.dev &lt;
                </Link>
                <nav className="hidden md:block flex items-center gap-4">
                    <a className="hover:underline underline-offset-4 hover:text-violet-500 ml-3 mr-3" href="https://github.com/Siddhartha-0709">
                        GitHub
                    </a>
                    <Link className="hover:underline underline-offset-4 hover:text-violet-500 ml-3 mr-3" to={"/blogs"}>
                        Blogs
                    </Link>
                    <a className="hover:underline underline-offset-4 hover:text-violet-500 ml-3 mr-3" href="https://www.linkedin.com/in/sidd-myself/">
                        LinkedIn
                    </a>
                    <Link className="hover:bg-orange-500 text-white py-2 px-4 rounded" to={"/comming-soon"}>
                        For the Love of Tech
                    </Link>
                </nav>

            </div>
        </header>
    )
}

export default Header