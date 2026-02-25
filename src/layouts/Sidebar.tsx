import StarRating from '../components/Rating';
import { SIDEBAR_FILTERS_CONFIG } from './sidebar-filters';

interface SidebarForm {
  category: string;
  genre: string;
  language: string;
  rating: number;
  releaseYear: string;
}

export default function Sidebar({
  handleClearFilters,
  isOpen,
  onFilterChange,
  onRatingChange,
  sidebarForm,
  toggleSidebar,
}: {
  handleClearFilters: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isOpen: boolean;
  onFilterChange: (name: string, value: string) => void;
  onRatingChange: (name: string, value: number) => void;
  sidebarForm: SidebarForm;
  toggleSidebar: () => void;
}) {
  return (
    <aside
      className={`${isOpen ? 'w-60' : 'w-0'} relative min-h-screen bg-amber-200 duration-500`}
    >
      <button
        onClick={toggleSidebar}
        className="absolute top-1/2 -left-7 -translate-y-1/2 cursor-pointer rounded-l-full bg-amber-200 p-2 hover:bg-amber-300"
      >
        <span className="w-fit font-bold text-gray-900">
          {isOpen ? '>' : '<'}
        </span>
      </button>
      {isOpen && (
        <form>
          <div className="flex justify-center">
            <button
              className="m-2 cursor-pointer rounded-lg border border-amber-500 bg-amber-100 px-2 py-2 text-gray-800 hover:bg-gray-300"
              onClick={handleClearFilters}
            >
              Clear filters
            </button>
          </div>
          {SIDEBAR_FILTERS_CONFIG.map(({ name, label, options }) => {
            const key = name as keyof SidebarForm;

            return (
              <div key={name} className="m-4">
                <label className="mb-1 block">{label}</label>
                <select
                  className="w-full rounded-md bg-gray-800 p-2 text-white"
                  onChange={(event) => onFilterChange(name, event.target.value)}
                  value={sidebarForm[key]}
                >
                  {[{ label: 'Select...', value: '' }, ...options].map(
                    (option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    )
                  )}
                </select>
              </div>
            );
          })}
          <StarRating
            value={sidebarForm.rating}
            onChangeRating={(rating) => onRatingChange('rating', rating)}
          />
        </form>
      )}
    </aside>
  );
}
