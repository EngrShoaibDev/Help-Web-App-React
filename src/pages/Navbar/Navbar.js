import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import navlogo from '../../assets/Logo-dark.png';
import { FaSistrix, FaHeart, FaMessage } from 'react-icons/fa6';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to="/Home" className="flex items-center ">
                        <img src={navlogo} className="h-auto w-32" alt="Flowbite Logo" />
                        {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Helpy</span> */}
                    </Link>
                    <div className="items-center justify-between  w-full md:flex md:w-auto " id="navbar-language">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link
                                    to="/"
                                    className="flex flex-col gap-2 items-center justify-center py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent text-center md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    <FaSistrix />
                                    <span>Search</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    className="flex flex-col gap-2 items-center justify-center py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent text-center md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    <FaHeart />
                                    <span>Interests</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/services"
                                    className="flex flex-col gap-2 items-center justify-center py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent text-center md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    <FaMessage />
                                    <span>Messages</span>
                                </Link>
                            </li>
                        </ul>

                    </div>
                    <div className="flex items-center  relative">
                        <div className="dropdown dropdown-end ml-4">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://i.pravatar.cc/150?img=2" alt="profile" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-20">
                                <li className="justify-between">
                                    <Link to={'/app/settings-profile'}>
                                        Profile Settings
                                        <span className="badge">New</span>
                                    </Link>
                                </li>
                                <li className=''><Link to={'/app/settings-billing'}>Bill History</Link></li>
                                <div className="divider mt-0 mb-0"></div>
                                <li><a >Logout</a></li>
                            </ul>
                        </div>

                    </div>


                </div>
            </nav>
        </>
    );
};

export default Navbar;
