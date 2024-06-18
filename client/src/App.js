import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import LogoutPage from './components/LogoutPage';
// import { AuthProvider } from './components/AuthContext';
import UserProfilePage from './components/UserProfilePage';

const App = () => {
  return (
    <Router>
      {/* <AuthProvider> */}
      <div>
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
          </ul>
        </nav>

        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="/profile" element={<UserProfilePage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
      {/* </AuthProvider> */}
    </Router>
  );
};

const HomePage = () => (
  <div>
    <h2>Home Page</h2>
    <p>Welcome to the authentication app!</p>
  </div>
);

export default App;
