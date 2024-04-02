'use strict';

const { UUID } = require('sequelize');
const { sequelize } = require('../Connection');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RegisterTables', {
      id: {
        allowNull: false,
        primaryKey: true,
        type:Sequelize.UUID
      },
      userName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      isConfirmed:{
        type:Sequelize.BOOLEAN
      },
      confirmationCode:{
        allowNull: false,
        type:Sequelize.UUID
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('RegisterTables');
  }
};