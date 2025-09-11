// src/app/produits/[slug]/page.jsx

import { notFound } from 'next/navigation';
import { productsDetails } from '@/app/data/products';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import ProductPageContent from '@/app/components/ProductPageContent';

// Cette fonction dit à Next.js quelles pages construire
export async function generateStaticParams() {
  return productsDetails.map((product) => ({
    slug: product.slug,
  }));
}

// --- SEO : Génération des métadonnées dynamiques ---
export async function generateMetadata({ params }) {
  // --- CORRECTION ICI ---
  // On ajoute "await" pour attendre que les paramètres de l'URL soient disponibles.
  const { slug } = await params;
  const product = productsDetails.find(p => p.slug === slug);

  // Si le produit n'existe pas, on retourne des métadonnées par défaut
  if (!product) {
    return {
      title: 'Produit non trouvé | Bernier Palettes',
      description: 'Ce produit n\'existe pas ou plus.',
    };
  }

  // On retourne un jeu de métadonnées complet et dynamique
  return {
    title: product.metaTitle,
    description: product.metaDescription,
    alternates: {
      canonical: `https://www.bernier-palettes.fr/produits/${product.slug}`,
    },
    openGraph: {
      title: product.metaTitle,
      description: product.metaDescription,
      url: `https://www.bernier-palettes.fr/produits/${product.slug}`,
      siteName: 'Bernier Palettes',
      images: [
        {
          url: `https://www.bernier-palettes.fr${product.imageUrl}`,
          width: 800,
          height: 600,
          alt: product.altText,
        },
      ],
      locale: 'fr_FR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: product.metaTitle,
      description: product.metaDescription,
      images: [`https://www.bernier-palettes.fr${product.imageUrl}`],
    },
  };
}

export default async function ProductPage({ params }) {
  // On ajoute également "await" ici pour être cohérent et robuste
  const { slug } = await params;
  const product = productsDetails.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Header />
      <ProductPageContent product={product} />
      <Footer />
    </>
  );
}

