import express from 'express';
import { createUser, getAllUsers } from '../controllers/userController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', authenticateToken, createUser);
router.get('/', authenticateToken, getAllUsers);

export default router;