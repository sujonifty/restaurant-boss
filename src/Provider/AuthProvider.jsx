import { useState } from "react";
import { createContext } from "react";


export const authContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser]= useState();
    const [loading, setLoading]=useState(true);
    const authInfo = {
        user, 
        loading,
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;