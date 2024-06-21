// LoginPage.js
import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import './css/loginPage.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const LoginPage = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {

        e.preventDefault();
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:4000/api/login', {
                "email": formData.username,
                "password": formData.password
            });
            alert('done post');

            const { token } = response.data; // Assuming your backend returns a token
            sessionStorage.setItem('token', token);
            alert(token);
            // Store token in localStorage or state (depending on your app's design)
            // Example using login function from AuthContext
            // Redirect or navigate to another page after successful login
            navigate('/userprofile'); // Redirect to dashboard page after successful login
        } catch (error) {
            console.error('Login error:', error.response.data);
            // Handle login error (show error message, etc.)
        }

    }




    return (
        <div className='LOGINPAGE'>
            <div className="container">
                <h1>Find the most
                    <br />Exciting Jobs
                </h1>
                <div className="d-flex flex-row">
                    <div className="login-box">
                        <form onSubmit={handleLogin}>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" className="form-control" id="username" placeholder="Enter username" name="username" value={formData.username} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Enter password" name="password" value={formData.password} onChange={handleChange} />
                            </div>
                            <button className="btn btn-primary btn-block" id="login-btn" type="submit">Login</button>
                        </form>
                        <p className="text-center mt-3" id="register-link">Don't have an account? <Link to='/register'>Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
