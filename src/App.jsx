import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import heroImg from './assets/p-img.png'
import logo from './assets/Icon.png'
import profileImg from './assets/Skuyxz - Collection _ OpenSea.png'
import homeImg from './assets/Home 02.png'
import gitImg from './assets/Vector.png'
import skilsImg from './assets/Group 2.png'
import Projects from './assets/icon2.png'
import Certifications from './assets/Icon3.png'
import arrow1 from './assets/Arrow Up Right Contained.svg'
import arrow3 from './assets/Arrow Up Left Contained1.png'
import arrow2 from './assets/Arrow Up Left Contained.png'
import html from './assets/html5-plain.png'
import js from './assets/javascript-plain.png'
import redux from './assets/redux-original.png'
import react from './assets/react-original.png'
import css from './assets/css3-plain.png'
import tailwind from './assets/tailwindcss-plain.png'
import bootstrap from './assets/bootstrap-original.png'
import cLang from './assets/c-original.png'
import python from './assets/python-original.png'
import cppLang from './assets/cplusplus.png'
import jango from './assets/django-plain-wordmark.png'
import express from './assets/express-original-wordmark.png'
import frameMotion from './assets/framer-motion 1.png'
import database from './assets/mysql-plain-wordmark.png'
import github from './assets/github-original.png'
import git from './assets/git-plain.png'
import figma from './assets/figma-original.png'
import word from './assets/word1.png'
import finder from './assets/IdFinder1.png'
import weather from './assets/weather.png'
import trans from './assets/T-images.jfif'
import './App.css'

