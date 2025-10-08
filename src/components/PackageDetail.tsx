import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, Users, Star, Calendar, Shield, Heart, Camera, Utensils, Wifi, Car } from 'lucide-react';
import GramadoImg from '../assets/img/EncontroDosSonhos.png';
import GramadoPortal from '../assets/img/GramadoPortal.webp';
import GramadoRua from '../assets/img/GramadoRua.jpg';




interface PackageDetailProps {
  onNavigateHome: () => void;
  packageIdOverride?: number;
}

const PackageDetail: React.FC<PackageDetailProps> = ({ onNavigateHome, packageIdOverride }) => {
  const { id } = useParams<{ id: string }>();
  const packageId = packageIdOverride ?? parseInt(id ?? '0', 10);
  const [activeTab, setActiveTab] = useState('overview');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cpf: '',
    birthDate: '',
    travelers: 1,
    departureDate: '',
    specialRequests: ''
  });

  const packages = [
    {
      id: 1,
      name: 'Encontro dos Sonhos 5',
      location: 'Gramado - RS',
      duration: '5 dias',
      people: '2 pessoas',
      price: 'R$ 9.999',
      originalPrice: 'R$ 11.200',
      rating: 4.9,
      reviews: 127,
      image: GramadoImg,

      gallery: [
        GramadoPortal,
        GramadoRua,
      ],
      description: 'Viva uma experiência única nas paradisíacas Maldivas. Resort 5 estrelas sobre as águas cristalinas, com bangalôs privativos e vista deslumbrante para o oceano Índico.',
      highlights: [
        'Hotel 5 estrelas',
        'Spa com tratamentos relaxantes',
        'Restaurante gourmet',
        'Transfer'
      ],
      included: [
        'Passagens aéreas ida e volta',
        'Transfer aeroporto-hotel',
        'Hospedagem',
        'Café da manhã e jantar inclusos',
        'Equipamentos',
        'Seguro viagem'
      ],
      itinerary: [
        { day: 1, title: 'Chegada ao local', description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, voluptas.' },
        { day: 2, title: 'Relaxamento', description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, voluptas.' },
        { day: 3, title: 'Passeio', description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, voluptas.' },
        { day: 4, title: 'Dia Livre', description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, voluptas.' },
        { day: 5, title: 'Experiência Cultural', description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, voluptas.' },
        { day: 6, title: 'Último Dia', description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, voluptas.' },
        { day: 7, title: 'Retorno', description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, voluptas.' }
      ]
    },
    // {
    //   id: 2,
    //   name: 'Aventura Amazônica',
    //   location: 'Amazônas',
    //   duration: '5 dias / 4 noites',
    //   people: '4 pessoas',
    //   price: 'R$ 3.200',
    //   originalPrice: 'R$ 3.800',
    //   rating: 4.8,
    //   reviews: 89,
    //   image: 'https://images.pexels.com/photos/975771/pexels-photo-975771.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    //   gallery: [
    //     'https://images.pexels.com/photos/975771/pexels-photo-975771.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    //     'https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    //     'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    //     'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    //   ],
    //   description: 'Mergulhe na maior floresta tropical do mundo. Uma jornada única pela biodiversidade amazônica com guias especializados e experiências autênticas.',
    //   highlights: [
    //     'Guias especializados em fauna e flora',
    //     'Trilhas ecológicas exclusivas',
    //     'Pesca esportiva de tucunaré',
    //     'Observação de animais selvagens',
    //     'Comunidades ribeirinhas',
    //     'Lodge ecológico sustentável'
    //   ],
    //   included: [
    //     'Passagens aéreas para Manaus',
    //     'Transfer fluvial para o lodge',
    //     'Hospedagem em lodge ecológico',
    //     'Todas as refeições incluídas',
    //     'Guia especializado',
    //     'Equipamentos para trilhas'
    //   ],
    //   itinerary: [
    //     { day: 1, title: 'Chegada a Manaus', description: 'Transfer para o lodge. Apresentação da equipe e primeira trilha noturna.' },
    //     { day: 2, title: 'Trilha na Floresta', description: 'Caminhada matinal. Observação de aves e primatas. Pesca no final da tarde.' },
    //     { day: 3, title: 'Comunidade Ribeirinha', description: 'Visita a comunidade local. Aprendizado sobre cultura amazônica.' },
    //     { day: 4, title: 'Aventura Aquática', description: 'Passeio de canoa. Observação de jacarés e botos cor-de-rosa.' },
    //     { day: 5, title: 'Retorno', description: 'Última trilha e retorno a Manaus. Voo de volta.' }
    //   ]
    // },
    // {
    //   id: 3,
    //   name: 'Costa do Descobrimento',
    //   location: 'Bahia',
    //   duration: '6 dias / 5 noites',
    //   people: '2 pessoas',
    //   price: 'R$ 2.800',
    //   originalPrice: 'R$ 3.400',
    //   rating: 4.7,
    //   reviews: 156,
    //   image: 'https://images.pexels.com/photos/2425064/pexels-photo-2425064.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    //   gallery: [
    //     'https://images.pexels.com/photos/2425064/pexels-photo-2425064.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    //     'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    //     'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    //     'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    //   ],
    //   description: 'Descubra a rica história e cultura baiana. Praias paradisíacas, centro histórico de Porto Seguro e a deliciosa gastronomia local.',
    //   highlights: [
    //     'Centro histórico de Porto Seguro',
    //     'Praias de Arraial d\'Ajuda',
    //     'Passeio de escuna',
    //     'Gastronomia baiana autêntica',
    //     'Apresentações culturais',
    //     'Compras no mercado de artesanato'
    //   ],
    //   included: [
    //     'Passagens aéreas para Porto Seguro',
    //     'Transfer aeroporto-hotel',
    //     'Hospedagem em resort 4 estrelas',
    //     'Café da manhã incluído',
    //     'City tour histórico',
    //     'Passeio de escuna'
    //   ],
    //   itinerary: [
    //     { day: 1, title: 'Chegada a Porto Seguro', description: 'Check-in no resort. Tarde livre na praia.' },
    //     { day: 2, title: 'Centro Histórico', description: 'City tour pelo centro histórico. Marco do descobrimento.' },
    //     { day: 3, title: 'Arraial d\'Ajuda', description: 'Passeio para Arraial d\'Ajuda. Praia do Mucugê.' },
    //     { day: 4, title: 'Passeio de Escuna', description: 'Navegação pela costa. Paradas para banho de mar.' },
    //     { day: 5, title: 'Cultura e Gastronomia', description: 'Aula de culinária baiana. Show folclórico.' },
    //     { day: 6, title: 'Partida', description: 'Manhã livre. Transfer para o aeroporto.' }
    //   ]
    // },
    // {
    //   id: 4,
    //   name: 'Montanhas Capixabas',
    //   location: 'Espírito Santo',
    //   duration: '4 dias / 3 noites',
    //   people: '3 pessoas',
    //   price: 'R$ 1.900',
    //   originalPrice: 'R$ 2.300',
    //   rating: 4.6,
    //   reviews: 73,
    //   image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    //   gallery: [
    //     'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    //     'https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    //     'https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    //     'https://images.pexels.com/photos/551653/pexels-photo-551653.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    //   ],
    //   description: 'Explore as montanhas capixabas em uma aventura inesquecível. Trilhas, cachoeiras cristalinas e a hospitalidade do interior.',
    //   highlights: [
    //     'Trilhas em montanhas',
    //     'Cachoeiras cristalinas',
    //     'Turismo rural autêntico',
    //     'Gastronomia caseira',
    //     'Artesanato local',
    //     'Paisagens deslumbrantes'
    //   ],
    //   included: [
    //     'Transporte terrestre',
    //     'Hospedagem em pousada rural',
    //     'Todas as refeições',
    //     'Guia local especializado',
    //     'Equipamentos para trilhas',
    //     'Seguro de acidentes pessoais'
    //   ],
    //   itinerary: [
    //     { day: 1, title: 'Chegada às Montanhas', description: 'Viagem para a região serrana. Check-in na pousada.' },
    //     { day: 2, title: 'Trilha da Cachoeira', description: 'Caminhada até cachoeira principal. Banho nas águas cristalinas.' },
    //     { day: 3, title: 'Turismo Rural', description: 'Visita a propriedades rurais. Ordenha e produção de queijos.' },
    //     { day: 4, title: 'Retorno', description: 'Última trilha e retorno.' }
    //   ]
    // },
    // {
    //   id: 5,
    //   name: 'Ilha dos Sonhos',
    //   location: 'Fernando de Noronha',
    //   duration: '5 dias / 4 noites',
    //   people: '2 pessoas',
    //   price: 'R$ 5.400',
    //   originalPrice: 'R$ 6.200',
    //   rating: 5.0,
    //   reviews: 203,
    //   image: 'https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    //   gallery: [
    //     'https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    //     'https://images.pexels.com/photos/390051/surfer-wave-sunset-the-indian-ocean-390051.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    //     'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    //     'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    //   ],
    //   description: 'O paraíso brasileiro te espera! Fernando de Noronha oferece praias paradisíacas, vida marinha exuberante e pôr do sol inesquecível.',
    //   highlights: [
    //     'Mergulho com golfinhos',
    //     'Praias paradisíacas preservadas',
    //     'Observação de aves marinhas',
    //     'Trilhas ecológicas',
    //     'Pôr do sol no Forte dos Remédios',
    //     'Projeto Tamar'
    //   ],
    //   included: [
    //     'Passagens aéreas para Noronha',
    //     'Taxa de preservação ambiental',
    //     'Hospedagem em pousada charmosa',
    //     'Café da manhã incluído',
    //     'Passeio de barco',
    //     'Equipamentos de mergulho'
    //   ],
    //   itinerary: [
    //     { day: 1, title: 'Chegada ao Paraíso', description: 'Chegada a Noronha. Check-in e primeira praia.' },
    //     { day: 2, title: 'Mergulho com Golfinhos', description: 'Mergulho na Baía dos Golfinhos. Tarde na Praia do Sancho.' },
    //     { day: 3, title: 'Trilha e História', description: 'Trilha do Piquinho. Visita ao Forte dos Remédios.' },
    //     { day: 4, title: 'Vida Marinha', description: 'Projeto Tamar. Mergulho livre nas piscinas naturais.' },
    //     { day: 5, title: 'Despedida', description: 'Última manhã na praia. Voo de retorno.' }
    //   ]
    // },
    // {
    //   id: 6,
    //   name: 'Canyon Adventure',
    //   location: 'Rio Grande do Sul',
    //   duration: '3 dias / 2 noites',
    //   people: '4 pessoas',
    //   price: 'R$ 2.100',
    //   originalPrice: 'R$ 2.500',
    //   rating: 4.5,
    //   reviews: 94,
    //   image: 'https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    //   gallery: [
    //     'https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    //     'https://images.pexels.com/photos/551653/pexels-photo-551653.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    //     'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    //     'https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    //   ],
    //   description: 'Aventura radical nos canyons gaúchos. Rapel, trilhas desafiadoras e paisagens de tirar o fôlego para os amantes da adrenalina.',
    //   highlights: [
    //     'Rapel em canyons',
    //     'Trilhas radicais',
    //     'Acampamento selvagem',
    //     'Escalada em rocha',
    //     'Fotografia de paisagens',
    //     'Gastronomia gaúcha'
    //   ],
    //   included: [
    //     'Transporte terrestre',
    //     'Equipamentos de segurança',
    //     'Guia especializado em rapel',
    //     'Hospedagem em camping',
    //     'Refeições campestres',
    //     'Seguro de acidentes'
    //   ],
    //   itinerary: [
    //     { day: 1, title: 'Chegada aos Canyons', description: 'Chegada e montagem do acampamento. Primeira descida de rapel.' },
    //     { day: 2, title: 'Aventura Radical', description: 'Trilha desafiadora. Rapel no canyon principal.' },
    //     { day: 3, title: 'Última Aventura', description: 'Escalada matinal. Desmontagem e retorno.' }
    //   ]
    // }
  ];

  const currentPackage = packages.find(pkg => pkg.id === packageId);

  if (!currentPackage) {
    return <div>Pacote não encontrado</div>;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Inscrição realizada com sucesso! Entraremos em contato para finalizar o pagamento.');
  };

  const tabs = [
    { id: 'overview', label: 'Visão Geral', icon: Heart },
    { id: 'itinerary', label: 'Roteiro', icon: Calendar },
    { id: 'included', label: 'Incluído', icon: Shield },
    { id: 'gallery', label: 'Galeria', icon: Camera }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Header with back button */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={onNavigateHome}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar aos Pacotes</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-96">
        <img
          src={currentPackage.image}
          alt={currentPackage.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-8 left-8 text-white">
          <h1 className="text-4xl font-bold mb-2">{currentPackage.name}</h1>
          <div className="flex items-center space-x-4 text-lg">
            <div className="flex items-center space-x-1">
              <MapPin className="w-5 h-5" />
              <span>{currentPackage.location}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-5 h-5" />
              <span>{currentPackage.duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="w-5 h-5 text-amber-400 fill-current" />
              <span>{currentPackage.rating} ({currentPackage.reviews} avaliações)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="flex space-x-1 mb-8 bg-gray-100 p-1 rounded-lg">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-md transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-white text-sky-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Sobre este pacote</h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {currentPackage.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Destaques da viagem</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentPackage.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span className="text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'itinerary' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Roteiro Detalhado</h2>
                <div className="space-y-6">
                  {currentPackage.itinerary.map((day, index) => (
                    <div key={index} className="flex space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
                        {day.day}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{day.title}</h3>
                        <p className="text-gray-600">{day.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'included' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">O que está incluído</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentPackage.included.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg">
                      <Shield className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'gallery' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Galeria de Fotos</h2>
                <div className="grid grid-cols-2 gap-4">
                  {currentPackage.gallery.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${currentPackage.name} - Foto ${index + 1}`}
                      className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              {/* Price Card */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg mb-6">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-3xl font-bold text-sky-600">{currentPackage.price}</span>
                    <span className="text-gray-500">por pessoa</span>
                  </div>
                  {currentPackage.originalPrice && (
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-lg text-gray-400 line-through">{currentPackage.originalPrice}</span>
                      <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-sm font-semibold">
                        Oferta!
                      </span>
                    </div>
                  )}
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">Destino</span>
                    </div>
                    <span className="font-semibold">{currentPackage.location}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">Duração</span>
                    </div>
                    <span className="font-semibold">{currentPackage.duration}</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">Grupo</span>
                    </div>
                    <span className="font-semibold">{currentPackage.people}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-green-600">
                    <Shield className="w-4 h-4" />
                    <span className="text-sm">Cancelamento gratuito até 48h</span>
                  </div>
                  <div className="flex items-center space-x-2 text-green-600">
                    <Wifi className="w-4 h-4" />
                    <span className="text-sm">Suporte 24h durante a viagem</span>
                  </div>
                  <div className="flex items-center space-x-2 text-green-600">
                    <Car className="w-4 h-4" />
                    <span className="text-sm">Transfers inclusos</span>
                  </div>
                </div>
              </div>

              {/* Booking Form */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Reserve sua viagem</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                

                  <div className="grid grid-cols-2 gap-4">
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <iframe 
                      src="https://docs.google.com/forms/d/e/1FAIpQLScX0RP2e6wJ516aXkNqwaIR6kKFRsWJ91THKEffSPBpFYZ76g/viewform?embedded=true" 
                      width="100%" 
                      height="1000" 
                      frameBorder="0" 
                      marginHeight={0} 
                      marginWidth={0}
                      style={{ display: 'block' }}
                    >
                      Carregando…
                    </iframe>
                  </div>

                  <div>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-lg font-semibold">Total:</span>
                      <span className="text-2xl font-bold text-sky-600">
                        {currentPackage.price} x {formData.travelers}
                      </span>
                    </div>
                    <div className="text-right text-3xl font-bold text-gray-900 mb-4">
                      R$ {(parseFloat(currentPackage.price.replace('R$ ', '').replace('.', '')) * formData.travelers).toLocaleString('pt-BR')}
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-secondary text-white py-4 rounded-lg hover:from-primary-dark hover:to-secondary-dark transition-all duration-300 font-semibold text-lg"
                  >
                    Reservar Agora
                  </button>

                  <div className="text-center">
                    <p className="text-sm text-gray-500">
                      Pagamento seguro • Sem taxas extras • Cancelamento gratuito
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetail;