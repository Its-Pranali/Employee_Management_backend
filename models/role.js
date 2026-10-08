import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Role=sequelize.define(
    "Role",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        role_name: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },

        status: {
            type: DataTypes.STRING(25),
            allowNull: false,
            defaultValue: "1",
        },
    },
    {
        tableName: "roles",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
);

export default Role;