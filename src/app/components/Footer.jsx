'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image'; // On importe le composant Image pour le logo

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
    <footer className="bg-[#3C3633] text-gray-300" aria-label="Pied de page">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Bernier Palettes</h3>
            <p className="text-sm">
              Spécialiste de la palette en bois revalorisée depuis plus de 30 ans en Savoie.
            </p>
            {/* --- MODIFICATION ICI --- */}
            <div className="pt-2">
              <a 
                href="https://www.reseau-entreprendre.org/savoie/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Visitez le site de Réseau Entreprendre Savoie, partenaire de Bernier Palettes" 
                className="hover:opacity-80 transition-opacity"
              >
                {/* Assurez-vous que le nom du fichier SVG est correct dans votre dossier /public */}
                <Image
                  src="/reseau-entreprendre-logo.svg" 
                  alt="Logo de Réseau Entreprendre Savoie"
                  width={150}
                  height={40}
                  className="h-auto"
                />
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
              <p className="mt-2">
                Téléphone: <a href="tel:+33479442193" className="hover:text-white hover:underline">04 79 44 21 93</a>
              </p>
              <p>
                Email: <a href="mailto:commercial@bernier-palettes.com" className="hover:text-white hover:underline">commercial@bernier-palettes.com</a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm space-y-4 md:space-y-0 md:flex md:justify-between md:items-center">
          {/* --- MODIFICATION ICI --- */}
          <p>
            &copy; {currentYear} Bernier Palettes - 
            <a href="https://killian-lecrut.com" target="_blank" rel="noopener noreferrer" className="ml-1 hover:text-white underline transition-colors">
              Site réalisé par Killian Lecrut
            </a>
          </p>
          <nav className="flex justify-center gap-x-6" aria-label="Navigation légale">
            <Link href="/politique-de-confidentialite" className="hover:text-white underline transition-colors">
              Politique de Confidentialité
            </Link>
            <Link href="/mentions-legales" className="hover:text-white underline transition-colors">
              Mentions Légales
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
