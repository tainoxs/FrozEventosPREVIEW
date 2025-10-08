import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';
import PackageDetail from '../../components/PackageDetail';

const EncontroDosSonhos5: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigateHome = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header isScrolled={isScrolled} onNavigateHome={handleNavigateHome} />
      <PackageDetail onNavigateHome={handleNavigateHome} packageIdOverride={1} />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default EncontroDosSonhos5;