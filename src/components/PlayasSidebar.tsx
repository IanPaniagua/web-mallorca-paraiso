import { useState, useEffect } from 'react';

interface PlayasSidebarProps {
  zonas: string[];
  pueblos: string[];
  tipos: string[];
}

export default function PlayasSidebar({ zonas, pueblos, tipos }: PlayasSidebarProps) {
  const [filters, setFilters] = useState({
    search: '',
    zona: '',
    pueblo: '',
    tipo: ''
  });

  useEffect(() => {
    aplicarFiltros(filters);
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
      zona: '',
      pueblo: '',
      tipo: ''
    });
  };

  const aplicarFiltros = (currentFilters: typeof filters) => {
    console.log('Aplicando filtros:', currentFilters);
    
    const articles = document.querySelectorAll('#playasGrid article');
    
    articles.forEach(article => {
      const element = article as HTMLElement;
      const zona = element.dataset.zona;
      const pueblo = element.dataset.pueblo;
      const tipo = element.dataset.tipo;
      const nombre = element.dataset.nombre;
      
      const matchesSearch = !currentFilters.search || 
        nombre?.toLowerCase().includes(currentFilters.search.toLowerCase());
      
      const matchesZona = !currentFilters.zona || 
        zona === currentFilters.zona;
      
      const matchesPueblo = !currentFilters.pueblo || 
        pueblo === currentFilters.pueblo;
      
      const matchesTipo = !currentFilters.tipo || 
        tipo === currentFilters.tipo;
      
      const isVisible = matchesSearch && matchesZona && 
        matchesPueblo && matchesTipo;
      
      console.log('Playa:', nombre, 'Visible:', isVisible);
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
            name="zona"
            value={filters.zona}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0066FF]"
          >
            <option value="">Todas las zonas</option>
            {zonas.map(zona => (
              <option key={zona} value={zona}>{zona}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Pueblo
          </label>
          <select
            name="pueblo"
            value={filters.pueblo}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0066FF]"
          >
            <option value="">Todos los pueblos</option>
            {pueblos.map(pueblo => (
              <option key={pueblo} value={pueblo}>{pueblo}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tipo
          </label>
          <select
            name="tipo"
            value={filters.tipo}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0066FF]"
          >
            <option value="">Todos los tipos</option>
            {tipos.map(tipo => (
              <option key={tipo} value={tipo}>{tipo}</option>
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