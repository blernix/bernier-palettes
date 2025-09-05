// src/app/politique-de-confidentialite/page.jsx

import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Politique de Confidentialité - Bernier Palettes',
  description: 'Politique de confidentialité et de gestion des données personnelles du site Bernier Palettes, conformément au RGPD.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="bg-[#EDEAE5] pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold text-[#3C3633] mb-2 font-serif">
              Politique de Confidentialité
            </h1>
            <p className="text-sm text-gray-500 mb-8">Dernière mise à jour : 5 septembre 2025</p>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <div className="pt-6 border-t border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 font-serif">Préambule</h2>
                <p className="mt-4">
                  L'entreprise Bernier Palettes, soucieuse des droits des individus et dans une volonté de transparence avec ses clients, a mis en place une politique reprenant l’ensemble des traitements de données personnelles, des finalités poursuivies par ces derniers ainsi que des moyens d’actions à la disposition des individus pour qu’ils puissent au mieux exercer leurs droits.
                </p>
                <p className="mt-4">
                  Cette politique de confidentialité est établie en conformité avec le Règlement (UE) 2016/679 du 27 avril 2016 (ci-après "RGPD"), et la loi n° 78-17 du 6 janvier 1978 modifiée, relative à l'informatique, aux fichiers et aux libertés.
                </p>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 font-serif">Article 1 : Responsable du Traitement</h2>
                <p className="mt-4">
                  Le responsable du traitement des données à caractère personnel est :<br />
                  <strong className="text-gray-900">Bernier Palettes</strong><br />
                  Adresse : 2 RD 1006, Les Iles, 73390 Châteauneuf, France<br />
                  Email : <a href="mailto:bernier.palettes@gmail.com" className="text-[#A4612D] hover:underline">bernier.palettes@gmail.com</a>
                </p>
                <p className="mt-4">
                  L'entreprise n'a pas désigné de Délégué à la Protection des Données (DPO), ses activités de traitement ne l'exigeant pas (article 37 du RGPD).
                </p>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 font-serif">Article 2 : Données Personnelles Collectées et Finalités</h2>
                <p className="mt-4">
                  Nous collectons différentes catégories de données pour des finalités spécifiques :
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 font-serif">2.1 Formulaire de contact</h3>
                <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
                  <li><strong className="font-medium">Données collectées :</strong> Nom, adresse e-mail, sujet, contenu du message.</li>
                  <li><strong className="font-medium">Finalité :</strong> Traiter et répondre à votre demande de contact ou de devis.</li>
                  <li><strong className="font-medium">Base légale :</strong> Votre consentement explicite (Article 6(1)(a) du RGPD), matérialisé par la case à cocher obligatoire avant la soumission du formulaire.</li>
                </ul>

                {/* --- SECTION GOOGLE MAPS MISE À JOUR --- */}
                <h3 className="text-xl font-semibold text-gray-800 mt-6 font-serif">2.2 Service de cartographie (Google Maps)</h3>
                <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
                    <li><strong className="font-medium">Données collectées :</strong> Données de navigation, d'interaction et potentiellement votre adresse IP.</li>
                    <li><strong className="font-medium">Finalité :</strong> Afficher une carte interactive pour localiser notre entreprise et faciliter votre venue.</li>
                    <li><strong className="font-medium">Base légale :</strong> Notre intérêt légitime (Article 6(1)(f) du RGPD) à fournir une information de localisation utile. En utilisant la carte, vous interagissez directement avec le service Google. Pour plus d'informations sur la gestion de vos données par Google, veuillez consulter leur <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#A4612D] hover:underline">politique de confidentialité</a>.</li>
                </ul>
                
                <h3 className="text-xl font-semibold text-gray-800 mt-6 font-serif">2.3 Logs de serveur</h3>
                <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
                  <li><strong className="font-medium">Données collectées :</strong> Adresse IP, type de navigateur, pages visitées, date et heure de la requête.</li>
                  <li><strong className="font-medium">Finalité :</strong> Assurer la sécurité du site, prévenir les fraudes, diagnostiquer les problèmes techniques.</li>
                  <li><strong className="font-medium">Base légale :</strong> Notre intérêt légitime (Article 6(1)(f) du RGPD) à garantir la sécurité et la performance de nos services.</li>
                </ul>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 font-serif">Article 3 : Destinataires et Transferts de Données</h2>
                <p className="mt-4">
                  Les données collectées sont destinées aux services internes de Bernier Palettes. Pour l'acheminement des e-mails du formulaire de contact, nous utilisons le service <strong className="text-gray-900">EmailJS</strong>.
                </p>
                <p className="mt-4">
                  EmailJS est une société basée aux États-Unis. Ce transfert de vos données hors de l'Union Européenne est encadré par les garanties de l'article 46 du RGPD, notamment par l'adhésion d'EmailJS aux <strong className="text-gray-900">Clauses Contractuelles Types (CCT)</strong> de la Commission Européenne, assurant un niveau de protection adéquat.
                </p>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 font-serif">Article 4 : Durée de Conservation</h2>
                <ul className="list-disc list-inside space-y-2 pl-4 mt-4">
                  <li><strong className="font-medium">Données du formulaire de contact :</strong> Conservées pour une durée de trois (3) ans à compter de notre dernier contact avec vous.</li>
                  <li><strong className="font-medium">Logs de serveur :</strong> Conservés pour une durée maximale de douze (12) mois.</li>
                </ul>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 font-serif">Article 5 : Vos Droits sur vos Données</h2>
                <p className="mt-4">
                  Conformément aux articles 15 à 22 du RGPD, vous disposez des droits suivants :
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
                  <li><strong>Droit d'accès (article 15)</strong></li>
                  <li><strong>Droit de rectification (article 16)</strong></li>
                  <li><strong>Droit à l'effacement (article 17)</strong></li>
                  <li><strong>Droit à la limitation du traitement (article 18)</strong></li>
                  <li><strong>Droit à la portabilité (article 20)</strong></li>
                  <li><strong>Droit d'opposition (article 21)</strong></li>
                  <li><strong>Droit de retirer votre consentement à tout moment.</strong></li>
                </ul>
                <p className="mt-4">
                  Pour exercer ces droits, contactez-nous par e-mail : <a href="mailto:bernier.palettes@gmail.com" className="text-[#A4612D] hover:underline">bernier.palettes@gmail.com</a>.
                </p>
                <p className="mt-4">
                  Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la <strong className="text-gray-900">Commission Nationale de l’Informatique et des Libertés (CNIL)</strong>.
                </p>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 font-serif">Article 6 : Hébergement</h2>
                <p className="mt-4">
                  Ce site est hébergé par <strong className="text-gray-900">Hostinger International Ltd.</strong>, dont les serveurs pour les clients européens sont situés dans l'Union Européenne, garantissant un niveau de protection des données conforme au RGPD.
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
