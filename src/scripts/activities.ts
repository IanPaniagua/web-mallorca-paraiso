export interface ActivityProvider {
  name: string;
  address: string;
  website: string;
  image: string;
  phone?: string;
  email?: string;
}

export interface Activity {
  name: string;
  description: string;
  difficulty: string;
  bestLocations: string[];
  image: string;
  providers: ActivityProvider[];
}

export interface ActivityCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  activities: Activity[];
}

declare global {
  interface Window {
    currentCategory: string | null;
    activityCategories: {
      activityCategories: ActivityCategory[];
    };
  }
}

export function toggleCategory(categoryId: string): void {
  const content = document.getElementById(`activities-${categoryId}`);
  const button = document.querySelector(`[data-category="${categoryId}"]`);
  const icon = button?.querySelector('.category-icon');
  
  // Si hay una categoría abierta y es diferente, cerrarla
  if (window.currentCategory && window.currentCategory !== categoryId) {
    const prevContent = document.getElementById(`activities-${window.currentCategory}`);
    const prevButton = document.querySelector(`[data-category="${window.currentCategory}"]`);
    const prevIcon = prevButton?.querySelector('.category-icon');
    
    prevContent?.classList.add('hidden');
    prevIcon?.classList.remove('rotate-180');
  }

  // Toggle de la categoría actual
  if (content && icon) {
    content.classList.toggle('hidden');
    icon.classList.toggle('rotate-180');
    
    window.currentCategory = content.classList.contains('hidden') ? null : categoryId;

    // Scroll suave si se está abriendo
    if (!content.classList.contains('hidden')) {
      content.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

export function showProviders(activityName: string): void {
  const modal = document.getElementById('providersModal');
  const content = document.getElementById('providersContent');
  const activity = findActivity(activityName);

  if (activity && modal && content) {
    content.innerHTML = activity.providers.map(provider => `
      <article class="bg-gradient-to-br from-white to-[#00D4FF]/5 rounded-lg overflow-hidden shadow-md">
        <div class="h-40 relative">
          <img 
            src="${provider.image}" 
            alt="${provider.name}"
            class="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div class="p-4">
          <h4 class="text-lg font-display bg-gradient-to-r from-[#0066FF] to-[#00D4FF] bg-clip-text text-transparent mb-2">
            ${provider.name}
          </h4>
          <p class="text-gray-600 mb-2 flex items-center gap-2">
            <span class="text-[#0066FF]">📍</span>
            ${provider.address}
          </p>
          <p class="text-gray-600 mb-2 flex items-center gap-2">
            <span class="text-[#0066FF]">📞</span>
            ${provider.phone || 'No disponible'}
          </p>
          <a 
            href="${provider.website}" 
            target="_blank" 
            rel="noopener noreferrer"
            class="text-[#0066FF] hover:underline flex items-center gap-2"
          >
            <span>🌐</span>
            Visitar web
          </a>
        </div>
      </article>
    `).join('');

    modal.classList.remove('hidden');
  }
}

export function closeModal(): void {
  const modal = document.getElementById('providersModal');
  if (modal) {
    modal.classList.add('hidden');
  }
}

function findActivity(activityName: string): Activity | null {
  for (const category of window.activityCategories.activityCategories) {
    const activity = category.activities.find(act => act.name === activityName);
    if (activity) return activity;
  }
  return null;
}

export function setupModal(): void {
  window.onclick = function(event: MouseEvent) {
    const modal = document.getElementById('providersModal');
    if (event.target === modal) {
      closeModal();
    }
  };
}

export function initializeActivities(categories: ActivityCategory[]): void {
  // Inicializar variables globales
  window.activityCategories = { activityCategories: categories };
  window.currentCategory = null;

  // Configurar el modal
  setupModal();
} 