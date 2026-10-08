import Employee from "../models/employee.js";

export const getEmployee=async(req,res)=>{
    try{
        const data=await Employee.findAll();
        return res.status(200).json({
            success:true,
            message:"Data found successfully",
            data:data,
        });
    }
    catch(error){
        return res.status(500).json({
            success:false,
            error:error.message,
        });
    }
}