// src/components/ProductPageContent.jsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Modal from '@/app/components/Modal'; // Chemin d'import corrigé
import ContactForm from '@/app/components/ContactForm'; // Chemin d'import corrigé
import { ArrowLeft, CheckCircle2, ExternalLink } from 'lucide-react';

export default function ProductPageContent({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="bg-[#EDEAE5] pt-24">
      <div className="container mx-auto px-6 py-12">
        <Link href="/#produit" className="inline-flex items-center gap-2 text-[#A4612D] font-semibold hover:underline mb-8">
          <ArrowLeft size={20} aria-hidden="true" />
          Retour aux produits
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
            {/* SEO & A11Y: Le alt text doit être géré dans les données pour être spécifique. On suppose ici qu'il est déjà optimisé. */}
            <Image src={product.imageUrl} alt={product.altText || `Image de ${product.title}`} fill style={{ objectFit: 'cover' }} sizes="(min-width: 1024px) 50vw, 100vw" />
          </div>
          <div className="flex flex-col">
            {/* SEO: Le <h1> est le titre principal de la page, c'est parfait. */}
            <h1 className="text-4xl font-bold text-[#3C3633] mb-4" style={{ fontFamily: 'serif' }}>{product.title}</h1>
            <p className="text-lg text-gray-600 mb-6">{product.shortDescription}</p>
            
            {product.highlight && (
              <div className="mb-6 p-4 bg-amber-50 border-l-4 border-[#A4612D]">
                {/* SEO: Un <h2> serait plus approprié ici car c'est un titre de section important. */}
                <h2 className="font-bold text-[#A4612D] text-sm tracking-wider uppercase">{product.highlight.title}</h2>
                <p className="text-sm text-gray-700 mt-1">{product.highlight.text}</p>
                {product.highlight.link && (
                  <a 
                    href={product.highlight.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm text-[#A4612D] hover:underline font-semibold mt-2 inline-flex items-center gap-1"
                  >
                    {product.highlight.linkText || 'En savoir plus'}
                    <ExternalLink size={14} aria-hidden="true" />
                  </a>
                )}
              </div>
            )}

            <h2 className="text-2xl font-bold text-[#3C3633]  mb-3">Description détaillée</h2>
            <p className="text-gray-700 mb-8 whitespace-pre-line">{product.detailedDescription}</p>
          </div>
        </div>

        {(product.availableTypes && product.availableTypes.length > 0) && (
          <section className="mt-16 text-center" aria-labelledby="available-types-heading">
            <h2 id="available-types-heading" className="text-2xl font-bold text-[#3C3633]  mb-6">Types de palettes disponibles</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {product.availableTypes.map((type) => (
                <div key={type} className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-700">
                  <CheckCircle2 size={16} className="text-green-500" aria-hidden="true" />
                  {type}
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="text-center mt-8">
          <button onClick={() => setIsModalOpen(true)} className="bg-[#A4612D] hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-md transition-colors">
            Demander un devis
          </button>
        </div>

        {product.certification_details && (
          <section className="mt-16 bg-white p-6 rounded-lg shadow-lg" aria-labelledby="certification-heading">
            <div className="flex items-center gap-3 mb-3">
              <CheckCircle2 size={20} className="text-[#A4612D]" aria-hidden="true" />
              <h3 id="certification-heading" className="text-xl font-bold text-gray-800">{product.certification_details.title}</h3>
            </div>
            <p className="text-gray-700 text-sm">{product.certification_details.text}</p>
          </section>
        )}

        <section className="mt-8" aria-labelledby="details-heading">
          <h2 id="details-heading" className="sr-only">Détails supplémentaires sur le produit</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.specifications?.length > 0 && (
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
            {product.advantages?.length > 0 && (
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Avantages</h3>
                <ul className="space-y-2 list-disc list-inside text-sm text-gray-700">
                  {product.advantages.map((adv) => <li key={adv}>{adv}</li>)}
                </ul>
              </div>
            )}
            {product.applications?.length > 0 && (
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Applications</h3>
                <ul className="space-y-2 list-disc list-inside text-sm text-gray-700">
                  {product.applications.map((app) => <li key={app}>{app}</li>)}
                </ul>
              </div>
            )}
          </div>
        </section>
      </div>
      {/* A11Y: On passe le titre à la modale et on ne le répète pas dans ContactForm */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Demande de devis">
        <ContactForm initialSubject={`Devis pour : ${product.title}`} />
      </Modal>
    </main>
  );
}
