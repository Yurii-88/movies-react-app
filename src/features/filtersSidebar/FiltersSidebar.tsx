import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../app/store';
import Button from '../../components/common/button/Button';
import StarRating from '../rating/Rating';
import type { SearchFilter, SidebarProps } from './FiltersSidebar.types';
import { SIDEBAR_FILTERS_CONFIG } from './filtersSidebarConfig';
import { resetFilters, setFiltersValue, setRating } from './filtersSidebarSlice';

export default function Sidebar({ onHideFilters }: SidebarProps) {
  const dispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.filters);
  const buttonClasses = 'bg-amber-200 p-2 hover:text-amber-500';

  const handleClearFilters = () => dispatch(resetFilters());
  const handleFilterChange = (filter: SearchFilter, value: string) => dispatch(setFiltersValue({ filter, value }));
  const handleRatingChange = (value: number) => dispatch(setRating(value));

  return (
    <aside className="h-full w-60 bg-amber-200">
      <form>
        <div className="flex justify-evenly">
          <Button classes={buttonClasses} onClick={onHideFilters}>
            Hide filters
          </Button>
          <Button classes={buttonClasses} onClick={handleClearFilters}>
            Clear filters
          </Button>
        </div>
        {SIDEBAR_FILTERS_CONFIG.map(({ name, label, options }) => {
          const filter = name as SearchFilter;
          const filterOptions = [{ label: 'Select...', value: '' }, ...options];

          return (
            <div key={name} className="m-4">
              <label className="mb-1 block">{label}</label>
              <select
                className="w-full rounded-md bg-gray-800 p-2 text-white"
                onChange={event => handleFilterChange(filter, event?.target.value)}
                value={filters[filter]}
              >
                {filterOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          );
        })}
        <StarRating value={filters.rating} onRatingChange={handleRatingChange} />
      </form>
    </aside>
  );
}
