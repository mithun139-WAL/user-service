import { createUserService } from '../services/userServices.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/user.js';

export const signupController = async (req, res) => {
  try {
    const newUser = await createUserService(req.body);
    const token = jwt.sign({ userId: newUser.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(201).json({ message: 'Signup successful', token });
  } catch (error) {
    res.status(400).json({ error: 'Signup failed', details: error.message });
  }
};

export const loginController = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log("Received Login Request:", req.body);

    // Fetch user dynamically
    const user = await User.findOne({ where: { username } });
    if (!user) return res.status(404).json({ error: 'User not found' });
    
    console.log("User Found:", user);

    // Compare password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(401).json({ error: 'Invalid credentials' });

    // Generate JWT Token
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ error: 'Login error', details: error.message });
  }
};