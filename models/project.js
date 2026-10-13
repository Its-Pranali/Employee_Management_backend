import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Project = sequelize.define(
    "Project",
    {
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            autoIncrement:true,
            primaryKey:true,
        },
    },
    {
        tableName:"projects",
        timestamps:true,
        createdAt:"created_at",
        updatedAt:"updated_at",
    }
);

export default Project;