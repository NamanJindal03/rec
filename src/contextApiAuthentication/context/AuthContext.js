import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const login = () => {
        //over here you can have a logic for login. 
        setIsLoggedIn(true);
    }
    const logout = () => {
        setIsLoggedIn(false);
    }
    return (
        <AuthContext.Provider value={{isLoggedIn, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}