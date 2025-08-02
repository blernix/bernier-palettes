// src/app/layout.jsx

import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

// 1. Métadonnées classiques pour la page d'accueil et par défaut pour le site
export const metadata = {
  title: 'Bernier Palettes - Achat & Recyclage Palette Bois en Savoie (73)',
  description: "Spécialiste de la palette en bois neuve et recyclée en Savoie. Bernier Palettes propose la fabrication sur-mesure, l'achat et la collecte de palettes à Chambéry, Albertville et alentours. Devis rapide.",
  alternates: {
    // URL Canonique pour la page d'accueil
    canonical: 'https://demo.palettes.2minaci.xyz',
  },
  openGraph: {
    title: 'Bernier Palettes - Achat & Recyclage Palette Bois en Savoie (73)',
    description: 'Votre expert en solutions de palettes en bois neuves, recyclées et sur-mesure en Savoie.',
    url: 'https://demo.palettes.2minaci.xyz',
    siteName: 'Bernier Palettes',
    images: [
      {
        url: 'https://demo.palettes.2minaci.xyz/hero.png', // URL absolue de votre image principale
        width: 1200,
        height: 630,
        alt: 'Entrepôt et camion de Bernier Palettes',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bernier Palettes - Achat & Recyclage Palette Bois en Savoie (73)',
    description: 'Votre expert en solutions de palettes en bois neuves, recyclées et sur-mesure en Savoie.',
    images: ['https://demo.palettes.2minaci.xyz/hero.png'], // URL absolue de votre image
  },
};

// 2. Données structurées (JSON-LD) pour informer Google
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Bernier Palettes',
  image: 'https://demo.palettes.2minaci.xyz/logoBernier.png',
  '@id': 'https://demo.palettes.2minaci.xyz',
  url: 'https://demo.palettes.2minaci.xyz',
  telephone: '+33479442193',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2 RD 1006, Les Iles',
    addressLocality: 'Châteauneuf',
    postalCode: '73390',
    addressCountry: 'FR',
  },
  description: "Spécialiste de la palette en bois neuve et recyclée en Savoie. Bernier Palettes propose la fabrication sur-mesure, l'achat et la collecte de palettes.",
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
      ],
      opens: '08:00',
      closes: '17:00',
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* 3. On injecte les données structurées dans un script */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}





// src/app/layout.jsx

// import { Inter } from 'next/font/google';
// import './globals.css';

// const inter = Inter({ subsets: ['latin'] });

// // 1. Métadonnées classiques pour la page d'accueil et par défaut pour le site
// export const metadata = {
//   title: 'Bernier Palettes - Achat & Recyclage Palette Bois en Savoie (73)',
//   description: "Spécialiste de la palette en bois neuve et recyclée en Savoie. Bernier Palettes propose la fabrication sur-mesure, l'achat et la collecte de palettes à Chambéry, Albertville et alentours. Devis rapide.",
//   alternates: {
//     // URL Canonique pour la page d'accueil
//     canonical: 'https://www.bernier-palettes.fr',
//   },
//   openGraph: {
//     title: 'Bernier Palettes - Achat & Recyclage Palette Bois en Savoie (73)',
//     description: 'Votre expert en solutions de palettes en bois neuves, recyclées et sur-mesure en Savoie.',
//     url: 'https://www.bernier-palettes.fr',
//     siteName: 'Bernier Palettes',
//     images: [
//       {
//         url: 'https://www.bernier-palettes.fr/hero.png', // URL absolue de votre image principale
//         width: 1200,
//         height: 630,
//         alt: 'Entrepôt et camion de Bernier Palettes',
//       },
//     ],
//     locale: 'fr_FR',
//     type: 'website',
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'Bernier Palettes - Achat & Recyclage Palette Bois en Savoie (73)',
//     description: 'Votre expert en solutions de palettes en bois neuves, recyclées et sur-mesure en Savoie.',
//     images: ['https://www.bernier-palettes.fr/hero.png'], // URL absolue de votre image
//   },
// };

// // 2. Données structurées (JSON-LD) pour informer Google
// const jsonLd = {
//   '@context': 'https://schema.org',
//   '@type': 'LocalBusiness',
//   name: 'Bernier Palettes',
//   image: 'https://www.bernier-palettes.fr/logobernierremove.png',
//   '@id': 'https://www.bernier-palettes.fr',
//   url: 'https://www.bernier-palettes.fr',
//   telephone: '+33479442193',
//   address: {
//     '@type': 'PostalAddress',
//     streetAddress: '2 RD 1006, Les Iles',
//     addressLocality: 'Châteauneuf',
//     postalCode: '73390',
//     addressCountry: 'FR',
//   },
//   description: "Spécialiste de la palette en bois neuve et recyclée en Savoie. Bernier Palettes propose la fabrication sur-mesure, l'achat et la collecte de palettes.",
//   openingHoursSpecification: [
//     {
//       '@type': 'OpeningHoursSpecification',
//       dayOfWeek: [
//         'Monday',
//         'Tuesday',
//         'Wednesday',
//         'Thursday',
//         'Friday',
//       ],
//       opens: '08:00',
//       closes: '17:00',
//     },
//   ],
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="fr">
//       <head>
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         {/* 3. On injecte les données structurées dans un script */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
//         />
//       </head>
//       <body className={inter.className}>
//         {children}
//       </body>
//     </html>
//   );
// }

