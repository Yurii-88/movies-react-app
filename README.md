# 🎬 React + Vite Movie App

A modern movie browsing application built with **React**, **Vite**, **TypeScript**, **Tailwind CSS**, **Redux Toolkit**, **Firebase**, and **TMDB API**. This project provides a fast, scalable, and responsive UI for discovering movies, viewing details, and managing user-specific data.

---

## 🚀 Tech Stack

- ⚛️ React — UI library
- ⚡ Vite — Fast build tool and dev server
- 🟦 TypeScript — Static typing for scalability
- 🎨 Tailwind CSS — Utility-first styling
- 🧠 Redux Toolkit — State management
- 🔥 Firebase — Authentication & backend services
- 🎥 TMDB API — Movie data source

---

## 📦 Features

- 🔍 Browse trending and popular movies
- 🎬 View detailed movie information
- ❤️ Save favorites & watchlist (Firebase + Redux state sync)
- 🔐 User authentication (Firebase Auth)
- 🧠 Global state management with Redux Toolkit
- 📱 Fully responsive UI
- ⚡ Fast performance with Vite

---

## 🛠️ Installation

Clone the repository:

```bash
git clone https://github.com/Yurii-88/tmdb-fullstack-app
cd tmdb-fullstack-app
```

Install dependencies:

```bash
npm install
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory and add the following:

```env
VITE_TMDB_READ_ACCESS_TOKEN=your_tmdb_read_access_token

VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

---

## 🧪 Development

Run the development server:

```bash
npm run dev
```

Open in browser:

```
http://localhost:5173
```

---

## 📦 Build

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## 📁 Project Structure

```
src/
│
├── app/             # Redux store configuration
├── api/             # TMDB API
├── assets/          # Static assets
├── components/      # Reusable UI components
├── context/         # React context providers and shared state hooks
├── features/        # Redux slices (movies, auth, favorites, etc.)
├── firebase/        # Contains Firebase config
├── hooks/           # Custom React hooks
├── pages/           # Route-based pages
├── services/        # API (TMDB) & Firebase logic
├── types/           # TypeScript types/interfaces
├── utils/           # Helper functions
├── App.tsx          # Root component
├── index.css        # Global CSS styles and/or CSS third-party package (3PP) imports
└── main.tsx         # App entry point
```

---

## 🧠 Redux Toolkit Setup

- Centralized store in `src/app/store.ts`
- Feature-based slices (e.g., `moviesSlice`, `authSlice`, `favoritesSlice`)
- Async logic handled with `createAsyncThunk`
- Typed hooks (`useAppDispatch`, `useAppSelector`) for TypeScript safety

Example:

```ts
import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
  name: 'movies',
  initialState: { list: [], loading: false },
  reducers: {},
});
```

---

## 🔐 Firebase Setup

1. Create a project in Firebase Console
2. Enable Authentication (Email/Password or providers like Google)
3. Create Firestore database (for favorites/watchlist)
4. Copy config values into `.env`

---

## 🎥 TMDB API Setup

1. Create an account at TMDB
2. Generate an API key
3. Add it to your `.env` file

---

## 📸 Screenshots

_(Add screenshots of your app here)_

---

## 🧩 Future Improvements

- 🎭 Genre-based filtering
- 🔎 Advanced search with debounce
- ⭐ Ratings and reviews
- 🌙 Dark mode toggle
- 📺 TV shows support
- 🧠 Persisted Redux state (e.g., with localStorage)

---

## 💡 Acknowledgements

- TMDB for providing the movie API
- Firebase for backend services
- Vite for lightning-fast tooling
- Redux Toolkit for simplifying state management

---

## 📬 Contact

For questions or feedback, feel free to reach out or open an issue.

---
