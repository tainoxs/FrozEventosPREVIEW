import React from 'react';
import { Compass, Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' }
  ];

  const quickLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Pacotes', href: '#pacotes' },
    { name: 'Eventos', href: '#eventos' },
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Contato', href: '#contato' }
  ];

  const destinations = [
    'Rio Grande do Sul'
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-primary to-secondary p-2 rounded-lg">
                <Compass className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">FROZEVENTOS</h3>
                <p className="text-sm text-primary -mt-1">&TURISMO</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transformando sonhos em aventuras inesquecíveis. 
              Sua próxima experiência única começa aqui.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="bg-gray-800 p-3 rounded-lg hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Destinos Populares</h4>
            <ul className="space-y-3">
              {destinations.map((destination) => (
                <li key={destination}>
                  <a
                    href="#pacotes"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('#pacotes');
                    }}
                    className="text-gray-300 hover:text-primary transition-colors duration-200"
                  >
                    {destination}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
            <div className="space-y-4">
              {/* <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Rua das Palmeiras, 123</p>
                  <p>Centro - São Paulo, SP</p>
                  <p>CEP: 01234-567</p>
                </div>
              </div> */}
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="text-gray-300">
                  <p>(98) 98810-2082</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-gray-300">contato@frozeventos.com.br</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h4 className="text-2xl font-bold mb-4">Receba nossas ofertas especiais</h4>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Cadastre-se em nossa newsletter e seja o primeiro a saber sobre promoções 
              exclusivas e novos destinos incríveis.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-sky-400 focus:outline-none"
              />
              <button className="bg-gradient-to-r from-primary to-secondary px-8 py-3 rounded-lg hover:from-primary-dark hover:to-secondary-dark transition-all duration-300 font-semibold">
                Inscrever-se
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-950 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} FROZEVENTOS&TURISMO. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors duration-200">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors duration-200">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors duration-200">
                Cancelamento
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;