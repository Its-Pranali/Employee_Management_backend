import express from "express";
import { getDepartment,saveDepartment,updateDepartment,deleteDepartment } from "../controllers/DepartmentController.js";

const router=express.Router();

router.get('/departments',getDepartment);
router.post('/saveDepartment',saveDepartment);
router.put('/departments/:id',updateDepartment);
router.delete('/departments/:id',deleteDepartment);

export default router;