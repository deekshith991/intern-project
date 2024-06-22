// UserProfilePage.js
import React from 'react';
import { useAuth } from './AuthContext';
import HeaderSec from './HeaderSec';
import Footer from './FooterSec';

const UserProfilePage = () => {
    const { isLoggedIn } = useAuth();

    return (
        <div>
            <HeaderSec />
            <h1>{user.firstName} {user.lastName}</h1>
            <Footer />
        </div>
    );
};

export default UserProfilePage;
