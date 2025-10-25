import React, { use } from 'react';
import Navber from '../HomeLayout/Navber';
import { Authcontext } from '../Authprovider/Authprovider';
import Loading from '../HomeLayout/Loading';

const Myprofile = () => {
    const {user} = use(Authcontext);

   
    return (
        <div className='w-11/12 mx-auto px-4'>
            <Navber></Navber>

            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-6">
                <div className="bg-white shadow-lg rounded-2xl p-8 max-w-sm w-full text-center">
                    <img
                        src={user.photoURL}
                        alt="User"
                        className="w-32 h-32 mx-auto rounded-full border-4 border-blue-500 shadow-md"
                    />
                    <h2 className="text-2xl font-semibold mt-4 text-gray-800">{user.displayName}</h2>
                    <p className="text-gray-500">{user.email}</p>

                    <button
                        className="mt-6 px-6 py-2 rounded-lg bg-blue-400 hover:bg-blue-600 text-white font-medium transition duration-200"
                        onClick={() => alert("Update Profile functionality coming soon!")}
                    >
                        Update Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Myprofile;