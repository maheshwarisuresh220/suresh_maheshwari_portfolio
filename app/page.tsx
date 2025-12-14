'use client';
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ArrowUpRight, 
  Code2, 
  Download,
  MousePointer2,
  GraduationCap,
  FlaskConical,
  Briefcase,
  Menu,
  X
} from 'lucide-react';

// --- CV DATA ---
const userData = {
  name: 'Suresh Maheshwari',
  role: 'AI Native Engineer',
  tagline: 'Turning ideas into functional digital solutions.',
  subtext: 'Specializing in AI programming, machine learning, and agentic workflows.',
  about: 'I am a curious and hands-on developer who loves turning ideas into functional digital solutions. My work blends web development, AI programming, and machine learning, allowing me to create everything from interactive websites to AI-powered mental health stage predictors.',
  picture: '/profile1.png', 
  social: {
    linkedin: 'https://www.linkedin.com/in/suresh-maheshwari-93540b318',
    github: 'https://github.com/maheshwarisuresh220',
    email: 'mailto:maheshwarisuresh220@gmail.com',
  },
  skills: [
    { name: 'Python', level: 95 },
    { name: 'Machine Learning', level: 90 },
    { name: 'Agentic AI', level: 85 },
    { name: 'Next.js', level: 95 },
    { name: 'Data Analytics', level: 80 },
    { name: 'Deep Learning', level: 60 },
    { name: 'Web Development', level: 90 },
  ],
  experience: [
    {
      role: 'Machine Learning Intern',
      company: 'Elevvo Tech',
      period: 'Aug 2025 - Sep 2025',
      description: 'Designed and deployed ML pipelines involving data preprocessing, feature engineering, and model evaluation. Applied explainability techniques like SHAP and AUC-ROC.',
      tech: ['TensorFlow', 'Scikit-learn', 'Pandas']
    },
    {
      role: 'Freelancer',
      company: 'Self-Employed',
      period: 'Mar 2023 - Present',
      description: 'Design and develop tailored web applications, AI-powered solutions, and data analytics tools. Delivered Next.js websites and interactive dashboards.',
      tech: ['Next.js', 'React', 'AI Integration']
    },
  ],
  education: [
    {
        degree: "BS in Artificial Intelligence",
        school: "Sindh Madressatul Islam University",
        year: "Feb 2023 - Feb 2027",
        location: "Karachi"
    },
    {
        degree: "DAE in CIT",
        school: "Pakistan Navy Polytechnic Institute",
        year: "Oct 2018 - Mar 2021",
        location: "Karachi"
    }
  ],
  research: [
    {
        title: "Bio-Inspired Approach to Early Mental Health Diagnosis",
        status: "Under Consideration",
        desc: "Research on predicting mental health stages using the Firefly Algorithm."
    },
    {
        title: "Voice-based Parkinson's Disease Detection",
        status: "Research Paper",
        desc: "Hybrid approach using LSTM and CNN models to detect Parkinson's via voice data."
    }
  ],
  projects: [
    {
      title: 'Loan Approval Prediction',
      tech: 'ML Algorithms + Web App',
      desc: 'Predicting the likelihood of loan approval using various ML techniques.',
      link: 'https://github.com/maheshwarisuresh220/loan_approval',
    },
    {
      title: 'Nike Clone Website',
      tech: 'Next.js + TailwindCSS',
      desc: 'Responsive e-commerce website clone created for Governor\'s House Hackathon.',
      link: 'https://nikeclone-website.vercel.app/',
    },
    {
      title: 'Parkinson’s Disease Analysis',
      tech: 'CNN + LSTM',
      desc: 'Hybrid deep learning model for analyzing Parkinson’s datasets.',
      link: 'https://github.com/maheshwarisuresh220/parkinson_disease',
    },
    {
      title: 'Movie Recommendation',
      tech: 'ML + Cosine Similarity',
      desc: 'System using ML techniques and cosine similarity for accurate suggestions.',
      link: 'https://github.com/maheshwarisuresh220/movie_recommendation_system',
    }
  ],
};

