import { useState, useEffect } from 'react';

interface BeachesSidebarProps {
  regions: string[];
  towns: string[];  // Estas son las localidades que vienen del backend
  types: string[];
}

// Función para capitalizar la primera letra
const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export default function BeachesSidebar({ regions, towns, types }: BeachesSidebarProps) {
  const [filters, setFilters] = useState({
    search: '',
    region: '',
    locality: '',  // Cambiado de town a locality
    selectedTypes: new Set<string>()
  });

  useEffect(() => {
    applyFilters(filters);
  }, [filters]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name !== 'type') {
      setFilters(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleTypeChange = (type: string) => {
    setFilters(prev => {
      const newTypes = new Set(prev.selectedTypes);
      if (newTypes.has(type)) {
        newTypes.delete(type);
      } else {
        newTypes.add(type);
      }
      return {
        ...prev,
        selectedTypes: newTypes
      };
    });
  };

  const resetFilters = () => {
    setFilters({
      search: '',
      region: '',
      locality: '',  // Cambiado de town a locality
      selectedTypes: new Set<string>()
    });
  };

  const applyFilters = (currentFilters: typeof filters) => {
    console.log('Applying filters:', currentFilters);
    
    const articles = document.querySelectorAll('#beachesGrid article');
    
    articles.forEach(article => {
      const element = article as HTMLElement;
      const region = element.dataset.region;
      const locality = element.dataset.town;  // El dataset sigue siendo town por compatibilidad
      const type = element.dataset.type;
      const name = element.dataset.name;
      
      const matchesSearch = !currentFilters.search || 
        name?.toLowerCase().includes(currentFilters.search.toLowerCase());
      
      const matchesRegion = !currentFilters.region || 
        region === currentFilters.region;
      
      const matchesLocality = !currentFilters.locality || 
        locality === currentFilters.locality;
      
      const matchesType = currentFilters.selectedTypes.size === 0 || 
        (type && currentFilters.selectedTypes.has(type));
      
      const isVisible = matchesSearch && matchesRegion && 
        matchesLocality && matchesType;
      
      console.log('Beach:', name, 'Visible:', isVisible);
      element.style.display = isVisible ? 'flex' : 'none';
    });
  };

  return (
    <aside className="w-64 p-6 bg-white shadow-sm">
      <h2 className="text-lg font-display mb-4">Filtros</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Buscar
          </label>
          <input
            type="text"
            name="search"
            value={filters.search}
            onChange={handleChange}
            placeholder="Nombre de la playa..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0066FF]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Zona
          </label>
          <select
            name="region"
            value={filters.region}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0066FF] bg-white"
          >
            <option value="">Todas las zonas</option>
            {regions.map(region => (
              <option key={region} value={region}>{region}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Localidad
          </label>
          <select
            name="locality"
            value={filters.locality}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0066FF] bg-white"
          >
            <option value="">Todas las localidades</option>
            {towns.map(town => (
              <option key={town} value={town}>{town}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tipo
          </label>
          <div className="space-y-2">
            {types.map(type => (
              <label key={type} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.selectedTypes.has(type)}
                  onChange={() => handleTypeChange(type)}
                  className="rounded border-gray-300 text-[#0066FF] focus:ring-[#0066FF]"
                />
                <span className="ml-2 text-sm text-gray-700">{capitalize(type)}</span>
              </label>
            ))}
          </div>
        </div>

        <button
          onClick={resetFilters}
          className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
        >
          Limpiar filtros
        </button>
      </div>
    </aside>
  );
} 