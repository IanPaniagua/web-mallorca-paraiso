import { useState } from 'react';

interface Categoria {
  nombre: string;
  icono: string;
  descripcion: string;
}

interface ActividadesFilterProps {
  categorias: Categoria[];
}

export default function ActividadesFilter({ categorias }: ActividadesFilterProps) {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string>('');

  const handleCategoriaClick = (nombre: string) => {
    if (categoriaSeleccionada === nombre) {
      setCategoriaSeleccionada('');
      mostrarActividades('');
    } else {
      setCategoriaSeleccionada(nombre);
      mostrarActividades(nombre);
    }
  };

  const mostrarActividades = (categoria: string) => {
    const articles = document.querySelectorAll('#actividadesGrid article');
    
    articles.forEach(article => {
      const element = article as HTMLElement;
      const categoriaArticulo = element.dataset.categoria;
      
      if (!categoria || categoriaArticulo === categoria) {
        element.style.display = 'block';
      } else {
        element.style.display = 'none';
      }
    });
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
      {categorias.map(categoria => (
        <button
          key={categoria.nombre}
          onClick={() => handleCategoriaClick(categoria.nombre)}
          className={`bg-gradient-to-br text-left ${
            categoriaSeleccionada === categoria.nombre
              ? 'from-[#0066FF]/20 to-[#00D4FF]/20 ring-2 ring-[#0066FF]'
              : 'from-white to-[#00D4FF]/5'
          } rounded-lg p-6 shadow-md hover:shadow-lg transition-all`}
        >
          <div className="text-4xl mb-3">{categoria.icono}</div>
          <h3 className="font-display bg-gradient-to-r from-[#0066FF] to-[#00D4FF] bg-clip-text text-transparent mb-2">
            {categoria.nombre}
          </h3>
          <p className="text-sm text-gray-600">{categoria.descripcion}</p>
        </button>
      ))}
    </div>
  );
} 