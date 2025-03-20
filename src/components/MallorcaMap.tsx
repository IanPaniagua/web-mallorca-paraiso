import { useState } from 'react';

interface Actividad {
  nombre: string;
  icono: string;
  zonas: string[];
  descripcion: string;
}

interface ZonaInfo {
  id: string;
  nombre: string;
  actividades: string[];
  descripcion: string;
  coordenadas: {
    x: number;
    y: number;
    labelX: number;
    labelY: number;
  };
}

const actividades: Actividad[] = [
  {
    nombre: "Fiesta",
    icono: "🎉",
    zonas: ["magaluf", "playa-de-palma"],
    descripcion: "Zonas de vida nocturna y diversión"
  },
  {
    nombre: "Naturaleza",
    icono: "🏔️",
    zonas: ["tramuntana", "interior"],
    descripcion: "Senderismo, escalada y paisajes espectaculares"
  },
  {
    nombre: "Calas",
    icono: "🏖️",
    zonas: ["este", "sur"],
    descripcion: "Playas vírgenes y aguas cristalinas"
  },
  {
    nombre: "Kitesurf",
    icono: "🏄‍♂️",
    zonas: ["pollensa", "can-pastilla"],
    descripcion: "Spots perfectos para deportes de viento"
  },
  {
    nombre: "Surf",
    icono: "🌊",
    zonas: ["son-serra"],
    descripcion: "Mejores olas de la isla"
  },
  {
    nombre: "Cultural",
    icono: "🏰",
    zonas: ["palma", "interior"],
    descripcion: "Historia, arquitectura y tradiciones"
  }
];

const zonasInfo: ZonaInfo[] = [
  {
    id: "magaluf",
    nombre: "Magaluf",
    actividades: ["Fiesta"],
    descripcion: "La zona más animada, con clubs y vida nocturna internacional",
    coordenadas: {
      x: 250,
      y: 400,
      labelX: 250,
      labelY: 430
    }
  },
  {
    id: "playa-de-palma",
    nombre: "Playa de Palma",
    actividades: ["Fiesta", "Kitesurf"],
    descripcion: "Ambiente festivo y deportes acuáticos",
    coordenadas: {
      x: 350,
      y: 450,
      labelX: 350,
      labelY: 480
    }
  },
  {
    id: "tramuntana",
    nombre: "Serra de Tramuntana",
    actividades: ["Naturaleza"],
    descripcion: "Patrimonio UNESCO, perfecta para senderismo y escalada",
    coordenadas: {
      x: 300,
      y: 200,
      labelX: 300,
      labelY: 230
    }
  },
  {
    id: "este",
    nombre: "Costa Este",
    actividades: ["Calas"],
    descripcion: "Las calas más hermosas y cristalinas",
    coordenadas: {
      x: 600,
      y: 300,
      labelX: 600,
      labelY: 330
    }
  },
  {
    id: "sur",
    nombre: "Costa Sur",
    actividades: ["Calas"],
    descripcion: "Playas paradisíacas de arena blanca",
    coordenadas: {
      x: 450,
      y: 500,
      labelX: 450,
      labelY: 530
    }
  },
  {
    id: "pollensa",
    nombre: "Puerto Pollensa",
    actividades: ["Kitesurf"],
    descripcion: "Spot principal de kitesurf con viento térmico",
    coordenadas: {
      x: 450,
      y: 150,
      labelX: 450,
      labelY: 180
    }
  },
  {
    id: "can-pastilla",
    nombre: "Can Pastilla",
    actividades: ["Kitesurf"],
    descripcion: "Zona ventosa perfecta para deportes acuáticos",
    coordenadas: {
      x: 400,
      y: 400,
      labelX: 400,
      labelY: 430
    }
  },
  {
    id: "son-serra",
    nombre: "Son Serra de Marina",
    actividades: ["Surf"],
    descripcion: "El mejor spot de surf de Mallorca",
    coordenadas: {
      x: 550,
      y: 200,
      labelX: 550,
      labelY: 230
    }
  },
  {
    id: "palma",
    nombre: "Palma",
    actividades: ["Cultural"],
    descripcion: "Capital histórica con rica oferta cultural",
    coordenadas: {
      x: 300,
      y: 350,
      labelX: 300,
      labelY: 380
    }
  },
  {
    id: "interior",
    nombre: "Interior",
    actividades: ["Cultural", "Naturaleza"],
    descripcion: "Pueblos tradicionales y paisaje rural auténtico",
    coordenadas: {
      x: 400,
      y: 300,
      labelX: 400,
      labelY: 330
    }
  }
];

