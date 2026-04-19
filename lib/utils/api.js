import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const api = axios.create({
  baseURL: API_URL,
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('adminToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Projects
export const getProjects = () => api.get('/projects');
export const getProject = (id) => api.get(`/projects/${id}`);
export const createProject = (data) => api.post('/projects', data);
export const updateProject = (id, data) => api.put(`/projects/${id}`, data);
export const deleteProject = (id) => api.delete(`/projects/${id}`);

// Messages
export const getMessages = () => api.get('/messages');
export const createMessage = (data) => api.post('/messages', data);
export const markMessageAsRead = (id) => api.put(`/messages/${id}/read`);
export const deleteMessage = (id) => api.delete(`/messages/${id}`);

// Admin
export const adminLogin = (email, password) => api.post('/admin/login', { email, password });
export const verifyAdmin = () => api.get('/admin/verify');

// Profile
export const getProfile = () => api.get('/admin/profile');
export const updateProfile = (data) => api.put('/admin/profile', data);

// Contact Details
export const getContactDetails = () => api.get('/admin/contact');
export const updateContactDetails = (data) => api.put('/admin/contact', data);

// Achievements
export const getAchievements = () => api.get('/admin/achievements');
export const createAchievement = (data) => api.post('/admin/achievements', data);
export const updateAchievement = (id, data) => api.put(`/admin/achievements/${id}`, data);
export const deleteAchievement = (id) => api.delete(`/admin/achievements/${id}`);
