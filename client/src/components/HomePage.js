import './css/homepage.css';
import { Link } from 'react-router-dom';

const HomePage = () => {

    return (
        <div>
            <header class="header">
                <a href="./#" class="logo">
                    <img src="logo.jpeg" class="img" alt="Logo" />
                </a>
                <nav class="navbar">
                    <a href="./#" class="active">Home</a>
                    <a href="./#">Jobs</a>
                    <a href="./#">Packages</a>
                    <a href="./#">Invites</a>
                </nav>
                <div class="contact">
                    <Link to='/login'>Login</Link>
                    <Link to='register'>Register</Link>
                </div>
            </header>
            <section>
                <div class="bg-image">
                    <section class="search">
                        <h2>Find Your Dream Job</h2>
                        <div>
                            <form action="#" method="get">
                                <input type="text" placeholder="search a job" />
                                <button type="submit">Search</button>
                            </form>
                        </div>
                    </section>
                </div>
            </section>
            <section>
                <div class="jobsList-container">
                    <h1 class="jobsList-heading m-3">POPULAR CATEGORIES</h1>
                    <div class="d-flex flex-row">
                        <div class="jobTitle-card">
                            <div>
                                <i class="fa-solid fa-pen-ruler"></i>
                            </div>
                            <div>
                                <h6>Graphics & Design</h6>
                                <p>305 Open Positions</p>
                            </div>
                        </div>
                        <div class="jobTitle-card">
                            <div>
                                <i class="fa-solid fa-mobile-alt fa-2x"></i>
                            </div>
                            <div>
                                <h6>Mobile App Devolepment</h6>
                                <p>500 Open Positions</p>
                            </div>
                        </div>
                        <div class="jobTitle-card">
                            <div>
                                <i class="fa-solid fa-code fa-2x"></i>
                            </div>
                            <div>
                                <h6>Frontend Web Devolepment</h6>
                                <p>200 Open Positions</p>
                            </div>
                        </div>
                        <div class="jobTitle-card">
                            <div>
                                <i class="fa-brands fa-react"></i>
                            </div>
                            <div>
                                <h6>MERN Stack Devolepment</h6>
                                <p>1000+ Open Positions</p>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex flex-row">
                        <div class="jobTitle-card">
                            <div>
                                <i class="fa-solid fa-landmark"></i>
                            </div>
                            <div>
                                <h6>Account & Finance</h6>
                                <p>150 Open Positions</p>
                            </div>
                        </div>
                        <div class="jobTitle-card">
                            <div>
                                <i class="fa-solid fa-microchip"></i>
                            </div>
                            <div>
                                <h6>Artificial Intelligence</h6>
                                <p>867 Open Positions</p>
                            </div>
                        </div>
                        <div class="jobTitle-card">
                            <div>
                                <i class="fa-sharp fa-solid fa-video"></i>
                            </div>
                            <div>
                                <h6>Video Animation</h6>
                                <p>50 Open Positions</p>
                            </div>
                        </div>
                        <div class="jobTitle-card">
                            <div>
                                <i class="fa-solid fa-gamepad"></i>
                            </div>
                            <div>
                                <h6>Game Devolepment</h6>
                                <p>80 Open Positions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer class="footer">
                <ul class="list">
                    <li>
                        <a href="./#">FAQ</a>
                    </li>
                    <li>
                        <a href="./#">Services</a>
                    </li>
                    <li>
                        <a href="./#">Contact</a>
                    </li>
                    <li>
                        <a href="#">Privacy Policy</a>
                    </li>
                </ul>
                <p class="Copyright">&copy;2024 All Rights Reserved</p>
            </footer>
        </div>
    );
}

export default HomePage;