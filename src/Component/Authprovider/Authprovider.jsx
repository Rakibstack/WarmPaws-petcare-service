import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword,
     signInWithPopup, 
     signOut} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../firebase/firebase.config';
 
 export const Authcontext = createContext();
 

const Authprovider = ({children}) => {

       const [user,setuser] = useState()
       
   const createuser = (email,password) => {
        return createUserWithEmailAndPassword(auth, email, password);
   }

   const signinwithpopup = (googleprovider) => {
    return signInWithPopup(auth,googleprovider)
   }

   const Loginpopup = (provider) => {
    return signInWithPopup(auth,provider)
   }

   const loginuser = (email,password) => {
     return signInWithEmailAndPassword(auth,email,password);
   }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            setuser(currentuser);
        })
        return () => {
            unsubscribe();
        }
    },
    [])
    const Logout = () => {
        return signOut(auth);
    }



 const authinfo = {
   createuser,
   signinwithpopup,
   loginuser,
   Loginpopup,
   Logout,
   user,
   setuser
 }
    return <Authcontext value={authinfo}>
      {children}
    </Authcontext>
};

export default Authprovider;