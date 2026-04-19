import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit2, Trash2, Upload, ChevronDown, ChevronUp } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
  getProfile,
  updateProfile,
  getContactDetails,
  updateContactDetails,
  getAchievements,
  createAchievement,
  updateAchievement,
  deleteAchievement,
} from '../utils/api';

const AdminDashboard = () => {
  const { isDark } = useTheme();
  const [expandedSections, setExpandedSections] = useState({
    projects: true,
    skills: true,
    achievements: true,
    contact: true,
    profile: true,
  });
  const [loading, setLoading] = useState(true);
  const [saveStatus, setSaveStatus] = useState({});

  // Load data from backend on mount
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const [projectsRes, achievementsRes, profileRes, contactRes] = await Promise.all([
          getProjects(),
          getAchievements(),
          getProfile(),
          getContactDetails(),
        ]);
        
        setProjects(projectsRes.data || []);
        setAchievements(achievementsRes.data || []);
        if (profileRes.data) {
          setProfileData(profileRes.data);
          if (profileRes.data.image) setProfileImage(profileRes.data.image);
        }
        if (contactRes.data) setContactDetails(contactRes.data);
      } catch (error) {
        console.error('Failed to load data:', error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  // Projects State
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Smart Agriculture System',
      description: 'IoT-based agricultural monitoring system with real-time analytics and Firebase integration.',
      technologies: ['IoT', 'Python', 'React', 'Arduino', 'Firebase'],
      image: '/project-1.jpg',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'Smart Inventory Management',
      description: 'Automated inventory tracking system with barcode scanning and predictive analytics.',
      technologies: ['Node.js', 'MongoDB', 'React', 'OpenCV', 'AWS'],
      image: '/project-2.jpg',
      liveUrl: '#',
      githubUrl: '#',
    },
  ]);

  // Achievements State
  const [achievements, setAchievements] = useState([
    { id: 1, title: 'Campus Tech Innovation Hackathon Winner (2024)', icon: '🏆' },
    { id: 2, title: 'Outstanding Academic Performance - CGPA: 9.5/10', icon: '🎓' },
    { id: 3, title: 'Research Publication on IoT Applications', icon: '📚' },
  ]);

  // Contact Details State
  const [contactDetails, setContactDetails] = useState({
    email: 'prajwalfating2005@gmail.com',
    phone: '+91 7775034821',
    location: 'Nagpur, Maharashtra, India',
    linkedin: 'linkedin.com/in/prajwal-fating',
    github: 'github.com/prajwal-f15',
  });

  // Profile State
  const [profileImage, setProfileImage] = useState('/profile.jpg');
  const [profileData, setProfileData] = useState({
    name: 'Prajwal Fating',
    title: 'Full Stack Developer & Data Science Enthusiast',
    bio: 'Passionate developer with expertise in IoT, AI/ML, and web development.',
  });

  // Form States
  const [editingProject, setEditingProject] = useState(null);
  const [projectFormData, setProjectFormData] = useState({
    title: '',
    description: '',
    technologies: '',
    image: '',
    liveUrl: '',
    githubUrl: '',
  });

  const [editingAchievement, setEditingAchievement] = useState(null);
  const [achievementFormData, setAchievementFormData] = useState({
    title: '',
    icon: '🏆',
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Project Management
  const handleAddProject = () => {
    setEditingProject(null);
    setProjectFormData({
      title: '',
      description: '',
      technologies: '',
      image: '',
      liveUrl: '',
      githubUrl: '',
    });
  };

  const handleEditProject = (project) => {
    setEditingProject(project.id);
    setProjectFormData({
      title: project.title,
      description: project.description,
      technologies: project.technologies.join(', '),
      image: project.image,
      liveUrl: project.liveUrl,
      githubUrl: project.githubUrl,
    });
  };

  const handleSaveProject = async () => {
    try {
      setSaveStatus({ project: 'saving' });
      const projectData = {
        title: projectFormData.title,
        description: projectFormData.description,
        technologies: projectFormData.technologies.split(',').map(t => t.trim()),
        image: projectFormData.image,
        liveLink: projectFormData.liveUrl,
        githubLink: projectFormData.githubUrl,
      };

      if (editingProject) {
        await updateProject(editingProject, projectData);
        setProjects(projects.map(p =>
          p.id === editingProject
            ? { ...p, ...projectData }
            : p
        ));
      } else {
        const res = await createProject(projectData);
        setProjects([...projects, res.data]);
      }

      setEditingProject(null);
      setProjectFormData({
        title: '',
        description: '',
        technologies: '',
        image: '',
        liveUrl: '',
        githubUrl: '',
      });
      setSaveStatus({ project: 'saved' });
      setTimeout(() => setSaveStatus({}), 2000);
    } catch (error) {
      console.error('Failed to save project:', error);
      setSaveStatus({ project: 'error' });
    }
  };

  const handleDeleteProject = async (id) => {
    if (confirm('Are you sure you want to delete this project?')) {
      try {
        await deleteProject(id);
        setProjects(projects.filter(p => p.id !== id));
      } catch (error) {
        console.error('Failed to delete project:', error);
      }
    }
  };

  // Achievement Management
  const handleAddAchievement = () => {
    setEditingAchievement(null);
    setAchievementFormData({ title: '', icon: '🏆' });
  };

  const handleEditAchievement = (achievement) => {
    setEditingAchievement(achievement.id);
    setAchievementFormData(achievement);
  };

  const handleSaveAchievement = async () => {
    try {
      setSaveStatus({ achievement: 'saving' });
      if (editingAchievement) {
        await updateAchievement(editingAchievement, achievementFormData);
        setAchievements(achievements.map(a =>
          a.id === editingAchievement ? { ...a, ...achievementFormData } : a
        ));
      } else {
        const res = await createAchievement(achievementFormData);
        setAchievements([...achievements, res.data]);
      }
      setEditingAchievement(null);
      setAchievementFormData({ title: '', icon: '🏆' });
      setSaveStatus({ achievement: 'saved' });
      setTimeout(() => setSaveStatus({}), 2000);
    } catch (error) {
      console.error('Failed to save achievement:', error);
      setSaveStatus({ achievement: 'error' });
    }
  };

  const handleDeleteAchievement = async (id) => {
    if (confirm('Are you sure?')) {
      try {
        await deleteAchievement(id);
        setAchievements(achievements.filter(a => a.id !== id));
      } catch (error) {
        console.error('Failed to delete achievement:', error);
      }
    }
  };

  // Image Upload Handler
  const handleImageUpload = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (type === 'profile') {
          setProfileImage(reader.result);
          localStorage.setItem('profileImage', reader.result);
        } else if (type === 'project') {
          setProjectFormData({ ...projectFormData, image: reader.result });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const SectionHeader = ({ title, section }) => (
    <button
      onClick={() => toggleSection(section)}
      className={`w-full flex items-center justify-between p-4 rounded-lg border-2 transition-all cursor-pointer ${
        isDark
          ? 'bg-gray-800 border-blue-500/40 hover:border-blue-500'
          : 'bg-blue-50 border-blue-300 hover:border-blue-500'
      }`}
    >
      <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
      {expandedSections[section] ? <ChevronUp /> : <ChevronDown />}
    </button>
  );

  return (
    <div className={`min-h-screen py-12 px-4 transition-colors duration-300 ${
      isDark ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className={`text-4xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Admin Dashboard
        </motion.h1>
        <p className={`mb-12 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          Manage and edit all your portfolio sections
        </p>

        <div className="space-y-8">
          {/* Profile Section */}
          {expandedSections.profile && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-8 rounded-xl border-2 ${
                isDark
                  ? 'bg-gray-800/50 border-blue-500/40'
                  : 'bg-blue-50/30 border-blue-300'
              }`}
            >
              <SectionHeader title="Profile Information" section="profile" />
              
              {expandedSections.profile && (
                <div className="mt-6 space-y-6">
                  {/* Profile Image */}
                  <div>
                    <label className={`block font-semibold mb-3 ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
                      Profile Image
                    </label>
                    <div className="flex gap-6 items-start">
                      <div className={`w-32 h-32 rounded-lg border-2 overflow-hidden flex-shrink-0 ${
                        isDark ? 'border-gray-700' : 'border-gray-300'
                      }`}>
                        {profileImage && (
                          <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                        )}
                      </div>
                      <div className="flex-1">
                        <label className={`flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer w-fit ${
                          isDark
                            ? 'bg-blue-600 hover:bg-blue-700'
                            : 'bg-blue-500 hover:bg-blue-600'
                        } text-white font-semibold transition-all`}>
                          <Upload size={20} />
                          Upload Image
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleImageUpload(e, 'profile')}
                            className="hidden"
                          />
                        </label>
                        <p className={`text-sm mt-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          Recommended: Square image (500x500px or larger)
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Profile Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={profileData.name}
                      onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                      className={`px-4 py-2 rounded-lg border-2 transition-all ${
                        isDark
                          ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500'
                          : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                      }`}
                    />
                    <input
                      type="text"
                      placeholder="Professional Title"
                      value={profileData.title}
                      onChange={(e) => setProfileData({ ...profileData, title: e.target.value })}
                      className={`px-4 py-2 rounded-lg border-2 transition-all ${
                        isDark
                          ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500'
                          : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                      }`}
                    />
                  </div>

                  <textarea
                    placeholder="Bio"
                    value={profileData.bio}
                    onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                    className={`w-full px-4 py-2 rounded-lg border-2 transition-all ${
                      isDark
                        ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500'
                        : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                    }`}
                    rows="3"
                  />

                  <button
                    onClick={async () => {
                      try {
                        setSaveStatus({ profile: 'saving' });
                        await updateProfile({
                          name: profileData.name,
                          title: profileData.title,
                          bio: profileData.bio,
                          image: profileImage,
                        });
                        setSaveStatus({ profile: 'saved' });
                        setTimeout(() => setSaveStatus({}), 2000);
                      } catch (error) {
                        console.error('Failed to save profile:', error);
                        setSaveStatus({ profile: 'error' });
                      }
                    }}
                    className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                      isDark
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-blue-500 hover:bg-blue-600 text-white'
                    }`}
                  >
                    {saveStatus.profile === 'saving' ? 'Saving...' : saveStatus.profile === 'saved' ? '✓ Saved!' : 'Save Changes'}
                  </button>
                </div>
              )}
            </motion.div>
          )}

          {/* Contact Details Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-8 rounded-xl border-2 ${
              isDark
                ? 'bg-gray-800/50 border-blue-500/40'
                : 'bg-blue-50/30 border-blue-300'
            }`}
          >
            <SectionHeader title="Contact Details" section="contact" />
            
            {expandedSections.contact && (
              <div className="mt-6 space-y-4">
                {Object.entries(contactDetails).map(([key, value]) => (
                  <div key={key}>
                    <label className={`block font-semibold mb-2 capitalize ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
                      {key}
                    </label>
                    <input
                      type="text"
                      value={value}
                      onChange={(e) => setContactDetails({ ...contactDetails, [key]: e.target.value })}
                      className={`w-full px-4 py-2 rounded-lg border-2 transition-all ${
                        isDark
                          ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500'
                          : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                      }`}
                    />
                  </div>
                ))}
                <button
                  onClick={async () => {
                    try {
                      setSaveStatus({ contact: 'saving' });
                      await updateContactDetails(contactDetails);
                      setSaveStatus({ contact: 'saved' });
                      setTimeout(() => setSaveStatus({}), 2000);
                    } catch (error) {
                      console.error('Failed to save contact:', error);
                      setSaveStatus({ contact: 'error' });
                    }
                  }}
                  className={`w-full px-6 py-2 rounded-lg font-semibold transition-all ${
                    isDark
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-blue-500 hover:bg-blue-600 text-white'
                  }`}
                >
                  {saveStatus.contact === 'saving' ? 'Saving...' : saveStatus.contact === 'saved' ? '✓ Saved!' : 'Save Changes'}
                </button>
              </div>
            )}
          </motion.div>

          {/* Projects Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-8 rounded-xl border-2 ${
              isDark
                ? 'bg-gray-800/50 border-blue-500/40'
                : 'bg-blue-50/30 border-blue-300'
            }`}
          >
            <div className="flex justify-between items-center mb-4">
              <button
                onClick={() => toggleSection('projects')}
                className={`flex-1 flex items-center justify-between p-4 rounded-lg border-2 transition-all cursor-pointer ${
                  isDark
                    ? 'bg-gray-800 border-blue-500/40 hover:border-blue-500'
                    : 'bg-blue-50 border-blue-300 hover:border-blue-500'
                }`}
              >
                <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Projects
                </h2>
                {expandedSections.projects ? <ChevronUp /> : <ChevronDown />}
              </button>
              {expandedSections.projects && (
                <button
                  onClick={handleAddProject}
                  className={`ml-4 flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
                    isDark
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-blue-500 hover:bg-blue-600 text-white'
                  }`}
                >
                  <Plus size={20} />
                  Add
                </button>
              )}
            </div>

            {expandedSections.projects && (
              <div className="space-y-6 mt-6">
                {/* Project Form */}
                {editingProject !== null && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-6 rounded-lg border-2 ${
                      isDark
                        ? 'bg-gray-700 border-blue-600'
                        : 'bg-white border-blue-400'
                    }`}
                  >
                    <h3 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {editingProject ? 'Edit Project' : 'New Project'}
                    </h3>

                    <div className="space-y-4">
                      <input
                        type="text"
                        placeholder="Project Title"
                        value={projectFormData.title}
                        onChange={(e) => setProjectFormData({ ...projectFormData, title: e.target.value })}
                        className={`w-full px-4 py-2 rounded-lg border-2 transition-all ${
                          isDark
                            ? 'bg-gray-600 border-gray-500 text-white focus:border-blue-500'
                            : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500'
                        }`}
                      />

                      <textarea
                        placeholder="Description"
                        value={projectFormData.description}
                        onChange={(e) => setProjectFormData({ ...projectFormData, description: e.target.value })}
                        className={`w-full px-4 py-2 rounded-lg border-2 transition-all ${
                          isDark
                            ? 'bg-gray-600 border-gray-500 text-white focus:border-blue-500'
                            : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500'
                        }`}
                        rows="3"
                      />

                      <input
                        type="text"
                        placeholder="Technologies (comma-separated)"
                        value={projectFormData.technologies}
                        onChange={(e) => setProjectFormData({ ...projectFormData, technologies: e.target.value })}
                        className={`w-full px-4 py-2 rounded-lg border-2 transition-all ${
                          isDark
                            ? 'bg-gray-600 border-gray-500 text-white focus:border-blue-500'
                            : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500'
                        }`}
                      />

                      {/* Image Upload */}
                      <div>
                        <label className={`block font-semibold mb-2 ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
                          Project Image
                        </label>
                        <label className={`flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer w-fit ${
                          isDark
                            ? 'bg-gray-600 hover:bg-gray-500'
                            : 'bg-gray-200 hover:bg-gray-300'
                        } font-semibold transition-all`}>
                          <Upload size={18} />
                          Upload
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleImageUpload(e, 'project')}
                            className="hidden"
                          />
                        </label>
                      </div>

                      <input
                        type="url"
                        placeholder="Live URL"
                        value={projectFormData.liveUrl}
                        onChange={(e) => setProjectFormData({ ...projectFormData, liveUrl: e.target.value })}
                        className={`w-full px-4 py-2 rounded-lg border-2 transition-all ${
                          isDark
                            ? 'bg-gray-600 border-gray-500 text-white focus:border-blue-500'
                            : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500'
                        }`}
                      />

                      <input
                        type="url"
                        placeholder="GitHub URL"
                        value={projectFormData.githubUrl}
                        onChange={(e) => setProjectFormData({ ...projectFormData, githubUrl: e.target.value })}
                        className={`w-full px-4 py-2 rounded-lg border-2 transition-all ${
                          isDark
                            ? 'bg-gray-600 border-gray-500 text-white focus:border-blue-500'
                            : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500'
                        }`}
                      />

                      <div className="flex gap-2">
                        <button
                          onClick={handleSaveProject}
                          className={`flex-1 px-4 py-2 rounded-lg font-semibold transition-all ${
                            isDark
                              ? 'bg-blue-600 hover:bg-blue-700 text-white'
                              : 'bg-blue-500 hover:bg-blue-600 text-white'
                          }`}
                        >
                          Save Project
                        </button>
                        <button
                          onClick={() => setEditingProject(null)}
                          className={`flex-1 px-4 py-2 rounded-lg font-semibold transition-all ${
                            isDark
                              ? 'bg-gray-600 hover:bg-gray-500 text-white'
                              : 'bg-gray-300 hover:bg-gray-400 text-gray-900'
                          }`}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Projects List */}
                <div className="space-y-4">
                  {projects.map((project) => (
                    <motion.div
                      key={project.id}
                      className={`p-4 rounded-lg border-2 ${
                        isDark
                          ? 'bg-gray-700/50 border-gray-600'
                          : 'bg-gray-50 border-gray-300'
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex-1">
                          <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            {project.title}
                          </h3>
                          <p className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            {project.description}
                          </p>
                          <div className="flex gap-2 mt-3 flex-wrap">
                            {project.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className={`text-xs px-2 py-1 rounded-full ${
                                  isDark
                                    ? 'bg-blue-900/30 text-blue-300'
                                    : 'bg-blue-100 text-blue-700'
                                }`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-2 flex-shrink-0">
                          <button
                            onClick={() => handleEditProject(project)}
                            className={`p-2 rounded-lg transition-all ${
                              isDark
                                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                                : 'bg-blue-500 hover:bg-blue-600 text-white'
                            }`}
                          >
                            <Edit2 size={18} />
                          </button>
                          <button
                            onClick={() => handleDeleteProject(project.id)}
                            className={`p-2 rounded-lg transition-all ${
                              isDark
                                ? 'bg-red-900/50 hover:bg-red-800 text-red-300'
                                : 'bg-red-100 hover:bg-red-200 text-red-600'
                            }`}
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Achievements Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-8 rounded-xl border-2 ${
              isDark
                ? 'bg-gray-800/50 border-blue-500/40'
                : 'bg-blue-50/30 border-blue-300'
            }`}
          >
            <div className="flex justify-between items-center mb-4">
              <button
                onClick={() => toggleSection('achievements')}
                className={`flex-1 flex items-center justify-between p-4 rounded-lg border-2 transition-all cursor-pointer ${
                  isDark
                    ? 'bg-gray-800 border-blue-500/40 hover:border-blue-500'
                    : 'bg-blue-50 border-blue-300 hover:border-blue-500'
                }`}
              >
                <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Achievements
                </h2>
                {expandedSections.achievements ? <ChevronUp /> : <ChevronDown />}
              </button>
              {expandedSections.achievements && (
                <button
                  onClick={handleAddAchievement}
                  className={`ml-4 flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
                    isDark
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-blue-500 hover:bg-blue-600 text-white'
                  }`}
                >
                  <Plus size={20} />
                  Add
                </button>
              )}
            </div>

            {expandedSections.achievements && (
              <div className="space-y-6 mt-6">
                {/* Achievement Form */}
                {editingAchievement !== null && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-6 rounded-lg border-2 ${
                      isDark
                        ? 'bg-gray-700 border-blue-600'
                        : 'bg-white border-blue-400'
                    }`}
                  >
                    <h3 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {editingAchievement ? 'Edit Achievement' : 'New Achievement'}
                    </h3>

                    <div className="space-y-4">
                      <input
                        type="text"
                        placeholder="Achievement Title"
                        value={achievementFormData.title}
                        onChange={(e) => setAchievementFormData({ ...achievementFormData, title: e.target.value })}
                        className={`w-full px-4 py-2 rounded-lg border-2 transition-all ${
                          isDark
                            ? 'bg-gray-600 border-gray-500 text-white focus:border-blue-500'
                            : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500'
                        }`}
                      />

                      <div>
                        <label className={`block font-semibold mb-2 ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
                          Icon (Emoji)
                        </label>
                        <input
                          type="text"
                          placeholder="🏆"
                          maxLength="2"
                          value={achievementFormData.icon}
                          onChange={(e) => setAchievementFormData({ ...achievementFormData, icon: e.target.value })}
                          className={`w-full px-4 py-2 rounded-lg border-2 transition-all text-2xl text-center ${
                            isDark
                              ? 'bg-gray-600 border-gray-500 text-white focus:border-blue-500'
                              : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500'
                          }`}
                        />
                      </div>

                      <div className="flex gap-2">
                        <button
                          onClick={handleSaveAchievement}
                          className={`flex-1 px-4 py-2 rounded-lg font-semibold transition-all ${
                            isDark
                              ? 'bg-blue-600 hover:bg-blue-700 text-white'
                              : 'bg-blue-500 hover:bg-blue-600 text-white'
                          }`}
                        >
                          Save Achievement
                        </button>
                        <button
                          onClick={() => setEditingAchievement(null)}
                          className={`flex-1 px-4 py-2 rounded-lg font-semibold transition-all ${
                            isDark
                              ? 'bg-gray-600 hover:bg-gray-500 text-white'
                              : 'bg-gray-300 hover:bg-gray-400 text-gray-900'
                          }`}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Achievements List */}
                <div className="space-y-4">
                  {achievements.map((achievement) => (
                    <div
                      key={achievement.id}
                      className={`flex justify-between items-center p-4 rounded-lg border-2 ${
                        isDark
                          ? 'bg-gray-700/50 border-gray-600'
                          : 'bg-gray-50 border-gray-300'
                      }`}
                    >
                      <div>
                        <span className="text-2xl mr-3">{achievement.icon}</span>
                        <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          {achievement.title}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEditAchievement(achievement)}
                          className={`p-2 rounded-lg transition-all ${
                            isDark
                              ? 'bg-blue-600 hover:bg-blue-700 text-white'
                              : 'bg-blue-500 hover:bg-blue-600 text-white'
                          }`}
                        >
                          <Edit2 size={18} />
                        </button>
                        <button
                          onClick={() => handleDeleteAchievement(achievement.id)}
                          className={`p-2 rounded-lg transition-all ${
                            isDark
                              ? 'bg-red-900/50 hover:bg-red-800 text-red-300'
                              : 'bg-red-100 hover:bg-red-200 text-red-600'
                          }`}
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
