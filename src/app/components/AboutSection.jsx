import Image from 'next/image';
import { ShieldCheck, Leaf, Clock } from 'lucide-react';

// SEO (Contenu): Les descriptions des points forts sont enrichies avec des mots-clés locaux.
const features = [
  {
    icon: ShieldCheck,
    title: 'Qualité garantie',
    description: 'Nous fournissons des palettes robustes et conformes aux normes en vigueur (EPAL, NIMP15), stockées au sec dans notre entrepôt de 2000m³.',
  },
  {
    icon: Leaf,
    title: 'Développement durable',
    description: 'Notre engagement pour la réhabilitation et la valorisation des palettes en bois est au cœur de notre démarche d\'économie circulaire en Savoie.',
  },
  {
    icon: Clock,
    title: 'Livraison rapide en Savoie',
    description: 'Respect des délais et service de livraison efficace, avec la possibilité de livrer à J+1 dans toute la région grâce à notre propre flotte de camions.',
  },
];

// SEO: Les textes alternatifs sont optimisés avec des descriptions précises et des mots-clés locaux.
const images = [
  { src: '/stockpalettes.png', alt: "Vue intérieure de notre entrepôt de Châteauneuf (73) avec des piles de palettes en bois revalorisée." },
  { src: '/hero.png', alt: "Camion de livraison Bernier Palettes prêt pour une tournée de collecte en Savoie." },
  { src: '/chargementpalettes.png', alt: "Employé qualifié assurant le chargement de palettes Europe EPAL sur un camion." },
  { src: '/camionpalettes.png', alt: "Flotte de camions Bernier Palettes spécialisée dans la livraison de palettes sur-mesure à Chambéry et Albertville." },
];


export default function AboutSection() {
  return (
    // A11Y: On lie la section à son titre.
    <section id="a-propos" className="bg-white py-20" aria-labelledby="about-heading">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 id="about-heading" className="text-4xl font-bold text-[#3C3633] mb-6">
              Bernier Palettes : Votre Fournisseur en Savoie depuis 30 ans
            </h2>
            {/* SEO (Contenu): Le texte est reformulé pour intégrer naturellement les mots-clés du rapport. */}
            <div className="space-y-4 text-gray-600">
              <p>Fondée il y a plus de 30 ans, notre entreprise s'est imposée comme un fournisseur de palettes incontournable en Savoie. Spécialistes de la fabrication et à la revalorisation de palettes en bois, nous sommes basés à Châteauneuf, près de Chambéry.</p>
              <p>Notre engagement envers la qualité nous a permis de devenir le partenaire de confiance de nombreuses entreprises pour leurs solutions logistiques. Nous combinons un savoir-faire artisanal avec des techniques modernes pour vous offrir des produits fiables.</p>
              <p>Nous maîtrisons toute la chaîne de valeur : de la collecte et le tri, à l'achat, la vente et le reconditionnement de palettes d'occasion, dans une démarche d'économie circulaire.</p>
            </div>
            
            <div className="mt-8 space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    {/* A11Y: Les icônes sont décoratives, on les cache. */}
                    <Icon className="h-8 w-8 text-[#2A5E45] flex-shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      {/* A11Y & SEO: On utilise un <h3>. */}
                      <h3 className="font-bold text-gray-800">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {images.map((image, index) => (
              <div key={index} className="relative aspect-square rounded-lg overflow-hidden shadow-md">
                {image.src ? (
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(min-width: 1024px) 25vw, 50vw"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-xs text-gray-400">Image</span>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

