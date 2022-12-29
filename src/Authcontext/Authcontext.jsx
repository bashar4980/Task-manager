import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithPopup, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';



export const UserContext = createContext();
const auth = getAuth(app)



const Authcontext = ({children}) => {

    //login or sigin with provider
    const ProviderSignin = (provider) =>{
        return signInWithPopup(auth, provider)
    }
    //create user by email and password
    const createUserEmail = (email , password) =>{
        return createUserWithEmailAndPassword(auth , email , password)
    }
    //update user
    const updateUser = (profile) =>{
       return  updateProfile(auth.currentUser, profile)
    }

    const authInfo = { 
           ProviderSignin,
           createUserEmail,
           updateUser
    };

    return (
        <UserContext.Provider value={authInfo}>
              {children}
        </UserContext.Provider>
    );
};

export default Authcontext;