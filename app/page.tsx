'use client';
import React, { useEffect, useState, useRef } from 'react';
import Tilt from 'react-parallax-tilt';
import { Cpu, ChevronDown, Linkedin, Github, Mail } from 'lucide-react';

const userData = {
  name: 'Suresh Maheshwari',
  title: 'AI Enthusiast | Merging Code, Data & Creativity',
  tagline: 'Specializing in Agentic AI, Intelligent System Design, and Data Analytics.',
  about:
    'Skilled in Machine Learning, Deep Learning, Web Development using Next.js, TypeScript, Tailwind CSS. Passionate about Agentic AI and Optimization Algorithms (Firefly, PSO, Ant Colony).',
  picture: '/profile1.png', // Add your picture here
  social: {
    linkedin: 'https://www.linkedin.com/in/suresh-maheshwari-93540b318',
    github: 'https://github.com/maheshwarisuresh220',
    email: 'mailto:maheshwarisuresh220@gmail.com',
  },
  skills: [
    { name: 'Python', level: 95 },
    { name: 'Machine Learning', level: 90 },
    { name: 'Deep Learning', level: 60 },
    { name: 'Data Analytics', level: 78 },
    { name: 'Next.js', level: 95 },
    { name: 'TypeScript', level: 85 },
    { name: 'Tailwind CSS', level: 90 },
  ],
  experience: [
    {
      role: 'Machine Learning Intern',
      company: 'Elevvo Tech',
      period: 'Aug 2025 - Sep 2025',
      description: 'Worked on ML workflows, preprocessing, and AI model application.',
    },
    {
      role: 'Student - GenAI, Web3 & Metaverse',
      company: 'Governor Sindh Initiative',
      period: 'Feb 2024 - Present',
      description:
        'Focused on Generative AI, Web3, and Metaverse development. Exploring future tech applications.',
    },
  ],
  projects: [
    {
      title: 'Loan Approval Prediction System',
      tech: 'ML Algorithms + Web App',
      desc: 'Predicting the likelihood of loan approval using various ML techniques.',
      link: 'https://github.com/maheshwarisuresh220/loan_approval',
    },
    {
      title: 'Nike Clone Website',
      tech: 'Next.js + TailwindCSS',
      desc: 'Responsive e-commerce website clone with modern UI/UX.',
      link: 'https://github.com/maheshwarisuresh220/nikeclone',
    },
    {
      title: 'Parkinson’s Disease Analysis',
      tech: 'CNN + LSTM',
      desc: 'Hybrid deep learning model for analyzing Parkinson’s datasets.',
      link: 'https://github.com/maheshwarisuresh220/parkinson_disease',
    },
    {
      title: 'Movie Recommendation System',
      tech: 'ML + Consine Similarity + Web App',
      desc: 'Movie Recommendation System using ML techniques and cosine similarity.',
      link: 'https://github.com/maheshwarisuresh220/movie_recommendation_system',
    }
  ],
  certificates: [
    {
      title: 'Developing AI Applications',
      issuer: 'DataCamp',
      date: 'Nov 2025',
      skills: ['RAG', 'AI Agents', 'Data Privacy', 'LangChain'],
      logo: '/logos/datacamplogo.png',
      credentialId: '#753,941',
    },
    {
      title: 'Feature Engineering',
      issuer: 'Kaggle',
      date: 'Nov 2025',
      skills: ['Feature Selection', 'Data Preprocessing', 'Model Optimization'],
      logo: '/logos/kaggle.png',
      credentialId: '',
    },
    {
      title: 'AI Ethics',
      issuer: 'DataCamp',
      date: 'Oct 2025',
      skills: ['Ethical AI', 'Bias Mitigation', 'Responsible AI'],
      logo: '/logos/datacamplogo.png',
      credentialId: '#43,564,909',
    },
    {
      title: 'Natural Language Processing in Python',
      issuer: 'DataCamp',
      date: 'Oct 2025',
      skills: ['Tokenization', 'Regex', 'spaCy', 'Sentiment Analysis'],
      logo: '/logos/datacamplogo.png',
      credentialId: '#733,539',
    },
    {
      title: 'Working with OpenAI API',
      issuer: 'DataCamp',
      date: 'Oct 2025',
      skills: ['Prompting', 'API Calls', 'RAG'],
      logo: '/logos/datacamplogo.png',
      credentialId: '#43,273,917',
    },
    {
      title: 'Accenture North America - Data Analytics Job Simulation',
      issuer: 'Forage',
      date: 'Aug 2024',
      skills: ['Data Analysis', 'Visualization'],
      logo: '/logos/accenture.jpeg',
      credentialId: '6JA6u2TPjh69YgYYd',
    },
  ],
};

