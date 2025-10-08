import React from 'react';
import { Music, Camera, Mountain, Waves, Utensils, Globe } from 'lucide-react';

const Events: React.FC = () => {
  const events = [
    {
      id: 1,
      title: 'Festivais e Shows',
      description: 'Experiências musicais únicas em cenários paradisíacos',
      icon: Music,
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      features: ['Shows ao vivo', 'Artistas nacionais', 'Cenários únicos']
    },
    {
      id: 2,
      title: 'Expedições Fotográficas',
      description: 'Capture momentos únicos em locais deslumbrantes',
      icon: Camera,
      image: 'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      features: ['Guias especializados', 'Equipamentos profissionais', 'Locações exclusivas']
    },
    {
      id: 3,
      title: 'Aventuras Radicais',
      description: 'Adrenalina pura em meio à natureza exuberante',
      icon: Mountain,
      image: 'https://images.pexels.com/photos/551653/pexels-photo-551653.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      features: ['Rapel e escalada', 'Trilhas desafiadoras', 'Segurança garantida']
    },
    {
      id: 4,
      title: 'Esportes Aquáticos',
      description: 'Diversão garantida nas águas cristalinas brasileiras',
      icon: Waves,
      image: 'https://images.pexels.com/photos/390051/surfer-wave-sunset-the-indian-ocean-390051.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      features: ['Surf e stand up', 'Mergulho recreativo', 'Passeios de barco']
    },
    {
      id: 5,
      title: 'Experiências Gastronômicas',
      description: 'Sabores autênticos da culinária regional brasileira',
      icon: Utensils,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      features: ['Chefs locais', 'Ingredientes frescos', 'Pratos típicos']
    },
    {
      id: 6,
      title: 'Turismo Cultural',
      description: 'Imersão na rica cultura e história brasileira',
      icon: Globe,
      image: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      features: ['Sítios históricos', 'Manifestações culturais', 'Artesanato local']
    }
  ];

  return (
    <section id="eventos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Eventos e Experiências
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Organizamos eventos únicos e experiências memoráveis que conectam você 
            com a essência de cada destino
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-primary to-secondary p-3 rounded-full">
                  <event.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {event.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2 text-gray-600">
                      <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-full hover:from-primary-dark hover:to-secondary-dark transition-all duration-300 font-semibold">
                  Saiba Mais
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;