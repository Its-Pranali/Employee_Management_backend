import express from "express";

import { getProjects,saveProject,updateProject,deleteProject } from "../controllers/ProjectController.js";

const router=express.Router();

router.get('/getProjects',getProjects);
router.post('/saveProject',saveProject);
router.put('/project/:id',updateProject);
router.delete('/project/:id',deleteProject);


export default router;