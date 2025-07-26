import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDownload, FaMoon, FaSun, FaExternalLinkAlt, FaBars, FaTimes } from 'react-icons/fa'; // Added FaBars and FaTimes
import { motion, AnimatePresence } from 'framer-motion'; // Added AnimatePresence
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './App.css'; // Your custom CSS file

// Data for the sections (unchanged)
const skills = [
  { name: 'Git', icon: 'https://img.icons8.com/?size=100&id=20906&format=png&color=000000' },
  { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'MongoDB', icon: 'https://img.icons8.com/?size=100&id=74402&format=png&color=000000' },
  { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { name: 'Supabase', icon: 'https://avatars.githubusercontent.com/u/54469796?s=200&v=4' }
];

const projects = [
  {
    name: 'AI Virtual Keyboard',
    link: 'https://github.com/ajay20-s/AI_Virtual-Keyboard',
    description: 'An AI-powered keyboard using hand gesture recognition with OpenCV and MediaPipe.'
  },
  {
    name: 'Sepsis Prediction App',
    link: 'https://github.com/ajay20-s/sepsis_app',
    description: 'A web app to predict sepsis using machine learning models and React.'
  },
  {
    name: 'Hospital Patient Portal',
    link: 'https://github.com/ajay20-s/Multispecialty-Hospital-Patient-Portal',
    description: 'Full-stack portal for managing hospital patients, appointments, and doctor records.'
  },
  {
    name: 'Bus Buddy',
    link: 'https://github.com/ajay20-s/bus_buddy',
    description: 'Bus Buddy: A Comprehensive Flutter-Based Bus Travel Companion'
  }
];

const certifications = [
  {
    title: 'Learning Full Stack Development',
    issuer: 'Infosys | Springboard',
    dateIssued: 'June 30, 2025',
    link: '/certificates/Learning-Full-stack-Development-certificate.pdf'
  },
  {
    title: 'Full Stack AWS Application Development',
    issuer: 'Infosys | Springboard',
    dateIssued: 'July 7, 2025',
    link: '/certificates/Full-stack-aws-application-development.pdf'
  }
];

const timelineData = [
  {
    title: 'Started B.Tech in CSE',
    date: '2022',
    description: 'Joined PDPM IIITDM Jabalpur to pursue my undergraduate studies in Computer Science.'
  },
  {
    title: 'Built Sepsis App',
    date: '2024',
    description: 'Created a machine-learning-powered app to detect sepsis, using React.'
  },
  {
    title: 'Bus Buddy App',
    date: '2024',
    description: 'Developed a Flutter mobile application, "Bus Buddy," designed to streamline the bus travel experience for users. This project focuses on providing real-time bus information, streamlining ticket management, and enhancing user engagement through personalized features.'
  },
  {
    title: 'Completed Learning Full Stack Development',
    date: 'June 30, 2025',
    description: 'Successfully completed the Learning Full Stack Development course through Infosys Springboard.'
  },
  {
    title: 'Completed Full Stack AWS Application Development',
    date: 'July 7, 2025',
    description: 'Successfully completed the Full Stack AWS Application Development course through Infosys Springboard.'
  }
];

// Framer Motion Variants for animations (remain the same)
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeCert, setActiveCert] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // New state for mobile menu

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  const handleCertClick = (certLink) => {
    setActiveCert(activeCert === certLink ? null : certLink);
  };

  // Function to close mobile menu when a navigation link is clicked
  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="bg-white text-gray-800 dark:bg-gray-950 dark:text-gray-100 min-h-screen font-sans transition-all duration-300">
      {/* Navbar - Fixed and responsive */}
      <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 bg-opacity-90 backdrop-blur-md z-50 shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-widest text-cyan-500 dark:text-cyan-400">USHAKOYALA AJAY KUMAR</h1>

          {/* Desktop Navigation Links (hidden on mobile) */}
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#about" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition">About</a>
            <a href="#skills" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition">Skills</a>
            <a href="#projects" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition">Projects</a>
            <a href="#timeline" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition">Journey</a>
            <a href="#certifications" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition">Certifications</a>
            <a href="#contact" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition">Contact</a>
            {/* Resume link to open in new tab */}
            <a href="/certificates/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition flex items-center gap-1">
              <FaExternalLinkAlt /> Resume
            </a>
            {/* Dark Mode Toggle for desktop */}
            <button onClick={() => setDarkMode(!darkMode)} className="text-lg focus:outline-none hover:text-cyan-500 dark:hover:text-cyan-400 transition">
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>

          {/* Mobile Menu Icon and Dark Mode Toggle (visible on mobile) */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Dark Mode Toggle for mobile */}
            <button onClick={() => setDarkMode(!darkMode)} className="text-lg focus:outline-none hover:text-cyan-500 dark:hover:text-cyan-400 transition">
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
            {/* Hamburger/Close Icon for mobile menu */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-lg focus:outline-none text-gray-800 dark:text-gray-100 hover:text-cyan-500 dark:hover:text-cyan-400 transition"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu (Conditionally rendered with animation) */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden bg-white dark:bg-gray-900 shadow-lg pb-4"
            >
              <div className="flex flex-col items-center space-y-4 pt-4">
                <a href="#about" onClick={handleNavLinkClick} className="block w-full text-center py-2 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-100 hover:text-cyan-500 dark:hover:text-cyan-400 transition">About</a>
                <a href="#skills" onClick={handleNavLinkClick} className="block w-full text-center py-2 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-100 hover:text-cyan-500 dark:hover:text-cyan-400 transition">Skills</a>
                <a href="#projects" onClick={handleNavLinkClick} className="block w-full text-center py-2 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-100 hover:text-cyan-500 dark:hover:text-cyan-400 transition">Projects</a>
                <a href="#timeline" onClick={handleNavLinkClick} className="block w-full text-center py-2 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-100 hover:text-cyan-500 dark:hover:text-cyan-400 transition">Journey</a>
                <a href="#certifications" onClick={handleNavLinkClick} className="block w-full text-center py-2 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-100 hover:text-cyan-500 dark:hover:text-cyan-400 transition">Certifications</a>
                <a href="#contact" onClick={handleNavLinkClick} className="block w-full text-center py-2 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-100 hover:text-cyan-500 dark:hover:text-cyan-400 transition">Contact</a>
                <a href="/certificates/resume.pdf" target="_blank" rel="noopener noreferrer" onClick={handleNavLinkClick} className="block w-full text-center py-2 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-100 hover:text-cyan-500 dark:hover:text-cyan-400 transition flex items-center justify-center gap-1">
                  <FaExternalLinkAlt /> Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <motion.header
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="pt-28 pb-20 px-6 text-center bg-gray-100 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800"
      >
        <motion.h2 variants={itemVariants} className="text-4xl font-extrabold mb-4 text-gray-900 dark:text-white">Hi, I'm <span className="text-cyan-500 dark:text-cyan-400">Ajay Kumar</span></motion.h2>
        <motion.p variants={itemVariants} className="text-xl text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
          Final-year B.Tech Computer Science student passionate about full-stack development, cloud, and impactful software.
        </motion.p>
      </motion.header>

      {/* About Me */}
      <motion.section
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        className="px-6 py-20 bg-white dark:bg-gray-900"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.h3 variants={itemVariants} className="text-3xl font-bold mb-6 text-cyan-500 dark:text-cyan-400">About Me</motion.h3>
          <motion.p variants={itemVariants} className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            A Passionate and aspiring software developer with hands-on expertise in system design principles and data structure problem-solving techniques. With experience in TypeScript and JavaScript, and proficiency in frameworks such as React, Node.js, and Next.js, Django. I am eager to create efficient, scalable, and user-friendly solutions that address real-world problems.
          </motion.p>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="px-6 py-20 bg-gray-100 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900"
      >
        <div className="max-w-5xl mx-auto">
          <motion.h3 variants={itemVariants} className="text-3xl font-bold mb-10 text-center text-cyan-500 dark:text-cyan-400">Skills</motion.h3>
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6"
          >
            {skills.map(skill => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg hover:scale-105 transition-transform duration-300 group"
              >
                <img src={skill.icon} alt={skill.name} className="h-12 w-12 mb-2 filter dark:invert group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-700 dark:text-white text-sm font-medium group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors duration-300">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="px-6 py-20 bg-white dark:bg-gray-900"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h3 variants={itemVariants} className="text-3xl font-bold mb-10 text-center text-cyan-500 dark:text-cyan-400">Projects</motion.h3>
          <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.a
                key={i}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-xl hover:ring-2 ring-cyan-500 dark:ring-cyan-400 transition block"
              >
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{project.name}</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{project.description}</p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Timeline Section */}
      <motion.section
        id="timeline"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariants}
        className="px-6 py-20 bg-gray-100 dark:bg-gray-800"
      >
        <motion.h3 variants={itemVariants} className="text-3xl font-bold mb-10 text-center text-cyan-500 dark:text-cyan-400">Journey</motion.h3>
        <VerticalTimeline>
          {timelineData.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              date={item.date}
              dateClassName="vertical-timeline-element-date"
              iconStyle={{ background: '#06b6d4', color: '#fff' }}
              contentStyle={{ background: '#f3f4f6', color: '#1f2937', boxShadow: '0 3px 0 rgba(0,0,0,0.1)' }}
              contentArrowStyle={{ borderRight: '7px solid #f3f4f6' }}
            >
              <h4 className="font-bold text-lg text-gray-800 dark:text-white">{item.title}</h4>
              <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </motion.section>

      {/* Certifications Section */}
      <motion.section
        id="certifications"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="px-6 py-20 bg-white dark:bg-gray-900"
      >
        <div className="max-w-5xl mx-auto">
          <motion.h3 variants={itemVariants} className="text-3xl font-bold mb-10 text-center text-cyan-500 dark:text-cyan-400">Certifications</motion.h3>
          <motion.div variants={staggerContainer} className="grid sm:grid-cols-2 gap-6">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:ring-2 ring-cyan-500 dark:ring-cyan-400 transition block group cursor-pointer"
                onClick={() => handleCertClick(cert.link)} // Toggle PDF view on click
              >
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-1 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors flex justify-between items-center">
                  {cert.title}
                  {activeCert === cert.link ? (
                    <span className="text-gray-500 dark:text-gray-400 text-sm">Close PDF</span>
                  ) : (
                    <FaExternalLinkAlt className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-cyan-500 dark:group-hover:text-cyan-400" />
                  )}
                </h4>
                <p className="text-gray-700 dark:text-gray-400 text-sm mb-2">Issued by: {cert.issuer} on {cert.dateIssued}</p>

                {/* Conditional PDF viewer */}
                {activeCert === cert.link && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="mt-4 overflow-hidden"
                  >
                    <iframe
                      src={`${cert.link}#toolbar=0`} // #toolbar=0 hides the default PDF toolbar
                      width="100%"
                      height="400px" // Adjust height as needed
                      title={`${cert.title} PDF`}
                      className="border border-gray-300 dark:border-gray-600 rounded-md"
                    >
                      This browser does not support PDFs. Please download the PDF to view it:
                      <a href={cert.link} download>Download {cert.title}</a>
                    </iframe>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="px-6 py-20 bg-gray-100 dark:bg-gray-950"
      >
        <div className="max-w-2xl mx-auto text-center">
          <motion.h3 variants={itemVariants} className="text-3xl font-bold mb-6 text-cyan-500 dark:text-cyan-400">Get in Touch</motion.h3>
          <motion.p variants={itemVariants} className="text-gray-700 dark:text-gray-400 mb-8 max-w-xl mx-auto">
            Have a question, an exciting project, or just want to connect? Feel free to reach out. I'm always open to discussing new opportunities and collaborations.
          </motion.p>

          {/* Contact Form */}
          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            action="https://formspree.io/f/YOUR_FORMSPREE_HASH" // <<<<<< IMPORTANT: Replace with your Formspree endpoint
            method="POST"
            className="space-y-6 text-left p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg mb-10"
          >
            <motion.div variants={itemVariants}>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400"
              ></textarea>
            </motion.div>
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-cyan-500 dark:bg-cyan-400 text-white font-bold py-3 px-6 rounded-md hover:bg-cyan-600 dark:hover:bg-cyan-500 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 dark:focus:ring-offset-gray-950"
            >
              Send Message
            </motion.button>
          </motion.form>

          {/* Social Links / Direct Contact */}
          <motion.div variants={staggerContainer} className="flex justify-center space-x-6 text-2xl text-gray-800 dark:text-gray-200">
            <motion.a variants={itemVariants} whileHover={{ scale: 1.2 }} href="mailto:ushakoilaajay10@gmail.com" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-300" aria-label="Email me"><FaEnvelope /></motion.a>
            <motion.a variants={itemVariants} whileHover={{ scale: 1.2 }} href="tel:9704742380" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-300" aria-label="Call me"><FaPhone /></motion.a>
            <motion.a variants={itemVariants} whileHover={{ scale: 1.2 }} href="https://github.com/ajay20-s" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-300" aria-label="Visit my GitHub"><FaGithub /></motion.a>
            <motion.a variants={itemVariants} whileHover={{ scale: 1.2 }} href="https://linkedin.com/in/YOUR_LINKEDIN_USERNAME" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-300" aria-label="Visit my LinkedIn"><FaLinkedin /></motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="text-center py-4 bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-500 text-sm">
        © 2025 Ushakoyala Ajay Kumar. All rights reserved.
      </footer>
    </div>
  );
}
