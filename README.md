# TMDB Full-Stack App

A full-stack movie discovery application with a **React + Vite** frontend and a **Node.js + Express + TypeScript** backend.

This repository uses npm workspaces to manage two independent apps:

- `frontend/` — React client application
- `backend/` — Express API server with Prisma

---

## 🚀 Tech Stack

**Frontend:**

- React
- Vite
- TypeScript
- Tailwind CSS
- Redux Toolkit
- React Router

**Backend:**

- Node.js
- Express
- TypeScript
- PostgreSQL
- Prisma ORM

**External API:**

- TMDB ([The Movie Database](https://www.themoviedb.org/))

---

## 📦 Features

- Browse and search movies from the TMDB API
- Show movie details and metadata
- Responsive UI built with React + Tailwind
- Backend authentication API built with Express
- PostgreSQL database access via Prisma
- Workspace-based monorepo structure

---

## 🛠️ Installation

Clone the repository:

```bash
git clone https://github.com/Yurii-88/tmdb-fullstack-app
cd tmdb-fullstack-app
```

Install all workspace dependencies from the root:

```bash
npm install
```

If you need to install dependencies separately:

```bash
cd frontend && npm install
cd backend && npm install
```

---

## ⚙️ Environment Variables

Create `.env` files in the app folders with the values below.

### `frontend/.env`

```env
VITE_TMDB_READ_ACCESS_TOKEN=your_tmdb_read_access_token
VITE_BASE_URL=https://api.themoviedb.org/3
```

### `backend/.env`

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"
TMDB_API_KEY=your_tmdb_api_key
PORT=3000
```

> Replace `USER`, `PASSWORD`, `HOST`, `PORT`, and `DATABASE` with your PostgreSQL connection values.

---

## 🧩 Run Locally

### Start backend

```bash
cd backend
npm run dev
```

### Start frontend

```bash
cd frontend
npm run dev
```

### Or run both from the root

```bash
npm run dev:frontend
npm run dev:backend
```

Open the frontend in the browser at:

```bash
http://localhost:5173
```

The backend listens on:

```bash
http://localhost:3000
```

---

## 📦 Build

### Frontend

```bash
cd frontend
npm run build
```

### Backend

```bash
cd backend
npm run build
```

---

## 🧪 Useful Scripts

### Root workspace

- `npm run dev:frontend` — start frontend dev server
- `npm run dev:backend` — start backend dev server

### Frontend

- `npm run dev`
- `npm run build`
- `npm run lint`
- `npm run lint:fix`
- `npm run test`
- `npm run preview`

### Backend

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run prisma:generate`
- `npm run prisma:migrate`
- `npm run prisma:studio`
- `npm run lint`
- `npm run lint:fix`
- `npm run prettier`
- `npm run prettier:fix`

---

## 📝 Notes

- The frontend currently fetches movie data directly from TMDB using `VITE_BASE_URL` and `VITE_TMDB_READ_ACCESS_TOKEN`.
- The backend exposes authentication routes under `/api/auth` and is configured to use Prisma with PostgreSQL.
- Add database models in `backend/prisma/schema.prisma`.
- Extend backend routes in `backend/src/api`.

---

## 💡 Future Improvements

- Add frontend authentication flows with backend auth API
- Persist user favorites and watchlist data in PostgreSQL
- Add server-side TMDB proxy endpoints
- Add end-to-end and unit tests for both apps
- Add a shared API client and better error handling

---

## 📬 Support

If you need help, reach me out via matviychuk.yuriy88@gmail.com
