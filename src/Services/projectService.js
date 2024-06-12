const Project = require("../Models/projectModel");

const addProject=async(ProjectData)=>{
    try{
        const project=await Project.create(ProjectData);
        console.log(project)
        return project;
    }catch(err){
        throw err;
    }
};
const getAllProjects=async(userId)=>{
    try{
        const Projects=await Project.find({userId});
        return Projects;
    }catch(err){
        throw err;
    }
};
const updateProjectById=async(ProjectId,userId,updatedData)=>{
    try{
        const project=await Project.findByIdAndUpdate(
        {_id:ProjectId,userId:userId},
        {$set:updatedData},
        {new:true});
        return project;
    }catch(err){
        throw err;
    }
};
const deleteProjectById=async(ProjectId,userId)=>{
    try{
        const project=await Project.findByIdAndDelete({_id:ProjectId,userId:userId});
        return project;
    }catch(err){
        throw err;
    }
};
module.exports = { addProject, getAllProjects, updateProjectById, deleteProjectById };