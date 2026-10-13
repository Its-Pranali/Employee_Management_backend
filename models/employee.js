import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import User from "./user.js";
import Department from "./department.js";

const Employee = sequelize.define(
    "Employee",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        department: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },

        designation: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },

        mobile_no: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },

        joining_date: {
            type: DataTypes.STRING(255),
            allowNull: true,
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


Employee.belongsTo(User, {
    foreignKey: "user_id",
    as: "user",
});

User.hasOne(Employee, {
    foreignKey: "user_id",
    as: "employee",
});

Employee.belongsTo(Department, {
    foreignKey: "department",
    as: "dept",
});

Department.hasMany(Employee, {
    foreignKey: "department",
    as: "employees",
});

export default Employee;