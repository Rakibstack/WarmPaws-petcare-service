import { Link, useLocation, useNavigate } from 'react-router';
import { Authcontext } from '../Authprovider/Authprovider';
import { use, useEffect, useState } from 'react';
import { GoogleAuthProvider } from 'firebase/auth';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const googleprovider = new GoogleAuthProvider();

const Register = () => {

    const { createuser,signinwithpopup } = use(Authcontext);
    const [error, seterror] = useState();
    const [showpass, setshowpass] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();


    const Handlegoogle = () => {
        signinwithpopup(googleprovider)
        .then(result => {
         navigate(`${location.state ? location.state : '/'}`) 
        console.log(result);
            
        }).catch(error => {
            seterror(error)
        })
    }

    const Handleregister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const passwordpattern = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/
          
       useEffect(()=> {
         seterror('');
       },[])
       
        if (!passwordpattern.test(password)) {
            seterror('Password Didnot Match.')
            return
        }
        createuser(email, password)
            .then(result => {
              const user = result.user;
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


    return (
        <div>
            <div className="card bg-base-100 w-full max-w-sm mx-auto  shadow-2xl">
                <form onSubmit={Handleregister}  className="card-body">
                    <h2 className='text-center font-bold text-3xl'>Please Register</h2>
                    <fieldset className="fieldset">
                        {/* Name */}
                        <label className="label">Name</label>
                        <input type="text" required name='name' className="input w-full bg-base-300" placeholder="Your Name" />
                        {/* photo url */}
                        <label className="label">Photo URL</label>
                        <input type="text" required name='photo' className="input w-full bg-base-300" placeholder="Enter Your image URL " />
                        {/* email */}
                        <label className="label">Email</label>
                        <input type="email" required name='email' className="input w-full bg-base-300" placeholder="Enter Your Email" />
                        {/* password */}
                       <div className='relative'>
                         <label className="label">Password</label>
                        <input type={showpass ? 'text' : 'password'}
                         required name='password'
                          className="input w-full bg-base-300" placeholder="Enter Your Password" />
                        <button onClick={Handleshowpass} className='absolute   top-7 right-3'>{showpass ? <FaEyeSlash size={21}/> : <FaEye size={22} />}</button>
                       </div>


                        {error && <p className='text-red-500 mt-1 font-medium'>{error}</p>}
                        {/* Google */}
                        <button onClick={Handlegoogle} className="btn mt-3 bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Signup with Google
                        </button>
                      
                        <button className="btn btn-neutral mt-2">Register</button>
                        <p className='mt-2 font-medium text-[0.9rem] text-gray-500'>Already Have An Account Please?  <Link to='/auth/login' className='font-bold text-blue-500'>Log in</Link></p>
                    </fieldset>
                </form>
            </div>

        </div>
    );
};

export default Register;