// simple hook for fade-in on scroll
function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, ...options }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return { ref, inView };
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  // one hook per section
  const homeView = useInView();
  const aboutView = useInView();
  const skillsView = useInView();
  const certsView = useInView();
  const expView = useInView();
  const projectsView = useInView();
  const contactView = useInView();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 font-sans selection:bg-[#3b82f6] selection:text-white overflow-x-hidden relative">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0a0a0a]/70 backdrop-blur-md border-b border-[#ffffff10] py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div
            className="text-2xl font-bold tracking-widest text-[#3b82f6] cursor-pointer hover:text-white transition-colors"
            onClick={() => scrollTo('home')}
          >
            SURESH<span className="text-white">.AI</span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm tracking-widest uppercase">
            {['About', 'Skills', 'Experience', 'Projects', 'Certificates', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="hover:text-[#3b82f6] transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#3b82f6] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        ref={homeView.ref as any}
        className={`relative min-h-screen flex items-center pt-20 z-10 transition-all duration-700 ${
          homeView.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          {/* Text */}
          <div className="md:w-[60%]">
            <p className="text-[#3b82f6] tracking-[0.2em] uppercase mb-4 text-sm">Karachi, Pakistan</p>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 tracking-tight">
              {userData.name.split(' ')[0]}{' '}
              <span className="text-white">{userData.name.split(' ')[1]}</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-400 font-light mb-8">{userData.title}</h2>
            <p className="text-lg text-gray-400 max-w-xl leading-relaxed mb-10 border-l-2 border-[#3b82f6] pl-6">
              {userData.tagline}
            </p>
            <div className="flex gap-4">
  <button
    onClick={() => scrollTo('contact')}
    className="px-8 py-3 bg-[#3b82f6] text-white font-semibold tracking-widest hover:bg-white hover:text-[#3b82f6] transition-colors duration-300"
  >
    CONNECT
  </button>
  <button
    onClick={() => scrollTo('projects')}
    className="px-8 py-3 border border-gray-600 text-gray-300 tracking-widest hover:border-[#3b82f6] hover:text-[#3b82f6] transition-all duration-300"
  >
    VIEW EXPERTISE
  </button>
  <a
    href="/suresh_maheshwari_cv.pdf" // Add your CV file in the public folder
    download
    className="px-8 py-3 border border-gray-600 text-gray-300 tracking-widest hover:border-[#3b82f6] hover:text-[#3b82f6] transition-all duration-300"
  >
    DOWNLOAD CV
  </a>
</div>

          </div>

          {/* Picture + Tilt (keep chip here) */}
          <div className="md:w-[40%] flex flex-col items-center gap-6">
            <Tilt
              tiltMaxAngleX={12}
              tiltMaxAngleY={12}
              glareEnable
              glareMaxOpacity={0.25}
              className="relative w-64 h-64 md:w-80 md:h-80"
            >
              <div className="absolute inset-0 border border-[#3b82f6] rounded-full opacity-20 animate-spin-slow"></div>
              <div className="absolute inset-4 border border-[#3b82f6] rounded-full opacity-40 animate-reverse-spin"></div>
              <div className="absolute inset-8 border border-[#3b82f6] rounded-full opacity-60 animate-spin-slow"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Cpu size={64} className="text-[#3b82f6]" />
              </div>
            </Tilt>
          </div>
        </div>
        <div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={() => scrollTo('about')}
        >
          <ChevronDown className="text-gray-400" />
        </div>
      </section>

      {/* About Section with image */}
      <section
        id="about"
        ref={aboutView.ref as any}
        className={`min-h-screen flex flex-col md:flex-row justify-center items-center gap-10 py-32 px-6 container mx-auto transition-all duration-700 ${
          aboutView.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-[#3b82f6] mb-6">About Me</h2>
          <p className="text-gray-300 max-w-2xl leading-relaxed">{userData.about}</p>
        </div>
        <div className="md:w-1/2 flex justify-center">
  <div className="ml-60 w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-[#3b82f6]">
    <img
      src={userData.picture}
      alt="Suresh"
      className="w-full h-full object-cover"
    />
  </div>
</div>



      </section>

      {/* Skills Section */}
      <section
        id="skills"
        ref={skillsView.ref as any}
        className={`min-h-screen py-32 px-6 container mx-auto transition-all duration-700 ${
          skillsView.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-4xl font-bold text-[#3b82f6] mb-12">Skills & Expertise</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {userData.skills.map((skill, idx) => (
            <div
              key={idx}
              className="p-4 border border-gray-700 rounded-lg group hover:border-[#3b82f6] transition-all duration-300"
            >
              <span className="text-gray-300">{skill.name}</span>
              <div className="h-3 mt-2 bg-gray-700 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div
                  className="h-3 bg-[#3b82f6] rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certificates Section */}
      <section
        id="certificates"
        ref={certsView.ref as any}
        className={`min-h-screen py-32 px-6 container mx-auto transition-all duration-700 ${
          certsView.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-4xl font-bold text-[#3b82f6] mb-12">Certificates & Licenses</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {userData.certificates.map((cert, idx) => (
            <div
              key={idx}
              className="p-6 border border-gray-700 rounded-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <img src={cert.logo} alt={cert.issuer} className="w-10 h-10 mr-3" />
                <h3 className="text-xl font-semibold">{cert.title}</h3>
              </div>
              <p className="text-gray-400 text-sm mb-2">
                {cert.issuer} • {cert.date} {cert.credentialId && `| ${cert.credentialId}`}
              </p>
              <p className="text-gray-300 text-sm">Skills: {cert.skills.join(', ')}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        ref={expView.ref as any}
        className={`min-h-screen flex flex-col justify-center items-start py-32 px-6 container mx-auto transition-all duration-700 ${
          expView.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-4xl font-bold text-[#3b82f6] mb-6">Experience</h2>
        <div className="space-y-6">
          {userData.experience.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 border-l-2 border-[#3b82f6] hover:shadow-lg transition-shadow rounded-lg"
            >
              <h3 className="text-2xl font-semibold">{exp.role}</h3>
              <p className="text-gray-400">
                {exp.company} • {exp.period}
              </p>
              <p className="text-gray-300 mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        ref={projectsView.ref as any}
        className={`min-h-screen flex flex-col justify-center items-start py-32 px-6 container mx-auto transition-all duration-700 ${
          projectsView.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-4xl font-bold text-[#3b82f6] mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {userData.projects.map((proj, idx) => (
            <div
              key={idx}
              className="p-6 border border-gray-700 rounded-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-1">{proj.title}</h3>
              <p className="text-gray-400 mb-2">{proj.tech}</p>
              <p className="text-gray-300">{proj.desc}</p>
              {proj.link && (
                <a href={proj.link} className="text-[#3b82f6] mt-2 inline-block">
                  View Project
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section centered */}
      <section
        id="contact"
        ref={contactView.ref as any}
        className={`min-h-screen flex flex-col justify-center items-center py-32 px-6 container mx-auto transition-all duration-700 ${
          contactView.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-4xl font-bold text-[#3b82f6] mb-6 text-center">Contact</h2>
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
          <a
            href={userData.social.email}
            className="flex items-center gap-2 text-[#3b82f6] hover:text-white transition-colors"
          >
            <Mail size={24} /> Email
          </a>
          <a
            href={userData.social.linkedin}
            className="flex items-center gap-2 text-[#3b82f6] hover:text-white transition-colors"
          >
            <Linkedin size={24} /> LinkedIn
          </a>
          <a
            href={userData.social.github}
            className="flex items-center gap-2 text-[#3b82f6] hover:text-white transition-colors"
          >
            <Github size={24} /> GitHub
          </a>
        </div>
      </section>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes reverse-spin {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-reverse-spin {
          animation: reverse-spin 15s linear infinite;
        }
      `}</style>
    </div>
  );
}
