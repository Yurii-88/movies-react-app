import { useState } from 'react';
import FiltersSidebar from '../../features/filtersSidebar/FiltersSidebar';
import Button from '../common/Button';

export default function Main() {
  const [showFilters, setShowFilters] = useState(false);
  const toggleSidebar = (value: boolean) => setShowFilters(value);

  return (
    <main
      className={`relative flex flex-1 bg-amber-100 p-2 text-slate-900 dark:bg-slate-950 dark:text-slate-100 ${showFilters ? 'gap-2' : ''}`}
    >
      <div className="content flex-1">Content</div>
      <div className="sidebar">
        {!showFilters && (
          <Button
            classes="absolute right-0 top-20 rounded-l-full px-3 py-2 text-sm font-medium transition bg-amber-200 hover:bg-amber-300 dark:bg-gray-600 dark:text-amber-200 dark:hover:bg-gray-500"
            onClick={() => toggleSidebar(true)}
          >
            Show filters
          </Button>
        )}
        {showFilters && <FiltersSidebar onHideFilters={() => toggleSidebar(false)} />}
      </div>
    </main>
  );
}
