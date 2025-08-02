// components/Hero.jsx
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  const heroImageSrc = "/hero.png"; // Définit ici le chemin de ton image

  return (
    // A11Y: L'utilisation de <section> avec un id est une bonne pratique pour les ancres.
    <section id="accueil" className="relative h-screen flex items-center justify-center">
      
      {/* 1. L'image de fond */}
      <div className="absolute inset-0 z-0">
        {heroImageSrc ? (
          <Image
            src={heroImageSrc}
            // SEO & A11Y: Le texte alternatif est crucial. Il doit décrire l'image précisément pour les moteurs de recherche et les lecteurs d'écran.
            alt="Entrepôt de Bernier Palettes avec un stock important de palettes en bois et un camion de livraison prêt à partir."
            fill
            style={{ objectFit: 'cover' }}
            quality={100}
            priority
          />
        ) : (
          <div className="w-full h-full bg-gray-700"></div>
        )}
      </div>

      {/* 2. L'overlay noir semi-transparent */}
      <div className="absolute inset-0 z-10 bg-black opacity-50"></div>

      {/* 3. Le contenu textuel et les boutons */}
      <div className="relative z-20 text-center text-white px-4">
        {/* SEO: Le <h1> est le titre le plus important de la page. Celui-ci est excellent car il contient les mots-clés principaux (Palette, Recyclée, Bois, Savoie). */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Spécialiste de la Palette <br />
          Recyclée Bois en Savoie
        </h1>
        {/* A11Y: Le paragraphe est bien structuré. L'utilisation de <strong> est sémantiquement correcte pour mettre l'accent sur le nom de l'entreprise. */}
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
          Depuis plus de 30 ans, <strong>Bernier Palettes</strong> est votre partenaire de confiance pour la fabrication et le recyclage de palettes en bois : palette recyclée, reconditionnée et palette neuve.
        </p>
        {/* La structure des boutons est déjà bien responsive. */}
        <div className="flex flex-col items-center gap-4 md:flex-row justify-center">
            <Link href="#produit" className="bg-[#A4612D]  hover:bg-opacity-80 text-white font-bold py-3 px-6 rounded transition-colors duration-300">
            Découvrir nos produits
          </Link>
          <Link href="#contact" className="bg-[#2A5E45] hover:bg-opacity-80 text-white font-bold py-3 px-6 rounded transition-colors duration-300">
            Contactez-nous
          </Link>
        </div>
      </div>
    </section>
  );
}
