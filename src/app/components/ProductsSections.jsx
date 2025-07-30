// components/ProductsSection.jsx
import ProductCard from './ProductCard';

// On définit les données des produits ici pour garder le code propre
const productsData = [
  {
    title: 'Palette Standard Recyclée',
    description: 'Palette en bois robuste et polyvalente pour une utilisation quotidienne dans différents secteurs industriels.',
    href: '/produits/palette-standard-recyclee',
    imageUrl: '/palettesstandart.png', // à remplir plus tard
  },
  {
    title: 'Palette Europe (EPAL) Recyclée',
    description: 'Palette aux dimensions européennes standardisées, idéale pour le transport international de marchandises.',
    href: '/produits/palette-europe-epal-recyclee',
    badge: 'Réparateur agréé EPAL',
    tag: 'Certification EPAL',
    imageUrl: '/paletteeurope.png',
  },
  {
    title: 'Palette sur-mesure Neuve et Recyclée',
    description: 'Solutions sur mesure adaptées à vos besoins spécifiques en termes de dimensions et de capacité de charge.',
    href: '/produits/palette-sur-mesure',
    imageUrl: '/palettesmesure.png',
  },
  {
    title: 'Autres types de Palettes et Accessoires',
    description: 'Palettes moulées pour l\'export, palettes plastiques et réhausses de palettes pour des besoins spécifiques.',
    href: '/produits/autres-palettes-accessoires',
    imageUrl: '/autrespalettes.png',
  },
];

export default function ProductsSection() {
  return (
    <section id="produit" className="bg-[#EDEAE5] py-20">
      <div className="container relative mx-auto px-6">
        
        {/* Titre de la section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#3C3633] mb-4" style={{ fontFamily: 'serif' }}>
            Nos produits
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Des solutions de haute qualité adaptées à tous vos besoins en matière de palettes en bois.
          </p>
        </div>

        {/* Grille responsive pour les cartes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {productsData.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
        
      </div>
    </section>
  );
}