'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Vehicles', [
      { modelName: 'Swift', vehicleTypeId: 1, createdAt: new Date(), updatedAt: new Date() },
      { modelName: 'Polo', vehicleTypeId: 1, createdAt: new Date(), updatedAt: new Date() },
      { modelName: 'City', vehicleTypeId: 2, createdAt: new Date(), updatedAt: new Date() },
      { modelName: 'Creta', vehicleTypeId: 3, createdAt: new Date(), updatedAt: new Date() },
      { modelName: 'Royal Enfield', vehicleTypeId: 4, createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Vehicles', null, {});
  }
};
