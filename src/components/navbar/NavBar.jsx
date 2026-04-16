import React from 'react';
import { GoHome } from 'react-icons/go';
import { ImStatsDots } from 'react-icons/im';
import { RiTimeLine } from 'react-icons/ri';
import { Link, NavLink } from 'react-router';

const NavBar = () => {

    const links = <>
        <li><NavLink to={"/"} className={({ isActive }) => `font-semibold text-lg mr-5 ${isActive && `text-white bg-[#244D3F]`}`}><GoHome /> Home</NavLink></li>
        <li><NavLink to={"/timeline"} className={({ isActive }) => `font-semibold text-lg mr-5 ${isActive && `text-white bg-[#244D3F]`}`}><RiTimeLine /> Timeline</NavLink></li>
        <li><NavLink to={"/stats"} className={({ isActive }) => `font-semibold text-lg ${isActive && `text-white bg-[#244D3F]`}`}><ImStatsDots /> Stats</NavLink></li>
    </>



    return (
        <div className='bg-base-100 shadow-sm sticky top-0 z-10'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow-lg">
                            {links}
                        </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost font-bold text-4xl flex gap-0">Keen<span className='text-green-900'>Keeper</span></Link>
                </div>


                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default NavBar;