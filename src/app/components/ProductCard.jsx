// components/ProductCard.jsx
import Link from 'next/link';
import Image from 'next/image';

export default function ProductCard({ product }) {
  return (
    <Link 
      href={product.href}
      // A11Y: On ajoute un aria-label pour donner une instruction claire au lecteur d'écran.
      aria-label={`Voir les détails pour ${product.title}`}
      className="group block bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
    >
      <div className="relative overflow-hidden h-56">
        {product.imageUrl ? (
          <Image
            src={product.imageUrl}
            // SEO & A11Y: On utilise le texte alternatif spécifique fourni dans les données.
            alt={product.altText}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gray-300 flex items-center justify-center">
            <span className="text-sm text-gray-500">Image à venir</span>
          </div>
        )}
        
        {product.badge && (
          // A11Y: On utilise une classe "sr-only" (screen-reader only) pour donner du contexte au badge.
          <div className="absolute top-2 right-2 z-10 bg-white/90 text-gray-800 text-xs font-semibold px-2 py-1 rounded-full">
            <span className="sr-only">Mention : </span>
            {product.badge}
          </div>
        )}
      </div>
      
      {/* Contenu textuel de la carte */}
<div className="p-6 relative"> {/* <-- 1. Ajout de "relative" ici */}
  <h3 className="text-xl font-bold text-gray-800 mb-2">{product.title}</h3>
  <p className="text-gray-600 text-sm mb-4 h-20">{product.description}</p>
  
  {product.tag && (
    // 2. Modification de ce bloc
    <div className="absolute -bottom-6 right-3">
      <span className="inline-block bg-[#A4612D] text-white text-xs font-bold px-3 py-1 rounded-full">
        <span className="sr-only">Certification : </span>
        {product.tag}
      </span>
    </div>
  )}
</div>
    </Link>
  );
}
