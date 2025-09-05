import { Info } from 'lucide-react'; // On importe l'icône Info

export default function ServiceCard({ service, onCardClick }) {
  const Icon = service.icon;

  return (
    <button
      onClick={() => onCardClick(service)}
      aria-label={`En savoir plus sur le service : ${service.title}`}
      className="group relative bg-white border border-gray-200 rounded-lg p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
    >
      {/* A11Y & UX: L'icône est maintenant toujours visible sur mobile, et n'apparaît au survol que sur les grands écrans. */}
      <div className="absolute top-4 right-4 text-gray-300 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
        <Info size={20} aria-hidden="true" />
      </div>

      <div className="flex justify-center mb-6">
        <Icon className="h-12 w-12 text-[#A4612D]" strokeWidth={1.5} aria-hidden="true" />
      </div>
      
      <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
      <p className="text-gray-600 text-sm">{service.description}</p>
    </button>
  );
}

