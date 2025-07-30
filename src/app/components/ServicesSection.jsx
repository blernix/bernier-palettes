// components/ServicesSection.jsx
'use client'; // On a besoin du client pour gérer l'état de la modale (useState)

import { useState } from 'react';
import ServiceCard from './ServiceCard';
// On importe les icônes de la bibliothèque qu'on vient d'installer
import { ShoppingCart, Truck, Recycle } from 'lucide-react';

// Données des services, incluant le composant icône
const servicesData = [
  {
    icon: ShoppingCart,
    title: 'Achat de palettes',
    description: 'Nous proposons l\'achat de tous types de palettes en bois, neuves ou d\'occasion, pour répondre à vos besoins logistiques spécifiques.',
    details: 'Informations supplémentaires sur l\'achat de palettes...',
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
  // Préparation pour la modale
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleOpenModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
    console.log("Ouvrir la modale pour :", service.title); // Pour tester que le clic fonctionne
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <section id="service" className="bg-white py-20">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#3C3633]" style={{ fontFamily: 'serif' }}>
            Nos Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Des solutions complètes pour la gestion et la valorisation de vos palettes en bois.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={index} 
              service={service} 
              onCardClick={handleOpenModal} 
            />
          ))}
        </div>
        
        {/* LA MODALE SERA INSÉRÉE ICI */}
        {/* Pour l'instant, on peut juste voir si l'état change bien */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
             <div className="bg-white p-8 rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-4">{selectedService.title}</h3>
                <p>{selectedService.details}</p>
                <button onClick={handleCloseModal} className="mt-6 bg-red-500 text-white px-4 py-2 rounded">
                  Fermer
                </button>
             </div>
          </div>
        )}

      </div>
    </section>
  );
}