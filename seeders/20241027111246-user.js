'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('Users', [
      {
      login: 'mariaPet',
      firstName: 'Maria',
      lastName: 'Petrova',
      role: 'ADMIN',
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        login: 'goshoG',
        firstName: 'Gosho',
        lastName: 'Goshev',
        role: 'USER',
        createdAt: new Date(),
        updatedAt: new Date(),
        }
    ]);
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Users', null, {}); 
  }
};
