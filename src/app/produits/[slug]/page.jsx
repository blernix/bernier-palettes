// src/app/produits/[slug]/page.jsx

import { notFound } from 'next/navigation';
import { productsDetails } from '@/app/data/products';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import ProductPageContent from '@/app/components/ProductPageContent'; // On importe notre nouveau composant

// Cette fonction dit à Next.js quelles pages construire
export async function generateStaticParams() {
  return productsDetails.map((product) => ({
    slug: product.slug,
  }));
}

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