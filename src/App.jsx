import React, { useState, useEffect, useRef } from 'react';
import {
  Code2, Database, Terminal, Cpu, Monitor, Cloud, Shield, Settings,
  CheckCircle2, Clock, Users, BookOpen, ChevronRight, ChevronLeft, Star,
  MapPin, Phone, Mail, Globe, MessageCircle, AtSign, Link,
  Menu, X, Laptop, FileCode2, LineChart, Server, LayoutTemplate, Briefcase,
  Sun, Moon, Filter, RefreshCcw
} from 'lucide-react';
import { FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';

// --- Components ---

const Navbar = ({ isScrolled, isMobileMenuOpen, setIsMobileMenuOpen, darkMode, setDarkMode }) => (
  <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm py-3 dark:bg-slate-900 dark:border-b dark:border-slate-800' : 'bg-transparent py-5'}`}>
    <div className="container mx-auto px-6 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="KR IT Education" className="h-16 object-contain" />
      </div>

      {/* Desktop Nav */}
      <nav className="hidden xl:flex items-center gap-6 font-medium">
        {['Home', 'About', 'Services', 'Programs', 'Testimonials', 'Contact'].map((item) => (
          <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className={`${isScrolled ? 'text-slate-700 dark:text-slate-300 hover:text-brand-purple' : 'text-white/90 hover:text-white'} transition-colors`}>
            {item}
          </a>
        ))}
      </nav>

      <div className="hidden md:flex items-center gap-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-2 rounded-full ${isScrolled ? 'text-slate-600 hover:bg-slate-100' : 'text-white/90 hover:bg-white/10'} dark:text-slate-300 dark:hover:bg-slate-800 transition-colors`}
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-brand-orange hover:bg-brand-purple text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
        >
          Book Free Demo
        </button>
      </div>

      {/* Mobile Toggle */}
      <div className="xl:hidden flex items-center gap-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-2 ${isScrolled ? 'text-slate-700' : 'text-white'} dark:text-slate-300`}
        >
          {darkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>
        <button className={`${isScrolled ? 'text-slate-900' : 'text-white'} dark:text-white`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </div>

    {/* Mobile Menu */}
    {isMobileMenuOpen && (
      <div className="xl:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-900 shadow-xl py-4 flex flex-col items-center gap-4 border-t border-slate-100 dark:border-slate-800">
        {['Home', 'About', 'Services', 'Programs', 'Testimonials', 'Contact'].map((item) => (
          <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} onClick={() => setIsMobileMenuOpen(false)} className="text-slate-700 dark:text-slate-300 font-medium text-lg">
            {item}
          </a>
        ))}
        <button
          onClick={() => {
            setIsMobileMenuOpen(false);
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="bg-brand-orange text-white px-8 py-3 rounded-full font-medium w-4/5 mt-2"
        >
          Book Free Demo
        </button>
      </div>
    )}
  </header>
);

const Hero = () => {
  // Array for falling logos
  const fallingLogos = [
    { Icon: Code2, color: 'text-blue-500', left: '10%', delay: '0s', duration: '12s' },
    { Icon: Terminal, color: 'text-green-500', left: '25%', delay: '2s', duration: '15s' },
    { Icon: Database, color: 'text-orange-500', left: '40%', delay: '1s', duration: '10s' },
    { Icon: FileCode2, color: 'text-yellow-500', left: '65%', delay: '4s', duration: '14s' },
    { Icon: Cpu, color: 'text-purple-500', left: '80%', delay: '3s', duration: '11s' },
    { Icon: Cloud, color: 'text-cyan-500', left: '90%', delay: '0.5s', duration: '16s' },
  ];

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-brand-purple to-brand-orange text-white transition-colors duration-300">
      {/* Background with falling icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {fallingLogos.map((logo, index) => (
          <div
            key={index}
            className={`absolute -top-20 animate-fall ${logo.color}`}
            style={{ left: logo.left, animationDelay: logo.delay, animationDuration: logo.duration }}
          >
            <logo.Icon size={48} />
          </div>
        ))}
      </div>

      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-blue rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-brand-orange rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-20">
          <div className="w-full lg:flex-1 text-center lg:text-left mt-6 lg:mt-0">

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight mb-6 text-white drop-shadow-md">
              Build Your Future With Technology
            </h1>
            <p className="text-lg md:text-2xl text-blue-50 mb-6 lg:mb-10 max-w-2xl mx-auto lg:mx-0 font-medium tracking-wide drop-shadow-sm">
              Industry-Oriented IT Training | Live Projects | Internship | Career Support
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto bg-white text-brand-purple px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Explore Courses <ChevronRight size={20} />
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto bg-brand-orange text-white border-2 border-brand-orange hover:bg-brand-orange/80 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Book Free Demo
              </button>
            </div>
          </div>

          <div className="w-full lg:flex-1 relative h-[350px] sm:h-[400px] md:h-[500px]">
            {/* Animated Floating Graphic */}
            <div className="absolute inset-0 flex items-center justify-center animate-float">
              <div className="relative w-full max-w-md aspect-square rounded-3xl bg-slate-900/40 border border-white/20 backdrop-blur-md shadow-2xl p-6 flex flex-col justify-between">
                <div className="flex items-center gap-3 border-b border-white/20 pb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <div className="text-xs text-blue-200 font-mono ml-4">kr-it-education.js</div>
                </div>
                <div className="flex-1 py-6 font-mono text-sm text-blue-100 overflow-hidden">
                  <p className="mb-2"><span className="text-brand-orange">import</span> Career <span className="text-brand-orange">from</span> <span className="text-green-300">'kr-it-education'</span>;</p>
                  <p className="mb-2"><span className="text-brand-orange">const</span> <span className="text-yellow-300">Future</span> = () =&gt; {'{'}</p>
                  <p className="mb-2 ml-4"><span className="text-brand-orange">return</span> (</p>
                  <p className="mb-2 ml-8">&lt;<span className="text-brand-orange">Success</span> className="<span className="text-green-300">bright</span>"&gt;</p>
                  <p className="mb-2 ml-12">Learn, Code, Achieve</p>
                  <p className="mb-2 ml-8">&lt;/<span className="text-brand-orange">Success</span>&gt;</p>
                  <p className="mb-2 ml-4">);</p>
                  <p className="mb-0">{'}'};</p>
                </div>

                {/* Decorative floating badges */}
                <div className="absolute -right-2 sm:-right-6 top-10 sm:top-20 bg-white text-slate-900 px-3 py-1.5 sm:px-4 sm:py-2 rounded-2xl shadow-xl font-bold flex items-center gap-2 animate-bounce text-xs sm:text-base" style={{ animationDuration: '3s' }}>
                  <Star className="text-yellow-500 fill-current" size={16} /> 4.9/5 Rating
                </div>
                <div className="absolute -left-2 sm:-left-8 bottom-10 sm:bottom-20 bg-brand-orange text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-2xl shadow-xl font-bold flex items-center gap-2 animate-bounce text-xs sm:text-base" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                  <Users size={16} /> 5k+ Learners
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    { icon: <CheckCircle2 size={32} className="text-brand-purple" />, title: "Seamless Integration", desc: "Learn with tools that integrate perfectly into modern workflows." },
    { icon: <LineChart size={32} className="text-brand-orange" />, title: "Data-Driven Insights", desc: "Curriculums designed based on current industry demands." },
    { icon: <Clock size={32} className="text-brand-blue" />, title: "24/7 Support", desc: "Round the clock assistance from mentors to solve your doubts." }
  ];

  const highlights = [
    "Trusted IT training with quality",
    "Experienced trainers",
    "Job Assurance",
    "Live Project & daily Assignments",
    "Knowledge grooming",
    "Individual Focus",
    "Flexible Slots",
    "Online & offline test",
    "Free Study Material",
    "Interview Preparation",
    "Resume Building",
    "Internships",
    "Offline Training",
    "Online Training PAN India",
    "Affordable Fees"
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-950 relative transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-purple font-bold tracking-wide uppercase mb-2">Why Choose Us</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">Built for your success</h3>
          <p className="text-lg text-slate-600 dark:text-slate-400">We don't just teach code, we build careers. Our ecosystem is designed to take you from a beginner to an industry-ready professional.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mb-16">
          {features.map((f, idx) => (
            <div key={idx} className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h4 className="text-xl font-bold mb-3 dark:text-white">{f.title}</h4>
              <p className="text-slate-600 dark:text-slate-400">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 rounded-3xl p-10 md:p-14 text-white overflow-hidden relative">
          <div className="absolute right-0 top-0 w-64 h-64 bg-brand-purple/30 rounded-full filter blur-3xl translate-x-1/2 -translate-y-1/2"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 w-full">
              <h4 className="text-3xl md:text-4xl font-bold mb-8 text-brand-orange">Key Highlights of KR IT Course</h4>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8 mb-10">
                {highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-lg">
                    <div className="w-6 h-6 mt-1 rounded-full bg-brand-purple flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 size={14} className="text-white" />
                    </div>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <span className="text-slate-400 font-bold uppercase tracking-wider text-sm">Ideal For:</span>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium">Job Seekers</span>
                  <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium">Working Professionals</span>
                  <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium">Students</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { title: "Enroll", icon: <BookOpen /> },
    { title: "Learn", icon: <Code2 /> },
    { title: "Assignment", icon: <FileCode2 /> },
    { title: "Adv. Programming", icon: <Terminal /> },
    { title: "Project/Internship", icon: <Briefcase /> },
    { title: "Grooming", icon: <Users /> },
    { title: "Interview Prep", icon: <CheckCircle2 /> },
    { title: "Ready for Job", icon: <Star /> }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-brand-orange font-bold tracking-wide uppercase mb-2">Our Process</h2>
          <h3 className="text-4xl font-black text-slate-900 dark:text-white">Your Journey to Success</h3>
        </div>

        {/* Horizontal Timeline Scroll on Mobile, Flex wrap on Desktop */}
        <div className="relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-slate-200 dark:bg-slate-800 -translate-y-1/2 z-0"></div>

          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-y-12 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center min-w-[140px] px-2 group">
                <div className="w-16 h-16 rounded-full bg-white dark:bg-slate-800 shadow-lg border-4 border-slate-50 dark:border-slate-900 flex items-center justify-center text-brand-purple mb-4 relative z-10 group-hover:bg-brand-purple group-hover:text-white group-hover:scale-110 group-hover:border-brand-purple/20 transition-all duration-300">
                  {step.icon}
                  {/* Step number badge */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-slate-900 dark:bg-brand-orange text-white text-xs font-bold flex items-center justify-center border-2 border-white dark:border-slate-800">
                    {idx + 1}
                  </div>
                </div>
                <h4 className="text-sm font-bold text-center text-slate-700 dark:text-slate-300 group-hover:text-brand-purple dark:group-hover:text-brand-purple transition-colors">
                  {step.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CourseQuiz = ({ onComplete, onReset, activeFilter }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const questions = [
    {
      id: 'interest',
      question: "What are you most interested in?",
      options: [
        { label: "Building Websites & Apps", value: "web" },
        { label: "Working with Data & AI", value: "data" },
        { label: "Core Programming & Logic", value: "core" },
        { label: "Business & Marketing", value: "business" }
      ]
    },
    {
      id: 'level',
      question: "What is your current experience level?",
      options: [
        { label: "Absolute Beginner", value: "beginner" },
        { label: "Know some basics", value: "intermediate" },
        { label: "Looking to specialize", value: "advanced" }
      ]
    }
  ];

  const handleAnswer = (questionId, value) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Determine filter based on answers
      const interest = newAnswers.interest;
      onComplete(interest);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setAnswers({});
    onReset();
  };

  if (activeFilter) {
    return (
      <div className="bg-brand-purple/10 border border-brand-purple/20 rounded-2xl p-6 mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <CheckCircle2 className="text-brand-purple" size={20} />
            Your recommended learning path: <span className="text-brand-purple capitalize">{activeFilter}</span>
          </h4>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">We've filtered the courses below based on your quiz results.</p>
        </div>
        <button onClick={handleReset} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors dark:text-white">
          <RefreshCcw size={16} /> Retake Quiz
        </button>
      </div>
    );
  }

  const q = questions[currentQuestion];

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-lg rounded-2xl p-8 mb-12 relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 left-0 w-full h-1 bg-slate-100 dark:bg-slate-800">
        <div
          className="h-full bg-gradient-to-r from-brand-purple to-brand-orange transition-all duration-500"
          style={{ width: `${((currentQuestion) / questions.length) * 100}%` }}
        ></div>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-brand-purple/10 text-brand-purple flex items-center justify-center font-bold">
          {currentQuestion + 1}
        </div>
        <h4 className="text-xl font-bold text-slate-900 dark:text-white">{q.question}</h4>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {q.options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => handleAnswer(q.id, opt.value)}
            className="text-left px-6 py-4 rounded-xl border-2 border-slate-100 dark:border-slate-700 hover:border-brand-purple dark:hover:border-brand-purple hover:bg-brand-purple/5 dark:hover:bg-brand-purple/20 transition-all font-medium text-slate-700 dark:text-slate-300 group"
          >
            <div className="flex items-center justify-between">
              {opt.label}
              <ChevronRight size={18} className="text-slate-400 group-hover:text-brand-purple group-hover:translate-x-1 transition-all" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

const courses = [
  { name: 'Python', hex: '#eab308', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', category: 'core' },
  { name: 'C++', hex: '#3b82f6', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg', category: 'core' },
  { name: 'Software Development', hex: '#38bdf8', icon: <Code2 />, category: 'web' },
  { name: 'Full Stack Java', hex: '#f97316', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg', category: 'web' },
  { name: 'MIS & Data Analytic', hex: '#f43f5e', icon: <LineChart />, category: 'data' },
  { name: 'Accounts & Taxation', hex: '#d1d5db', icon: <Database />, category: 'business' },
  { name: 'Adv Excel-VBA & Macros', hex: '#22c55e', icon: <FileCode2 />, category: 'data' },
  { name: 'Power BI & Tableau', hex: '#facc15', icon: <LineChart />, category: 'data' },
  { name: 'React', hex: '#06b6d4', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', category: 'web' },
  { name: 'JavaScript', hex: '#fde047', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', category: 'web' },
  { name: 'SQL', hex: '#60a5fa', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg', category: 'data' },
  { name: 'Data Science', hex: '#d946ef', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg', category: 'data' },
  { name: 'Full Stack Web', hex: '#c026d3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', category: 'web' },
  { name: 'Dot Net', hex: '#a855f7', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg', category: 'core' },
  { name: 'Flutter', hex: '#0ea5e9', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg', category: 'web' },
  { name: 'GST', hex: '#ef4444', icon: <CheckCircle2 />, category: 'business' },
  { name: 'Tally Prime', hex: '#2563eb', icon: <Database />, category: 'business' },
  { name: 'SAP', hex: '#1d4ed8', icon: <Server />, category: 'business' },
  { name: 'Salesforce', hex: '#0284c7', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/salesforce/salesforce-original.svg', category: 'business' },
  { name: 'Selenium', hex: '#dc2626', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg', category: 'core' },
  { name: 'AWS', hex: '#f97316', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', category: 'core' },
  { name: 'Digital Marketing', hex: '#e11d48', icon: <Monitor />, category: 'business' },
  { name: 'Generative AI', hex: '#8b5cf6', icon: <Cpu />, category: 'data' },
  { name: 'Prompt Engineering', hex: '#14b8a6', icon: <Terminal />, category: 'data' },
  { name: 'Data Engineering', hex: '#f59e0b', icon: <Server />, category: 'data' },
  { name: 'Automation Testing', hex: '#10b981', icon: <Settings />, category: 'core' },
  { name: 'Git GitHub', hex: '#64748b', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', category: 'core' }
];

const Programs = ({ onSelectCourse }) => {
  const [activeFilter, setActiveFilter] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const scrollRef = useRef(null);

  const filteredCourses = courses.filter(c => {
    const matchesFilter = activeFilter ? c.category === activeFilter : true;
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const isManualScrolling = useRef(false);
  const manualScrollTimeout = useRef(null);

  const scrollContainerBy = (amount) => {
    if (scrollRef.current) {
      isManualScrolling.current = true;
      clearTimeout(manualScrollTimeout.current);
      manualScrollTimeout.current = setTimeout(() => {
        isManualScrolling.current = false;
      }, 1000); // Pause auto-scroll briefly after manual interaction
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't scroll if user is typing in an input
      if (document.activeElement && document.activeElement.tagName === 'INPUT') return;
      if (e.key === 'ArrowLeft') scrollContainerBy(-350);
      if (e.key === 'ArrowRight') scrollContainerBy(350);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || activeFilter || searchQuery) return;

    let animationId;
    let isHovered = false;
    let scrollPos = el.scrollLeft;

    const scroll = () => {
      if (!isHovered && !isManualScrolling.current) {
        scrollPos += 0.5; // Slow movement

        // Loop seamlessly (the container has exactly 2 duplicate sets)
        if (scrollPos >= el.scrollWidth / 2) {
          scrollPos = 0;
        }
        el.scrollLeft = scrollPos;
      } else {
        // Keep our variable in sync if user scrolls manually
        scrollPos = el.scrollLeft;
      }
      animationId = requestAnimationFrame(scroll);
    };

    const handleMouseEnter = () => isHovered = true;
    const handleMouseLeave = () => isHovered = false;

    el.addEventListener('mouseenter', handleMouseEnter);
    el.addEventListener('mouseleave', handleMouseLeave);
    el.addEventListener('touchstart', handleMouseEnter, { passive: true });
    el.addEventListener('touchend', handleMouseLeave);

    // Only animate if there are enough items to scroll
    if (el.scrollWidth > el.clientWidth) {
      animationId = requestAnimationFrame(scroll);
    }

    return () => {
      cancelAnimationFrame(animationId);
      el.removeEventListener('mouseenter', handleMouseEnter);
      el.removeEventListener('mouseleave', handleMouseLeave);
      el.removeEventListener('touchstart', handleMouseEnter);
      el.removeEventListener('touchend', handleMouseLeave);
    };
  }, [filteredCourses]);

  return (
    <section id="programs" className="py-24 bg-slate-50 dark:bg-slate-950 relative transition-colors duration-300">
      <div className="container mx-auto px-6">

        <div className="flex flex-col items-center mb-16 gap-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-brand-purple">Our Programs</h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2 text-lg max-w-2xl">
            Take our quick quiz to find the perfect learning path for you, search, or browse all courses below.
          </p>
          <div className="w-full max-w-md mt-4 relative z-50">
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-800 dark:bg-slate-900 dark:text-white focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 outline-none transition-all pl-12 shadow-sm"
            />
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </div>
            {/* Live Search Dropdown */}
            {searchQuery && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl shadow-2xl max-h-64 overflow-y-auto text-left z-50 custom-scrollbar">
                {filteredCourses.length > 0 ? (
                  filteredCourses.map((course, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        setSearchQuery("");

                        // Pause auto-scroll so it doesn't immediately cancel the smooth scroll
                        isManualScrolling.current = true;
                        clearTimeout(manualScrollTimeout.current);

                        setTimeout(() => {
                          const cardId = `course-card-${course.name.replace(/\s+/g, '-').toLowerCase()}`;
                          const card = document.getElementById(cardId);
                          if (card) {
                            card.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });

                            // Highlight effect
                            card.classList.add('ring-4', 'ring-brand-purple', 'ring-offset-4', 'ring-offset-slate-50');

                            setTimeout(() => {
                              card.classList.remove('ring-4', 'ring-brand-purple', 'ring-offset-4', 'ring-offset-slate-50');
                              // Resume auto-scroll after the user has had time to see it
                              manualScrollTimeout.current = setTimeout(() => {
                                isManualScrolling.current = false;
                              }, 1000);
                            }, 2000);
                          } else {
                            isManualScrolling.current = false;
                          }
                        }, 100);
                      }}
                      className="px-5 py-3 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer flex items-center justify-between group border-b border-slate-50 dark:border-slate-800/50 last:border-0 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-slate-100 dark:bg-slate-800">
                          {course.logo ? (
                            <img src={course.logo} alt={course.name} className="w-5 h-5 object-contain" />
                          ) : (
                            <div style={{ color: course.hex }} className="scale-75">{course.icon}</div>
                          )}
                        </div>
                        <span className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-brand-purple dark:group-hover:text-brand-purple transition-colors">{course.name}</span>
                      </div>
                      <ChevronRight size={16} className="text-slate-400 group-hover:text-brand-purple opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                    </div>
                  ))
                ) : (
                  <div className="px-5 py-4 text-slate-500 dark:text-slate-400 text-sm">
                    No courses found matching "{searchQuery}"
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <CourseQuiz onComplete={setActiveFilter} onReset={() => setActiveFilter(null)} activeFilter={activeFilter} />

        {!activeFilter && !searchQuery && (
          <div className="flex justify-end gap-3 px-4 mb-2">
            <button onClick={() => scrollContainerBy(-350)} className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-brand-purple hover:text-white dark:hover:bg-brand-purple transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              <ChevronLeft size={24} />
            </button>
            <button onClick={() => scrollContainerBy(350)} className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-brand-purple hover:text-white dark:hover:bg-brand-purple transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              <ChevronRight size={24} />
            </button>
          </div>
        )}
        <div className="relative w-full py-4">

          <div
            ref={scrollRef}
            className={`flex gap-8 py-4 px-4 pr-8 ${activeFilter || searchQuery ? 'flex-wrap justify-center overflow-x-visible' : 'overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] [-webkit-overflow-scrolling:touch]'}`}
          >
            {(activeFilter || searchQuery ? filteredCourses : [...filteredCourses, ...filteredCourses]).map((course, idx) => (
              <div
                key={idx}
                id={idx < (activeFilter || searchQuery ? filteredCourses.length : courses.length) ? `course-card-${course.name.replace(/\s+/g, '-').toLowerCase()}` : undefined}
                className="w-[85vw] sm:w-80 md:w-[22rem] max-w-full flex-shrink-0 bg-white dark:bg-slate-900 rounded-[32px] group relative overflow-hidden p-6 md:p-8 flex flex-col h-full card-glow-hover cursor-pointer shadow-xl border border-slate-100 dark:border-slate-800 transform-gpu"
                style={{
                  borderTop: `6px solid ${course.hex}`,
                  '--glow-color': course.hex,
                }}
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-slate-50 dark:bg-slate-800/50 shadow-sm group-hover:scale-110 transition-transform">
                  {course.logo ? (
                    <img src={course.logo} alt={course.name} className="w-10 h-10 object-contain drop-shadow-sm" />
                  ) : (
                    <div style={{ color: course.hex }}>{course.icon}</div>
                  )}
                </div>

                <div className="flex-grow">
                  <h4 className="text-2xl font-black mb-3 text-slate-900 dark:text-white line-clamp-2 min-h-[4rem] flex items-start">{course.name}</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm font-medium mb-6 line-clamp-2 min-h-[2.5rem]">
                    Master {course.name} with our industry expert curriculum.
                  </p>
                </div>

                <div className="flex items-center gap-2 mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => {
                      if (onSelectCourse) onSelectCourse(course.name);
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full py-3 rounded-full text-sm font-bold transition-all flex items-center justify-center gap-2 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 group-hover:bg-brand-purple group-hover:text-white"
                  >
                    View Course <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {activeFilter && (
          <div className="flex justify-center mt-12 mb-4">
            <button
              onClick={() => setActiveFilter(null)}
              className="font-bold transition-colors flex items-center gap-2 px-6 py-3 bg-brand-purple text-white rounded-xl hover:bg-brand-purple/90"
            >
              See More Courses <ChevronRight size={20} />
            </button>
          </div>
        )}

        {filteredCourses.length === 0 && (
          <div className="text-center py-12 text-slate-500 dark:text-slate-400">
            No courses found for this path.
          </div>
        )}
      </div>
    </section>
  );
};

const Testimonials = () => {
  useEffect(() => {
    // Load the Elfsight platform script dynamically
    const script = document.createElement('script');
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-slate-900 text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-purple/5 dark:bg-brand-purple/10 skew-x-12 transform origin-top-right"></div>

      <div className="container mx-auto px-6 relative z-10 mb-12">
        <div className="text-center mb-12">
          <h2 className="text-brand-orange font-bold tracking-wide uppercase mb-2">Testimonials</h2>
          <h3 className="text-4xl font-black mb-4">Student Success Stories</h3>
          <p className="text-slate-600 dark:text-slate-400">See what our students are saying about us on Google.</p>
        </div>

        {/* Elfsight Google Reviews Widget */}
        <div className="elfsight-app-f78b16aa-7ba0-47fd-a8a5-ba4f7dee7703" data-elfsight-app-lazy></div>
      </div>
    </section>
  );
};

const Contact = ({ selectedCourse, onCourseChange }) => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.target);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      const data = await response.json();
      if (data.success) {
        alert("Message sent successfully!");
        e.target.reset();
        if (onCourseChange) onCourseChange("");
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Error submitting the form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="bg-white dark:bg-slate-950 rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-transparent dark:border-slate-800">

          {/* Contact Info Side */}
          <div className="lg:w-2/5 bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white p-6 md:p-10 lg:p-16 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple rounded-full filter blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-4">Get In Touch</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-12">Ready to start your journey? Fill out the form and our career counselor will get back to you within 24 hours.</p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white dark:bg-white/10 shadow-sm dark:shadow-none flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Head Office</h4>
                    <p className="text-slate-600 dark:text-slate-300">102-1st Floor, Dattani Trade Centre, Chandavarkar Road, Borivali West, Mumbai - 400092<br />(Near Borivali Railway Station)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white dark:bg-white/10 shadow-sm dark:shadow-none flex items-center justify-center flex-shrink-0">
                    <Phone className="text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Phone</h4>
                    <p className="text-slate-600 dark:text-slate-300">+91 8928433903</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white dark:bg-white/10 shadow-sm dark:shadow-none flex items-center justify-center flex-shrink-0">
                    <Mail className="text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p className="text-slate-600 dark:text-slate-300">officekriteducation@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative z-10 mt-16 flex gap-4">
              <a href="https://youtube.com/@kriteducation?si=TJNGDV1lCe3EpFVk" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white dark:bg-white/10 shadow-sm dark:shadow-none flex items-center justify-center hover:bg-brand-purple hover:text-white transition-colors"><FaYoutube size={20} /></a>
              <a href="https://www.instagram.com/kr_it_education/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white dark:bg-white/10 shadow-sm dark:shadow-none flex items-center justify-center hover:bg-brand-purple hover:text-white transition-colors"><FaInstagram size={20} /></a>
              <a href="https://www.linkedin.com/company/kr-it/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white dark:bg-white/10 shadow-sm dark:shadow-none flex items-center justify-center hover:bg-brand-purple hover:text-white transition-colors"><FaLinkedin size={20} /></a>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-3/5 p-6 md:p-10 lg:p-16">
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-8">Send us a message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="access_key" value="1d334cb2-ddae-42a1-89eb-6965f68deb18" />
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Full Name</label>
                  <input type="text" name="name" required placeholder="John Doe" className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-slate-800 dark:bg-slate-900 dark:text-white focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Phone Number</label>
                  <input type="tel" name="phone" required onInput={(e) => { e.target.value = e.target.value.replace(/[^0-9+]/g, ''); }} placeholder="+91 XXXXXXXXXX" className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-slate-800 dark:bg-slate-900 dark:text-white focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 outline-none transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Email Address</label>
                <input type="email" name="email" required placeholder="john@example.com" className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-slate-800 dark:bg-slate-900 dark:text-white focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 outline-none transition-all" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Course of Interest</label>
                <select
                  name="course"
                  required
                  value={selectedCourse || ""}
                  onChange={(e) => onCourseChange && onCourseChange(e.target.value)}
                  className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-slate-800 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 outline-none transition-all appearance-none bg-white dark:bg-slate-900 dark:text-white"
                >
                  <option value="">Select a program...</option>
                  {courses.map(c => (
                    <option key={c.name} value={c.name}>{c.name}</option>
                  ))}
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Message</label>
                <textarea name="message" required rows="4" placeholder="How can we help you?" className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-slate-800 dark:bg-slate-900 dark:text-white focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 outline-none transition-all resize-none"></textarea>
              </div>

              <button type="submit" disabled={isSubmitting} className="w-full bg-brand-purple text-white py-4 rounded-xl font-bold text-lg hover:bg-slate-900 dark:hover:bg-brand-orange transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 mt-4 disabled:opacity-70 disabled:cursor-not-allowed">
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>

        </div>

        {/* Embedded Google Map */}
        <div className="mt-12 rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7534.353234019262!2d72.855563!3d19.231133!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80514aa56fdaa291%3A0xe913cbc6285eb762!2sKR%20IT%20Education!5e0!3m2!1sen!2sin!4v1786526522984!5m2!1sen!2sin"
            className="w-full h-[400px] md:h-[450px]"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-white dark:bg-slate-950 py-12 text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-white/10 transition-colors duration-300">
    <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="KR IT Education" className="h-14 object-contain bg-white rounded p-1" />
      </div>

      <div className="flex gap-6 text-sm font-medium">
        <a href="#" className="hover:text-brand-purple dark:hover:text-white transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-brand-purple dark:hover:text-white transition-colors">Terms of Service</a>
        <a href="#" className="hover:text-brand-purple dark:hover:text-white transition-colors">Sitemap</a>
      </div>

      <p className="text-sm">© {new Date().getFullYear()} KR IT Education. All rights reserved.</p>
    </div>
  </footer>
);

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  useEffect(() => {
    // We intentionally removed the matchMedia listener so it defaults to light mode
    // const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    // setDarkMode(isDark);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300">
      <Navbar isScrolled={isScrolled} isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero />
        <Features />
        <Process />
        <Programs onSelectCourse={setSelectedCourse} />
        <Testimonials />
        <Contact selectedCourse={selectedCourse} onCourseChange={setSelectedCourse} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
