// components/Footer.jsx
'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Instagram, Linkedin } from 'lucide-react';

const navLinks = [
  { name: 'Accueil', href: '#accueil' },
  { name: 'Nos produits', href: '#produit' },
  { name: 'Nos services', href: '#service' },
  { name: 'À propos', href: '#a-propos' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    // A11Y: On ajoute un aria-label pour identifier clairement cette section en tant que pied de page principal.
    <footer className="bg-[#3C3633] text-gray-300" aria-label="Pied de page">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Bernier Palettes</h3>
            <p className="text-sm">
              Spécialiste de la palette en bois recyclée depuis plus de 30 ans en Savoie.
            </p>
            <div className="flex space-x-4">
              {/* A11Y: On rend le label plus descriptif. */}
              <a href="#" aria-label="Visitez notre page Instagram" className="hover:text-white transition-colors">
                <Instagram size={20} aria-hidden="true" />
              </a>
              <a href="#" aria-label="Visitez notre profil LinkedIn" className="hover:text-white transition-colors">
                <Linkedin size={20} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Liens rapides</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={isHomePage ? link.href : `/${link.href}`} className="text-sm hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Contact</h3>
            <div className="text-sm">
              <p>2 RD 1006, Les Iles</p>
              <p>73390 Châteauneuf, France</p>
              {/* UX: On rend le numéro de téléphone et l'email cliquables. */}
              <p className="mt-2">
                Téléphone: <a href="tel:+33479442193" className="hover:text-white hover:underline">04 79 44 21 93</a>
              </p>
              <p>
                Email: <a href="mailto:bernier.palettes@gmail.com" className="hover:text-white hover:underline">bernier.palettes@gmail.com</a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm space-y-2 md:space-y-0 md:flex md:justify-between md:items-center">
          <p>
            &copy; {currentYear} Bernier Palettes. Tous droits réservés.
          </p>
          <Link href="/politique-de-confidentialite" className="hover:text-white underline transition-colors">
            Politique de Confidentialité
          </Link>
        </div>
      </div>
    </footer>
  );
}
