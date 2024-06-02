import { createContext } from 'react';
import React from 'react';

const LogoutContext = createContext();

export default function LogoutProvider({ children }) {
    const handleLogout = () => {
        localStorage.clear();
    };
    var a=99
    return (
        <LogoutContext.Provider value={{handleLogout,a}}>
            {children}
        </LogoutContext.Provider>
    );
}

export { LogoutContext };
