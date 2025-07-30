// components/ProductCard.jsx
import Link from 'next/link';
import Image from 'next/image';

export default function ProductCard({ product }) {
  return (
    <Link 
      href={product.href} 
      className="group block bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
    >
      {/* Le parent de l'image. La classe 'relative' est CRUCIALE ici. */}
      <div className="relative overflow-hidden h-56">
        {product.imageUrl ? (
          <Image
            src={product.imageUrl}
            alt={`Image pour ${product.title}`}
            fill
            // AJOUT DE LA PROPRIÉTÉ 'sizes' POUR LA PERFORMANCE
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
          <span className="absolute top-2 right-2 z-10 bg-white/90 text-gray-800 text-xs font-semibold px-2 py-1 rounded-full">
            {product.badge}
          </span>
        )}
      </div>
      
      {/* Contenu textuel de la carte */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{product.title}</h3>
        <p className="text-gray-600 text-sm mb-4 h-20">{product.description}</p>
        
        {product.tag && (
          <span className="inline-block bg-[#A4612D] text-white text-xs font-bold px-3 py-1 rounded-full">
            {product.tag}
          </span>
        )}
      </div>
    </Link>
  );
}