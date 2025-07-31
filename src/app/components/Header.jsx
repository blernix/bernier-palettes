// components/Header.jsx
'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

// On centralise les liens pour ne pas les répéter
const navLinks = [
  { name: 'Accueil', href: '#accueil' },
  { name: 'Produits', href: '#produit' },
  { name: 'Service', href: '#service' },
  { name: 'À propos', href: '#a-propos' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);

      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-[#F8F5F1] shadow-md transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo avec lien dynamique */}
        <div>
          <Link href={isHomePage ? "#accueil" : "/#accueil"} onClick={handleLinkClick}>
            <Image
              src="/logobernierremove.png"
              alt="Logo de Bernier Palettes"
              width={160}
              height={45}
              className="h-11 w-auto"
              priority
            />
          </Link>
        </div>

        {/* Menu Desktop avec liens dynamiques */}
        <ul className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={isHomePage ? link.href : `/${link.href}`} className="font-medium text-[#A4612D] hover:opacity-80 transition-opacity">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Bouton Hamburger */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="z-50 w-8 h-8 flex flex-col justify-around relative"
            aria-label="Ouvrir le menu"
          >
            <span className={`block w-full h-0.5 bg-[#A4612D] transition-transform duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
            <span className={`block w-full h-0.5 bg-[#A4612D] transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-full h-0.5 bg-[#A4612D] transition-transform duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Panel du Menu Mobile avec liens dynamiques */}
      <div
        className={`lg:hidden absolute top-0 left-0 w-full h-screen bg-[#F8F5F1] pt-24 px-6 transform transition-transform duration-500 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* --- MODIFICATION ICI --- */}
        <ul className="flex flex-col items-center w-full">
          {navLinks.map((link) => (
            <li key={link.name} className="w-3/5 text-center border-b border-gray-300 last:border-b-0">
              <Link href={isHomePage ? link.href : `/${link.href}`} onClick={handleLinkClick} className="block py-6 text-2xl font-medium text-[#A4612D] hover:opacity-80 transition-opacity">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
