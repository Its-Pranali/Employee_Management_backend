import Employee from "../models/employee.js";
import Department from "../models/department.js";
import User from "../models/user.js";

export const getEmployee = async (req, res) => {
    try {
        const data = await Employee.findAll({
            attributes: ["id", "user_id", "department", "designation", "mobile_no", "joining_date", "status"],
            include: [
                {
                    model: User,
                    as: "user",
                    attributes: ["id", "first_name", "last_name", "email"],
                },
                {
                    model: Department,
                    as: "dept",
                    attributes: ["id", "department"],
                },
            ],
            order: [["id", "ASC"]],
        });

        return res.status(200).json({
            success: true,
            message: "Data found successfully",
            data: data,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};

export const saveEmployee = async (req, res) => {
    try {
        const data = await Employee.create(req.body);
        return res.status(200).json({
            success: true,
            message: "Data saved successfully",
            data: data,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};

export const updateEmployee = async (req, res) => {
    try {
        const data = await Employee.findByPk(req.params.id);
        if (!data) {
            return res.status(404).json({
                success: false,
                message: "Data not found",
            });
        }

        await data.update(req.body);
        return res.status(200).json({
            success: true,
            message: "Data updated successfully",
            data: data,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};


export const deleteEmployee = async (req, res) => {
    try {
        const data = await Employee.findByPk(req.params.id);
        if (!data) {
            return res.status(201).json({
                success: false,
                message: "Data not found",
                data: data,
            });
        }

        data.status = 0;
        await data.save();

        return res.status(200).json({
            success: true,
            message: "Data deleted successfully",
            data: data,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message,
        });
    }
}