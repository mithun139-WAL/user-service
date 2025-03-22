import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js';
import sequelize from './models/db.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4001;

// Database Connection
sequelize.sync().then(() => console.log("Database connected"));

// Middlewares
app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));