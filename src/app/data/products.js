// data/products.js

export const productsDetails = [
  {
    slug: 'palette-standard-recyclee',
    title: 'Palette Standard Recyclée',
    shortDescription: 'Palette en bois robuste et polyvalente pour une utilisation quotidienne dans différents secteurs industriels.',
    imageUrl: '/palettesstandart.png',
    // --- SEO ---
    metaTitle: 'Palette Standard Recyclée Bois en Savoie (73) | Bernier Palettes',
    metaDescription: 'Découvrez notre gamme de palettes en bois standard recyclées. Des solutions robustes et économiques pour vos besoins logistiques à Chambéry, Albertville et en Savoie.',
    // --- Fin SEO ---
    detailedDescription: 'Notre palette standard est fabriquée à partir de bois de haute qualité, sélectionné pour sa résistance et sa durabilité. Chaque palette passe par un processus rigoureux de contrôle qualité pour garantir sa conformité aux normes les plus strictes. Idéale pour une utilisation quotidienne dans divers secteurs, elle offre une solution fiable et économique pour toutes vos opérations logistiques.',
    availableTypes: [ 'Palette bois recyclée légère (Charge 400 kg)', 'Palette bois recyclée mi-lourde (Charge 800 kg)', 'Palette bois recyclée lourde (Charge 1500 kg)', 'Palette bois recyclée normes CP', 'Demi-palette et Quart de palette bois recyclée', 'Palette bois recyclée à chevron ou 2 entrées' ],
    specifications: [ { key: 'Dimensions', value: 'Variables selon modèle' }, { key: 'Charge', value: 'De 400 kg à 1500 kg selon modèle' }, { key: 'Poids', value: 'Variable selon modèle' }, { key: 'Matériau', value: 'Bois recyclé' }, { key: 'Entrées', value: '2 ou 4 voies selon modèle' }, { key: 'Options', value: 'Modèles légers, mi-lourds, lourds, demi-palettes, etc.' } ],
    advantages: [ 'Robustesse et durabilité exceptionnelles', 'Adapté à la plupart des environnements industriels', 'Excellent rapport qualité-prix', 'Facilement réparable' ],
    applications: [ 'Transport de marchandises lourdes', 'Stockage en entrepôt', 'Logistique générale', 'Secteur alimentaire et industriel' ],
  },

  {
    slug: 'palette-europe-epal-recyclee',
    title: 'Palette Europe (EPAL) Recyclée',
    shortDescription: 'Palette aux dimensions européennes standardisées, idéale pour le transport international de marchandises.',
    imageUrl: '/paletteeurope.png',
    // --- SEO ---
    metaTitle: "Palette Europe EPAL d'Occasion | Réparateur Agréé en Savoie",
    metaDescription: "Bernier Palettes, réparateur agréé EPAL en Savoie (73), vous propose des palettes Europe 800x1200 d'occasion conformes pour le transport international.",
    // --- Fin SEO ---
    highlight: {
      title: 'RÉPARATEUR AGRÉÉ EPAL',
      text: 'Bernier Palettes est habilité à vous fournir et réparer des palettes EPAL selon les normes officielles.',
       link: 'https://www.epal-france.fr/le-systeme-epal',
      linkText: 'En savoir plus sur le système EPAL'
    },
    certification_details: {
      title: 'Certification EPAL',
      text: "Bernier Palettes est réparateur agréé EPAL. Disposant de cette licence officielle, notre entreprise est habilitée à vous fournir des palettes EPAL 800x1200 d'occasion et peut également les réparer selon les normes strictes. Chaque palette réparée par nos soins est munie d'un clou de contrôle EPAL permettant d'identifier clairement notre entreprise comme réparateur certifié."
    },
    detailedDescription: "La palette Europe est le standard reconnu dans toute l'Union Européenne. Chaque palette est marquée du sceau EUR/EPAL, garantissant sa conformité aux normes européennes strictes. Son format standardisé facilite l'optimisation des espaces de stockage et de transport. Nos palettes Europe sont séchées en chambre pour garantir un taux d'humidité conforme aux exigences phytosanitaires internationales.\n\n",
    specifications: [ { key: 'Dimensions', value: '800 x 1200 mm (EUR/EPAL)' }, { key: 'Charge statique', value: "Jusqu'à 4000 kg" }, { key: 'Charge dynamique', value: "Jusqu'à 1500 kg" }, { key: 'Poids', value: '22-25 kg' }, { key: 'Matériau', value: 'Pin ou épicéa séché' }, { key: 'Entrées', value: '4 voies' }, { key: 'Certification', value: 'EPAL/EUR' } ],
    advantages: [ 'Conforme aux normes européennes strictes', "Acceptée dans toute l'Europe", 'Haute résistance et durabilité', 'Standardisée pour optimiser la logistique' ],
    applications: [ 'Transport international', 'Echanges commerciaux européens', 'Stockage en entrepôt', 'Industries agroalimentaires, pharmaceutiques et chimiques' ],
  },

  {
    slug: 'palette-sur-mesure',
    title: 'Palette sur-mesure Neuve et Recyclée',
    shortDescription: 'Solutions sur mesure adaptées à vos besoins spécifiques en termes de dimensions et de capacité de charge.',
    imageUrl: '/palettesmesure.png',
    // --- SEO ---
    metaTitle: 'Fabrication Palette sur Mesure en Bois | Savoie (73)',
    metaDescription: 'Besoin de dimensions spécifiques ? Bernier Palettes conçoit et fabrique vos palettes en bois sur mesure, neuves ou recyclées, pour répondre à toutes vos contraintes.',
    // --- Fin SEO ---
    detailedDescription: "Nos palettes personnalisées sont conçues spécifiquement pour répondre à vos besoins uniques. Notre équipe d'experts collabore étroitement avec vous pour comprendre vos exigences et concevoir une solution sur mesure. Que vous ayez besoin de dimensions non standard, de capacités de charge exceptionnelles ou de configurations spéciales, nous pouvons créer la palette idéale pour votre activité.",
    specifications: [ { key: 'Dimensions', value: 'Sur mesure selon vos besoins' }, { key: 'Charge', value: 'Adaptée à vos exigences' }, { key: 'Poids', value: 'Variable selon les spécifications' }, { key: 'Matériau', value: 'Pin, épicéa, ou autres essences disponibles' }, { key: 'Traitement', value: 'Hors côte, NIMP15, ou autres selon besoin' } ],
    advantages: [ 'Dimensions adaptées à vos produits spécifiques', 'Capacité de charge optimisée pour votre utilisation', 'Design personnalisé selon vos contraintes logistiques', "Possibilité d'impression de votre logo" ],
    applications: [ 'Transport de produits hors normes', 'Applications industrielles spécifiques', 'Secteurs avec contraintes particulières', 'Solutions logistiques optimisées' ],
  },

  {
    slug: 'autres-palettes-accessoires',
    title: 'Autres types de Palettes et Accessoires',
    shortDescription: "Palettes moulées pour l'export, palettes plastiques et réhausses de palettes pour des besoins spécifiques.",
    imageUrl: '/autrespalettes.png',
    // --- SEO ---
    metaTitle: "Palettes Moulées, Plastiques & Réhausses | Bernier Palettes",
    metaDescription: "Explorez nos solutions spécifiques : palettes moulées pour l'export, palettes plastiques hygiéniques et réhausses de palettes pour optimiser votre stockage en Savoie.",
    // --- Fin SEO ---
    detailedDescription: "Notre gamme complète inclut des palettes moulées spécialement conçues pour l'exportation, répondant aux normes phytosanitaires internationales les plus strictes. Nous proposons également des palettes plastiques durables et hygiéniques, idéales pour les environnements humides ou les secteurs alimentaires et pharmaceutiques. Complétez votre équipement avec nos réhausses de palettes, permettant d'augmenter la capacité de stockage tout en sécurisant vos marchandises.",
    specifications: [ { key: 'Types disponibles', value: 'Palettes moulées, palettes plastiques, réhausses' }, { key: 'Matériaux', value: 'Bois pressé, plastique recyclé, bois' }, { key: 'Applications', value: 'Export, usage intensif, augmentation de capacité' }, { key: 'Couverture', value: 'Disponible sur commande dans toute la France' } ],
    advantages: [ 'Solutions spécialisées pour besoins spécifiques', 'Options écologiques et durables', 'Compatibilité avec systèmes de palettes existants', "Adaptées aux normes internationales d'exportation" ],
    applications: [ "Export international avec normes phytosanitaires strictes", "Environnements humides ou alimentaires (palettes plastiques)", "Augmentation de capacité de chargement (réhausses)", "Stockage de produits spécifiques nécessitant des solutions adaptées" ],
  },
];
