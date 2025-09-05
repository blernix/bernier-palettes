import Link from 'next/link';
import Image from 'next/image';

export default function ProductCard({ product }) {
  return (
    <Link 
      href={product.href} 
      // Layout: On transforme la carte en conteneur flex vertical pour un meilleur contrôle de la hauteur.
      className="group flex flex-col bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
      // A11Y: On donne un label clair et unique à chaque lien pour les lecteurs d'écran.
      aria-label={`Voir les détails pour ${product.title}`}
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
          // A11Y: On ajoute un texte caché pour donner du contexte au badge.
          <div className="absolute top-2 right-2 z-10 bg-[#A4612D] text-white text-xs font-semibold px-2 py-1 rounded-full">
            <span className="sr-only">Mention : </span>
            {product.badge}
          </div>
        )}
      </div>
      
      {/* Layout: Ce conteneur grandit pour remplir l'espace disponible dans la carte. */}
      <div className="p-6 relative flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{product.title}</h3>
        {/* Layout: Le paragraphe grandit pour occuper l'espace, et on retire la hauteur fixe. */}
        <p className="text-gray-600 text-sm mb-4 flex-grow">{product.description}</p>
        
        {product.tag && (
          // Layout: mt-auto pousse le tag tout en bas de la carte, quel que soit le contenu.
          <div className="mt-auto text-right">
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

