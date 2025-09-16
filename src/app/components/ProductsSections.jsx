import ProductCard from './ProductCard';

// SEO: On enrichit nos données avec des textes alternatifs uniques et descriptifs pour chaque image.
// SEO (Contenu): Les descriptions sont maintenant optimisées avec des mots-clés locaux et transactionnels.
const productsData = [
  {
    title: 'Palette Standard Revalorisée',
    description: "Notre palette standard revalorisée, la solution économique et fiable pour vos besoins logistiques à Chambéry et en Savoie. Disponible en plusieurs charges.",
    href: '/produits/palette-standard-revalorisee',
    imageUrl: '/palettesstandart.png',
    altText: 'Ouvrier assemblant une palette en bois standard recyclée dans un atelier à Chambéry.',
  },
  {
    title: 'Palette Europe (EPAL) Revalorisée',
    description: "Conforme aux normes européennes, notre palette Europe EPAL d'occasion est idéale pour le transport international. En tant que réparateur agréé, nous garantissons la qualité.",
    href: '/produits/palette-europe-epal-revalorisee',
    badge: 'Réparateur agréé EPAL',
    tag: 'Certification EPAL',
    imageUrl: '/paletteeurope.png',
    altText: "Gros plan sur une palette Europe EPAL en bois de haute qualité, prête pour l'expédition.",
  },
  {
    title: 'Palette sur-mesure Neuve et Revalorisée',
    description: "Un besoin spécifique ? Nous fabriquons votre palette sur-mesure à Châteauneuf (73) pour répondre à vos exigences de dimensions et de charge.",
    href: '/produits/palette-sur-mesure',
    imageUrl: '/palettesmesure.png',
    altText: "Machine industrielle fabriquant une palette en bois sur-mesure dans l'usine de Bernier Palettes en Savoie.",
  },
  {
    title: 'Autres types de Palettes et Accessoires',
    description: "Explorez nos solutions spécialisées : palettes moulées pour l'export (NIMP15), palettes plastiques et réhausses pour tous vos besoins en Savoie.",
    href: '/produits/autres-palettes-accessoires',
    imageUrl: '/autrespalettes.png',
    altText: "Vue d'un stock de différents types de palettes en bois, incluant des palettes moulées, dans un entrepôt.",
  },
];

export default function ProductsSection() {
  return (
    // A11Y: On lie la section à son titre pour que les lecteurs d'écran puissent annoncer le nom de la section.
    <section id="produit" className="bg-[#EDEAE5] py-20" aria-labelledby="products-heading">
      <div className="container relative mx-auto px-6">
        
        <div className="text-center mb-12">
          {/* SEO (Contenu): Titre optimisé avec des mots-clés clés. */}
          <h2 id="products-heading" className="text-4xl font-bold text-[#3C3333] mb-4">
            Nos Palettes en Bois : Achat, Vente et Solutions sur Mesure
          </h2>
          {/* SEO (Contenu): Paragraphe optimisé avec des mots-clés locaux. */}
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez notre gamme complète de palettes en bois neuves, d'occasion et revalorisées, disponibles à la vente et à la livraison dans toute la Savoie, de Chambéry à Albertville.
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

