'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Products', [
      {
        title: 'Product 1',
        price: 25,
        amount: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Product 2',
        price: 10,
        amount: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Product 3',
        price: 34,
        amount: 66,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Product 4',
        price: 65,
        amount: 99,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Product 5',
        price: 102,
        amount: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Product 6',
        price: 234,
        amount: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};


