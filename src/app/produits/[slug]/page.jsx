// src/app/produits/[slug]/page.jsx

import { notFound } from 'next/navigation';
import { productsDetails } from '@/app/data/products';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import ProductPageContent from '@/app/components/ProductPageContent';

// --- SEO : Génération des métadonnées dynamiques ---
export async function generateMetadata({ params }) {
  const product = productsDetails.find(p => p.slug === params.slug);

  // Si le produit n'existe pas, on retourne des métadonnées par défaut
  if (!product) {
    return {
      title: 'Produit non trouvé | Bernier Palettes',
      description: 'La page que vous recherchez n\'existe pas.',
    };
  }

  // On construit l'URL absolue de la page et de l'image pour les métadonnées
  const pageUrl = `https://www.bernier-palettes.fr/produits/${product.slug}`;
  const imageUrl = `https://www.bernier-palettes.fr${product.imageUrl}`;

  return {
    title: product.metaTitle,
    description: product.metaDescription,
    // URL Canonique pour éviter le contenu dupliqué
    alternates: {
      canonical: pageUrl,
    },
    // Métadonnées pour le partage sur les réseaux sociaux (Facebook, LinkedIn...)
    openGraph: {
      title: product.metaTitle,
      description: product.metaDescription,
      url: pageUrl,
      siteName: 'Bernier Palettes',
      images: [
        {
          url: imageUrl,
          width: 800, // Spécifier les dimensions est une bonne pratique
          height: 600,
          alt: product.altText, // On utilise le texte alternatif optimisé
        },
      ],
      locale: 'fr_FR',
      type: 'website',
    },
    // Métadonnées pour le partage sur Twitter
    twitter: {
      card: 'summary_large_image',
      title: product.metaTitle,
      description: product.metaDescription,
      images: [imageUrl],
    },
  };
}
// --- Fin SEO ---

// Cette fonction dit à Next.js quelles pages construire au moment du build
export async function generateStaticParams() {
  return productsDetails.map((product) => ({
    slug: product.slug,
  }));
}

// Le composant de la page reste simple : il récupère les données et les passe au composant client
export default async function ProductPage({ params }) {
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

