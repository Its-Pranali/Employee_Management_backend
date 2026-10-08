import express from "express";

import { getUser } from "../controllers/UserController.js";
import { register,login } from "../controllers/AuthController.js";

const router=express.Router();

router.get('/users',getUser);
router.post('/addUser',register);
router.post('/login',login);

export default router;