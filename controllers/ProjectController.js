import Project from "../models/project.js";

export const getProjects=async(req,res)=>{
    try{
        const data=await Project.findAll();
        // const data=await Project.findAll();
        if(!data){
            return res.status(201).json({
                success:false,
                message:"data not found",
                data:data,
            });
        }
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

export const saveProject=async(req,res)=>{
    try{
        const data=await Project.create(req.body);
        if(!data){
            return res.status(201).json({
                success:false,
                message:"data not found",
                data:data,
            });
        }
        data.project_id=req.project_id,
        data.project_title=req.project_title,
        data.department=req.department,
        data.priority=req.priority,
        data.client=req.client,
        
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

export const updateProject=async(req,res)=>{
    try{
        const data = await Project.findByPk(req.params.id);
        if(!data){
            return res.status(201).json({
                success:true,
                message:"Data not found",
                data:data,
            });
        }
        data.project_id=req.project_id;
        data.project_title=req.project_title;
        data.department=req.department;
        data.priority=req.priority;
        data.client=req.client;

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

export const deleteProject=async(req,res)=>{
    try{
        data=await Project.findByPk(req.params.id);
        if(!data){
            return res.status(201).json({
                success:false,
                message:"data not found",
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