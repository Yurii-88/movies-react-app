import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import authRoutes from './modules/auth/auth.routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use('/api/auth', authRoutes);

export default app;
