import { createContext, useContext, useState } from "react"



const Auth = createContext();


const AuthProvider = ({ children }) => {

    const [login, setLogin] = useState(JSON.parse(localStorage.getItem('user')) || null);
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem('register')) || []);



    const value = {
        login, setLogin,
        authUser, setAuthUser
    }
    return (<Auth.Provider value={value}>
        {children}
    </Auth.Provider>)
};


export const useAuthContext = () => useContext(Auth);

export default AuthProvider
