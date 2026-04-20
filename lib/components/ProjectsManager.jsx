'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getProjects, createProject, updateProject, deleteProject } from '../utils/api';
import './ProjectsManager.css';

export default function ProjectsManager() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    technologies: [],
    liveDemo: '',
    github: '',
    category: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Fetch projects
  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const response = await getProjects();
      setProjects(response.data);
    } catch (err) {
      setError('Failed to fetch projects');
    } finally {
      setLoading(false);
    }
  };

  // Handle form input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle technologies input
  const handleTechChange = (e) => {
    const techs = e.target.value.split(',').map((tech) => tech.trim());
    setFormData((prev) => ({
      ...prev,
      technologies: techs,
    }));
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      if (editingId) {
        await updateProject(editingId, formData);
        setSuccess('Project updated successfully!');
      } else {
        await createProject(formData);
        setSuccess('Project created successfully!');
      }
      resetForm();
      fetchProjects();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to save project');
    }
  };

  // Delete project
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this project?')) return;

    try {
      await deleteProject(id);
      setSuccess('Project deleted successfully!');
      fetchProjects();
    } catch (err) {
      setError('Failed to delete project');
    }
  };

  // Edit project
  const handleEdit = (project) => {
    setFormData({
      title: project.title,
      description: project.description,
      image: project.image,
      technologies: project.technologies,
      liveDemo: project.liveDemo,
      github: project.github,
      category: project.category,
    });
    setEditingId(project._id);
    setShowForm(true);
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      image: '',
      technologies: [],
      liveDemo: '',
      github: '',
      category: '',
    });
    setEditingId(null);
    setShowForm(false);
  };

  if (loading) {
    return <div className="manager-loading">Loading projects...</div>;
  }

  return (
    <div className="projects-manager">
      <h2 className="manager-title">📁 Projects Manager</h2>

      {error && <div className="alert alert-error">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}

      {/* Add/Edit Form */}
      <motion.div
        className="form-section"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="form-header">
          <h3>{editingId ? '✏️ Edit Project' : '➕ Add New Project'}</h3>
          {showForm && (
            <button className="close-btn" onClick={resetForm}>
              ✕
            </button>
          )}
        </div>

        {showForm && (
          <form onSubmit={handleSubmit} className="admin-form">
            <div className="form-group">
              <label>Project Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Enter project title"
                required
              />
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Enter project description"
                rows="4"
                required
              />
            </div>

            <div className="form-group">
              <label>Image URL</label>
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleInputChange}
                placeholder="Enter image URL"
              />
            </div>

            <div className="form-group">
              <label>Technologies (comma-separated)</label>
              <input
                type="text"
                value={formData.technologies.join(', ')}
                onChange={handleTechChange}
                placeholder="React, Node.js, MongoDB"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Live Demo URL</label>
                <input
                  type="url"
                  name="liveDemo"
                  value={formData.liveDemo}
                  onChange={handleInputChange}
                  placeholder="https://example.com"
                />
              </div>

              <div className="form-group">
                <label>GitHub Repository</label>
                <input
                  type="url"
                  name="github"
                  value={formData.github}
                  onChange={handleInputChange}
                  placeholder="https://github.com/username/repo"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Category</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                placeholder="Web Development, Mobile App, etc."
              />
            </div>

            <div className="form-buttons">
              <button type="submit" className="btn btn-primary">
                {editingId ? 'Update Project' : 'Create Project'}
              </button>
              <button type="button" className="btn btn-secondary" onClick={resetForm}>
                Cancel
              </button>
            </div>
          </form>
        )}

        {!showForm && (
          <button className="btn btn-primary" onClick={() => setShowForm(true)}>
            ➕ Add New Project
          </button>
        )}
      </motion.div>

      {/* Projects List */}
      <div className="projects-list">
        <h3>📋 All Projects ({projects.length})</h3>

        {projects.length === 0 ? (
          <p className="empty-state">No projects yet. Create your first project!</p>
        ) : (
          <div className="projects-grid">
            {projects.map((project) => (
              <motion.div
                key={project._id}
                className="project-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="project-card-header">
                  <h4>{project.title}</h4>
                  <div className="card-actions">
                    <button
                      className="btn-edit"
                      onClick={() => handleEdit(project)}
                      title="Edit"
                    >
                      ✏️
                    </button>
                    <button
                      className="btn-delete"
                      onClick={() => handleDelete(project._id)}
                      title="Delete"
                    >
                      🗑️
                    </button>
                  </div>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-techs">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  {project.liveDemo && (
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                      🔗 Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      💻 GitHub
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
