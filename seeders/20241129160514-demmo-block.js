'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Blocks', [
      {
        titulo: "Alison",
        descripcion: "Nacio el 1 de julio de 2005",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: "Valentina",
        descripcion: "Nacio el 27 de septiembre de 2005",
        createdAt: new Date(),
        updatedAt: new Date()
      }
     ],{})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Blocks', null, {})
  }
};
