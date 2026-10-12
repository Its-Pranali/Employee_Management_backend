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

export const saveEmployee=async(req,res)=>{
    try{
        const data=await Employee.create(req.body);
        if(!data){
            return res.status(201).json({
                success:false,
                message:"Data not found",
                data:data,
            });
            
        }
        data.user_id=req.user.id,
        data.department=req.department,
        data.designation=req.designation,
        data.mobile_no=req.mobile_no,
        data.joininf_date=req.joining_date,
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


export const updateEmployee=async(req,res)=>{
    try{
        const data=await Employee.findByPk(req.body);
        if(!data){
            return res.status(201).json({
                success:false,
                message:"Data not found",
                data:data,
            });
        }

        data.user_id=req.user_id;
        data.department=req.department;
        data.designation=req.designation;
        data.mobile_no=req.mobile_no;
        data.joining_date=req.joining_date;
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


export const deleteEmployee=async(req,res)=>{
    try{
        const data=await Employee.findByPk(req.params.id);
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