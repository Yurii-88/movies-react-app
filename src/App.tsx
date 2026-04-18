import { useState } from 'react';
import Button from './components/common/button/Button';
import FiltersSidebar from './features/filtersSidebar/FiltersSidebar';

export default function App() {
  const [showFilters, setShowFilters] = useState(false);
  const toggleSidebar = (value: boolean) => setShowFilters(value);

  return (
    <div className="relative flex h-screen w-full overflow-x-hidden bg-gray-900">
      <main className="flex-1 text-amber-50">Main Content</main>
      {showFilters ? (
        <FiltersSidebar onHideFilters={() => toggleSidebar(false)} />
      ) : (
        <Button
          classes="absolute right-0 top-10 rounded-l-full bg-amber-200 p-2 hover:text-amber-500"
          onClick={() => toggleSidebar(true)}
        >
          Show filters
        </Button>
      )}
    </div>
  );
}
