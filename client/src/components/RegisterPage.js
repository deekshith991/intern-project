
import { Link } from 'react-router-dom';
import './css/loginPage.css';


const RegisterPage = () => {

    return (
        <div className='REGISTER'>
            <div className="container">
                <h1>Register Now</h1>
                <div className="d-flex flex-row">
                    <div className="login-box">
                        <form>
                            <div className="form-group">
                                <label for="role">Choose your Role :</label><br />
                                <select id="role">
                                    <option value="Job Seeker">Job Seeker</option>
                                    <option value="Employer">Employer</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label for="firstname">First Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter your first name" />
                            </div>
                            <div className="form-group">
                                <label for="name">Last Name</label>
                                <input type="text" className="form-control" id="lastname" placeholder="Enter your last name" />
                            </div>
                            <div className="form-group">
                                <label for="Email">Email</label>
                                <input type="text" className="form-control" id="Email" placeholder="Enter your Email" />
                            </div>
                            <div className="form-group">
                                <label for="password">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Enter password" />
                            </div>
                            <div className="form-group">
                                <label for="Mobile Number">mobile Number</label>
                                <input type="text" className="form-control" id="confirmPassword" placeholder="Enter your number" />
                            </div>
                            <div className="form-group">
                                <label for="address">Address</label>
                                <input type="text" className="form-control" id="Address" placeholder="Enter your address" />
                            </div>
                            <div className="form-group">
                                <label for="pincode">Pincode</label>
                                <input type="text" className="form-control" id="Pincode" placeholder="Pincode" />
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