function App() {
  // Page Section Controller State (home, documents, certificates)
  const [activePage, setActivePage] = useState('home');

  // Contact Modal State Management
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Dynamic Uploaded Certificates State Management
  const [uploadedCertificates, setUploadedCertificates] = useState([
    { id: 1, title: 'MERN Engineering Certification', category: 'Full-Stack Development', color: 'text-blue-400', fileUrl: '' },
    { id: 2, title: 'AWS Fundamentals', category: 'Cloud Architecture', color: 'text-purple-400', fileUrl: '' }
  ]);

  const fileInputRef = useRef(null);

  // Escape Key Listener to close popup windows seamlessly
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsContactOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Connecting Form Dispatched Data:', formData);
    setIsContactOpen(false);
    setFormData({ name: '', email: '', message: '' });
  };

  // Trigger File Input Browser Window
  const onUploadBoxClick = () => {
    fileInputRef.current.click();
  };

  // Handle Certificate File Upload and Virtual Object URL Extraction
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Clean string extension for dynamic layout rendering
      const cleanTitle = file.name.split('.').slice(0, -1).join('.') || file.name;

      // Generating live preview blob address stream
      const fileViewUrl = URL.createObjectURL(file);

      const newCertificate = {
        id: Date.now(),
        title: cleanTitle,
        category: 'Newly Uploaded',
        color: 'text-emerald-400',
        fileUrl: fileViewUrl
      };

      setUploadedCertificates([newCertificate, ...uploadedCertificates]);
    }
  };

  // Animation Orchestration Variants for the Skills Bento Box section
  const bentoContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  const bentoCardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.215, 0.610, 0.355, 1.000] }
    },
  };

  return (
    <>
      {/* --- FLOATING GLASS NAVIGATION DOCK --- */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-max">
        <div className="flex items-center justify-center gap-2 sm:gap-4 px-3 sm:px-6 py-2.5 sm:py-3 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/20 shadow-lg">

          {/* Home Button */}
          <motion.button
            onClick={() => {
              setActivePage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all cursor-pointer flex-shrink-0 ${activePage === 'home' ? 'bg-white' : 'bg-white/10 hover:bg-white/20'
              }`}
          >
            <img
              src={homeImg}
              alt="Home"
              className={`w-4 h-4 sm:w-5 sm:h-5 transition-all ${activePage === 'home' ? 'brightness-0' : ''
                }`}
            />
          </motion.button>

          {/* Skills Section (Only jumps if on Home Page) */}
          <motion.button
            onClick={() => {
              setActivePage('home');
              setTimeout(() => {
                const targetY = window.innerWidth < 640 ? 2750 : 2120;
                window.scrollTo({ top: targetY, behavior: 'smooth' });
              }, 100);
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer flex-shrink-0"
          >
            <img src={skilsImg} alt="Skills" className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.button>

          {/* Projects Link Button */}
          <motion.button
            onClick={() => {
              setActivePage('home');
              setTimeout(() => {
                const targetY = window.innerWidth < 640 ? 780 : 880;
                window.scrollTo({ top: targetY, behavior: 'smooth' });
              }, 100);
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer flex-shrink-0"
          >
            <img src={Projects} alt="Projects" className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.button>

          {/* Profile Active Bubble Section */}
          <motion.a
            href="https://www.linkedin.com/in/rohit-kumar-8b3018392"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-cyan-200 flex items-center justify-center overflow-hidden cursor-pointer flex-shrink-0"
          >
            <img src={profileImg} alt="Profile" className="w-full h-full object-cover" />
          </motion.a>

          {/* Certificates Custom Page Button */}
          <motion.button
            onClick={() => {
              setActivePage('certificates');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all cursor-pointer flex-shrink-0 ${activePage === 'certificates' ? 'bg-white' : 'bg-white/10 hover:bg-white/20'
              }`}
          >
            <img src={Certifications} alt="Certifications" className={`w-4 h-4 sm:w-5 sm:h-5 ${activePage === 'certificates' ? 'brightness-0' : ''}`} />
          </motion.button>

          {/* Documents Custom Page Button */}
          <motion.button
            onClick={() => {
              setActivePage('documents');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all cursor-pointer flex-shrink-0 ${activePage === 'documents' ? 'bg-white' : 'bg-white/10 hover:bg-white/20'
              }`}
          >
            <img src={arrow1} alt="Documents Page" className={`w-4 h-4 sm:w-5 sm:h-5 ${activePage === 'documents' ? 'brightness-0' : ''}`} />
          </motion.button>

          {/* GitHub Icon Link */}
          <motion.a
            href="https://github.com/Rohit-Kumar-CS"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer flex-shrink-0"
          >
            <img src={gitImg} alt="Git" className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.a>

        </div>
      </div>


      {/* ==========================================
          PAGE CONTROLLER CONDITION RENDERERS
          ========================================== */}

      {/* 1. MAIN PORTFOLIO HOME VIEW */}
      {activePage === 'home' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          {/* --- HERO SECTION --- */}
          <section className="relative p-0 m-0 min-h-[45vh] sm:min-h-0 overflow-hidden flex items-center bg-[#a3a3a3]">
            <img src={heroImg} alt="Hero" className="w-full h-[50vh] sm:h-auto object-cover object-center opacity-95 sm:opacity-100" />

            <div className="absolute top-4 left-4 sm:top-5 sm:left-10 text-white text-sm sm:text-xl font-light drop-shadow-md z-10">
              @ Code by Ashwin
            </div>

            <div className="absolute top-5 right-10 text-right text-white text-sm max-w-xs md:max-w-md hidden md:block z-10 drop-shadow-md">
              Passionate Creative Designer and Developer, dedicated to
              crafting innovative solutions and exceptional digital experiences
              through modern technologies
            </div>

            <div className="absolute bottom-6 sm:bottom-16 md:bottom-24 lg:bottom-30 left-0 w-full overflow-hidden select-none pointer-events-none z-0">
              <h1 className="text-[10vw] sm:text-[70px] md:text-[100px] lg:text-[150px] font-semibold text-white tracking-tight leading-none text-center px-4 w-full block whitespace-normal sm:whitespace-nowrap">
                Creative Developer & Designer
              </h1>
            </div>

            <button className="absolute top-1/2 right-[10%] sm:right-[30%] -translate-y-1/2 w-14 h-14 sm:w-20 sm:h-20 flex items-center justify-center transition-transform hover:scale-105 active:scale-95 z-10">
              <img src={logo} alt="Logo" className="w-full h-full object-contain" />
            </button>
          </section>

          {/* --- STATEMENT BIOGRAPHY --- */}
          <section className="flex flex-col lg:flex-row items-start lg:items-center justify-between px-4 sm:px-10 md:px-20 py-10 sm:py-16 gap-6 sm:gap-10 bg-white">
            <div className="font-sans text-base sm:text-lg md:text-xl font-semibold max-w-2xl text-neutral-900 leading-relaxed">
              MCA student and aspiring Full-Stack Developer with a background in Computer Science. Passionate about building modern web applications, learning new technologies, and turning ideas into meaningful digital experiences.
            </div>

            <div className="font-sans lg:text-right text-xs sm:text-sm text-[#616161] max-w-md flex flex-col gap-4 self-stretch justify-between items-start lg:items-end">
              <p className="leading-relaxed">Combining technical knowledge, creativity, and continuous learning to build modern digital solutions.</p>
              <button className="font-sans font-semibold text-sm gap-3 flex items-center justify-end text-black group cursor-pointer">
                <span>More about me</span>
                <img className="w-6 h-6 sm:w-8 sm:h-8 transition-transform group-hover:translate-x-1" src={arrow2} alt="Arrow" />
              </button>
            </div>
          </section>

          {/* --- WORKS PORTFOLIO GRID SECTION --- */}
          <section className="flex flex-col items-center justify-between px-4 sm:px-10 md:px-20 py-12 sm:py-20 bg-white overflow-hidden">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full max-w-6xl mb-10 sm:mb-16 gap-4">
              <div className="font-sans text-3xl sm:text-4xl md:text-5xl font-semibold text-neutral-900 tracking-tight">
                Impressive Works
              </div>
              <div className="font-sans font-semibold text-[11px] sm:text-xs text-neutral-500 max-w-md leading-relaxed tracking-wider uppercase">
                HERE’S A SELECTION OF PROJECTS THAT SHOWCASE MY PASSION FOR DESIGN AND DEVELOPMENT, REFLECTING CREATIVITY AND INNOVATION.
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-8 sm:gap-y-14 w-full max-w-6xl">
              {/* Project Card 1 */}
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5 }} className="flex flex-col gap-4 w-full group">
                <div className="aspect-[3/2] w-full bg-neutral-100 rounded-2xl sm:rounded-3xl overflow-hidden border border-neutral-200/70 shadow-sm cursor-pointer flex items-center justify-center p-4 text-center">
                  <span className="text-neutral-400 font-sans text-xs sm:text-sm font-medium"><img src={word} alt="Word Guessing Game" className="w-full h-full object-contain rounded-lg" /></span>
                </div>
                <div className="flex items-center px-1">
                  <div className="flex items-center gap-3">
                    <a href="https://wordle-clone-gamma-snowy.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-neutral-300 flex items-center justify-center bg-white cursor-pointer hover:bg-neutral-50 shadow-sm transition-all"><img src={arrow3} alt="Explore" className="w-6 h-6 sm:w-8 sm:h-8" /></div>
                      <span className="font-sans font-medium text-base sm:text-lg text-neutral-900">Word Guessing Game</span>
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Project Card 2 */}
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5 }} className="flex flex-col gap-4 w-full group">
                <div className="aspect-[3/2] w-full bg-cyan-900/5 rounded-2xl sm:rounded-3xl overflow-hidden border border-neutral-200/70 shadow-sm cursor-pointer flex items-center justify-center p-4 text-center">
                  <span className="text-neutral-400 font-sans text-xs sm:text-sm font-medium"><img src={finder} alt="Id Finder" className="w-full h-full object-contain rounded-lg" /></span>
                </div>
                <div className="flex items-center px-1">
                  <div className="flex items-center gap-3">
                    <a href="https://webpage-using-api.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-neutral-300 flex items-center justify-center bg-white cursor-pointer hover:bg-neutral-50 shadow-sm transition-all"><img src={arrow3} alt="Explore" className="w-6 h-6 sm:w-8 sm:h-8" /></div>
                      <span className="font-sans font-medium text-base sm:text-lg text-neutral-900">Find the github account with username</span>
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Project Card 3 */}
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5 }} className="flex flex-col gap-4 w-full group">
                <div className="aspect-[3/2] w-full bg-neutral-900 rounded-2xl sm:rounded-3xl overflow-hidden border border-neutral-800 shadow-sm cursor-pointer flex items-center justify-center p-4 text-center">
                  <span className="text-neutral-500 font-sans text-xl sm:text-2xl font-bold"><img src={weather} alt="Weather App" className="w-full h-full object-contain rounded-lg" /></span>
                </div>
                <div className="flex items-center px-1">
                  <div className="flex items-center gap-3">
                    <a href="https://weather-app-using-openweathermap-ap.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-neutral-300 flex items-center justify-center bg-white cursor-pointer hover:bg-neutral-50 shadow-sm transition-all"><img src={arrow3} alt="Explore" className="w-6 h-6 sm:w-8 sm:h-8" /></div>
                      <span className="font-sans font-medium text-base sm:text-lg text-neutral-900">Weather App</span>
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Project Card 4 */}
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5 }} className="flex flex-col gap-4 w-full group">
                <div className="aspect-[3/2] w-full bg-neutral-950 rounded-2xl sm:rounded-3xl overflow-hidden border border-neutral-800 shadow-sm cursor-pointer flex items-center justify-center p-4 text-center">
                  <span className="text-neutral-600 font-sans text-xl sm:text-2xl font-bold"><img src={trans} alt="Translate App" className="w-110  object-contain rounded-lg" /></span>
                </div>
                <div className="flex items-center px-1">
                  <div className="flex items-center gap-3">
                    <a href="https://translate-app.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-neutral-300 flex items-center justify-center bg-white cursor-pointer hover:bg-neutral-50 shadow-sm transition-all"><img src={arrow3} alt="Explore" className="w-6 h-6 sm:w-8 sm:h-8" /></div>
                      <span className="font-sans font-medium text-base sm:text-lg text-neutral-900">Translate App</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            <button className="font-sans font-semibold text-base sm:text-lg text-neutral-900 mt-12 sm:mt-16 rounded-full border-2 border-neutral-900 px-6 py-3 sm:px-8 sm:py-3.5 hover:bg-neutral-900 hover:text-white transition-all cursor-pointer">
              Explore more
            </button>
          </section>

          {/* --- TECHNICAL SKILLS BENTO BOX SECTION --- */}
          <section className="flex flex-col items-center justify-between px-4 sm:px-10 md:px-20 py-14 sm:py-20 bg-black text-white">
            <h1 className="text-center font-sans text-3xl sm:text-5xl md:text-7xl font-medium tracking-tight mb-10 sm:mb-16 max-w-4xl">
              Skills that fuel my passion
            </h1>

            <div className="w-full bg-neutral-950 p-4 sm:p-6 text-white flex justify-center items-center overflow-hidden rounded-2xl sm:rounded-3xl">
              <motion.div variants={bentoContainerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[minmax(150px,_auto)]">

                <motion.div variants={bentoCardVariants} className="bg-neutral-900 border border-neutral-800 rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex flex-col justify-between lg:row-span-2">
                  <div className="flex flex-wrap gap-3 mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-neutral-800 flex items-center justify-center"><img src={html} alt="HTML5" className="w-5 sm:w-6" /></div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-neutral-800 flex items-center justify-center"><img src={js} alt="JavaScript" className="w-5 sm:w-6" /></div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-neutral-800 flex items-center justify-center"><img src={react} alt="React" className="w-5 sm:w-6" /></div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-neutral-800 flex items-center justify-center"><img src={redux} alt="Redux" className="w-5 sm:w-6" /></div>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">Front-End Development</h3>
                    <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">Building engaging and user-friendly web interfaces using modern frameworks.</p>
                  </div>
                </motion.div>

                <motion.div variants={bentoCardVariants} className="bg-neutral-900 border border-neutral-800 rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex flex-col justify-between">
                  <div className="flex gap-3 mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-neutral-800 flex items-center justify-center"><img src={css} alt="CSS3" className="w-5 sm:w-6" /></div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-neutral-800 flex items-center justify-center"><img src={tailwind} alt="Tailwind" className="w-5 sm:w-6" /></div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-neutral-800 flex items-center justify-center"><img src={bootstrap} alt="Bootstrap" className="w-5 sm:w-6" /></div>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">Styling & Design</h3>
                    <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">Crafting visually appealing and responsive designs with advanced styling tools.</p>
                  </div>
                </motion.div>

                <motion.div variants={bentoCardVariants} className="bg-neutral-900 border border-neutral-800 rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex flex-col justify-between">
                  <div className="flex gap-3 mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-neutral-800 flex items-center justify-center"><img src={python} alt="Python" className="w-5 sm:w-6" /></div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-neutral-800 flex items-center justify-center"><img src={cppLang} alt="C++" className="w-5 sm:w-6" /></div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-neutral-800 flex items-center justify-center"><img src={cLang} alt="C" className="w-5 sm:w-6" /></div>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">Programming Languages</h3>
                    <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">Proficient in problem-solving and writing performance-optimized structures.</p>
                  </div>
                </motion.div>

                <motion.div variants={bentoCardVariants} className="bg-neutral-900 border border-neutral-800 rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex flex-col justify-between">
                  <div className="flex gap-3 mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-neutral-800 flex items-center justify-center"><img src={frameMotion} alt="Framer Motion" className="w-5 sm:w-6" /></div>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">Web Animations</h3>
                    <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">Creating seamless, elegant animations and micro-interactions.</p>
                  </div>
                </motion.div>

                <motion.div variants={bentoCardVariants} className="bg-neutral-900 border border-neutral-800 rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex flex-col justify-between">
                  <div className="flex gap-3 mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-neutral-800 flex items-center justify-center"><img src={database} alt="Database" className="w-5 sm:w-6" /></div>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">Database Management</h3>
                    <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">Designing schemas and queries for secure, fast data operations.</p>
                  </div>
                </motion.div>

                <motion.div variants={bentoCardVariants} className="bg-neutral-900 border border-neutral-800 rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex flex-col justify-between lg:row-span-2">
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                    <span className="px-2.5 py-1 bg-neutral-800 rounded-full text-[11px] sm:text-xs text-neutral-300">Operating Systems</span>
                    <span className="px-2.5 py-1 bg-neutral-800 rounded-full text-[11px] sm:text-xs text-neutral-300">Computer Networks</span>
                    <span className="px-2.5 py-1 bg-neutral-800 rounded-full text-[11px] sm:text-xs text-neutral-300">DSA</span>
                    <span className="px-2.5 py-1 bg-neutral-800 rounded-full text-[11px] sm:text-xs text-neutral-300">OOPs</span>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">Core CS Concepts</h3>
                    <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">Strong fundamental baseline in backend architecture and problem analysis.</p>
                  </div>
                </motion.div>

                <motion.div variants={bentoCardVariants} className="bg-neutral-900 border border-neutral-800 rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex flex-col justify-between">
                  <div className="flex gap-3 mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-neutral-800 flex items-center justify-center"><img src={github} alt="GitHub" className="w-5 sm:w-6" /></div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-neutral-800 flex items-center justify-center"><img src={git} alt="Git" className="w-5 sm:w-6" /></div>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">Version Control</h3>
                    <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">Managing secure production codebases and pipeline deployment collaboration.</p>
                  </div>
                </motion.div>

                <motion.div variants={bentoCardVariants} className="bg-neutral-900 border border-neutral-800 rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex flex-col justify-between">
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                    <span className="px-2.5 py-1 bg-neutral-800 rounded-full text-[11px] sm:text-xs text-neutral-300">Leadership</span>
                    <span className="px-2.5 py-1 bg-neutral-800 rounded-full text-[11px] sm:text-xs text-neutral-300">Problem Solving</span>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">Personal Growth</h3>
                    <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">Committed to continuous technical adaptation and agile teamwork workflows.</p>
                  </div>
                </motion.div>

                <motion.div variants={bentoCardVariants} className="bg-neutral-900 border border-neutral-800 rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex flex-col justify-between">
                  <div className="flex gap-3 mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-neutral-800 flex items-center justify-center"><img src={figma} alt="Figma" className="w-5 sm:w-6" /></div>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">UI/UX Design</h3>
                    <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">Prototyping responsive high-fidelity digital solutions cleanly.</p>
                  </div>
                </motion.div>

              </motion.div>
            </div>
          </section>
        </motion.div>
      )}

      {/* 2. CUSTOM UPLOADING DOCUMENTS VIEW */}
      {activePage === 'documents' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="min-h-screen bg-neutral-950 text-white pt-24 sm:pt-28 px-4 sm:px-10 md:px-20 flex flex-col items-center"
        >
          <div className="w-full max-w-4xl mt-6 sm:mt-10">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">Upload Documents</h1>
            <p className="text-neutral-400 text-sm sm:text-base max-w-xl mb-8 sm:mb-12">
              Securely host and keep track of your core academic, identity, or engineering project documents.
            </p>

            {/* Drag & Drop Glassmorphism Frame Box */}
            <div className="w-full border-2 border-dashed border-neutral-800 bg-neutral-900/40 rounded-2xl sm:rounded-3xl p-8 sm:p-16 flex flex-col items-center justify-center text-center group hover:border-blue-500/50 transition-all cursor-pointer">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-xl sm:text-2xl text-neutral-400">↑</span>
              </div>
              <p className="text-neutral-200 font-semibold text-base sm:text-lg">Click to select files or drag them here</p>
              <span className="text-neutral-500 text-xs mt-2 block">Supports PDF, DOCX, PNG up to 15MB</span>
            </div>
          </div>
        </motion.div>
      )}

      {/* 3. CUSTOM CERTIFICATES DASHBOARD VIEW */}
      {activePage === 'certificates' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="min-h-screen bg-neutral-950 text-white pt-24 sm:pt-28 px-4 sm:px-10 md:px-20 flex flex-col items-center"
        >
          <div className="w-full max-w-4xl mt-6 sm:mt-10">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">Certifications Showcase</h1>
            <p className="text-neutral-400 text-sm sm:text-base max-w-xl mb-8 sm:mb-12">
              A curated timeline gallery of my technical credentials, academic achievements, and global bootcamps. Click the dashed block below to upload files.
            </p>

            {/* Hidden Input File Element */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".pdf, image/*"
              className="hidden"
            />

            {/* Interactive Drag/Click Upload Container Block */}
            <div
              onClick={onUploadBoxClick}
              className="w-full border-2 border-dashed border-neutral-800 bg-neutral-900/40 rounded-2xl sm:rounded-3xl p-8 sm:p-12 flex flex-col items-center justify-center text-center group hover:border-blue-500/50 transition-all cursor-pointer mb-8 sm:mb-12"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-lg sm:text-xl text-neutral-400">＋</span>
              </div>
              <p className="text-neutral-200 font-semibold text-sm sm:text-base">Click to upload your Certificate</p>
              <span className="text-neutral-500 text-xs mt-1 block">Supports PDF or Image formats</span>
            </div>

            {/* Empty Showcase placeholder structure */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full mb-24">
              <AnimatePresence>
                {uploadedCertificates.map((cert) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-5 sm:p-6 h-40 sm:h-48 flex flex-col justify-between group hover:border-neutral-700 transition-all relative overflow-hidden"
                  >
                    {/* View Action Trigger Button Link */}
                    {cert.fileUrl ? (
                      <a
                        href={cert.fileUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-neutral-200 text-xs font-sans px-3 py-1.5 rounded-xl transition-all opacity-100 sm:opacity-0 sm:group-hover:opacity-100 backdrop-blur-md"
                      >
                        View PDF ↗
                      </a>
                    ) : (
                      <span className="absolute top-4 right-4 text-neutral-600 text-xs font-mono select-none">No Preview</span>
                    )}

                    <div className="mt-auto">
                      <span className={`font-mono text-[10px] sm:text-xs uppercase tracking-widest mb-1 block ${cert.color}`}>{cert.category}</span>
                      <h4 className="text-base sm:text-lg font-bold text-neutral-100 group-hover:text-white transition-colors">{cert.title}</h4>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}


      {/* --- GLOBAL CONNECT FOOTER (Stays visible across the app) --- */}
      <footer className="relative w-full bg-white px-4 sm:px-10 md:px-20 py-12 sm:py-20 border-t border-neutral-100 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-start justify-between gap-10 md:gap-6">
          <div className="flex flex-col">
            <span className="font-sans text-neutral-400 text-sm sm:text-base font-medium mb-2 sm:mb-3 tracking-wide">That's all for now.</span>
            <h2 className="font-sans text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight text-neutral-900 leading-[1.15] md:leading-[1.1]">Got a project in mind?<br />Let's talk</h2>
          </div>

          <div className="relative flex items-center justify-start md:justify-center pt-2 md:pt-12">
            <div className="absolute right-[-100vw] left-[-100vw] h-[1px] bg-neutral-200 top-1/2 -translate-y-1/2 pointer-events-none z-0 hidden md:block" />
            <motion.button
              onClick={() => setIsContactOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="relative z-10 w-32 h-32 sm:w-44 sm:h-44 rounded-full bg-[#405cf5] hover:bg-blue-700 text-white font-sans font-medium text-sm sm:text-base shadow-xl flex items-center justify-center transition-colors duration-300 focus:outline-none cursor-pointer"
            >
              Get in touch
            </motion.button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-12 sm:mt-20 pt-6 sm:pt-8 border-t border-neutral-200/60 flex flex-col sm:flex-row items-start gap-6 sm:gap-24 text-xs sm:text-sm font-sans">
          <div className="flex flex-col gap-1">
            <span className="text-neutral-400 font-medium tracking-wide uppercase text-[10px] sm:text-xs">Email</span>
            <a href="mailto:its.ashwin.23@gmail.com" className="text-neutral-800 font-semibold text-sm sm:text-base hover:text-blue-600 transition-colors">rk.rohitkumar.tech@gmail.com</a>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-neutral-400 font-medium tracking-wide uppercase text-[10px] sm:text-xs">Phone</span>
            <a href="tel:+918248669086" className="text-neutral-800 font-semibold text-sm sm:text-base hover:text-blue-600 transition-colors tracking-wide">(+91) 8392822055</a>
          </div>
        </div>

        {/* --- POPUP CONNECT WINDOW MODAL CONTAINER --- */}
        <AnimatePresence>
          {isContactOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsContactOpen(false)} className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
              <motion.div initial={{ opacity: 0, scale: 0.92, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.92, y: 20 }} transition={{ type: 'spring', duration: 0.45 }} className="relative w-full max-w-md bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border border-neutral-100 z-10 flex flex-col max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-5 sm:mb-6">
                  <div>
                    <h3 className="font-sans text-xl sm:text-2xl font-bold text-neutral-900">Let's Connect</h3>
                    <p className="text-xs text-neutral-400 mt-0.5">Drop your details to get a conversation started.</p>
                  </div>
                  <button onClick={() => setIsContactOpen(false)} className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200/80 text-neutral-500 flex items-center justify-center transition-colors cursor-pointer">✕</button>
                </div>

                <form onSubmit={handleFormSubmit} className="flex flex-col gap-3 sm:gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] sm:text-xs font-semibold text-neutral-600 uppercase tracking-wide px-1">Your Name</label>
                    <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Enter your full name" className="w-full rounded-xl sm:rounded-2xl border border-neutral-200 bg-neutral-50/50 px-3.5 py-2.5 sm:px-4 sm:py-3.5 font-sans text-sm text-neutral-900 placeholder-neutral-400 focus:border-blue-500 focus:bg-white focus:outline-none transition-all" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] sm:text-xs font-semibold text-neutral-600 uppercase tracking-wide px-1">Email Address</label>
                    <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="name@company.com" className="w-full rounded-xl sm:rounded-2xl border border-neutral-200 bg-neutral-50/50 px-3.5 py-2.5 sm:px-4 sm:py-3.5 font-sans text-sm text-neutral-900 placeholder-neutral-400 focus:border-blue-500 focus:bg-white focus:outline-none transition-all" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] sm:text-xs font-semibold text-neutral-600 uppercase tracking-wide px-1">Message</label>
                    <textarea required rows="3" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tell me a bit about your awesome project goals..." className="w-full rounded-xl sm:rounded-2xl border border-neutral-200 bg-neutral-50/50 px-3.5 py-2.5 sm:px-4 sm:py-3.5 font-sans text-sm text-neutral-900 placeholder-neutral-400 focus:border-blue-500 focus:bg-white focus:outline-none transition-all resize-none" />
                  </div>
                  <motion.button whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} type="submit" className="w-full mt-2 rounded-xl sm:rounded-2xl bg-neutral-900 hover:bg-neutral-800 text-white py-3 sm:py-4 font-sans font-semibold text-sm transition-colors shadow-lg cursor-pointer">Send Message</motion.button>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </footer>
    </>
  )
}

export default App