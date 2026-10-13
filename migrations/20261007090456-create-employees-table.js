'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('employees',{
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          unique: true,
          references: {
            model: 'users',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        department: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        designation: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        mobile_no: {
          type: Sequelize.STRING(15),
          allowNull: true,
        },
        joining_date: {
          type: Sequelize.DATEONLY, 
          allowNull: false,
        },
        status: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: true,
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
     await queryInterface.dropTable('employees');
  }
};
