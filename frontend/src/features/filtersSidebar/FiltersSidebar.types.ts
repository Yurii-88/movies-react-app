export interface SidebarProps {
  onHideFilters: () => void;
}

export type SidebarFilters = {
  category: string;
  genre: string;
  language: string;
  rating: number;
  releaseYear: string;
};

export type FilterKey = keyof SidebarFilters;
export type SearchFilter = Exclude<FilterKey, 'rating'>;
