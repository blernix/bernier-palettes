// components/Footer.jsx
'use client'; // Le composant doit être un composant client pour utiliser le hook usePathname

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
    <footer className="bg-[#3C3633] text-gray-300">
      <div className="container mx-auto px-6 py-12">
        {/* Grille à trois colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Colonne 1: Bernier Palettes & Socials */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Bernier Palettes</h3>
            <p className="text-sm">
              Spécialiste de la palette en bois recyclée depuis plus de 30 ans en Savoie.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Instagram" className="hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Colonne 2: Liens rapides */}
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

          {/* Colonne 3: Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Contact</h3>
            <div className="text-sm">
              <p>2 RD 1006, Les Iles</p>
              <p>73390 Châteauneuf, France</p>
              <p className="mt-2">Téléphone: 04 79 44 21 93</p>
              <p>Email: bernier.palettes@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Ligne de séparation et copyright MISE À JOUR */}
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
