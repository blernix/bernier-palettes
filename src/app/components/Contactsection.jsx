// components/ContactSection.jsx
'use client'; // IMPORTANT : On passe en composant client pour gérer l'état

import { useState } from 'react';
import { Phone, Mail, MapPin, Map } from 'lucide-react';
import ContactForm from './ContactForm';

// Données pour les coordonnées et les horaires (inchangées)
const contactDetails = [
  { icon: Phone, title: 'Téléphone', value: '04 79 44 21 93', href: 'tel:+33479442193' },
  { icon: Mail, title: 'Email', value: 'bernier.palettes@gmail.com', href: 'mailto:bernier.palettes@gmail.com' },
  { icon: MapPin, title: 'Adresse', value: '2 RD 1006, Les Iles\n73390 Châteauneuf, France' },
];

const openingHours = [
  { day: 'Lundi - Vendredi', hours: '8h00 - 17h00' },
  { day: 'Samedi', hours: 'Fermé' },
  { day: 'Dimanche', hours: 'Fermé' },
];

export default function ContactSection() {
  // Nouvel état pour gérer le consentement de la carte
  const [mapAccepted, setMapAccepted] = useState(false);

  return (
    <section id="contact" className="bg-[#EDEAE5] py-20">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#3C3633]" style={{ fontFamily: 'serif' }}>
            Contactez-nous
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pour toute demande d'information ou de devis, n'hésitez pas à nous contacter. Notre équipe est à votre disposition.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-lg">
            <ContactForm />
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Coordonnées</h3>
              <div className="space-y-4">
                {contactDetails.map((detail, index) => {
                  const Icon = detail.icon;
                  const content = detail.href ? (
                    <a href={detail.href} className="text-gray-600 whitespace-pre-line hover:text-[#A4612D] hover:underline transition-colors">
                      {detail.value}
                    </a>
                  ) : (
                    <p className="text-gray-600 whitespace-pre-line">{detail.value}</p>
                  );
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <Icon className="h-6 w-6 text-[#A4612D] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-700">{detail.title}</h4>
                        {content}
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* --- BLOC GOOGLE MAPS MIS À JOUR POUR LE RGPD --- */}
              <div className="mt-6 rounded-md overflow-hidden border border-gray-200">
                {mapAccepted ? (
                  // Si l'utilisateur a accepté, on affiche la carte
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.5358404474223!2d6.18358137652711!3d45.55966207107568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478bb7a440cd2a61%3A0xdad0152b424e6a77!2sLes%20Iles%2C%202%20D1006%2C%2073390%20Ch%C3%A2teauneuf!5e0!3m2!1sfr!2sfr!4v1753629777744!5m2!1sfr!2sfr" 
                    className="w-full h-48 border-0"
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                  </iframe>
                ) : (
                  // Sinon, on affiche le placeholder avec le bouton de consentement
                  <div className="relative w-full h-48 bg-gray-300">
                    <img 
                      src="https://placehold.co/400x300/e0e0e0/636363?text=Aper%C3%A7u+de+la+carte" 
                      alt="Aperçu de la carte de localisation de Bernier Palettes" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-4">
                      {/* --- PHRASE MISE À JOUR AVEC LE LIEN --- */}
                      <p className="text-white text-sm mb-3">
                        En affichant la carte, vous acceptez le dépôt de cookies par Google. Pour en savoir plus, consultez la  
                        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-200">
                           politique de confidentialité de Google
                        </a>.
                      </p>
                      <button 
                        onClick={() => setMapAccepted(true)}
                        className="bg-white hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-md flex items-center gap-2 transition-colors"
                      >
                        <Map size={16} />
                        Afficher la carte
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Horaires d'ouverture</h3>
              <div className="space-y-3">
                {openingHours.map((item, index) => (
                  <div key={index} className="flex justify-between text-gray-600">
                    <span>{item.day}</span>
                    <span className={item.hours === 'Fermé' ? 'font-semibold text-red-500' : 'font-semibold'}>{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
