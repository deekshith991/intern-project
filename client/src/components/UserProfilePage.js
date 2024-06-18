// UserProfilePage.js
import React from 'react';
import { useAuth } from './AuthContext';
import HeaderSec from './HeaderSec';

const UserProfilePage = () => {
    const { isLoggedIn } = useAuth();

    return (
        <div>
            <HeaderSec />
            <h2>Profile Page</h2>
            {isLoggedIn ? (
                <p>Welcome! You are logged in.</p>
            ) : (
                <p>You are not logged in.</p>
            )}
        </div>
    );
};

export default UserProfilePage;
