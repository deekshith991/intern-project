// LoginPage.js
import React from 'react';
import { useAuth } from './AuthContext';
import './css/loginPage.css';
import { Link } from 'react-router-dom';


const LoginPage = () => {
    const { login } = useAuth();

    const handleLogin = () => {
        login();
    };

    return (
        <div className='LOGINPAGE'>
            <div className="container">
                <h1>Find the most
                    <br />Exciting Jobs
                </h1>
                <div className="d-flex flex-row">
                    <div className="login-box">
                        <form>
                            <div className="form-group">
                                <label for="username">Username</label>
                                <input type="text" className="form-control" id="username" placeholder="Enter username" />
                            </div>
                            <div className="form-group">
                                <label for="password">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Enter password" />
                            </div>
                            <button className="btn btn-primary btn-block" id="login-btn" onClick={handleLogin}>Login</button>
                        </form>
                        <p className="text-center mt-3" id="register-link">Don't have an account? <Link to='/register'>Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
