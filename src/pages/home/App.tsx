import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Packages from '../../components/Packages';
import Testimonials from '../../components/Testimonials';
import About from '../../components/About';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';
import PackageDetail from '../../components/PackageDetail';
import EncontroDosSonhos5 from '../Gramado/EncontroDosSonhos5';

const Home: React.FC<{ isScrolled: boolean; onNavigateHome: () => void; }> = ({ isScrolled, onNavigateHome }) => (
  <>
    <Header isScrolled={isScrolled} onNavigateHome={onNavigateHome} />
    <main>
      <Hero />
      <Packages />
      <Testimonials />
      <About />
      <Contact />
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigateToPackage = (packageId: number) => {
    navigate(`/package/${packageId}`);
    window.scrollTo(0, 0);
  };

  const handleNavigateToHome = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white">
      <Routes>
        <Route path="/" element={<Home isScrolled={isScrolled} onNavigateHome={handleNavigateToHome} />} />
        <Route path="/package/:id" element={<PackageDetailPage isScrolled={isScrolled} onNavigateHome={handleNavigateToHome} />} />
        <Route path="/gramado/encontro-dos-sonhos-5" element={<EncontroDosSonhos5 />} />
      </Routes>
    </div>
  );
}

const PackageDetailPage: React.FC<{ isScrolled: boolean; onNavigateHome: () => void; }> = ({ isScrolled, onNavigateHome }) => (
  <>
    <Header isScrolled={isScrolled} onNavigateHome={onNavigateHome} />
    <PackageDetail onNavigateHome={onNavigateHome} />
    <Footer />
    <WhatsAppButton />
  </>
);

export default App;