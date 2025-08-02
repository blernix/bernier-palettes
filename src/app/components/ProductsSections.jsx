// components/ProductsSection.jsx
import ProductCard from './ProductCard';

// SEO: On enrichit nos données avec des textes alternatifs uniques et descriptifs pour chaque image.
const productsData = [
  {
    title: 'Palette Standard Recyclée',
    description: 'Palette en bois robuste et polyvalente pour une utilisation quotidienne dans différents secteurs industriels.',
    href: '/produits/palette-standard-recyclee',
    imageUrl: '/palettesstandart.png',
    altText: 'Ouvrier assemblant une palette en bois standard recyclée dans un atelier.',
  },
  {
    title: 'Palette Europe (EPAL) Recyclée',
    description: 'Palette aux dimensions européennes standardisées, idéale pour le transport international de marchandises.',
    href: '/produits/palette-europe-epal-recyclee',
    badge: 'Réparateur agréé EPAL',
    tag: 'Certification EPAL',
    imageUrl: '/paletteeurope.png',
    altText: 'Gros plan sur une palette Europe EPAL en bois de haute qualité.',
  },
  {
    title: 'Palette sur-mesure Neuve et Recyclée',
    description: 'Solutions sur mesure adaptées à vos besoins spécifiques en termes de dimensions et de capacité de charge.',
    href: '/produits/palette-sur-mesure',
    imageUrl: '/palettesmesure.png',
    altText: 'Machine industrielle fabriquant une palette en bois sur-mesure.',
  },
  {
    title: 'Autres types de Palettes et Accessoires',
    description: "Palettes moulées pour l'export, palettes plastiques et réhausses de palettes pour des besoins spécifiques.",
    href: '/produits/autres-palettes-accessoires',
    imageUrl: '/autrespalettes.png',
    altText: "Vue d'un stock de palettes en bois variées prêtes à l'expédition.",
  },
];

export default function ProductsSection() {
  return (
    // A11Y: On lie la section à son titre pour que les lecteurs d'écran puissent annoncer le nom de la section.
    <section id="produit" className="bg-[#EDEAE5] py-20" aria-labelledby="products-heading">
      <div className="container relative mx-auto px-6">
        
        <div className="text-center mb-12">
          {/* A11Y & SEO: On donne un id au titre pour le lier à la section. */}
          <h2 id="products-heading" className="text-4xl font-bold text-[#3C3633] mb-4" style={{ fontFamily: 'serif' }}>
            Nos produits
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Des solutions de haute qualité adaptées à tous vos besoins en matière de palettes en bois.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {productsData.map((product) => (
            // A11Y: Utiliser le titre comme clé est plus stable que l'index si la liste change.
            <ProductCard key={product.title} product={product} />
          ))}
        </div>
        
      </div>
    </section>
  );
}
