import React, { useRef } from 'react';
import { Download } from 'lucide-react';
import html2pdf from 'html2pdf.js';

const ResumeDownload = () => {
  const resumeRef = useRef();

  const handleDownloadPDF = () => {
    const element = resumeRef.current;
    const opt = {
      margin: [8, 8, 8, 8],
      filename: 'Prajwal_Fating_Resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' }
    };
    
    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-8 px-4 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        {/* Download Button */}
        <div className="mb-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Resume</h1>
          <button
            onClick={handleDownloadPDF}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
          >
            <Download size={20} />
            Download PDF
          </button>
        </div>

        {/* Resume Container */}
        <div
          ref={resumeRef}
          className="bg-white p-8"
          style={{ width: '210mm', margin: '0 auto', fontSize: '11px', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
        >
          {/* Header Section */}
          <div style={{ marginBottom: '12px', paddingBottom: '12px', borderBottom: '2px solid #e5e7eb' }}>
            {/* Photo and Name Row */}
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '8px' }}>
              {/* Photo */}
              <div style={{ flexShrink: 0 }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '8px', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', border: '1px solid #d1d5db' }}>
                  <img 
                    src="/profile.jpg" 
                    alt="Profile" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.style.background = '#e5e7eb';
                    }}
                  />
                </div>
              </div>

              {/* Name and Title */}
              <div style={{ flex: 1 }}>
                <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', margin: '0 0 4px 0' }}>
                  PRAJWAL FATING
                </h1>
                <p style={{ fontSize: '13px', color: '#4b5563', margin: '0 0 8px 0', fontWeight: '500' }}>
                  Full Stack Developer | Data Science Enthusiast
                </p>
                
                {/* Contact Details */}
                <div style={{ fontSize: '10px', color: '#374151', lineHeight: '1.6' }}>
                  <div>📧 prajwalfating2005@gmail.com | 📱 +91 7775034821</div>
                  <div>📍 Nagpur, Maharashtra | 🔗 linkedin.com/in/prajwal-fating | 💻 github.com/prajwal-f15</div>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div style={{ marginBottom: '10px' }}>
            <h2 style={{ fontSize: '12px', fontWeight: 'bold', color: '#1f2937', borderBottom: '2px solid #3b82f6', paddingBottom: '4px', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Professional Summary
            </h2>
            <p style={{ fontSize: '10.5px', color: '#374151', lineHeight: '1.6', margin: '0' }}>
              Passionate Full Stack Developer with expertise in building scalable web applications using React, Node.js, and MongoDB. Strong foundation in IoT, machine learning, and data science with demonstrated ability to develop end-to-end solutions from concept to deployment with focus on clean code and user experience.
            </p>
          </div>

          {/* Technical Skills */}
          <div style={{ marginBottom: '10px' }}>
            <h2 style={{ fontSize: '12px', fontWeight: 'bold', color: '#1f2937', borderBottom: '2px solid #3b82f6', paddingBottom: '4px', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Technical Skills
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '10.5px', color: '#374151' }}>
              <div>
                <span style={{ fontWeight: 'bold', color: '#1f2937', display: 'block', marginBottom: '2px' }}>Frontend Development</span>
                React.js, JavaScript (ES6+), Tailwind CSS, HTML5, Framer Motion, GSAP
              </div>
              <div>
                <span style={{ fontWeight: 'bold', color: '#1f2937', display: 'block', marginBottom: '2px' }}>Backend Development</span>
                Node.js, Express.js, REST APIs, JWT Authentication, Socket.io
              </div>
              <div>
                <span style={{ fontWeight: 'bold', color: '#1f2937', display: 'block', marginBottom: '2px' }}>Databases</span>
                MongoDB, Firebase Realtime Database, PostgreSQL, Data Management
              </div>
              <div>
                <span style={{ fontWeight: 'bold', color: '#1f2937', display: 'block', marginBottom: '2px' }}>IoT & ML</span>
                Arduino, ESP32, Python, TensorFlow, NumPy, Data Analysis
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div style={{ marginBottom: '10px' }}>
            <h2 style={{ fontSize: '12px', fontWeight: 'bold', color: '#1f2937', borderBottom: '2px solid #3b82f6', paddingBottom: '4px', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Featured Projects
            </h2>
            
            <div style={{ marginBottom: '6px' }}>
              <h3 style={{ fontWeight: 'bold', color: '#1f2937', fontSize: '11px', margin: '0 0 3px 0' }}>Smart Agriculture System</h3>
              <p style={{ fontSize: '10px', color: '#374151', margin: '0 0 3px 0', lineHeight: '1.5' }}>
                IoT-based agricultural monitoring system with real-time analytics and Firebase integration. Managed sensor data collection via Arduino and Python backend with React dashboard for data visualization.
              </p>
              <p style={{ fontSize: '9px', color: '#6b7280', margin: 0 }}>
                <span style={{ fontWeight: 'bold' }}>Technologies:</span> IoT, Python, React.js, Arduino, Firebase, Real-time Data Sync
              </p>
            </div>

            <div style={{ marginBottom: '6px' }}>
              <h3 style={{ fontWeight: 'bold', color: '#1f2937', fontSize: '11px', margin: '0 0 3px 0' }}>Smart Inventory Management System</h3>
              <p style={{ fontSize: '10px', color: '#374151', margin: '0 0 3px 0', lineHeight: '1.5' }}>
                Automated inventory tracking system with barcode scanning and predictive analytics. Multi-platform support with real-time inventory updates, automated reporting, and AWS cloud deployment.
              </p>
              <p style={{ fontSize: '9px', color: '#6b7280', margin: 0 }}>
                <span style={{ fontWeight: 'bold' }}>Technologies:</span> Node.js, MongoDB, React.js, OpenCV, AWS
              </p>
            </div>

            <div style={{ marginBottom: '6px' }}>
              <h3 style={{ fontWeight: 'bold', color: '#1f2937', fontSize: '11px', margin: '0 0 3px 0' }}>RFID Attendance Management System</h3>
              <p style={{ fontSize: '10px', color: '#374151', margin: '0 0 3px 0', lineHeight: '1.5' }}>
                Modern attendance management using RFID technology with automated reporting. Real-time updates, Docker containerization for deployment, and PostgreSQL database for data persistence.
              </p>
              <p style={{ fontSize: '9px', color: '#6b7280', margin: 0 }}>
                <span style={{ fontWeight: 'bold' }}>Technologies:</span> RFID, Express.js, PostgreSQL, React.js, Docker
              </p>
            </div>

            <div>
              <h3 style={{ fontWeight: 'bold', color: '#1f2937', fontSize: '11px', margin: '0 0 3px 0' }}>Emergency Spare-Part Delivery Platform</h3>
              <p style={{ fontSize: '10px', color: '#374151', margin: '0 0 3px 0', lineHeight: '1.5' }}>
                Real-time logistics platform with GPS tracking and automated dispatch system for urgent spare parts delivery. Firebase integration for real-time database and cross-platform mobile support.
              </p>
              <p style={{ fontSize: '9px', color: '#6b7280', margin: 0 }}>
                <span style={{ fontWeight: 'bold' }}>Technologies:</span> Geolocation APIs, Node.js, React Native, Firebase, Maps Integration
              </p>
            </div>
          </div>

          {/* Achievements */}
          <div style={{ marginBottom: '10px' }}>
            <h2 style={{ fontSize: '12px', fontWeight: 'bold', color: '#1f2937', borderBottom: '2px solid #3b82f6', paddingBottom: '4px', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Achievements & Certifications
            </h2>
            <ul style={{ fontSize: '10.5px', color: '#374151', margin: '0', paddingLeft: '18px' }}>
              <li style={{ marginBottom: '4px' }}>Campus Tech Innovation Hackathon Winner (2024) - Innovative IoT solution for smart agriculture</li>
              <li style={{ marginBottom: '4px' }}>Outstanding Academic Performance - CGPA: 9.5/10 in B.Tech Data Science Program</li>
              <li style={{ marginBottom: '4px' }}>Research Publication - "IoT Applications in Smart Systems" - Published on emerging IoT technologies</li>
              <li style={{ marginBottom: '4px' }}>Python Programming Master Class - Completed 2024</li>
              <li style={{ marginBottom: '4px' }}>AWS Cloud Fundamentals Certification - Completed 2023</li>
              <li>Full Stack Web Development Bootcamp - Completed 2023</li>
            </ul>
          </div>

          {/* Education */}
          <div style={{ marginBottom: '10px' }}>
            <h2 style={{ fontSize: '12px', fontWeight: 'bold', color: '#1f2937', borderBottom: '2px solid #3b82f6', paddingBottom: '4px', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Education
            </h2>
            <div>
              <div style={{ fontWeight: 'bold', color: '#1f2937', fontSize: '11px', marginBottom: '2px' }}>
                Bachelor of Technology - Data Science
              </div>
              <div style={{ fontSize: '10px', color: '#374151' }}>
                Currently Pursuing | CGPA: 9.5/10 | Expected Graduation 2025
              </div>
            </div>
          </div>

          {/* Languages */}
          <div>
            <h2 style={{ fontSize: '12px', fontWeight: 'bold', color: '#1f2937', borderBottom: '2px solid #3b82f6', paddingBottom: '4px', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Languages
            </h2>
            <p style={{ fontSize: '10.5px', color: '#374151', margin: 0 }}>
              <span style={{ fontWeight: 'bold' }}>English</span> (Fluent) • <span style={{ fontWeight: 'bold' }}>Hindi</span> (Native Speaker) • <span style={{ fontWeight: 'bold' }}>Marathi</span> (Native Speaker)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeDownload;
