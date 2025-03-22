import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const {
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  NODE_ENV,
} = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'postgres',
  logging: NODE_ENV === 'development' ? console.log : false,
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connected successfully.');
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error);
  }
})();

export default sequelize;