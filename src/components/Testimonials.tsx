import React, { useState, useRef } from 'react';
import { Star, Quote } from 'lucide-react';
import video1 from '../assets/vid/video1.mp4';
import casal1 from '../assets/img/CASAL1.png';
import video2 from '../assets/vid/video2.mp4';
import casal2 from '../assets/img/CASAL2.jpg';

const TestimonialCard = ({ testimonial }) => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const handleVideoClick = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex items-center mb-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-16 h-16 rounded-full object-cover mr-4"
        />
        <div>
          <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
          <p className="text-gray-600 text-sm">{testimonial.location}</p>
          <div className="flex items-center mt-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
            ))}
          </div>
        </div>
      </div>
      <div onClick={handleVideoClick} className="cursor-pointer">
        <video
          ref={videoRef}
          src={testimonial.video}
          className="w-full h-full rounded-lg object-cover"
          autoPlay
          loop
          muted
        />
      </div>

      <div className="relative">
        <Quote className="w-8 h-8 text-sky-200 absolute -top-2 -left-2" />
        <p className="text-gray-700 italic pl-6 mb-4">
          "{testimonial.comment}"
        </p>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <span className="text-sm text-sky-600 font-semibold">
          {testimonial.trip}
        </span>
        <div className="flex items-center space-x-1">
          <Star className="w-4 h-4 text-amber-400 fill-current" />
          <span className="text-sm font-semibold">{testimonial.rating}.0</span>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Regianne Cutrim',
      location: 'São Luís, MA',
      rating: 5,
      comment: 'Uma experiência memorável para nosso 15 anos de casamento!',
      image: casal1,
      video: video1,
      trip: 'Encontro dos Sonhos'
    },
    {
      id: 2,
      name: 'Jurandir Neres',
      location: 'São Luís - MA',
      rating: 5,
      comment: 'Foi um marco para mim e minha esposa, desejo ir outra vez!',
      image: casal2,
      video: video2,
      trip: 'Encontro dos Sonhos'
    },
    // {
    //   id: 3,
    //   name: 'Ana Paula Costa',
    //   location: 'Belo Horizonte, MG',
    //   rating: 5,
    //   comment: 'O festival de música na Bahia foi inesquecível! Organização impecável, shows incríveis e ainda conhecemos a rica cultura local. Recomendo demais!',
    //   image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    //   trip: 'Costa do Descobrimento'
    // },
    // {
    //   id: 4,
    //   name: 'Roberto Silva',
    //   location: 'Brasília, DF',
    //   rating: 4,
    //   comment: 'As montanhas capixabas nos proporcionaram momentos únicos em família. Trilhas bem planejadas e hospedagem aconchegante. Voltaremos com certeza!',
    //   image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    //   trip: 'Montanhas Capixabas'
    // },
    // {
    //   id: 5,
    //   name: 'Juliana Ferreira',
    //   location: 'Porto Alegre, RS',
    //   rating: 5,
    //   comment: 'Lua de mel perfeita nas Maldivas! Cada detalhe pensado com carinho. O resort era um paraíso e o atendimento excepcional. Obrigada por tornar nosso sonho realidade!',
    //   image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    //   trip: 'Paradiso Tropical'
    // },
    // {
    //   id: 6,
    //   name: 'Eduardo Martins',
    //   location: 'Salvador, BA',
    //   rating: 5,
    //   comment: 'A expedição fotográfica foi incrível! Capturamos imagens únicas e aprendemos muito com os guias especializados. Uma experiência transformadora!',
    //   image: 'https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    //   trip: 'Expedição Fotográfica'
    // }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-neutral to-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Histórias reais de pessoas que viveram momentos inesquecíveis conosco
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Junte-se a mais de <span className="font-bold text-sky-600">200 clientes satisfeitos</span>
          </p>
          <div className="flex items-center justify-center space-x-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-amber-400 fill-current" />
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900">4.9</span>
            <span className="text-gray-600">de 5 estrelas</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;