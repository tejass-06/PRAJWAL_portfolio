'use client';

import { useEffect, useState } from 'react';
import Navbar from '../lib/components/Navbar';
import HeroSection from '../lib/components/HeroSection';
import AboutSection from '../lib/components/AboutSection';
import SkillsSection from '../lib/components/SkillsSection';
import ProjectsSection from '../lib/components/ProjectsSection';
import ContactSection from '../lib/components/ContactSection';
import Footer from '../lib/components/Footer';

export default function Home() {
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    setProfileImage('/profile.jpg');
  }, []);

  return (
    <div className="min-h-screen transition-colors duration-300 bg-gray-900 text-gray-100">
      <Navbar />
      <HeroSection profileImage={profileImage} />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
