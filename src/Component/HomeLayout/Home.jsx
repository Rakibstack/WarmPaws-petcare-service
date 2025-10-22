import React from 'react';
import Heroslider from './Heroslider';
import PopulerService from './PopulerService';
import Tipsforpet from './Tipsforpet';
import Expertsection from './Expertsection';
import Extrasection from './Extrasection';

const Home = () => {
    return (
        <div className='w-11/12 mx-auto px-4'>
               <Heroslider></Heroslider>
               <PopulerService></PopulerService>
               <Tipsforpet></Tipsforpet>
               <Expertsection></Expertsection>
               <Extrasection></Extrasection>
        </div>
    );
};

export default Home;