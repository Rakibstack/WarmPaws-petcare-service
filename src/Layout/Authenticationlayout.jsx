import React, { use } from 'react';
import Navber from '../Component/HomeLayout/Navber';
import { Outlet } from 'react-router';
import { Authcontext } from '../Component/Authprovider/Authprovider';
import Loading from '../Component/HomeLayout/Loading';

const Authenticationlayout = () => {
    const {loading} = use(Authcontext)   

     if(loading){
        return <Loading></Loading>
      }
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