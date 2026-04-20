import React, { useState } from 'react';
import ProfileForm from './ProfileForm';
import ContactForm from './ContactForm';
import AchievementsManager from './AchievementsManager';
import ProjectsManager from './ProjectsManager';
import './AdminDashboard.css';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('profile');

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    window.location.href = '/admin/login';
  };

  return (
    <div className="admin-dashboard">
      <header className="dashboard-header">
        <div className="header-content">
          <h1>Admin Dashboard</h1>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>
      </header>

      <nav className="dashboard-nav">
        <button
          className={`nav-btn ${activeTab === 'profile' ? 'active' : ''}`}
          onClick={() => setActiveTab('profile')}
        >
          📝 Profile
        </button>
        <button
          className={`nav-btn ${activeTab === 'contact' ? 'active' : ''}`}
          onClick={() => setActiveTab('contact')}
        >
          📧 Contact
        </button>
        <button
          className={`nav-btn ${activeTab === 'projects' ? 'active' : ''}`}
          onClick={() => setActiveTab('projects')}
        >
          📁 Projects
        </button>
        <button
          className={`nav-btn ${activeTab === 'achievements' ? 'active' : ''}`}
          onClick={() => setActiveTab('achievements')}
        >
          🏆 Achievements
        </button>
      </nav>

      <main className="dashboard-content">
        {activeTab === 'profile' && <ProfileForm />}
        {activeTab === 'contact' && <ContactForm />}
        {activeTab === 'projects' && <ProjectsManager />}
        {activeTab === 'achievements' && <AchievementsManager />}
      </main>
    </div>
  );
}
