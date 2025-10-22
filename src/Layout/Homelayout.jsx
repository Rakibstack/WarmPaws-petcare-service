import React from 'react';
import Home from '../Component/HomeLayout/Home';
import { Outlet } from 'react-router';
import Navber from '../Component/HomeLayout/Navber';
import Footer from '../Component/HomeLayout/Footer';

const Homelayout = () => {
    return (
        <div>
            <header className='w-11/12 mx-auto px-2 '>
               <Navber></Navber>
            </header>
              
               <main>
                <Outlet></Outlet>
               </main>

               <footer className='w-11/12 mx-auto px-2'>
                  <Footer></Footer>
               </footer>
        </div>
    );
};

export default Homelayout;