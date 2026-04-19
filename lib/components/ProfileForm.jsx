import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProfileForm.css';

export default function ProfileForm() {
  const [profile, setProfile] = useState({
    name: '',
    title: '',
    bio: '',
    image: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('adminToken');
        const response = await axios.get('/api/admin/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(response.data);
      } catch (error) {
        setMessage('Error loading profile');
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const token = localStorage.getItem('adminToken');
      await axios.put('/api/admin/profile', profile, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessage('Profile updated successfully!');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage('Error updating profile');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="profile-form">
      <h2>Edit Profile</h2>
      {message && <p className={message.includes('Error') ? 'error' : 'success'}>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={profile.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={profile.title}
            onChange={handleChange}
            placeholder="e.g., Full Stack Developer"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="bio">Bio</label>
          <textarea
            id="bio"
            name="bio"
            value={profile.bio}
            onChange={handleChange}
            rows="4"
            placeholder="Tell about yourself"
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Profile Image URL</label>
          <input
            type="url"
            id="image"
            name="image"
            value={profile.image}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Updating...' : 'Update Profile'}
        </button>
      </form>
    </div>
  );
}
