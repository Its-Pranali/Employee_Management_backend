import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// REGISTER
export const register = async (req, res) => {
    try {
        const {
            first_name,
            last_name,
            email,
            password,
            role_id,
            status,
        } = req.body;

        if (
            !first_name ||
            !last_name ||
            !email ||
            !role_id||
            !password
        ) {
            return res.status(400).json({
                success: false,
                message: "First name, last name, email and password are required",
            });
        }

        const existingUser = await User.findOne({
            where: {
                email: email,
            },
        });

        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "Email already registered",
            });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log("hashed:", hashedPassword); 

        const user = await User.create({
            first_name,
            last_name,
            email,
            role_id,
            status,
            password: hashedPassword,
        });
        // console.log("saved:", user.getDataValue("password"));

        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: {
                id: user.id,
                first_name: user.first_name,
                last_name: user.last_name,
                role_id:user.role_id,
                email: user.email,
                status:user.status,
            },
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: error.message,
        });
    }
};

export const login = async (req, res) => {
    try {
        const {
            email,
            password,
        } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required",
            });
        }
        const user = await User.findOne({
            where: {
                email: email,
            },
        });
        console.log("user details",user);
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password",
            });
        }
        const isPasswordValid = await bcrypt.compare(
            password,
            user.password
        );

        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password",
            });
        }

        const token = jwt.sign(
            {
                id: user.id,
                email: user.email,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_EXPIRES_IN || "1d",
            }
        );

        return res.status(200).json({
            success: true,
            message: "Login successful",
            token: token,
            user: {
                id: user.id,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                status:user.status,
            },
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success:false,
            message:"something wents wrong",
            error:error.message,
        });
    }
};