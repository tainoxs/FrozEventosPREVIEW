import React from 'react';
import { ArrowRight, MapPin, Calendar, Users } from 'lucide-react';
import FundoAzul from '../assets/img/FundoAzul.png';

const Hero: React.FC = () => {
  const scrollToPackages = () => {
    const element = document.querySelector('#pacotes');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${FundoAzul})`
        }}
      >
        {/* <div className="absolute inset-0 bg-gradient-to-r from-sky-900/70 via-emerald-900/60 to-sky-900/70"></div> */}
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="pt-32 pb-5 text-5xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
             <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Cada viagem,
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neutral to-neutral ">
              um sonho realizado!
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Descubra destinos incríveis com nossos pacotes personalizados. 
            Cada viagem é uma nova história para contar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={scrollToPackages}
              className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full text-lg font-semibold hover:from-primary-dark hover:to-secondary-dark transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <span>Ver Pacotes</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button
              onClick={() => document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Fale Conosco
            </button>
          </div>

          {/* Features */}
          <div className="flex flex-col sm:grid-cols-3 gap-8 max-w-3xl mx-auto ">
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="w-6 h-6 text-white" />
              <span className="text-lg">Destinos Únicos</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Calendar className="w-6 h-6 text-white" />
              <span className="text-lg">Eventos Exclusivos</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;