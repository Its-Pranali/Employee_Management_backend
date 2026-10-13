'use strict';

/** @type {import('sequelize-cli').Migration} */
export default{
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('projects',{
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
        },
        project_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          unique: true,
        },
        project_title: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        department: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        priority: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        client: {
          type: Sequelize.STRING(255),
          allowNull: true,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
        },
     });
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('projects');
  }
};
