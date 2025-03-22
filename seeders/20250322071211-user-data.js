'use strict';

/** @type {import('sequelize-cli').Seeder} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        password: '$2b$10$eW5TpMlIrtmA9H5s3GZVOe7nDgyZGz/Kqz92KJFvNLiIriS3YX8iK', // hashed password for 'password123'
        username: 'johndoe',
        mobile: '1234567890',
        isActive: true,
        createdBy: 'system',
        updatedBy: 'system',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane.smith@example.com',
        password: '$2b$10$Vhl5B94J8FoO52O6vIbFs.PYZUuT/3ZAzAciKH9zYpIQhUZ9riIvO', // hashed password for 'password123'
        username: 'janesmith',
        mobile: '0987654321',
        isActive: true,
        createdBy: 'system',
        updatedBy: 'system',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
