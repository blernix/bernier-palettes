// components/ServiceCard.jsx
export default function ServiceCard({ service, onCardClick }) {
  // L'icône est passée directement en tant que composant via les props
  const Icon = service.icon;

  return (
    <button
      onClick={() => onCardClick(service)}
      className="group bg-white border border-gray-200 rounded-lg p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
    >
      <div className="flex justify-center mb-6">
        <Icon className="h-12 w-12 text-[#A4612D]" strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
      <p className="text-gray-600 text-sm">{service.description}</p>
    </button>
  );
}