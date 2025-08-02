// src/app/politique-de-confidentialite/page.jsx

import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Link from 'next/link';

// On ajoute les métadonnées directement dans le fichier de la page
export const metadata = {
  title: 'Politique de Confidentialité - Bernier Palettes',
  description: 'Consultez notre politique de confidentialité concernant la gestion des données personnelles sur le site de Bernier Palettes.',
  robots: {
    index: false, // On demande à Google de ne pas indexer cette page légale
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="bg-white pt-24">
        <div className="container mx-auto px-6 py-12 max-w-4xl">
          <h1 className="text-4xl font-bold text-[#3C3633] mb-8" style={{ fontFamily: 'serif' }}>
            Politique de Confidentialité
          </h1>

          <div className="space-y-6 text-gray-700 prose">
            <p>Dernière mise à jour : 31 juillet 2025</p>

            <p>
              La présente politique de confidentialité décrit la manière dont Bernier Palettes, en tant que responsable de traitement, collecte et utilise vos données personnelles lorsque vous utilisez notre site web accessible à l'adresse https://www.bernier-palettes.fr/
            </p>

            <h2 className="text-2xl font-bold text-gray-800 pt-6">1. Responsable du traitement</h2>
            <p>
              Bernier Palettes<br />
              Adresse : 2 RD 1006, Les Iles, 73390 Châteauneuf, France<br />
              Email : bernier.palettes@gmail.com
            </p>

            <h2 className="text-2xl font-bold text-gray-800 pt-6">2. Données collectées via le formulaire de contact</h2>
            <p>
              Lorsque vous utilisez notre formulaire de contact, nous collectons les données suivantes : nom, adresse e-mail, sujet et le contenu de votre message. Ces informations sont collectées sur la base de votre consentement explicite, dans le but exclusif de répondre à votre demande de contact ou de devis.
            </p>
            <p>
              Pour l'acheminement de votre message, nous utilisons le service tiers EmailJS, qui agit en tant que sous-traitant technique. Vos données sont conservées pour une durée maximale de 3 ans après notre dernier contact.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 pt-6">3. Cookies et services tiers (Google Maps)</h2>
            <p>
              Ce site utilise des cookies et technologies similaires. Un cookie est un petit fichier texte stocké sur votre terminal.
            </p>
            <p>
              Notre site intègre une carte Google Maps. Ce service est susceptible de déposer des cookies sur votre terminal à des fins de fonctionnement et de mesure d'audience. Conformément à la réglementation, la carte n'est pas chargée et aucun cookie n'est déposé avant que vous n'ayez donné votre consentement explicite en cliquant sur "Afficher la carte". Pour plus d'informations, vous pouvez consulter la <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#A4612D] hover:underline">politique de confidentialité de Google</a>.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-800 pt-6">4. Données d'hébergement et logs de serveur</h2>
            <p>
              Notre site web est hébergé par Hostinger, dont les serveurs sont situés en France (Union Européenne).
            </p>
            <p>
              Pour des raisons de sécurité et de maintenance, notre serveur enregistre automatiquement des informations (logs) lors de votre visite. Ces données peuvent inclure votre adresse IP, le type de votre navigateur, les pages visitées, ainsi que la date et l'heure de votre visite. La collecte de ces données est basée sur notre intérêt légitime à garantir la sécurité et le bon fonctionnement de notre site web. Ces logs sont conservés pour une durée limitée et ne sont pas utilisés pour vous identifier personnellement.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 pt-6">5. Vos droits</h2>
            <p>
              Conformément à la loi "Informatique et Libertés" et au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données personnelles. Vous pouvez exercer ces droits à tout moment en nous contactant à l'adresse e-mail suivante : <a href="mailto:bernier.palettes@gmail.com" className="text-[#A4612D] hover:underline">bernier.palettes@gmail.com</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
