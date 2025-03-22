import { useState, useEffect } from 'react';

interface BeachesSidebarProps {
  regions: string[];
  towns: string[];
  types: string[];
}

export default function BeachesSidebar({ regions, towns, types }: BeachesSidebarProps) {
  const [filters, setFilters] = useState({
    search: '',
    region: '',
    town: '',
    type: ''
  });

  useEffect(() => {
    applyFilters(filters);
  }, [filters]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const resetFilters = () => {
    setFilters({
      search: '',
      region: '',
      town: '',
      type: ''
    });
  };

  const applyFilters = (currentFilters: typeof filters) => {
    console.log('Applying filters:', currentFilters);
    
    const articles = document.querySelectorAll('#beachesGrid article');
    
    articles.forEach(article => {
      const element = article as HTMLElement;
      const region = element.dataset.region;
      const town = element.dataset.town;
      const type = element.dataset.type;
      const name = element.dataset.name;
      
      const matchesSearch = !currentFilters.search || 
        name?.toLowerCase().includes(currentFilters.search.toLowerCase());
      
      const matchesRegion = !currentFilters.region || 
        region === currentFilters.region;
      
      const matchesTown = !currentFilters.town || 
        town === currentFilters.town;
      
      const matchesType = !currentFilters.type || 
        type === currentFilters.type;
      
      const isVisible = matchesSearch && matchesRegion && 
        matchesTown && matchesType;
      
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
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0066FF]"
          >
            <option value="">Todas las zonas</option>
            {regions.map(region => (
              <option key={region} value={region}>{region}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Pueblo
          </label>
          <select
            name="town"
            value={filters.town}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0066FF]"
          >
            <option value="">Todos los pueblos</option>
            {towns.map(town => (
              <option key={town} value={town}>{town}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tipo
          </label>
          <select
            name="type"
            value={filters.type}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0066FF]"
          >
            <option value="">Todos los tipos</option>
            {types.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
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