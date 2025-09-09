// src/app/layout.jsx

// 1. On importe les polices Montserrat et Roboto Slab
import { Montserrat, Roboto_Slab } from 'next/font/google';
import './globals.css';

// 2. On configure chaque police et on lui assigne une variable CSS
const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat', // Police pour le corps du texte
});

const roboto_slab = Roboto_Slab({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-slab', // Police pour les titres
});

// 3. Métadonnées SEO optimisées pour la page d'accueil
export const metadata = {
  title: 'Bernier Palettes - Achat & Recyclage Palette Bois en Savoie (73)',
  description: "Spécialiste de la palette en bois neuve et recyclée en Savoie. Bernier Palettes propose la fabrication sur-mesure, l'achat et la collecte de palettes à Chambéry, Albertville et alentours. Devis rapide.",
  alternates: {
    canonical: 'https://www.bernier-palettes.fr',
  },
  openGraph: {
    title: 'Bernier Palettes - Achat & Recyclage Palette Bois en Savoie (73)',
    description: 'Votre expert en solutions de palettes en bois neuves, recyclées et sur-mesure en Savoie.',
    url: 'https://www.bernier-palettes.fr',
    siteName: 'Bernier Palettes',
    images: [
      {
        url: 'https://www.bernier-palettes.fr/hero.png', // URL absolue de votre image principale
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
    images: ['https://www.bernier-palettes.fr/hero.png'], // URL absolue de votre image
  },
};

// 4. Données structurées (JSON-LD) avec dates dynamiques
// On calcule l'année actuelle et la suivante
const currentYear = new Date().getFullYear();
const nextYear = currentYear + 1;

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Bernier Palettes',
  image: 'https://www.bernier-palettes.fr/logobernierremove.png',
  '@id': 'https://www.bernier-palettes.fr',
  url: 'https://www.bernier-palettes.fr',
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
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      // Horaires d'hiver (ex: du 1er Octobre 2025 au 31 Mars 2026)
      opens: '08:00',
      closes: '17:00',
      validFrom: `${currentYear}-10-01`,
      validThrough: `${nextYear}-03-31`,
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      // Horaires d'été (ex: du 1er Avril 2025 au 30 Septembre 2025)
      opens: '06:00',
      closes: '16:00',
      validFrom: `${currentYear}-04-01`,
      validThrough: `${currentYear}-09-30`,
    }
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${montserrat.variable} ${roboto_slab.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="-SS19nbMkYMAX-WxgEe_F9YHo-jct_C_IfixqpvxwF0" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

