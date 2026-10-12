'use strict';

/** @type {import('sequelize-cli').Migration} */
export default{
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('departments',{
        id:{
           type:Sequelize.INTEGER,
           primaryKey:true,
           allowNull:false,
           autoIncrement:true,
        },
        department:{
           type:Sequelize.STRING(255),
           allowNull:false,
        },
        created_at: {
           type: Sequelize.DATE,
           allowNull: false,
           defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        status: {
           type: Sequelize.BOOLEAN,
           allowNull: false,
           defaultValue: true,
        },
        updated_at: {
           type: Sequelize.DATE,
           allowNull: false,
           defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
        },
     });
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('departments');
  }
};
