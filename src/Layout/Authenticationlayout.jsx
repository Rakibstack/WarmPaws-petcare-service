import React from 'react';
import Navber from '../Component/HomeLayout/Navber';
import { Outlet } from 'react-router';

const Authenticationlayout = () => {
    return (
        <div>
               
               <header className='w-11/12 mx-auto px-2'>
                <Navber></Navber>
               </header>
               <main>
                <Outlet></Outlet>
               </main>
        </div>
    );
};

export default Authenticationlayout;