import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Department=sequelize.define(
    "Department",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        department:{
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
        tableName: "departments",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
);

export default Department;