// components/AboutSection.jsx
import Image from 'next/image';
import { ShieldCheck, Leaf, Clock } from 'lucide-react';

// Liste des points forts pour les afficher proprement
const features = [
  {
    icon: ShieldCheck,
    title: 'Qualité garantie',
    description: 'Des palettes robustes et conformes aux normes en vigueur, stockage au sec à couvert (2000m³)',
  },
  {
    icon: Leaf,
    title: 'Développement durable',
    description: 'Engagement fort pour le recyclage et la préservation des ressources',
  },
  {
    icon: Clock,
    title: 'Livraison rapide',
    description: 'Respect des délais et service de livraison efficace. Possibilité de livrer à J+1 grâce à notre propre flotte de camions de livraisons (Porteur, Semi, Empirol)',
  },
];

// SEO: On remplace les textes 'alt' génériques par des descriptions uniques et riches en mots-clés.
const images = [
  { src: '/stockpalettes.png', alt: 'Vue intérieure d\'un entrepôt Bernier Palettes avec des piles de palettes en bois bien rangées.' },
  { src: '/hero.png', alt: 'Camion de livraison Bernier Palettes stationné dans la cour de l\'entrepôt en Savoie.' },
  { src: '/chargementpalettes.png', alt: 'Employé utilisant un chariot élévateur pour charger des palettes en bois dans un camion.' },
  { src: '/camionpalettes.png', alt: 'Camion Bernier Palettes chargé de palettes en bois, prêt pour une livraison dans la région de Chambéry.' },
];


export default function AboutSection() {
  return (
    // A11Y: On lie la section à son titre pour une meilleure navigation au lecteur d'écran.
    <section id="a-propos" className="bg-white py-20" aria-labelledby="about-heading">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* COLONNE DE GAUCHE : Texte */}
          <div>
            <h2 id="about-heading" className="text-4xl font-bold text-[#3C3633] mb-6" style={{ fontFamily: 'serif' }}>
              À propos de Bernier Palettes
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>Fondée il y a plus de 30 ans, Bernier Palettes s'est imposée comme un acteur incontournable en Savoie dans le secteur de la fabrication et du recyclage de palettes en bois.</p>
              <p>Notre engagement envers la qualité et le développement durable nous a permis de bâtir des relations durables avec nos clients à travers toute la France.</p>
              <p>Chez Bernier Palettes, nous combinons savoir-faire artisanal et techniques modernes pour vous offrir des produits qui répondent aux exigences les plus strictes de l'industrie.</p>
              <p>Nous réalisons la collecte, le tri, l'achat, la vente, la remise en conformité et le reconditionnement des palettes d'occasions.</p>
              <p>Nous pouvons vous garantir un approvisionnement continu et un service de qualité permanent afin de répondre à vos besoins.</p>
            </div>
            
            {/* Liste des points forts avec icônes */}
            <div className="mt-8 space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    {/* A11Y: Les icônes sont décoratives, on les cache aux lecteurs d'écran. */}
                    <Icon className="h-8 w-8 text-[#2A5E45] flex-shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      {/* A11Y & SEO: On utilise un <h3> car c'est un sous-titre de "À propos" (<h2>). */}
                      <h3 className="font-bold text-gray-800">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* COLONNE DE DROITE : Grille d'images */}
          <div className="grid grid-cols-2 gap-4">
            {images.map((image, index) => (
              <div key={index} className="relative aspect-square rounded-lg overflow-hidden shadow-md">
                {image.src ? (
                  <Image
                    src={image.src}
                    // SEO & A11Y: On utilise les nouveaux textes 'alt' plus descriptifs.
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
