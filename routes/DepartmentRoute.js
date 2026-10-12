import express from "express";
import { getDepartment,saveDepartment,updateDepartment,deleteDepartment } from "../controllers/DepartmentController.js";

const router=express.Router();

router.get('/departments',getDepartment);
router.post('/saveDepartment',saveDepartment);

export default router;