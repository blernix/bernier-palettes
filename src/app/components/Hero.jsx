import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  const heroImageSrc = "/hero.png"; // Définit ici le chemin de ton image

  return (
    <section id="accueil" className="relative h-screen flex items-center justify-center">
      
      {/* 1. L'image de fond */}
      <div className="absolute inset-0 z-0">
        {heroImageSrc ? (
          <Image
            src={heroImageSrc}
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
        
        {/* --- SEO: Titre H1 mis à jour avec le bon positionnement du drapeau --- */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Palette Bois en Savoie : Achat, Revalorisation & Sur-Mesure
          {/* A11Y & SEO: Le drapeau est maintenant "inline" avec le texte */}
          <Image 
            src="/savoie.svg" 
            alt="Drapeau de la Savoie" 
            width={50} 
            height={50} 
            className="inline-block align-middle ml-3 h-10 w-10 md:h-12 md:w-12"
          />
        </h1>
        
        {/* --- SEO: Paragraphe mis à jour --- */}
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
          Depuis plus de 30 ans, <strong>Bernier Palettes</strong> est votre fournisseur de confiance près de <strong>Chambéry</strong> pour l'achat et la revalorisation de palettes en bois neuves, d'occasion et reconditionnées.
        </p>
        
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

