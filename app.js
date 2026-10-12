import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import RoleRoute from "./routes/RoleRoute.js";
import EmployeeRoute from "./routes/EmployeeRoute.js";
import AuthRoute from "./routes/AuthRoute.js";
import DepartmentRoute from "./routes/DepartmentRoute.js";

dotenv.config();

const app=express();
app.use(cors());
app.use(express.json());

app.use("/api",AuthRoute);
app.use("/api",RoleRoute);
app.use("/api",EmployeeRoute);
app.use("/api",DepartmentRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});