import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navigation/Navbar';
import Header from './components/Header';
import About from './components/About';
import ExperienceSection from './components/experience/ExperienceSection';
import ServicesSection from './components/services/ServicesSection';
import Projects from './components/Projects';
import AllProjects from './pages/AllProjects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import ReviewSection from './components/reviews/ReviewSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ThemeToggle from './components/ThemeToggle';
import { ReviewProvider } from './components/reviews/ReviewContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { LikeProvider } from './contexts/LikeContext';
import './styles/animations.css';

function HomePage() {
  return (
    <>
      <Header />
      <About />
      <ExperienceSection />
      <ServicesSection />
      <Projects limit={6} />
      <Certifications />
      <Contact />
      <ReviewSection />
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <LikeProvider>
          <ReviewProvider>
            <Router>
              <div className="min-h-screen dark:bg-gray-900 transition-colors duration-300">
                <Navbar />
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/projects" element={<AllProjects />} />
                </Routes>
                <Footer />
                <ScrollToTop />
                <ThemeToggle />
              </div>
            </Router>
          </ReviewProvider>
        </LikeProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
}