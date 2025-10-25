import React, { use } from 'react';
import { Outlet } from 'react-router';
import Navber from '../Component/HomeLayout/Navber';
import Footer from '../Component/HomeLayout/Footer';
import { Authcontext } from '../Component/Authprovider/Authprovider';
import Loading from '../Component/HomeLayout/Loading';

const Homelayout = () => {
      const {loading} = use(Authcontext);

      if(loading){
        return <Loading></Loading>
      }
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