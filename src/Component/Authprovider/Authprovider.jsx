import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword,
     signInWithPopup, 
     signOut,
     updateProfile} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../firebase/firebase.config';
 
 export const Authcontext = createContext();
 

const Authprovider = ({children}) => {

       const [user,setuser] = useState()
       const [loading,setloading] = useState(true);
       
       
   const createuser = (email,password) => {
      setloading(true)
        return createUserWithEmailAndPassword(auth, email, password);
   }
   const signinwithpopup = (googleprovider) => {
    setloading(true)
    return signInWithPopup(auth,googleprovider)
   }
   const Loginpopup = (provider) => {
    setloading(true)
    return signInWithPopup(auth,provider)
   }

   const loginuser = (email,password) => {
    setloading(true)
     return signInWithEmailAndPassword(auth,email,password);
   }
   const updateuser = (updatedata) => {
       setloading(true);
       return updateProfile(auth.currentUser,updatedata);
   }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            setuser(currentuser);
            setloading(false);
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
   setuser,
   loading,
   updateuser
 }
    return <Authcontext value={authinfo}>
      {children}
    </Authcontext>
};

export default Authprovider;