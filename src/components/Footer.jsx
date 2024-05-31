/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <footer className="bg-gray-900 py-6 px-4 md:px-6 border-t border-gray-800">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <p className="text-gray-400">© 2024 Siddhartha Mukherjee | All rights reserved.</p>
                {/* <nav className="flex items-center gap-4 mt-4 md:mt-0">
                    <Link className="text-gray-400 hover:underline underline-offset-4" href="#">
                        Link 1
                    </Link>
                    <Link className="text-gray-400 hover:underline underline-offset-4" href="#">
                        Link 2
                    </Link>
                    <Link className="text-gray-400 hover:underline underline-offset-4" href="#">
                        Link 3
                    </Link>
                </nav> */}
            </div>
        </footer>
    )
}

export default Footer