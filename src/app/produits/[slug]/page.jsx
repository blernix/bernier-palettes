// app/produits/[slug]/page.jsx
'use client';

// Imports corrigés et ajout de 'use'
import { useState, use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { productsDetails } from '@/app/data/products';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Modal from '@/app/components/Modal';
import ContactForm from '@/app/components/ContactForm';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function ProductPage({ params }) {
  // Correction pour l'accès aux params en composant client
  const { slug } = use(params);
  const product = productsDetails.find((p) => p.slug === slug);

  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!product) {
    return (
      <>
        <Header />
        <main className="bg-[#EDEAE5] pt-24 h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Produit non trouvé</h1>
            <Link href="/" className="text-[#A4612D] hover:underline">
              Retour à l'accueil
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="bg-[#EDEAE5] pt-24">
        <div className="container mx-auto px-6 py-12">
          
          <Link href="/#produit" className="inline-flex items-center gap-2 text-[#A4612D] font-semibold hover:underline mb-8">
            <ArrowLeft size={20} />
            Retour aux produits
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
              <Image src={product.imageUrl} alt={`Image de ${product.title}`} fill style={{ objectFit: 'cover' }} sizes="(min-width: 1024px) 50vw, 100vw" />
            </div>

            <div className="flex flex-col">
              <h1 className="text-4xl font-bold text-[#3C3633] mb-4" style={{ fontFamily: 'serif' }}>{product.title}</h1>
              <p className="text-lg text-gray-600 mb-6">{product.shortDescription}</p>

              {product.highlight && (
                <div className="mb-6 p-4 bg-amber-50 border-l-4 border-[#A4612D]">
                  <h3 className="font-bold text-[#A4612D] text-sm tracking-wider uppercase">{product.highlight.title}</h3>
                  <p className="text-sm text-gray-700 mt-1">{product.highlight.text}</p>
                </div>
              )}
              
              <h2 className="text-2xl font-bold text-[#3C3633] mb-3">Description détaillée</h2>
              <p className="text-gray-700 mb-8 whitespace-pre-line">{product.detailedDescription}</p>
            </div>
          </div>
          
          {(product.availableTypes && product.availableTypes.length > 0) && (
            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold text-[#3C3633] mb-6">Types de palettes disponibles</h2>
              <div className="flex flex-wrap justify-center gap-4">
                {product.availableTypes.map((type) => (
                  <div key={type} className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-700">
                    <CheckCircle2 size={16} className="text-green-500" />
                    {type}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="text-center mt-8">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-[#A4612D] hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-md transition-colors"
            >
              Demander un devis
            </button>
          </div>
          
         

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.specifications?.map && (
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Caractéristiques générales</h3>
                <div className="space-y-2 text-sm">
                  {product.specifications.map((spec) => (
                    <div key={spec.key} className="flex justify-between">
                      <span className="font-semibold text-gray-600">{spec.key}</span>
                      <span className="text-right text-gray-800">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {product.advantages?.map && (
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Avantages</h3>
                <ul className="space-y-2 list-disc list-inside text-sm text-gray-700">
                  {product.advantages.map((adv) => <li key={adv}>{adv}</li>)}
                </ul>
              </div>
            )}
            {product.applications?.map && (
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Applications</h3>
                <ul className="space-y-2 list-disc list-inside text-sm text-gray-700">
                  {product.applications.map((app) => <li key={app}>{app}</li>)}
                </ul>
              </div>
            )}
          </div>
           {product.certification_details && (
            <div className="mt-16 bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle2 size={20} className="text-[#A4612D]" />
                <h3 className="text-xl font-bold text-gray-800">{product.certification_details.title}</h3>
              </div>
              <p className="text-gray-700 text-sm">{product.certification_details.text}</p>
            </div>
          )}
        </div>
      </main>
      <Footer />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ContactForm 
          initialSubject={`Devis pour : ${product.title}`}
        />
      </Modal>
    </>
  );
}