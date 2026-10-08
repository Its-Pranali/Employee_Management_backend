import Role from "../models/role.js";

export const getRoles=async(req,res)=>{
    try{
        const data=await Role.findAll();
        return res.status(200).json({
            success:true,
            message:"Roles fetched successfully",
            data:data,
        });
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message: "Failed to fetch roles",
            error:error.message,
        });
    }
}

export const saveRole=async(req,res)=>{
    try{
        const data=await Role.create(req.body);
        if(data){
            return res.status(201).json({
                success:false,
                message:"data not found",
                data:data,
            });
        }
        data.role_name=req.role_name,
        data.status=req.status,

        await data.save();
        return res.status(200).json({
            success:true,
            message:"data saved successfully",
            data:data,
        });
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:"Error while saving data",
            error:error.message,
        });
    }
}




