import { Link } from "react-router-dom";
import './css/header.css'



const HeaderSec = () => {

    return (
        <header>
            <Link to="./#" className='logo'>
                <img src="logo.jpeg" className="img" alt="Logo" />
            </Link>
            <nav className="navbar">
                <Link to="/profile">Profile</Link>
                <Link to="/register">Register</Link>
                <Link to="/issuejob">Issue a job</Link>
            </nav>
            <div className="contact">
                <Link to='/logout'>Login</Link>
            </div>
        </header>
    )
}

export default HeaderSec;