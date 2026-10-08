'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('roles',{
        id:{
           type:Sequelize.INTEGER,
           allowNull:false,
           autoIncrement:true,
           primaryKey:true,
        },
        role_name:{
           type:Sequelize.STRING(255),
           allowNull:true,
        },
        status:{
           type:Sequelize.STRING(25),
           allowNull:false,
           defaultValue:1,
        },
        created_at:{
           type:Sequelize.DATE(),
           allowNull:false,
           defaultValue:Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        updated_at:{
           type:Sequelize.DATE(),
           allowNull:false,
           defaultValue:Sequelize.literal('CURRENT_TIMESTAMP'),
        }
     });
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('roles');
  }
};