// --- UTILS ---
function SpotlightCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`relative border border-white/10 bg-[#0a0a0a] overflow-hidden group ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.08),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
}

// --- COMPONENTS ---

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/5 py-3' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center text-white">
        <div 
          className="text-lg md:text-xl font-bold tracking-tighter cursor-pointer flex items-center gap-2" 
          onClick={() => scrollTo('hero')}
        >
          <div className="w-8 h-8 bg-white text-black rounded-lg flex items-center justify-center font-bold">S</div>
          <span className="hidden sm:inline">SURESH.AI</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
            {['Work', 'Skills', 'Experience'].map((item) => (
                <button 
                  key={item} 
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="text-xs font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-widest"
                >
                    {item}
                </button>
            ))}
            <a 
              href={userData.social.email}
              className="text-xs font-bold bg-white text-black border border-white px-5 py-2.5 rounded-full hover:bg-transparent hover:text-white transition-all"
            >
              HIRE ME
            </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
           {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black border-b border-white/10 p-4 flex flex-col gap-4 shadow-2xl">
            {['Work', 'Skills', 'Experience'].map((item) => (
                <button 
                  key={item} 
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="text-sm font-medium text-gray-200 py-2 border-b border-white/5 text-left"
                >
                    {item}
                </button>
            ))}
             <a 
              href={userData.social.email}
              className="text-center text-sm font-bold bg-white text-black py-3 rounded-lg"
            >
              HIRE ME
            </a>
        </div>
      )}
    </motion.nav>
  );
};

const HeroBento = () => {
  const { scrollY } = useScroll();
  
  const yText = useTransform(scrollY, [0, 300], [0, 30]); 
  const yPic = useTransform(scrollY, [0, 300], [0, -20]);
  const ySocial = useTransform(scrollY, [0, 300], [0, 10]);

  return (
    <section id="hero" className="min-h-screen pt-28 pb-12 px-4 container mx-auto flex flex-col justify-center relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:grid-rows-2">
        
        {/* 1. Large Intro Text Box */}
        <motion.div 
            style={{ y: yText }}
            className="md:col-span-2 md:row-span-2 rounded-[2rem] relative z-10"
        >
            <SpotlightCard className="rounded-[2rem] p-6 md:p-12 h-full flex flex-col justify-between border-white/10">
                <div className="absolute top-0 right-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-blue-600/10 rounded-full blur-[80px] md:blur-[120px] -z-10 pointer-events-none"></div>
                
                <div className="z-10 mt-4 md:mt-0">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-xs font-medium text-blue-300 mb-6 md:mb-8">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        Open to Work
                    </div>

                    <h1 className="text-[12vw] md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter text-white mb-6 leading-[0.9]">
                        AI NATIVE <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600">
                            ENGINEER.
                        </span>
                    </h1>
                    
                    <p className="text-sm md:text-lg text-gray-400 max-w-lg leading-relaxed font-light">
                        Hi, I'm <span className="text-white font-semibold">Suresh</span>. 
                        {userData.tagline} {userData.subtext}
                    </p>
                </div>

                <div className="flex flex-wrap gap-3 mt-8 md:mt-10 relative z-20">
                    <a href="#work" className="px-6 py-3 md:px-8 md:py-3 bg-white text-black rounded-full font-bold text-xs md:text-sm hover:scale-105 transition-transform">
                        View Projects
                    </a>
                    <a href="/suresh_maheshwari_cv.pdf" download className="px-6 py-3 md:px-8 md:py-3 bg-transparent border border-white/20 text-white rounded-full text-xs md:text-sm hover:bg-white/5 transition-colors flex items-center gap-2">
                        <Download size={16}/> Resume
                    </a>
                </div>
            </SpotlightCard>
        </motion.div>

        {/* 2. Profile Picture Box - FIXED FOR MOBILE CROPPING */}
        <motion.div 
            style={{ y: yPic }}
            className="md:col-span-1 md:row-span-2 rounded-[2rem] relative overflow-hidden aspect-[4/5] md:aspect-auto md:h-full"
        >
             <SpotlightCard className="rounded-[2rem] h-full border-white/10">
                <img 
                    src={userData.picture} 
                    alt="Suresh Profile" 
                    className="absolute inset-0 w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale hover:grayscale-0"
                />
                
                <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                    <div className="backdrop-blur-md bg-white/10 border border-white/10 p-3 md:p-4 rounded-2xl flex items-center gap-4">
                        <div className="bg-white p-2 rounded-full text-black">
                            <MousePointer2 size={16} />
                        </div>
                        <div>
                            <p className="text-white text-xs font-bold leading-none">Agentic AI</p>
                            <p className="text-gray-300 text-[10px] leading-none mt-1">Specialist</p>
                        </div>
                    </div>
                </div>
            </SpotlightCard>
        </motion.div>

        {/* 3. Social Strip */}
        <motion.div 
            style={{ y: ySocial }}
            className="md:col-span-3 rounded-[2rem] mt-2 md:mt-0"
        >
             <SpotlightCard className="rounded-[2rem] p-6 flex flex-col md:flex-row justify-between items-center gap-4 border-white/10">
                <div className="flex items-center gap-6 md:gap-8 w-full md:w-auto justify-center md:justify-start">
                    <a href={userData.social.github} target="_blank" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
                    <Github size={20} className="group-hover:-translate-y-1 transition-transform"/> <span className="hidden sm:inline">GitHub</span>
                    </a>
                    <a href={userData.social.linkedin} target="_blank" className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors group">
                    <Linkedin size={20} className="group-hover:-translate-y-1 transition-transform"/> <span className="hidden sm:inline">LinkedIn</span>
                    </a>
                    <a href={userData.social.email} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
                    <Mail size={20} className="group-hover:-translate-y-1 transition-transform"/> <span className="hidden sm:inline">Email</span>
                    </a>
                </div>
                
                <div className="flex items-center gap-4 text-xs tracking-widest text-gray-500 font-mono uppercase">
                    <span>Suresh.AI</span>
                    <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                    <span>2025</span>
                </div>
             </SpotlightCard>
        </motion.div>

      </div>
    </section>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-32 px-4 container mx-auto">
        <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="mb-12 md:mb-16 md:w-2/3"
        >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Technical Arsenal</h2>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                My weapon of choice is Python, but I am fluent in the full stack of modern AI & Web technologies. 
            </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-12 md:gap-x-20 gap-y-8 md:gap-y-10">
            {userData.skills.map((skill, idx) => (
                <div key={idx} className="group">
                    <div className="flex justify-between items-end mb-3">
                        <span className="text-lg md:text-xl font-medium text-gray-200 group-hover:text-blue-400 transition-colors">{skill.name}</span>
                        <span className="text-sm font-mono text-gray-500">{skill.level}%</span>
                    </div>
                    {/* Animated Progress Bar */}
                    <div className="h-1.5 w-full bg-[#222] rounded-full overflow-hidden">
                        <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                            className="h-full bg-gradient-to-r from-blue-600 to-indigo-400 rounded-full relative"
                        >
                             <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-blue-400 rounded-full blur-[4px]"></div>
                        </motion.div>
                    </div>
                </div>
            ))}
        </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="work" className="py-20 md:py-32 px-4 container mx-auto">
      <div className="flex items-baseline justify-between mb-12 md:mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white">Selected Works</h2>
        <a href={userData.social.github} target="_blank" className="text-xs md:text-sm text-gray-500 hover:text-white transition-colors flex items-center gap-2">
            GitHub <ArrowUpRight size={14}/>
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {userData.projects.map((project, idx) => (
          <motion.a
            key={idx}
            href={project.link}
            target="_blank"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="block h-full"
          >
             <SpotlightCard className="rounded-[2rem] p-6 md:p-10 h-full hover:border-white/20 transition-colors flex flex-col">
                <div className="flex justify-between items-start mb-6 md:mb-8">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                        <Code2 size={24} className="text-blue-400" />
                    </div>
                    <ArrowUpRight size={24} className="text-gray-600 group-hover:text-white transition-colors" />
                </div>
                
                <div className="flex-grow">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                    <p className="text-gray-400 mb-6 text-sm md:text-base line-clamp-3">{project.desc}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-auto pt-4">
                    <span className="text-[10px] md:text-xs font-mono text-gray-500 border border-white/10 px-2 py-1 rounded bg-[#1a1a1a]">
                        {project.tech}
                    </span>
                </div>
             </SpotlightCard>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-32 px-4 container mx-auto border-t border-white/5">
      <div className="grid md:grid-cols-12 gap-12">
        
        {/* Experience Header - Sticky */}
        <div className="md:col-span-4">
           <div className="md:sticky md:top-32">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Experience & <br/> Research</h2>
              <p className="text-gray-400 mb-8 text-sm md:text-base">
                  A timeline of my professional journey, education, and research contributions.
              </p>
              <a href="/suresh_maheshwari_cv.pdf" download className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-2 font-bold text-sm">
                  Download Full Resume <Download size={16}/>
              </a>
           </div>
        </div>

        {/* Timeline Content */}
        <div className="md:col-span-8 space-y-16">
            
            {/* 1. Professional Experience */}
            <div className="space-y-10 md:space-y-12">
                <h3 className="text-lg md:text-xl text-gray-500 uppercase tracking-widest font-bold flex items-center gap-2">
                    <Briefcase size={20}/> Professional Experience
                </h3>
                {userData.experience.map((exp, idx) => (
                <div key={idx} className="group relative border-l border-white/10 pl-8 md:pl-12 pb-2">
                    <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-blue-600 rounded-full ring-4 ring-black"></span>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                        <h4 className="text-xl md:text-2xl font-bold text-white">{exp.role}</h4>
                        <span className="text-xs md:text-sm font-mono text-gray-500 mt-1 sm:mt-0">{exp.period}</span>
                    </div>
                    <div className="text-blue-400 text-base md:text-lg mb-3">{exp.company}</div>
                    <p className="text-gray-400 leading-relaxed text-sm md:text-base max-w-lg mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                        {exp.tech.map((t, i) => (
                            <span key={i} className="text-[10px] md:text-xs text-gray-500 bg-white/5 px-2 py-1 rounded">{t}</span>
                        ))}
                    </div>
                </div>
                ))}
            </div>

            {/* 2. Research Work */}
            <div className="space-y-6 md:space-y-8">
                 <h3 className="text-lg md:text-xl text-gray-500 uppercase tracking-widest font-bold flex items-center gap-2">
                    <FlaskConical size={20}/> Research & Publications
                 </h3>
                 <div className="grid gap-4 md:gap-6">
                    {userData.research.map((paper, i) => (
                        <div key={i} className="p-6 bg-[#111] border border-white/5 rounded-2xl hover:border-white/20 transition-colors">
                            <h4 className="font-bold text-white text-base md:text-lg">{paper.title}</h4>
                            <span className="inline-block mt-2 text-[10px] md:text-xs font-bold text-blue-400 bg-blue-400/10 px-2 py-1 rounded">{paper.status}</span>
                            <p className="mt-3 text-gray-400 text-sm">{paper.desc}</p>
                        </div>
                    ))}
                 </div>
            </div>

             {/* 3. Education */}
             <div className="space-y-6 md:space-y-8">
                 <h3 className="text-lg md:text-xl text-gray-500 uppercase tracking-widest font-bold flex items-center gap-2">
                    <GraduationCap size={20}/> Education
                 </h3>
                 <div className="grid sm:grid-cols-2 gap-4">
                    {userData.education.map((edu, i) => (
                        <div key={i} className="p-6 bg-[#111] border border-white/5 rounded-2xl hover:bg-white/5 transition-colors">
                            <h4 className="font-bold text-white text-base md:text-lg leading-tight">{edu.degree}</h4>
                            <div className="text-blue-400 text-xs md:text-sm mt-2">{edu.school}</div>
                            <div className="flex justify-between mt-4 text-[10px] md:text-xs text-gray-500 font-mono">
                                <span>{edu.location}</span>
                                <span>{edu.year}</span>
                            </div>
                        </div>
                    ))}
                 </div>
            </div>

        </div>

      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="py-20 md:py-32 px-4 bg-black border-t border-white/10 relative overflow-hidden">
       {/* Background Glow */}
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black pointer-events-none"></div>

      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-9xl font-black text-white mb-8 md:mb-12 tracking-tighter mix-blend-difference">
          LET'S TALK
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16 md:mb-24">
            <a 
            href={userData.social.email}
            className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-110 transition-transform duration-300 text-sm md:text-base"
            >
            maheshwarisuresh220@gmail.com
            </a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center md:items-end border-t border-white/10 pt-10 gap-6">
            <div className="text-center md:text-left">
                <p className="text-white font-bold text-lg">Suresh Maheshwari</p>
                <p className="text-gray-500 text-sm">AI Native Engineer • Karachi</p>
            </div>
            <div className="flex gap-6">
                <a href={userData.social.linkedin} className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
                <a href={userData.social.github} className="text-gray-400 hover:text-white transition-colors">GitHub</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-gray-200 font-sans selection:bg-blue-500/30 selection:text-white overflow-x-hidden">
       <Nav />
       <HeroBento />
       <SkillsSection />
       <Projects />
       <Experience />
       <Footer />
    </div>
  );
}