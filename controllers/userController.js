import User from '../models/user.js';
import { createUserService } from '../services/userServices.js';

export const createUser = async (req, res) => {
  try {
    const newUser = await createUserService(req.body);
    res.status(201).json({ message: 'User created', userId: newUser.id });
  } catch (error) {
    res.status(400).json({ error: 'Error creating user' });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({ attributes: { exclude: ['password'] } });
    res.status(200).json(users);
  } catch (error) {
    console.error("🔥 Error fetching users:", error.message || error);
    res.status(500).json({ error: 'Error fetching users', details: error.message || error });
  }
};