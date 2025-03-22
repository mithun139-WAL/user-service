const { sequelize } = require('./models/db');

(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connected successfully.');
    process.exit(0);
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error);
    process.exit(1);
  }
})();