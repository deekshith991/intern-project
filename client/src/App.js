import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import LogoutPage from './components/LogoutPage';
// import { AuthProvider } from './components/AuthContext';
import UserProfilePage from './components/UserProfilePage';
import HomePage from './components/HomePage';
import RegisterPage from './components/RegisterPage';

const App = () => {
  return (
    <Router>
      {/* <AuthProvider> */}
      <div>


        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="/profile" element={<UserProfilePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<HomePage />} />
        </Routes>
      </div>
      {/* </AuthProvider> */}
    </Router>
  );
};

// const HomePage = () => (
//   <div>
//     <h2>Home Page</h2>
//     <p>Welcome to the authentication app!</p>
//   </div>
// );

export default App;
