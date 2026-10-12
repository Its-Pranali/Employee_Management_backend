import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Employee=sequelize.define(
    "Employee",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        user_id: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },

        department:{
            type:DataTypes.STRING(255),
            allowNull:true,
        },

        designation:{
            type:DataTypes.STRING(255),
            allowNull:false,
        },

        mobile_no:{
            type:DataTypes.STRING(255),
            allowNull:true,
        },

        joining_date:{
            type:DataTypes.STRING(255),
            allowNull:true,
        },

        status: {
            type: DataTypes.STRING(25),
            allowNull: false,
            defaultValue: "1",
        },
    },
    {
        tableName: "employees",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
);

export default Employee;