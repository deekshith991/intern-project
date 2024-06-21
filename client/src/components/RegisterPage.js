
import { Link } from 'react-router-dom';
import './css/loginPage.css';
import { useState } from 'react';
import { RegisterUSER } from '../services/Taskservices';

const RegisterPage = () => {

    const [regData, setRegData] = useState({
        account: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        Phone: '',
        address: '',
        pincode: ''
    });

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setRegData({ ...regData, [name]: value });
    }

    const handleRegister = () => {
        const formData = {
            Account: regData.account,
            firstName: regData.firstName,
            lastName: regData.lastName,
            email: regData.email,
            password: regData.password,
            Phone: regData.Phone,
            Address: regData.address,
            Pincode: regData.pincode
        }

        const result = RegisterUSER(formData);
        console.log(result.data);



    }


    return (
        <div className='REGISTER'>
            <div className="container">
                <h1>Register Now</h1>
                <div className="d-flex flex-row">
                    <div className="login-box">
                        <form onSubmit={handleRegister}>
                            <div className="form-group">
                                <label htmlFor="account">Choose your Role :</label><br />
                                <select id="account" name="account" value={regData.account} onChange={handleChange}>
                                    <option value='null' >select</option>
                                    <option value="Job Seeker" >Job Seeker</option>
                                    <option value="Employer" >Employer</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="firstname">First Name</label>
                                <input type="text" className="form-control" id="firstname" placeholder="Enter your first name" name="firstName" value={regData.firstName} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Last Name</label>
                                <input type="text" className="form-control" id="lastname" placeholder="Enter your last name" name="lastName" value={regData.lastName} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Email">Email</label>
                                <input type="email" className="form-control" id="Email" placeholder="Enter your Email" name="email" value={regData.email} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Enter password" name="password" value={regData.password} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Mobile Number">mobile Number</label>
                                <input type="number" className="form-control" id="confirmPassword" placeholder="Enter your number"
                                    name="Phone" value={regData.Phone} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="address">Address</label>
                                <input type="text" className="form-control" id="Address" placeholder="Enter your address" name="address" value={regData.address} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="pincode">Pincode</label>
                                <input type="number" className="form-control" id="Pincode" placeholder="Pincode" name="pincode" value={regData.pincode} onChange={handleChange} />
                            </div>
                            <button type="submit" className="btn btn-success btn-block" id="register-btn">Register</button>
                        </form>
                        <p className="text-center mt-3" id="register-link">already have an account? <Link to='/login' >Login</Link></p>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default RegisterPage;