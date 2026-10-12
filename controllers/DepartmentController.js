import Department from "../models/department.js";

export const getDepartment=async(req,res)=>{
    try{
        const data=await Department.findAll();
        if(!data){
            return res.status(201).json({
                success:false,
                message:"Data not found",
                data:data,
            });
        }

        return res.status(200).json({
            success:true,
            message:"data found successfully",
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

export const saveDepartment=async(req,res)=>{
    try{
        const data=await Department.create(req.body);
        if(!data){
            return res.status(201).json({
                success:false,
                message:"Data not found",
                data:data,
            });
        }

        data.department=req.department,
        data.status=req.status,
        await data.save();

        return res.status(200).json({
            success:true,
            message:"Data saved successfully",
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

export const updateDepartment=async(req,res)=>{
    try{
        const data=await Department.findByPk(req.params.id);
        if(!data){
           return res.status(201).json({
               success:false,
               message:"Data not found",
               data:data,
           });
        }

        data.department=req.department;
        data.status=req.status;
        await data.save();

        return res.status(200).json({
            success:true,
            message:"Data updated successfully",
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

export const deleteDepartment=async(req,res)=>{
    try{
        const data=await Department.findByPk(req.params.id);
        if(!data){
           return res.status(201).json({
               success:false,
               message:"Data not found",
               data:data,
           });
        }

        data.status=0;
        await data.save();

        return res.status(200).json({
            success:true,
            message:"Data deleted successfully",
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