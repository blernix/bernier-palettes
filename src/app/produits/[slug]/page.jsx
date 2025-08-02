// src/app/produits/[slug]/page.jsx

import { notFound } from 'next/navigation';
import { productsDetails } from '@/app/data/products'; // Chemin d'import corrigé
import Header from '@/app/components/Header'; // Chemin d'import corrigé
import Footer from '@/app/components/Footer'; // Chemin d'import corrigé
import ProductPageContent from '@/app/components/ProductPageContent';

// Cette fonction dit à Next.js quelles pages construire
export async function generateStaticParams() {
  return productsDetails.map((product) => ({
    slug: product.slug,
  }));
}

// --- NOUVELLE FONCTION POUR LE SEO ---
// Cette fonction génère les métadonnées pour chaque page au moment du build
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = productsDetails.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: 'Produit non trouvé',
      description: 'Ce produit n\'existe pas ou plus.',
    };
  }

  return {
    title: product.metaTitle,
    description: product.metaDescription,
  };
}
// --- FIN DE LA NOUVELLE FONCTION ---

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
