import { useState } from 'react';
import FiltersSidebar from '../features/filtersSidebar/FiltersSidebar';

export default function HomePage() {
  const [showFilters, setShowFilters] = useState(false);
  const toggleSidebar = (value: boolean) => setShowFilters(value);

  return (
    <main
      className={`relative flex flex-1 bg-amber-100 p-2 text-slate-900 dark:bg-slate-950 dark:text-slate-100 ${showFilters ? 'gap-2' : ''}`}
    >
      <div className="flex-1">Content</div>
      <div>
        {!showFilters && (
          <button
            className="absolute top-20 right-0 cursor-pointer rounded-l-full bg-amber-200 px-3 py-2 text-sm font-medium transition hover:bg-amber-300 dark:bg-gray-600 dark:text-amber-200 dark:hover:bg-gray-500"
            onClick={() => toggleSidebar(true)}
          >
            Show filters
          </button>
        )}
        {showFilters && <FiltersSidebar onHideFilters={() => toggleSidebar(false)} />}
      </div>
    </main>
  );
}
