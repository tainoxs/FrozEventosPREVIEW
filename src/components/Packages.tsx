import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Users, Star } from 'lucide-react';
import GramadoImg from '../assets/img/EncontroDosSonhos.png';



const Packages: React.FC = () => {
  const packages = [
    {
      id: 1,
      name: 'Encontro dos Sonhos 5',
      location: 'Gramado - RS',
      duration: '5 dias',
      people: '2 pessoas',
      price: '12x R$ 833,25',
      rating: 4.9,
      image: GramadoImg,
      features: ['Hospedagem', 'City Tour', 'Palestra', 'Spa']
    },
    // {
    //   id: 2,
    //   name: 'Aventura Amazônica',
    //   location: 'Amazônas',
    //   duration: '5 dias',
    //   people: '4 pessoas',
    //   price: 'R$ 3.200',
    //   rating: 4.8,
    //   image: 'https://images.pexels.com/photos/975771/pexels-photo-975771.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    //   features: ['Guia especializado', 'Trilhas ecológicas', 'Pesca esportiva']
    // },
    // {
    //   id: 3,
    //   name: 'Costa do Descobrimento',
    //   location: 'Bahia',
    //   duration: '6 dias',
    //   people: '2 pessoas',
    //   price: 'R$ 2.800',
    //   rating: 4.7,
    //   image: 'https://images.pexels.com/photos/2425064/pexels-photo-2425064.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    //   features: ['Passeios históricos', 'Praias paradisíacas', 'Gastronomia local']
    // },
    // {
    //   id: 4,
    //   name: 'Montanhas Capixabas',
    //   location: 'Espírito Santo',
    //   duration: '4 dias',
    //   people: '3 pessoas',
    //   price: 'R$ 1.900',
    //   rating: 4.6,
    //   image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    //   features: ['Trilhas montanhosas', 'Cachoeiras cristalinas', 'Turismo rural']
    // },
    // {
    //   id: 5,
    //   name: 'Ilha dos Sonhos',
    //   location: 'Fernando de Noronha',
    //   duration: '5 dias',
    //   people: '2 pessoas',
    //   price: 'R$ 5.400',
    //   rating: 5.0,
    //   image: 'https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    //   features: ['Mergulho com golfinhos', 'Praias preservadas', 'Observação de aves']
    // },
    // {
    //   id: 6,
    //   name: 'Canyon Adventure',
    //   location: 'Rio Grande do Sul',
    //   duration: '3 dias',
    //   people: '4 pessoas',
    //   price: 'R$ 2.100',
    //   rating: 4.5,
    //   image: 'https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    //   features: ['Rapel nos canyons', 'Trilhas radicais', 'Acampamento selvagem']
    // }
  ];

  return (
    <section id="pacotes" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Pacotes de Viagem
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubra nossos destinos cuidadosamente selecionados para proporcionar 
            experiências únicas e momentos inesquecíveis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-amber-400 fill-current" />
                    <span className="text-sm font-semibold">{pkg.rating}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                
                <div className="flex items-center space-x-4 text-gray-600 mb-4">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{pkg.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{pkg.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{pkg.people}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2 text-gray-600">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                    <span className="text-gray-500 text-sm ml-1">Por casal</span>
                  </div>
                  <Link
                    to={pkg.id === 1 ? '/gramado/encontro-dos-sonhos-5' : `/package/${pkg.id}`}
                    className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full hover:from-primary-dark hover:to-secondary-dark transition-all duration-300 font-semibold"
                  >
                    Reservar Agora
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-primary text-primary px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-all duration-300 font-semibold">
            Ver Todos os Pacotes
          </button>
        </div>
      </div>
    </section>
  );
};

export default Packages;