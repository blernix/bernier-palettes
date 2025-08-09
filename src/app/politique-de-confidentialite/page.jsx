// src/app/politique-de-confidentialite/page.jsx

import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Link from 'next/link';

// Métadonnées pour la page, incluant une directive pour ne pas être indexée par Google.
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
      {/* --- MISE EN PAGE MISE À JOUR --- */}
      <main className="bg-[#EDEAE5] pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* On utilise une carte blanche pour le contenu, comme sur le reste du site */}
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold text-[#3C3633] mb-2" style={{ fontFamily: 'serif' }}>
              Politique de Confidentialité
            </h1>
            <p className="text-sm text-gray-500 mb-8">Dernière mise à jour : 9 août 2025</p>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <h2 className="text-2xl font-bold text-gray-800 pt-6 border-t border-gray-200">Préambule</h2>
              <p>
                L'entreprise Bernier Palettes, soucieuse des droits des individus, notamment au regard des traitements automatisés, et dans une volonté de transparence avec ses clients, a mis en place une politique reprenant l’ensemble de ces traitements, des finalités poursuivies par ces derniers ainsi que des moyens d’actions à la disposition des individus pour qu’ils puissent au mieux exercer leurs droits.
              </p>
              <p>
                Cette politique de confidentialité est établie en conformité avec le Règlement (UE) 2016/679 du Parlement européen et du Conseil du 27 avril 2016, relatif à la protection des personnes physiques à l'égard du traitement des données à caractère personnel et à la libre circulation de ces données (ci-après "RGPD"), et la loi n° 78-17 du 6 janvier 1978 modifiée, relative à l'informatique, aux fichiers et aux libertés.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 pt-6 border-t border-gray-200">Article 1 : Responsable du Traitement</h2>
              <p>
                Le responsable du traitement des données à caractère personnel est :<br />
                <strong className="text-gray-900">Bernier Palettes</strong><br />
                Adresse : 2 RD 1006, Les Iles, 73390 Châteauneuf, France<br />
                Email : <a href="mailto:bernier.palettes@gmail.com" className="text-[#A4612D] hover:underline">bernier.palettes@gmail.com</a>
              </p>
              <p>
                L'entreprise n'a pas désigné de Délégué à la Protection des Données (DPO), conformément à l'article 37 du RGPD, ses activités de traitement ne l'exigeant pas.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 pt-6 border-t border-gray-200">Article 2 : Données Personnelles Collectées et Finalités</h2>
              <p>
                Nous collectons différentes catégories de données pour des finalités spécifiques :
              </p>
              <h3 className="text-lg font-semibold text-gray-800 mt-6">2.1 Formulaire de contact</h3>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li><strong className="font-medium">Données collectées :</strong> Nom, adresse e-mail, sujet, contenu du message.</li>
                <li><strong className="font-medium">Finalité :</strong> Traiter et répondre à votre demande de contact ou de devis.</li>
                <li><strong className="font-medium">Base légale :</strong> Votre consentement explicite (Article 6(1)(a) du RGPD), matérialisé par la case à cocher obligatoire avant la soumission du formulaire.</li>
              </ul>
              <h3 className="text-lg font-semibold text-gray-800 mt-6">2.2 Cookies et services tiers (Google Maps)</h3>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li><strong className="font-medium">Données collectées :</strong> Données de navigation et d'interaction, potentiellement votre adresse IP.</li>
                <li><strong className="font-medium">Finalité :</strong> Afficher une carte interactive pour localiser notre entreprise.</li>
                <li><strong className="font-medium">Base légale :</strong> Votre consentement préalable et explicite (Article 6(1)(a) du RGPD), recueilli via le bouton "Afficher la carte". Aucun cookie n'est déposé avant cette action.</li>
              </ul>
              <h3 className="text-lg font-semibold text-gray-800 mt-6">2.3 Logs de serveur</h3>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li><strong className="font-medium">Données collectées :</strong> Adresse IP, type de navigateur, pages visitées, date et heure de la requête.</li>
                <li><strong className="font-medium">Finalité :</strong> Assurer la sécurité de notre site web, prévenir les fraudes, diagnostiquer les problèmes techniques et réaliser des statistiques de fréquentation anonymisées.</li>
                <li><strong className="font-medium">Base légale :</strong> Notre intérêt légitime (Article 6(1)(f) du RGPD) à garantir la sécurité et la performance de nos services.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 pt-6 border-t border-gray-200">Article 3 : Destinataires des Données et Transferts hors Union Européenne</h2>
              <p>
                Les données collectées sont destinées aux services internes de Bernier Palettes. Cependant, pour l'acheminement des e-mails envoyés via notre formulaire de contact, nous utilisons le service <strong className="text-gray-900">EmailJS</strong>.
              </p>
              <p>
                EmailJS est une société basée aux États-Unis, ce qui implique un transfert de vos données (nom, email, message) hors de l'Union Européenne. Ce transfert est encadré par des garanties appropriées, conformément à l'article 46 du RGPD, notamment par l'adhésion d'EmailJS aux <strong className="text-gray-900">Clauses Contractuelles Types (CCT)</strong> de la Commission Européenne, assurant un niveau de protection de vos données adéquat.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 pt-6 border-t border-gray-200">Article 4 : Durée de Conservation des Données</h2>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li><strong className="font-medium">Données du formulaire de contact :</strong> Conservées pour une durée de trois (3) ans à compter de notre dernier contact avec vous.</li>
                <li><strong className="font-medium">Logs de serveur :</strong> Conservés pour une durée maximale de douze (12) mois à des fins de sécurité.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 pt-6 border-t border-gray-200">Article 5 : Vos Droits sur vos Données</h2>
              <p>
                Conformément aux articles 15 à 22 du RGPD, vous disposez des droits suivants concernant vos données personnelles :
              </p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li><strong className="font-medium">Droit d'accès (article 15) :</strong> Le droit d'obtenir la confirmation que vos données sont traitées et d'accéder à ces données.</li>
                <li><strong className="font-medium">Droit de rectification (article 16) :</strong> Le droit de demander la correction de données inexactes ou incomplètes.</li>
                <li><strong className="font-medium">Droit à l'effacement ("droit à l'oubli") (article 17) :</strong> Le droit de demander la suppression de vos données.</li>
                <li><strong className="font-medium">Droit à la limitation du traitement (article 18) :</strong> Le droit de demander le gel temporaire de l'utilisation de vos données.</li>
                <li><strong className="font-medium">Droit à la portabilité des données (article 20) :</strong> Le droit de recevoir vos données dans un format structuré et de les transmettre à un autre responsable de traitement.</li>
                <li><strong className="font-medium">Droit d'opposition (article 21) :</strong> Le droit de vous opposer à tout moment au traitement de vos données.</li>
                <li><strong className="font-medium">Droit de retirer votre consentement :</strong> Pour les traitements basés sur le consentement, vous pouvez le retirer à tout moment, sans que cela ne remette en cause la licéité du traitement effectué avant ce retrait.</li>
              </ul>
              <p>
                Pour exercer ces droits, vous pouvez nous contacter par e-mail à l'adresse suivante : <a href="mailto:bernier.palettes@gmail.com" className="text-[#A4612D] hover:underline">bernier.palettes@gmail.com</a>.
              </p>
              <p>
                Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous avez le droit d’introduire une réclamation auprès de l’autorité de contrôle compétente, la <strong className="text-gray-900">Commission Nationale de l’Informatique et des Libertés (CNIL)</strong> en France.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 pt-6 border-t border-gray-200">Article 6 : Hébergement</h2>
              <p>
                Notre site est hébergé par <strong className="text-gray-900">Hostinger International Ltd.</strong>, dont les serveurs pour les clients européens sont situés dans l'Union Européenne (France), garantissant ainsi un niveau de protection des données conforme au RGPD.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 pt-6 border-t border-gray-200">Article 7 : Modification de la Politique de Confidentialité</h2>
              <p>
                Nous nous réservons le droit de modifier la présente politique de confidentialité à tout moment. En cas de modification substantielle, nous vous en informerons par tout moyen approprié. La version applicable est celle en vigueur au jour de votre consultation du site.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
