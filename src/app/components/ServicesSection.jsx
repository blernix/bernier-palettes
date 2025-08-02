// components/ServicesSection.jsx
'use client';

import { useState } from 'react';
import ServiceCard from './ServiceCard';
import Modal from './Modal'; // On importe notre composant Modal réutilisable
import { ShoppingCart, Truck, Recycle } from 'lucide-react';

const servicesData = [
  {
    icon: ShoppingCart,
    title: 'Achat de palettes',
    description: "Nous proposons l'achat de tous types de palettes en bois, neuves ou d'occasion, pour répondre à vos besoins logistiques spécifiques.",
    details: "Informations supplémentaires sur l'achat de palettes...",
  },
  {
    icon: Truck,
    title: 'Tournée de collecte de palettes',
    description: 'Service régulier de collecte de vos palettes usagées directement sur votre site, optimisant ainsi votre gestion des déchets industriels.',
    details: 'Informations supplémentaires sur la collecte...',
  },
  {
    icon: Recycle,
    title: 'Broyage de palette non-réparable',
    description: 'Solution écologique pour le traitement des palettes endommagées grâce à notre service de broyage et valorisation des déchets de bois.',
    details: 'Informations supplémentaires sur le broyage...',
  },
];

export default function ServicesSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleOpenModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // On attend la fin de l'animation de fermeture pour vider les données
    setTimeout(() => {
      setSelectedService(null);
    }, 300);
  };

  return (
    // A11Y: On lie la section à son titre.
    <section id="service" className="bg-white py-20" aria-labelledby="services-heading">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-12">
          <h2 id="services-heading" className="text-4xl font-bold text-[#3C3633]" style={{ fontFamily: 'serif' }}>
            Nos Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Des solutions complètes pour la gestion et la valorisation de vos palettes en bois.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceCard 
              key={service.title} 
              service={service} 
              onCardClick={handleOpenModal} 
            />
          ))}
        </div>
        
        {/* A11Y: On utilise notre composant Modal accessible. */}
          <Modal isOpen={isModalOpen} onClose={handleCloseModal} title={selectedService?.title}>
          {selectedService && (
            <div className="text-center">
              <p className="mt-2">{selectedService.details}</p>
              <button onClick={handleCloseModal} className="mt-6 bg-[#A4612D] hover:bg-opacity-80 text-white font-bold py-2 px-6 rounded-md transition-colors">
                Fermer
              </button>
            </div>
          )}
        </Modal>

      </div>
    </section>
  );
}
