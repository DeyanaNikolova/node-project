'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('Users', [
      {
        id: 1,
      login: 'mariaPet',
      firstName: 'Maria',
      lastName: 'Petrova',
      role: 'ADMIN',
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        id: 2,
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
