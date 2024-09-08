import React, { useState } from 'react';
import {Link} from 'react-scroll';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="sticky top-0 backdrop-blur-3xl px-4 md:px-20 py-4 z-20">

            <div className="flex justify-between">

                {/* Logo */}
                <Link to="home" spy={true} smooth={true} duration={500} className="text-xl text-emerald-500 font-bold cursor-pointer">
                    &lt;Ashik/&gt;
                </Link>

                {/* Full menu for larger screens */}
                <ul className="hidden md:flex justify-between gap-10 text-lg text-gray-400">
                    <li>
                        <Link to="home" spy={true} smooth={true} duration={500} className='hover:text-emerald-500 cursor-pointer'>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="work" spy={true} smooth={true} duration={500} className='hover:text-emerald-500 cursor-pointer'>
                            Work
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" spy={true} smooth={true} duration={500} className='hover:text-emerald-500 cursor-pointer'>
                            Contact
                        </Link>
                    </li>
                    <li>
                        <a
                            href="#resume"
                            className='hover:text-emerald-500'>
                            Resume
                        </a>
                    </li>
                </ul>

                 {/* Burger icon for smaller screens */}
                <div className="md:hidden z-30">
                    <button
                        //open menu
                        onClick={toggleMenu}
                        className="text-emerald-500"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {/* Switch burger icon and close icon */}
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

            </div>

            {/* Dropdown Menu for smaller screens */}
            <div className={`md:hidden absolute top-0 left-0 w-full h-auto bg-zinc-950 overflow-hidden text-left transition-[max-height] duration-500 ease-in-out ${isOpen ? 'max-h-auto' : 'max-h-0'}`}>
                <ul className="flex-col text-lg text-gray-400 divide-y divide-gray-400">
                    <li className="p-4">
                        <a
                            href="#home"
                            className='hover:text-emerald-500'
                            //close menu
                            onClick={toggleMenu}
                        >
                            About
                        </a>
                    </li>
                    <li className="p-4">
                        <a
                            href="#work"
                            className='hover:text-emerald-500'
                            onClick={toggleMenu}
                        >
                            Work
                        </a>
                    </li>
                    <li className="p-4">
                        <a
                            href="#contact"
                            className='hover:text-emerald-500'
                            onClick={toggleMenu}
                        >
                            Contact
                        </a>
                    </li>
                    <li className="p-4">
                        <a
                            href="#resume"
                            className='hover:text-emerald-500'
                            onClick={toggleMenu}
                        >
                            Resume
                        </a>
                    </li>
                </ul>
            </div>

        </nav>
    );
};

export default Header;
