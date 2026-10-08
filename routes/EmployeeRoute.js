import express from "express";
import { getEmployee } from "../controllers/EmployeeController.js";

const router=express.Router();

router.get('employees',getEmployee);

export default router;
