import express from "express";

import { getRoles,saveRole } from "../controllers/RoleController.js";

const router=express.Router();

router.get('/roles',getRoles);
router.post('/roles/save',saveRole);

export default router;