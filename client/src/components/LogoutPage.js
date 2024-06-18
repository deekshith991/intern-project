// LogoutPage.js
import React from 'react';
import { useAuth } from './AuthContext';

const LogoutPage = () => {
    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
    };

    return (
        <div>
            <h2>Logout Page</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default LogoutPage;
