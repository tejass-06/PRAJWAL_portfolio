import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ContactForm.css';

export default function ContactForm() {
  const [contact, setContact] = useState({
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    github: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const token = localStorage.getItem('adminToken');
        const response = await axios.get('/api/admin/contact', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setContact(response.data);
      } catch (error) {
        setMessage('Error loading contact details');
      }
    };
    fetchContact();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const token = localStorage.getItem('adminToken');
      await axios.put('/api/admin/contact', contact, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessage('Contact details updated successfully!');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage('Error updating contact details');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-form">
      <h2>Edit Contact Details</h2>
      {message && <p className={message.includes('Error') ? 'error' : 'success'}>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={contact.email}
            onChange={handleChange}
            disabled
          />
          <small>Email cannot be changed</small>
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={contact.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={contact.location}
            onChange={handleChange}
            placeholder="City, Country"
          />
        </div>

        <div className="form-group">
          <label htmlFor="linkedin">LinkedIn URL</label>
          <input
            type="url"
            id="linkedin"
            name="linkedin"
            value={contact.linkedin}
            onChange={handleChange}
            placeholder="https://linkedin.com/in/username"
          />
        </div>

        <div className="form-group">
          <label htmlFor="github">GitHub URL</label>
          <input
            type="url"
            id="github"
            name="github"
            value={contact.github}
            onChange={handleChange}
            placeholder="https://github.com/username"
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Updating...' : 'Update Contact'}
        </button>
      </form>
    </div>
  );
}
