import express from "express";
import { getEmployee,saveEmployee,updateEmployee,deleteEmployee } from "../controllers/EmployeeController.js";

const router=express.Router();

router.get('/employees',getEmployee);
router.post('/saveEmployee',saveEmployee);
router.put('/employee/:id',updateEmployee);
router.delete('/employee/:id',deleteEmployee);

export default router;
