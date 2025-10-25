import React, { use, useState } from 'react';
import Navber from '../HomeLayout/Navber';
import { Authcontext } from '../Authprovider/Authprovider';
import Loading from '../HomeLayout/Loading';


const Myprofile = () => {

     const {user,setuser,updateuser,loading,setloading} = use(Authcontext);
     const [name, setName] = useState("");
    const [photoURL, setPhotoURL] = useState("");
    const [isEditing, setIsEditing] = useState(false); 

    if(loading){
        return <Loading></Loading>
      }
   
     const handleUpdate = () => {
      updateuser({
        displayName:name, photoURL: photoURL,
      })
      .then(() => {
        setuser({...user, displayName:name, photoURL: photoURL,});
      })
      .finally(() => {
      setloading(false);
    })
      
      .catch(() => {
        setuser(user)
      })
     }

    return (
        <div className='w-11/12 mx-auto px-4'>
            <Navber></Navber>

            {
               !isEditing ? (<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 p-6">
                <div className="bg-white shadow-lg rounded-2xl p-8 max-w-sm w-full text-center">
                    <img
                        src={user.photoURL}
                        alt="User"
                        className="w-36 h-36 mx-auto rounded-full border-4 border-blue-500 shadow-md"
                    />
                    <h2 className="text-2xl font-semibold mt-4 text-gray-800">{user.displayName}</h2>
                    <p className="text-gray-500">{user.email}</p>

                    <button
                        className="mt-6 px-6 py-2 rounded-lg bg-blue-400 hover:bg-blue-600 text-white font-medium transition duration-200"
                        onClick={() => setIsEditing(true) }
                    >
                        Update Profile
                    </button>
                </div>
            </div>)  
             : ( 
           <div className=" max-w-md mx-auto rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 p-6">
     
           <div className='space-y-4'>
            <h2 className='text-center font-medium text-2xl mb-5'>Update Profile Form</h2>
             <input
        type="text"
        placeholder="Enter new name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="text"
        placeholder="Enter image URL"
        value={photoURL}
        onChange={(e) => setPhotoURL(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <div className="flex justify-between mt-6">
        <button
          onClick={handleUpdate}
          className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition duration-200"
        >
          Save
        </button>
        <button
          onClick={() => setIsEditing(false)}
          className="px-6 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-lg transition duration-200"
        >
          Cancel
        </button>
      </div>
           </div>
        </div>)   
           
            }         

        </div>
    );
};

export default Myprofile;