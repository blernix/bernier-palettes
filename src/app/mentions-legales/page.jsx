// src/app/mentions-legales/page.jsx

import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Mentions Légales - Bernier Palettes',
  description: 'Mentions légales du site Bernier Palettes, conformément à la loi pour la confiance dans l\'économie numérique (LCEN).',
  robots: {
    index: false,
    follow: false,
  },
};

export default function LegalNoticePage() {
  return (
    <>
      <Header />
      <main className="bg-[#EDEAE5] pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold text-[#3C3633] mb-2 font-serif">
              Mentions Légales
            </h1>
            <p className="text-sm text-gray-500 mb-8">Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique.</p>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <div className="pt-6 border-t border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 font-serif">Article 1 : Éditeur du Site</h2>
                <p className="mt-4">
                  Le site internet <Link href="/" className="text-[#A4612D] hover:underline">bernier-palettes.fr</Link> est édité par :<br /><br />
                  <strong className="text-gray-900">SAS BERNIER</strong><br />
                  Société par actions simplifiée unipersonnelle (SASU) au capital de 200 000,00 €.<br />
                  <strong>Adresse du siège social :</strong> 2 RD 1006, Les Iles, 73390 Châteauneuf, France<br />
                  <strong>SIREN :</strong> 378 462 113<br />
                  <strong>RCS :</strong> Chambéry B 378 462 113<br />
                  <strong>Numéro de TVA intracommunautaire :</strong> FR90378462113<br />
                  <strong>Adresse e-mail :</strong> <a href="mailto:bernier.palettes@gmail.com" className="text-[#A4612D] hover:underline">bernier.palettes@gmail.com</a><br />
                  <strong>Téléphone :</strong> <a href="tel:+33479442193" className="text-[#A4612D] hover:underline">04 79 44 21 93</a>
                </p>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 font-serif">Article 2 : Directeur de la Publication</h2>
                <p className="mt-4">
                  Le Directeur de la publication est Monsieur <strong>Stéphane Troussard</strong>, en sa qualité de Président de la société STRD CONSEIL, elle-même Présidente de la société SAS BERNIER.
                </p>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 font-serif">Article 3 : Hébergement</h2>
                <p className="mt-4">
                  Le site est hébergé sur un serveur privé virtuel (VPS) opéré par :<br /><br />
                  {/* IMPORTANT : Complétez avec vos informations professionnelles */}
                  <strong className="text-gray-900">Killian Lecrut</strong><br />
                  Adresse : 12 place saint jean à Melun <br />
                  SIRET : 92289316900016
                    <br />
                  Contact : <a href="mailto:killian.lecrut@gmail.com" > killian.lecrut@gmail.com</a>
                </p>
                <p className="mt-4">
                  L'infrastructure physique du serveur est fournie par :<br /><br />
                  <strong className="text-gray-900">Hostinger International Ltd.</strong><br />
                  Adresse : 61 Lordou Vironos Street, 6023 Larnaca, Chypre<br />
                  Contact : <a href="https://www.hostinger.fr/contact" target="_blank" rel="noopener noreferrer" className="text-[#A4612D] hover:underline">https://www.hostinger.fr/contact</a>
                </p>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 font-serif">Article 4 : Propriété Intellectuelle</h2>
                <p className="mt-4">
                  L'ensemble de ce site (contenus, textes, images, vidéos, logo) constitue une œuvre protégée par la législation en vigueur sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés. La reproduction de tout ou partie de ce site sur un support quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
                </p>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 font-serif">Article 5 : Limitation de Responsabilité</h2>
                <p className="mt-4">
                  Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes ou des omissions. SAS BERNIER ne pourra être tenu pour responsable de toute omission, inexactitude ou carence dans la mise à jour, qu'elle soit de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
