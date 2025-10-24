import React, { use, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { Authcontext } from '../Authprovider/Authprovider';
import { GoogleAuthProvider,  } from 'firebase/auth';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';
 
const provider = new GoogleAuthProvider();

const Login = () => {
    const {loginuser,Loginpopup} = use(Authcontext);
    const [error,seterror] = useState();
    const [showpass,setshowpass] = useState(false);
     const [email,setemail] = useState('')  
    const location = useLocation();
    const navigate = useNavigate();  

    useEffect(() => {
         seterror('');
    },[])

     const Handlegoogle = () => {

       Loginpopup(provider)
        .then(result => {
            console.log(result);
            navigate(`${location.state ? location.state : '/'}`)           
        })
        .catch(error => {
            seterror(error);
        })     
     }

    const Handlelogin = (e) => {
     e.preventDefault();
     const form = e.target;
     const email = form.email.value;
     const password = form.password.value;
      
     loginuser(email,password)
     .then(result => {
      console.log(result);
       navigate(`${location.state ? location.state : '/'}`) 
      
     }).catch(error => {
      const errormessage = error.code;
      seterror(errormessage);
     })  

    }
         const Handleshowpass = (e) => {
         e.preventDefault();
         setshowpass(!showpass);
      }
      const Handleforgotpass = () => {
        navigate('/auth/forgotpassword',{state:{email}})
   
      }
    

    return (
        <div>
            <div className="card bg-base-100 w-full mx-auto max-w-sm  shadow-2xl">
                <form onSubmit={Handlelogin} className="card-body">
                    <h2 className='text-center font-bold text-2xl'>Login form</h2>
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" 
                         value={email}
                         onChange={(e) => setemail(e.target.value)}
                        name='email' required className="input w-full" placeholder="Email" />
                        
                       <div className='relative'>
                        <label className="label">Password</label>
                         <input type={showpass ? 'text' : "password"}
                          name='password'
                           required className="input w-full" placeholder="Password" />
                         <button onClick={Handleshowpass} className='absolute   top-7 right-3'>{showpass ? <FaEyeSlash size={21}/> : <FaEye size={22} />}</button>
                       </div>

                        <div>  <Toaster />
                        <a onClick={Handleforgotpass} className="link link-hover">Forgot password?</a></div>
                        {error && <p className='text-red-500 font-medium mt-2'>{error}</p>}
                         <div>
                            <button onClick={Handlegoogle} className="btn mt-3 w-full bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Sign in with Google
                        </button>
                        </div>
                        <button className="btn btn-neutral mt-4">Login</button>
                       
                        <p className='mt-2 font-medium text-[0.9rem] text-gray-500'>New To Here please? <Link state={location.state} to='/auth/register' className='text-blue-500 font-bold'>Register</Link> </p>
                    </fieldset>
                </form>
            </div>

        </div>
    );
};

export default Login;