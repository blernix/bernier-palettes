// components/Hero.jsx
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  const heroImageSrc = "/hero.png"; // Définit ici le chemin de ton image

  return (
    <section id="accueil" className="relative h-screen flex items-center justify-center">
      
      {/* 1. L'image de fond */}
      <div className="absolute inset-0 z-0">
        {heroImageSrc ? (
          // Si une image est définie, on l'affiche
          <Image
            src={heroImageSrc}
            alt="Arrière-plan montrant des palettes en bois"
            fill // NOUVELLE PROPRIÉTÉ, remplace layout="fill"
            style={{ objectFit: 'cover' }} // NOUVELLE FAÇON, remplace objectFit="cover"
            quality={100}
            priority // Indique à Next.js de charger cette image en priorité
          />
        ) : (
          // Sinon, on affiche le placeholder
          <div className="w-full h-full bg-gray-700"></div>
        )}
      </div>

      {/* 2. L'overlay noir semi-transparent */}
      <div className="absolute inset-0 z-10 bg-black opacity-50"></div>

      {/* 3. Le contenu textuel et les boutons */}
      <div className="relative z-20 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Spécialiste de la Palette <br />
          Recyclée Bois en Savoie <span role="img" aria-label="Drapeau suisse">🇨🇭</span>
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
          Depuis plus de 30 ans, <strong>Bernier Palettes</strong> est votre partenaire de confiance pour la fabrication et le recyclage de palettes en bois : palette recyclée, reconditionnée et palette neuve.
        </p>
        <div className="flex flex-col justify-center items-center gap-4  sm:flex-row">
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