export default function MallorcaMap() {
  const [selectedActivity, setSelectedActivity] = useState<string>('');
  const [hoveredZone, setHoveredZone] = useState<ZonaInfo | null>(null);

  const handleActivityClick = (actividad: string) => {
    setSelectedActivity(selectedActivity === actividad ? '' : actividad);
  };

  const isZoneActive = (zoneId: string) => {
    if (!selectedActivity) return true;
    const actividad = actividades.find(a => a.nombre === selectedActivity);
    return actividad?.zonas.includes(zoneId);
  };

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-display bg-gradient-to-r from-[#0066FF] to-[#00D4FF] bg-clip-text text-transparent mb-6">
        Descubre Mallorca según tus intereses
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Filtros de actividades */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Selecciona tu actividad preferida:</h3>
          <div className="grid grid-cols-2 gap-3">
            {actividades.map((actividad) => (
              <button
                key={actividad.nombre}
                onClick={() => handleActivityClick(actividad.nombre)}
                className={`p-3 rounded-xl text-center transition-all duration-300 ${
                  selectedActivity === actividad.nombre
                    ? 'bg-[#0066FF] text-white transform scale-105'
                    : 'bg-gradient-to-br from-white to-[#00D4FF]/5 hover:shadow-md'
                }`}
              >
                <span className="text-2xl mb-1 block">{actividad.icono}</span>
                <span className="font-display text-sm">{actividad.nombre}</span>
              </button>
            ))}
          </div>
          
          {/* Información de zona al hacer hover */}
          <div className="mt-6 p-4 bg-gradient-to-br from-white to-[#00D4FF]/5 rounded-xl min-h-[120px]">
            {hoveredZone ? (
              <>
                <h4 className="font-display text-lg text-[#0066FF] mb-2">{hoveredZone.nombre}</h4>
                <p className="text-gray-600 text-sm mb-2">{hoveredZone.descripcion}</p>
                <div className="flex flex-wrap gap-2">
                  {hoveredZone.actividades.map(act => (
                    <span key={act} className="text-sm bg-[#0066FF]/10 text-[#0066FF] px-2 py-1 rounded-full">
                      {act}
                    </span>
                  ))}
                </div>
              </>
            ) : (
              <p className="text-gray-500 text-sm">
                Pasa el cursor sobre una zona del mapa para ver más información
              </p>
            )}
          </div>
        </div>

        {/* Mapa SVG */}
        <div className="lg:col-span-2 relative">
          <svg
            viewBox="0 0 800 600"
            className="w-full h-auto"
          >
            {/* Contorno de Mallorca */}
            <path
              d="M400,100 C550,50 700,150 750,300 C800,450 700,500 600,520 C500,540 300,550 200,500 C100,450 50,300 100,200 C150,100 300,130 400,100"
              fill="#E5F6FF"
              stroke="#0066FF"
              strokeWidth="2"
              className="transition-all duration-300"
            />
            
            {/* Zonas clickeables */}
            {zonasInfo.map((zona) => (
              <g
                key={zona.id}
                onMouseEnter={() => setHoveredZone(zona)}
                onMouseLeave={() => setHoveredZone(null)}
                className={`cursor-pointer transition-all duration-300 ${
                  isZoneActive(zona.id)
                    ? 'opacity-100'
                    : 'opacity-30'
                }`}
              >
                <circle
                  cx={zona.coordenadas.x}
                  cy={zona.coordenadas.y}
                  r="20"
                  fill={isZoneActive(zona.id) ? '#0066FF' : '#CBD5E1'}
                  fillOpacity="0.2"
                  stroke={isZoneActive(zona.id) ? '#0066FF' : '#CBD5E1'}
                  strokeWidth="2"
                />
                <text
                  x={zona.coordenadas.labelX}
                  y={zona.coordenadas.labelY}
                  className="text-xs"
                  fill="#1F2937"
                  textAnchor="middle"
                >
                  {zona.nombre}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </div>
  );
} 