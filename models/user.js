import { DataTypes } from 'sequelize';
import sequelize from './db.js';

const User = sequelize.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { notEmpty: true },
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { notEmpty: true },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: { isEmail: true, notEmpty: true },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { len: [8, 100] },
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: { notEmpty: true, len: [3, 20] },
  },
  mobile: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: { isNumeric: true, len: [10, 15] },
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  createdBy: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  updatedBy: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  timestamps: true,
  paranoid: true,
  tableName: 'users',
});

export default User;