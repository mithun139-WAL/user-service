import bcrypt from 'bcrypt';
import User from '../models/user.js';

export const createUserService = async (userData) => {
  const { password, ...otherData } = userData;

  const hashedPassword = await bcrypt.hash(password, 10);

  return await User.create({ 
    ...otherData, 
    password: hashedPassword 
  });
};