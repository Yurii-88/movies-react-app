export const SIDEBAR_FILTERS_CONFIG = [
  {
    label: 'Category',
    name: 'category',
    options: [
      {
        value: 'popular',
        label: 'Popular',
      },
      {
        value: 'new',
        label: 'New',
      },
      {
        value: 'trending',
        label: 'Trending',
      },
      {
        value: 'top-100',
        label: 'Top-100',
      },
    ],
  },
  {
    label: 'Genre',
    name: 'genre',
    options: [
      {
        value: 'action',
        label: 'Action',
      },
      {
        value: 'comedy',
        label: 'Comedy',
      },
      {
        value: 'drama',
        label: 'Drama',
      },
      {
        value: 'horror',
        label: 'Horror',
      },
      {
        value: 'sci-fi',
        label: 'Sci-Fi',
      },
      {
        value: 'thriller',
        label: 'Thriller',
      },
    ],
  },
  {
    name: 'releaseYear',
    options: Array(new Date().getFullYear() - 1980 + 1)
      .fill(0)
      .map((_, i) => ({
        value: (1980 + i).toString(),
        label: (1980 + i).toString(),
      }))
      .reverse(),
    label: 'Release Year',
  },
  {
    label: 'Language',
    name: 'language',
    options: [
      {
        value: 'en',
        label: 'English',
      },
      {
        value: 'ua',
        label: 'Ukrainian',
      },
    ],
  },
];
