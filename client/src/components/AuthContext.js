
import React, { useState, useContext } from 'react';

const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = () => {
        // Perform your login logic here (e.g., calling an API)
        setIsLoggedIn(true);
    };

    const logout = () => {
        // Perform your logout logic here
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
