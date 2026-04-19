import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider, AuthContext } from './context/AuthContext';
import Home from './pages/Home';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import ResumeDownload from './components/ResumeDownload';
import { verifyAdmin } from './utils/api';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { token } = React.useContext(AuthContext);
  const [isVerified, setIsVerified] = useState(null);

  useEffect(() => {
    if (token) {
      verifyAdmin()
        .then(() => setIsVerified(true))
        .catch(() => {
          setIsVerified(false);
          localStorage.removeItem('adminToken');
        });
    } else {
      setIsVerified(false);
    }
  }, [token]);

  if (isVerified === null) return <div>Loading...</div>;
  return isVerified ? children : <Navigate to="/admin/login" />;
};

function App() {
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    // Try to load profile image from public folder
    setProfileImage('/profile.jpg');
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home profileImage={profileImage} />} />
            <Route path="/resume" element={<ResumeDownload />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
