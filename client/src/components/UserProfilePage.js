// UserProfilePage.js
import React from 'react';
import { useAuth } from './AuthContext';
import HeaderSec from './HeaderSec';
import Footer from './FooterSec';
import AddJOB from './AddJobPage';
import Jobs from './Jobs.js'
import { getUSER } from '../services/Taskservices.js';

const UserProfilePage = () => {
    const { isLoggedIn } = useAuth();

    return (
        <div>
            <HeaderSec />
            <h1> Register a job </h1>
            <AddJOB />

            <Jobs />
            <h1> username : </h1>
            <Footer />
        </div>
    );
};

export default UserProfilePage;
