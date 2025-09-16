// data/products.js

export const productsDetails = [
  // --- PRODUIT 1 : PALETTE STANDARD ---
  {
    slug: 'palette-standard-revalorisee',
    title: 'Palette Standard Revalorisée',
    // SEO: On intègre des mots-clés locaux et d'action.
    shortDescription: 'Nos palettes en bois standard revalorisée, une solution robuste et économique pour vos besoins logistiques en Savoie (73).',
    imageUrl: '/palettesstandart.png',
    metaTitle: 'Palette Standard Revalorisée Bois en Savoie (73) | Bernier Palettes',
    metaDescription: 'Découvrez notre gamme de palettes en bois standard revalorisées. Des solutions robustes et économiques pour vos besoins logistiques à Chambéry, Albertville et en Savoie.',
    altText: 'Ouvrier assemblant une palette en bois standard revalorisée dans l\'atelier de Bernier Palettes en Savoie.',
    // SEO: On enrichit la description avec des synonymes et des cas d'usage.
    detailedDescription: 'Fabriquée à partir de bois de haute qualité sélectionné pour sa résistance, chaque palette standard revalorisée passe un contrôle qualité rigoureux. Idéale pour le transport et le stockage dans divers secteurs en région Rhône-Alpes, elle offre une solution fiable et économique. Nous proposons différents modèles, de la palette légère à la palette lourde, pour répondre précisément à votre cahier des charges.',
    availableTypes: [ 'Palette bois revalorisée légère (Charge 400 kg)', 'Palette bois revalorisée mi-lourde (Charge 800 kg)', 'Palette bois revalorisée lourde (Charge 1500 kg)', 'Palette bois revalorisée normes CP', 'Demi-palette et Quart de palette bois revalorisée', 'Palette bois revalorisée à chevron ou 2 entrées' ],
    specifications: [ { key: 'Dimensions', value: 'Variables selon modèle' }, { key: 'Charge', value: 'De 400 kg à 1500 kg selon modèle' }, { key: 'Poids', value: 'Variable selon modèle' }, { key: 'Matériau', value: 'Bois revalorisé' }, { key: 'Entrées', value: '2 ou 4 voies selon modèle' }, { key: 'Options', value: 'Modèles légers, mi-lourds, lourds, demi-palettes, etc.' } ],
    advantages: [ 'Robustesse et durabilité exceptionnelles', 'Adapté à la plupart des environnements industriels', 'Excellent rapport qualité-prix', 'Facilement réparable' ],
    applications: [ 'Transport de marchandises lourdes', 'Stockage en entrepôt', 'Logistique générale', 'Secteur alimentaire et industriel' ],
  },

  // --- PRODUIT 2 : PALETTE EUROPE (EPAL) ---
  {
    slug: 'palette-europe-epal-revalorisee',
    title: 'Palette Europe (EPAL) Revalorisée',
    // SEO: On précise "achat" et "réparation".
    shortDescription: 'Achat et réparation de palettes Europe EPAL d\'occasion aux dimensions standardisées, idéales pour le transport international depuis la Savoie.',
    imageUrl: '/paletteeurope.png',
    metaTitle: "Palette Europe EPAL d'Occasion | Réparateur Agréé en Savoie",
    metaDescription: "Bernier Palettes, réparateur agréé EPAL en Savoie (73), vous propose des palettes Europe 800x1200 d'occasion conformes pour le transport international.",
    altText: 'Gros plan sur une palette Europe EPAL en bois de haute qualité, certifiée pour le transport international.',
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
    // SEO: On intègre des mots-clés liés aux normes et à la logistique.
    detailedDescription: "La palette Europe est le standard incontournable pour la logistique en France et dans toute l'Union Européenne. Chaque palette est marquée du sceau EUR/EPAL, garantissant sa conformité. Son format 800x1200mm facilite l'optimisation des espaces de stockage et de transport. Nos palettes Europe sont séchées en chambre pour garantir un taux d'humidité conforme aux exigences phytosanitaires, notamment la norme NIMP15 pour l'export.",
    specifications: [ { key: 'Dimensions', value: '800 x 1200 mm (EUR/EPAL)' }, { key: 'Charge statique', value: "Jusqu'à 4000 kg" }, { key: 'Charge dynamique', value: "Jusqu'à 1500 kg" }, { key: 'Poids', value: '22-25 kg' }, { key: 'Matériau', value: 'Pin ou épicéa séché' }, { key: 'Entrées', value: '4 voies' }, { key: 'Certification', value: 'EPAL/EUR' } ],
    advantages: [ 'Conforme aux normes européennes strictes', "Acceptée dans toute l'Europe", 'Haute résistance et durabilité', 'Standardisée pour optimiser la logistique' ],
    applications: [ 'Transport international', 'Echanges commerciaux européens', 'Stockage en entrepôt', 'Industries agroalimentaires, pharmaceutiques et chimiques' ],
  },

  // --- PRODUIT 3 : PALETTE SUR MESURE ---
  {
    slug: 'palette-sur-mesure',
    title: 'Palette sur-mesure Neuve et Revalorisée',
    // SEO: On utilise "Fabricant" et la localité.
    shortDescription: 'Fabricant de palettes en bois sur mesure en Savoie, pour des solutions adaptées à vos dimensions et capacités de charge spécifiques.',
    imageUrl: '/palettesmesure.png',
    metaTitle: 'Fabrication Palette sur Mesure en Bois | Savoie (73)',
    metaDescription: 'Besoin de dimensions spécifiques ? Bernier Palettes conçoit et fabrique vos palettes en bois sur mesure, neuves ou revalorisées, pour répondre à toutes vos contraintes.',
    altText: 'Machine industrielle fabriquant une palette en bois sur-mesure dans l\'usine de Bernier Palettes.',
    // SEO: On ajoute des mots-clés comme "cahier des charges", "bureau d'études".
    detailedDescription: "Pour vos produits hors normes, nos palettes personnalisées sont la solution. Notre bureau d'études collabore étroitement avec vous pour comprendre votre cahier des charges et concevoir une solution sur mesure. Que vous ayez besoin de dimensions non standard, de capacités de charge exceptionnelles ou de traitements spécifiques comme la norme NIMP15, nous pouvons créer la palette neuve ou revalorisée idéale pour votre activité à Chambéry et dans toute la Savoie.",
    specifications: [ { key: 'Dimensions', value: 'Sur mesure selon vos besoins' }, { key: 'Charge', value: 'Adaptée à vos exigences' }, { key: 'Poids', value: 'Variable selon les spécifications' }, { key: 'Matériau', value: 'Pin, épicéa, ou autres essences disponibles' }, { key: 'Traitement', value: 'Hors côte, NIMP15, ou autres selon besoin' } ],
    advantages: [ 'Dimensions adaptées à vos produits spécifiques', 'Capacité de charge optimisée pour votre utilisation', 'Design personnalisé selon vos contraintes logistiques', "Possibilité d'impression de votre logo" ],
    applications: [ 'Transport de produits hors normes', 'Applications industrielles spécifiques', 'Secteurs avec contraintes particulières', 'Solutions logistiques optimisées' ],
  },

  // --- PRODUIT 4 : AUTRES TYPES ET ACCESSOIRES ---
  {
    slug: 'autres-palettes-accessoires',
    title: 'Autres types de Palettes et Accessoires',
    // SEO: On précise les produits et la cible (export).
    shortDescription: "Solutions spécifiques pour l'export et la logistique : palettes moulées, palettes plastiques et réhausses de palettes.",
    imageUrl: '/autrespalettes.png',
    metaTitle: "Palettes Moulées, Plastiques & Réhausses | Bernier Palettes",
    metaDescription: "Explorez nos solutions spécifiques : palettes moulées pour l'export, palettes plastiques hygiéniques et réhausses de palettes pour optimiser votre stockage en Savoie.",
    altText: 'Vue d\'un stock de palettes en bois variées, incluant des réhausses, prêtes à l\'expédition en Savoie.',
    // SEO: On intègre des mots-clés comme "NIMP15", "hygiéniques", "agroalimentaire".
    detailedDescription: "Notre gamme complète inclut des palettes moulées, légères et conformes à la norme NIMP15, spécialement conçues pour l'exportation. Nous proposons également des palettes plastiques durables et hygiéniques, idéales pour les environnements humides ou les secteurs agroalimentaires et pharmaceutiques. Complétez votre équipement avec nos réhausses de palettes en bois, permettant d'augmenter la capacité de stockage de vos caisses-palettes tout en sécurisant vos marchandises.",
    specifications: [ { key: 'Types disponibles', value: 'Palettes moulées, palettes plastiques, réhausses' }, { key: 'Matériaux', value: 'Bois pressé, plastique revalorisé, bois' }, { key: 'Applications', value: 'Export, usage intensif, augmentation de capacité' }, { key: 'Couverture', value: 'Disponible sur commande dans toute la France' } ],
    advantages: [ 'Solutions spécialisées pour besoins spécifiques', 'Options écologiques et durables', 'Compatibilité avec systèmes de palettes existants', "Adaptées aux normes internationales d'exportation" ],
    applications: [ "Export international avec normes phytosanitaires strictes", "Environnements humides ou alimentaires (palettes plastiques)", "Augmentation de capacité de chargement (réhausses)", "Stockage de produits spécifiques nécessitant des solutions adaptées" ],
  },
];

