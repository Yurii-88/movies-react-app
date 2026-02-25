import { useState } from 'react';
import Sidebar from './layouts/Sidebar';

const EMPTY_SIDEBAR_FORM = {
  category: '',
  genre: '',
  releaseYear: '',
  rating: 0,
  language: '',
};

export default function App() {
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);
  const [sidebarForm, setSidebarForm] = useState(EMPTY_SIDEBAR_FORM);

  function handleSidebarFormChange<T>(name: string, value: T) {
    setSidebarForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleClearFilters(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setSidebarForm(EMPTY_SIDEBAR_FORM);
  }

  return (
    <div className="flex h-screen w-full overflow-x-hidden bg-gray-900">
      <main className="flex-1 text-amber-50">
        {JSON.stringify(sidebarForm)}
      </main>
      <Sidebar
        handleClearFilters={handleClearFilters}
        sidebarForm={sidebarForm}
        isOpen={isSidebarOpened}
        toggleSidebar={() => setIsSidebarOpened((prev) => !prev)}
        onFilterChange={handleSidebarFormChange}
        onRatingChange={handleSidebarFormChange}
      />
    </div>
  );
}
