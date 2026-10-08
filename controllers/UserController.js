import User from "../models/user.js";

export const getUser=async(req,res)=>{
    try{
        const data=await User.findAll();
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

export const updateUser=async(req,res)=>{
    try{
        const data=await User.findByPk(req.params.id);
        if(!data){
            return res.status(201).json({
                success:false,
                message:"Data not found",
                data:data,
            });
        }

        data.first_name=req.first_name;
        data.last_name=req.last_name;
        data.email=req.email;
        data.password=req.password;
        data.role_id=req.role_id;
         
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
            message:"Error while updating data",
            error:error.message,
        });
    }
}

export const deleteUser=async(req,res)=>{
    try{
        const data = await User.findByPk(req.params.id);
        if(data){
            return res.status(201).json({
                success: false,
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
            message:"Error while deleting data",
            error:error.message,
        });
    }
}