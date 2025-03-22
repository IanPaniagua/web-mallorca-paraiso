import type { Beach } from '../api/types/beach.types';

interface CardBeachDetailProps {
  beach: Beach;
  onClose: () => void;
  isOpen: boolean;
  id?: string;
}

export default function CardBeachDetail({ beach, onClose, isOpen, id }: CardBeachDetailProps) {
  return (
    <div 
      id={id}
      className="fixed inset-0 z-50 items-center justify-center p-0 sm:p-4 hidden"
      data-beach-id={beach.id}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white w-full h-full sm:h-auto sm:max-h-[90vh] sm:max-w-5xl sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="relative w-full h-[30vh] md:h-auto md:w-1/2">
          <img 
            src={beach.image || 'https://mallorca-paraiso-web.s3.eu-central-1.amazonaws.com/beach.jpg'} 
            alt={`Playa ${beach.name}`}
            className="w-full h-full object-cover"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 left-4 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 backdrop-blur-sm transition-colors z-10"
            aria-label="Cerrar modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content Section */}
        <div className="flex-1 p-4 sm:p-6 md:p-8 overflow-y-auto">
          {/* Header */}
          <div className="mb-4 sm:mb-6">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-display text-gray-800 mb-2">
              {beach.name}
            </h3>
            <p className="text-gray-500 flex items-center gap-2 text-sm">
              <span>📍</span>
              {beach.locality.name}, {beach.locality.zone.name}
            </p>
          </div>

          {/* Details */}
          <div className="space-y-4 sm:space-y-6">
            {/* Description */}
            <div>
              <h4 className="text-base font-medium text-gray-800 mb-2">Sobre esta playa</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{beach.description}</p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              <span className="text-gray-600 flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded-full text-sm">
                <span className="text-[#0066FF]">🏖️</span>
                {beach.category}
              </span>
              <span className="text-gray-600 flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded-full text-sm">
                <span className="text-[#0066FF]">🚗</span>
                {beach.access}
              </span>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-base font-medium text-gray-800 mb-2">Servicios disponibles</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {beach.services.map(service => (
                  <span 
                    key={service}
                    className="text-gray-600 flex items-center gap-1.5 bg-gray-50 px-2 py-1.5 rounded-lg text-sm"
                  >
                    <span className="text-[#0066FF]">•</span>
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Maps Link */}
            <div className="pt-2">
              <a 
                href={`https://www.google.com/maps?q=${beach.latitude},${beach.longitude}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#0066FF] hover:text-[#00D4FF] transition-colors text-sm"
              >
                <span>🗺️</span>
                <span>Ver ubicación en Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 