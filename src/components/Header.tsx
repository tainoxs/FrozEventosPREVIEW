import React, { useState } from 'react';
import { Menu, X, Compass } from 'lucide-react';
import logo from '../assets/svg/LOGO.svg';

interface HeaderProps {
  isScrolled: boolean;
  onNavigateHome?: () => void;
}

const Header: React.FC<HeaderProps> = ({ isScrolled, onNavigateHome }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#pacotes', label: 'Pacotes' },
    { href: '#eventos', label: 'Eventos' },
    { href: '#sobre', label: 'Sobre Nós' },
    { href: '#contato', label: 'Contato' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <button 
            onClick={onNavigateHome}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <div className="bg-gradient-to-r  p-0 rounded-lg">
              <img src={logo} alt="FROZEVENTOS" className="w-15 h-11" />
            </div>
            <div>
              {/* <h1 className="font-bold text-xl block text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary">
                FROZEVENTOS&TURISMO
                </h1> */}
              {/* <h1 className="text-xl font-bold">
                FROZEVENTOS&TURISMO
              </h1> */}
              {/* <p className="text-xs text-primary -mt-1">&TURISMO</p> */}
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-sky-600 font-medium transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#contato')}
              className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full hover:from-primary-dark hover:to-secondary-dark transition-all duration-200 font-medium"
            >
              Orçamento
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-700 hover:text-sky-600 font-medium text-left transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('#contato')}
                className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full hover:from-primary-dark hover:to-secondary-dark transition-all duration-200 font-medium text-center"
              >
                Orçamento
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;