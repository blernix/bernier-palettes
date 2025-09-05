// components/ContactSection.jsx

// Ce composant n'a plus besoin d'être un 'use client'
import { Phone, Mail, MapPin } from 'lucide-react';
import ContactForm from './ContactForm';

// Les données restent structurées pour une maintenance facile.
const contactDetails = [
  { icon: Phone, title: 'Téléphone', value: '04 79 44 21 93', href: 'tel:+33479442193' },
  { icon: Mail, title: 'Email', value: 'bernier.palettes@gmail.com', href: 'mailto:bernier.palettes@gmail.com' },
  { icon: MapPin, title: 'Adresse', value: '2 RD 1006, Les Iles\n73390 Châteauneuf, France' },
];

// --- MISE À JOUR DES HORAIRES ---
const openingHours = [
  { day: 'Lundi - Vendredi (Hiver)', hours: '8h00 - 17h00' },
  { day: 'Lundi - Vendredi (Été)', hours: '6h00 - 16h00' },
  { day: 'Samedi & Dimanche', hours: 'Fermé' },
];

export default function ContactSection() {
  return (
    // La structure sémantique et A11Y de la section est conservée.
    <section id="contact" className="bg-[#EDEAE5] py-20" aria-labelledby="contact-heading">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-12">
          {/* SEO (Contenu): Le titre est enrichi pour être plus spécifique. */}
          <h2 id="contact-heading" className="text-4xl font-bold text-black font-serif">
            Contactez-nous pour un Devis en Savoie
          </h2>
          {/* SEO (Contenu): Le paragraphe est reformulé pour inclure des mots-clés locaux et transactionnels. */}
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            Pour toute demande d'information ou pour obtenir un devis rapide pour vos palettes en bois à Chambéry, Albertville et dans toute la Savoie, notre équipe est à votre disposition.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* --- CORRECTION DE LA CLASSE ICI --- */}
          <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-lg">
            <ContactForm />
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              {/* A11Y & SEO: Un <h3> est sémantiquement correct. */}
              <h3 className="text-2xl font-bold text-gray-800 mb-6 font-serif">Coordonnées</h3>
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
                      {/* A11Y: On cache l'icône décorative. */}
                      <Icon className="h-6 w-6 text-[#A4612D] flex-shrink-0 mt-1" aria-hidden="true" />
                      <div>
                        {/* A11Y: Un <h4> est correct. */}
                        <h4 className="font-semibold text-gray-700">{detail.title}</h4>
                        {content}
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="mt-6 rounded-md overflow-hidden border border-gray-200">
                <iframe 
                  // A11Y: Le titre est essentiel.
                  title="Carte de localisation de Bernier Palettes à Châteauneuf"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.5358404474223!2d6.18358137652711!3d45.55966207107568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478bb7a440cd2a61%3A0xdad0152b424e6a77!2sLes%20Iles%2C%202%20D1006%2C%2073390%20Ch%C3%A2teauneuf!5e0!3m2!1sfr!2sfr!4v1753629777744!5m2!1sfr!2sfr" 
                  className="w-full h-48 border-0"
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 font-serif">Horaires d'ouverture</h3>
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

