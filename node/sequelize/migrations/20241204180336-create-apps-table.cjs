"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Apps", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: Sequelize.STRING,
      size: Sequelize.INTEGER,
    })
  },

  async down(queryInterface) {
    await queryInterface.dropTable("Apps")
  },
}
