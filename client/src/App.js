import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import LoginPage from './components/LoginPage';
import LogoutPage from './components/LogoutPage';
// import { AuthProvider } from './components/AuthContext';
import UserProfilePage from './components/UserProfilePage';
import HomePage from './components/HomePage';
import RegisterPage from './components/RegisterPage';
import AddJOB from './components/AddJobPage';

const App = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');

      if (token) {
        try {
          const res = await axios.get('/api/users', {
            headers: {
              'x-auth-token': token,
            },
          });
          user = res.data
          console.log(res.data);
          setUser(res.data);
        } catch (error) {
          console.error(error.response.data.msg);
        }
      }
    };

    fetchUser();
  }, []);


  return (
    <Router>
      {/* <AuthProvider> */}
      <div>


        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="/profile" element={<UserProfilePage />} />
          <Route path='/issuejob' element={<AddJOB />} />
          <Route path="userprofile" element={<UserProfilePage />} />
          <Route path="/" element={<HomePage />} />
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
