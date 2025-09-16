'use client';

import { useState } from 'react';
import ServiceCard from './ServiceCard';
import Modal from './Modal'; // On importe notre composant Modal réutilisable
import { ShoppingCart, Truck, Recycle } from 'lucide-react';

// SEO (Contenu): Les descriptions sont enrichies avec des mots-clés pertinents (Savoie, écoresponsable...).
const servicesData = [
  {
    icon: ShoppingCart,
    title: 'Achat de palettes',
    description: "Nous rachetons vos palettes en bois, neuves ou d'occasion, pour répondre à tous vos besoins logistiques en Savoie et alentours.",
    details: "Que vous ayez des lots de palettes standards, Europe ou hors-côtes, nous proposons une offre de rachat compétitive. Contactez-nous pour une évaluation.",
  },
  {
    icon: Truck,
    title: 'Tournée de collecte de palettes',
    description: 'Optimisez la gestion de vos déchets avec notre service de collecte de palettes usagées directement sur votre site à Chambéry et dans toute la région.',
    details: 'Nous planifions des tournées de collecte régulières ou sur demande pour enlever vos palettes inutilisées, vous faisant gagner de l\'espace et du temps.',
  },
  {
    icon: Recycle,
    title: 'Broyage et revalorisation',
    description: 'Notre solution écoresponsable pour les palettes non-réparables. Nous assurons le broyage et la valorisation de vos déchets de bois.',
    details: 'Dans le cadre de notre engagement pour l\'économie circulaire, les palettes trop endommagées sont transformées en copeaux de bois pour le chauffage ou d\'autres usages industriels.',
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
          {/* SEO & A11Y: On donne un id au titre pour le lier à la section. */}
          <h2 id="services-heading" className="text-4xl font-bold text-[#3C3333]">
            Nos Services de Gestion de Palettes
          </h2>
          <br></br>
          {/* SEO (Contenu): Paragraphe optimisé avec des mots-clés stratégiques. */}
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez nos solutions complètes pour la gestion de vos palettes en bois en Savoie. De l'achat à la collecte et à la réhabilitation, nous valorisons vos ressources dans une démarche d'économie circulaire.
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
        
        {/* A11Y: On utilise notre composant Modal accessible, en lui passant un titre. */}
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} title={selectedService?.title}>
          {selectedService && (
            <div className="text-center">
              {/* Le titre est maintenant géré par la modale, on l'a retiré d'ici. */}
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

