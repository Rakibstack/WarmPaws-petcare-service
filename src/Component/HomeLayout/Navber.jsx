import React, { use } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { MdOutlinePets } from 'react-icons/md';
import { Link, NavLink } from 'react-router';
import { Authcontext } from '../Authprovider/Authprovider';

const Navber = () => {
    const {user,Logout} = use(Authcontext);

    const Handlelogout = () => {
       Logout();

    }
    
    return (
        <div>

            <div className="navbar bg-base-100 py-5 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <nav className='flex gap-2'>
                                <NavLink to='/'>Home</NavLink>
                                <NavLink>Services</NavLink>
                                <NavLink> My Profile</NavLink>
                            </nav>
                        </ul>
                    </div>
                    <a className="flex text-[#2D6A4F] justify-center items-center gap-2 text-2xl font-bold"><MdOutlinePets /> WarmPaws </a>
                </div>
                
                <div className="navbar-end">
                    <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal mr-5">
                        
                         <nav className='flex gap-6 text-[#2D6A4F] text-[1.1rem] font-medium'>
                                <NavLink to='/'>Home</NavLink>
                                <NavLink to='/' >Services</NavLink>
                                <NavLink> My Profile</NavLink>
                            </nav>
                    </ul>
                </div>
                <div className='flex gap-3 justify-center items-center'>
                    <FaUserCircle  size={38} color='#2D6A4F'/>
                   {
                    user ?  <a onClick={Handlelogout} className="btn bg-[#2D6A4F] text-white hover:bg-[#22543D]   rounded-xl btn-outline"> Log Out</a> :  <Link to='/auth/login' className="btn bg-[#2D6A4F] text-white hover:bg-[#22543D]   rounded-xl btn-outline"> Log in</Link>
                   }
                </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Navber;