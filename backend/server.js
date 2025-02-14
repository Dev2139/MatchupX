import express from 'express';
import dotenv from 'dotenv';
import mongoose from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import tournamentRoutes from './routes/tournamentRoutes.js';
import playerRoutes from './routes/playerRoutes.js';
import umpireRoutes from './routes/umpireRoutes.js';
import viewerRoutes from './routes/viewerRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/tournaments', tournamentRoutes);
app.use('/api/players', playerRoutes);
app.use('/api/umpires', umpireRoutes);
app.use('/api/viewers', viewerRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
