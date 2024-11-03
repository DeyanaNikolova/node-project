'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Products', [
      {
        id: 1,
        title: 'Product 1',
        price: 25,
        amount: 5,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        title: 'Product 2',
        price: 10,
        amount: 15,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        title: 'Product 3',
        price: 34,
        amount: 66,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        title: 'Product 4',
        price: 65,
        amount: 99,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        title: 'Product 5',
        price: 102,
        amount: 8,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        title: 'Product 6',
        price: 234,
        amount: 4,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};


