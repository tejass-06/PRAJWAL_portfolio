import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AchievementsManager.css';

export default function AchievementsManager() {
  const [achievements, setAchievements] = useState([]);
  const [form, setForm] = useState({ title: '', icon: '🏆' });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchAchievements();
  }, []);

  const fetchAchievements = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await axios.get('/api/admin/achievements', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAchievements(response.data);
    } catch (error) {
      setMessage('Error loading achievements');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const token = localStorage.getItem('adminToken');
      if (editingId) {
        await axios.put(`/api/admin/achievements/${editingId}`, form, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMessage('Achievement updated successfully!');
        setEditingId(null);
      } else {
        await axios.post('/api/admin/achievements', form, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMessage('Achievement created successfully!');
      }
      setForm({ title: '', icon: '🏆' });
      fetchAchievements();
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage('Error saving achievement');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (achievement) => {
    setForm({ title: achievement.title, icon: achievement.icon });
    setEditingId(achievement._id);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this achievement?')) {
      try {
        const token = localStorage.getItem('adminToken');
        await axios.delete(`/api/admin/achievements/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMessage('Achievement deleted successfully!');
        fetchAchievements();
        setTimeout(() => setMessage(''), 3000);
      } catch (error) {
        setMessage('Error deleting achievement');
      }
    }
  };

  const handleCancel = () => {
    setForm({ title: '', icon: '🏆' });
    setEditingId(null);
  };

  return (
    <div className="achievements-manager">
      <h2>Manage Achievements</h2>
      {message && <p className={message.includes('Error') ? 'error' : 'success'}>{message}</p>}

      <form onSubmit={handleSubmit} className="achievement-form">
        <div className="form-group">
          <label htmlFor="title">Achievement Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="e.g., Best Project Award"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="icon">Icon/Emoji</label>
          <input
            type="text"
            id="icon"
            name="icon"
            value={form.icon}
            onChange={handleChange}
            maxLength="2"
            placeholder="🏆"
          />
        </div>

        <div className="form-actions">
          <button type="submit" disabled={loading}>
            {loading ? 'Saving...' : editingId ? 'Update Achievement' : 'Add Achievement'}
          </button>
          {editingId && (
            <button type="button" onClick={handleCancel} className="cancel-btn">
              Cancel
            </button>
          )}
        </div>
      </form>

      <div className="achievements-list">
        <h3>Achievements</h3>
        {achievements.length === 0 ? (
          <p className="empty">No achievements yet</p>
        ) : (
          <ul>
            {achievements.map((achievement) => (
              <li key={achievement._id} className="achievement-item">
                <span className="icon">{achievement.icon}</span>
                <span className="title">{achievement.title}</span>
                <div className="actions">
                  <button
                    onClick={() => handleEdit(achievement)}
                    className="edit-btn"
                    disabled={editingId === achievement._id}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(achievement._id)}
                    className="delete-btn"
                    disabled={editingId === achievement._id}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
