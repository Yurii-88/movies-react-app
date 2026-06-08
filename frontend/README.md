# 🎬 Frontend — TMDB Movie App

A React + Vite frontend for browsing movies with the TMDB API.

---

## 🚀 Tech Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- Redux Toolkit
- React Router

---

## 📦 Features

- Browse trending and popular movies from TMDB
- View detailed movie information
- Search movies by keywords
- Save favorites & watchlist

---

## ⚙️ Environment Variables

Create `frontend/.env` with:

```env
VITE_TMDB_READ_ACCESS_TOKEN=your_tmdb_read_access_token
VITE_BASE_URL=https://api.themoviedb.org/3
```

> The frontend currently fetches movie data directly from the TMDB API using `VITE_BASE_URL`.

---

## 🧪 Development

From the `frontend` folder:

```bash
cd frontend
npm install
npm run dev
```

Open the app at:

```bash
http://localhost:5173
```

---

## 📦 Build

```bash
cd frontend
npm run build
```

Preview production build:

```bash
npm run preview
```

---

## 📝 Useful Scripts

- `npm run dev`
- `npm run build`
- `npm run lint`
- `npm run lint:fix`
- `npm run test`
- `npm run preview`

---

## 💡 Notes

- The frontend uses `src/api/tmdbApi.ts` to call TMDB.
- No Firebase configuration is required for the current frontend implementation.
