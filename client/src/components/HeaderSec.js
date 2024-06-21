import { Link } from "react-router-dom";

const HeaderSec = () => {

    return (
        <div>
            <h1>Header</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/logout">Logout</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                        <Link to="register">Register</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default HeaderSec;