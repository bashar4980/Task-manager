import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';



export const UserContext = createContext();
const auth = getAuth(app)



const Authcontext = ({children}) => {
    const [user , setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //login or sigin with provider
    const ProviderSignin = (provider) =>{
        return signInWithPopup(auth, provider)
    }
    //create user by email and password
    const createUserEmail = (email , password) =>{
        return createUserWithEmailAndPassword(auth , email , password)
    } 
    //sign in with email and password
    const signinWithEmail = (email , password) =>{
        return signInWithEmailAndPassword(auth, email , password)
    }
    //update user
    const updateUser = (profile) =>{
       return  updateProfile(auth.currentUser, profile)
    }
    //sign out
    const logOut = ()=>{
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
                setUser(currentUser);
                setLoading(false);
          
        });

        return () => {
            unsubscribe();
        }

    }, [])

    const authInfo = { 
           ProviderSignin,
           createUserEmail,
           updateUser,
           signinWithEmail,
           user,
           loading,
           logOut
    };

    return (
        <UserContext.Provider value={authInfo}>
              {children}
        </UserContext.Provider>
    );
};

export default Authcontext;