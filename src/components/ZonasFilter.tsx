import { useState } from 'react';

interface ZonasFilterProps {
  tiposAlojamiento: {
    nombre: string;
    icono: string;
    descripcion: string;
  }[];
}

export default function ZonasFilter({ tiposAlojamiento }: ZonasFilterProps) {
  const [selectedType, setSelectedType] = useState<string>('');

  const handleTypeClick = (tipo: string) => {
    const newType = selectedType === tipo ? '' : tipo;
    setSelectedType(newType);
    
    const articles = document.querySelectorAll('#zonasGrid article');
    articles.forEach((article) => {
      const element = article as HTMLElement;
      if (!newType || element.dataset.alojamientos?.includes(newType)) {
        element.style.display = 'block';
      } else {
        element.style.display = 'none';
      }
    });
  };

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-display bg-gradient-to-r from-[#0066FF] to-[#00D4FF] bg-clip-text text-transparent mb-6">
        ¿Qué tipo de alojamiento buscas?
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {tiposAlojamiento.map((tipo) => (
          <button
            key={tipo.nombre}
            onClick={() => handleTypeClick(tipo.nombre)}
            className={`p-4 rounded-xl text-center transition-all duration-300 ${
              selectedType === tipo.nombre
                ? 'bg-[#0066FF] text-white transform scale-105'
                : 'bg-gradient-to-br from-white to-[#00D4FF]/5 hover:shadow-md'
            }`}
          >
            <div className="text-3xl mb-2">{tipo.icono}</div>
            <h3 className="font-display text-sm mb-1">{tipo.nombre}</h3>
            <p className="text-xs opacity-75">{tipo.descripcion}</p>
          </button>
        ))}
      </div>
    </section>
  );
} 