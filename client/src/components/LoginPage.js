// LoginPage.js
import React from 'react';
import { useAuth } from './AuthContext';

const LoginPage = () => {
    const { login } = useAuth();

    const handleLogin = () => {
        login();
    };

    return (
        <div>
            <h2>Login Page</h2>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default LoginPage;
