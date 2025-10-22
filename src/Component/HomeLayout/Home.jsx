import React from 'react';
import Heroslider from './Heroslider';
import PopulerService from './PopulerService';

const Home = () => {
    return (
        <div className='w-11/12 mx-auto px-4'>
               <Heroslider></Heroslider>
               <PopulerService></PopulerService>
        </div>
    );
};

export default Home;