import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../app/store';
import PrimaryButton from '../../components/common/PrimaryButton';
import StarRating from '../rating/Rating';
import type { SearchFilter, SidebarProps } from './FiltersSidebar.types';
import { SIDEBAR_FILTERS_CONFIG } from './filtersSidebarConfig';
import { resetFilters, setFiltersValue, setRating } from './filtersSidebarSlice';

export default function Sidebar({ onHideFilters }: SidebarProps) {
  const dispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.filters);
  const handleClearFilters = () => dispatch(resetFilters());
  const handleFilterChange = (filter: SearchFilter, value: string) =>
    dispatch(setFiltersValue({ filter, value }));
  const handleRatingChange = (value: number) => dispatch(setRating(value));

  return (
    <aside className="h-full w-60 rounded bg-amber-200 py-4 dark:bg-gray-800">
      <form>
        <div className="flex justify-evenly">
          <PrimaryButton onClick={onHideFilters} label="Hide filters" />
          <PrimaryButton onClick={handleClearFilters} label="Clear filters" />
        </div>
        {SIDEBAR_FILTERS_CONFIG.map(({ name, label, options }) => {
          const filter = name as SearchFilter;
          const filterOptions = [{ label: 'Select...', value: '' }, ...options];

          return (
            <div key={name} className="m-4">
              <label className="mb-1 block text-black dark:text-white">{label}</label>
              <select
                className="w-full cursor-pointer rounded-md border bg-amber-100 p-1 text-black dark:border-amber-200 dark:bg-gray-600 dark:text-white"
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
