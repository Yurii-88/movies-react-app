# ⚙️ Backend — TMDB API Server

A Node.js + Express + TypeScript backend using Prisma and PostgreSQL.

---

## 🚀 Tech Stack

- Node.js
- Express
- TypeScript
- PostgreSQL
- Prisma
- zod validation

---

## ⚙️ Environment Variables

Create `backend/.env` with:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"
TMDB_API_KEY=your_tmdb_api_key
PORT=3000
```

---

## 🛠️ Development

From the `backend` folder:

```bash
cd backend
npm install
npm run dev
```

Or from the repo root:

```bash
npm run dev:backend
```

The backend listens on:

```bash
http://localhost:3000
```

---

## 📦 Build

```bash
cd backend
npm run build
```

Start the production build:

```bash
npm run start
```

---

## 🔧 Prisma

Generate Prisma client:

```bash
cd backend
npm run prisma:generate
```

Run migrations:

```bash
cd backend
npm run prisma:migrate
```

Open Prisma Studio:

```bash
cd backend
npm run prisma:studio
```

---

## 📝 Notes

- The backend exposes authentication routes under `/api/auth`.
- Prisma is used to access PostgreSQL.
