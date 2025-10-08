import React from 'react';
import { Award, Heart, Shield, Users, MapPin, Calendar } from 'lucide-react';
import claudioFroz from '../assets/img/ClaudioFroz.jpg';
import EncontroDosSonhos from '../assets/img/EncontroDosSonhos.png';

const About: React.FC = () => {
  const achievements = [
    { number: '200+', label: 'Clientes Felizes', icon: Users },
    { number: '10+', label: 'Destinos Visitados', icon: MapPin },
    { number: '5', label: 'Anos de Experiência', icon: Calendar },
    { number: '98%', label: 'Satisfação do Cliente', icon: Award }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Paixão por Viajar',
      description: 'Acreditamos que cada viagem é uma oportunidade de crescimento pessoal e criação de memórias preciosas.'
    },
    {
      icon: Shield,
      title: 'Segurança e Confiança',
      description: 'Priorizamos sua segurança em cada destino, com parcerias confiáveis e protocolos rigorosos.'
    },
    {
      icon: Award,
      title: 'Excelência no Atendimento',
      description: 'Nossa equipe especializada cuida de cada detalhe para garantir uma experiência perfeita.'
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Sobre a FROZEVENTOS&TURISMO
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget justo nec justo ultrices ultrices.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget justo nec justo ultrices ultrices.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-gradient-to-r from-primary to-secondary p-2 rounded-lg">
                    <value.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{value.title}</h3>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={EncontroDosSonhos}
              alt="Equipe FROZEVENTOS"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-2xl"></div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-primary to-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {achievement.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20 bg-gradient-to-r from-neutral to-neutral rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Nossa Equipe</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Profissionais apaixonados por turismo, dedicados a criar experiências 
              extraordinárias para cada cliente
            </p>
          </div>

          <div className="flex flex-col md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src={claudioFroz}
                alt="Claudio Froz"
                className="w-60 h-60 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="font-bold text-gray-900">Claudio Froz</h4>
              <p className="text-sky-600 font-medium">Diretor Geral</p>
              <p className="text-gray-600 text-sm mt-2">
                Mais de 5 anos de experiência em turismo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;