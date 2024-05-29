import { useEffect, useState } from "react";
import { createContext } from "react";
import { auth } from "../Firebase/Firebase.config";
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile,GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const authContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser]= useState();
    const [loading, setLoading]=useState(true);
    const { error, setError } = useState("");

    // create user with email & password
    const createUser=(email, password)=>{
        console.log(email)
        console.log(password)
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // signIn with email & password
    const signIn=(email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    //create user by google account
    const googleProvider = new GoogleAuthProvider();
    const googleSignIn =()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    const updateUserProfile=(name, photo)=>{
       return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: photo
          })
    }

    // log out 
    const logOut =()=>{
        setLoading(true);
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            console.log('current user',currentUser);
            setLoading(false);
        })
        return ()=>{
            return unsubscribe();
        }
    },[])
    const authInfo = {
        user, 
        loading,
        error,
        setError,
        updateUserProfile,
        createUser,
        googleSignIn,
        signIn,
        logOut,
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;