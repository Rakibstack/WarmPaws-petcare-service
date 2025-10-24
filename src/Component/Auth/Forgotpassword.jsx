import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { auth } from '../../firebase/firebase.config';

const Forgotpassword = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const [email,setemail] = useState('');
    const [error,seterror] = useState();

     useEffect(() => {
        seterror('')
        if(location.state?.email){
            setemail(location.state.email);
        }
     },[location.state])

     const HandleReset = (e) => {
      e.preventDefault();
      sendPasswordResetEmail(auth,email)
      .then(()=> {
         window.open("https://mail.google.com", "_blank");
      })
      .catch(() => {
       seterror('Please check the email address.');

      })
     

     }
    return (
        <div className='w-11/12 mx-auto px-2 mt-5'>
          <div className="card bg-base-100 w-full mx-auto max-w-sm  shadow-2xl">
      <form onSubmit={HandleReset} className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email"
          value={email}
          onChange={(e) => setemail(e.target.value) }
           className="input w-full" placeholder="Email" />
           {error && <p className='text-red-500 font-medium mt-2'>{error}</p>}
          <button className="btn bg-gradient-to-r from-pink-500 to-indigo-500 text-white mt-4">Reset Password</button>
        </fieldset>
      </form>
    </div>
        </div>
    );
};

export default Forgotpassword;