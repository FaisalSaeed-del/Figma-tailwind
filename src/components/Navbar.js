import React from 'react';
import logo from "../assests/logo.png";


const Navbar = () => {
    return (
        <div className='cursor-pointer'>
            <img className='mt-4 px-5 fixed' src={logo} />
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </a>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center font-mono text-white flex-grow-0">
                        <a className="mr-5 text-white ">Open Sea</a>
                        <a className="mr-5 text-white">FAQ</a>
                    </nav>
                    <button className="inline-flex items-center bg-white ml-6 px-9 rounded-r flex-grow-0 rounded-md focus:outline-none text-base mt-4 md:mt-0 font-mono ">Button

                    </button>

                </div>
            </header>

        </div>

    )
}

export default Navbar