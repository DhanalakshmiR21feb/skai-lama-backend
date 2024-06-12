const ProjectService = require("../Services/projectService");

const createProj = async (req, res) => {
  try {
    const { projname } = req.body;
    const userId = req.user.id;
    console.log("7",userId)
    const Project = await ProjectService.addProject({
      projname,
      userId,
    });
    res.status(201).json(Project);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const getAllProjects = async (req, res) => {
  try {
    const userId = req.user.id;
    const Projects = await ProjectService.getAllProjects(userId);
    res.status(200).json(Projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const updateProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    const updateData = req.body;
    console.log(userId,id,updateData);
    const Project = await ProjectService.updateProjectById(id, userId, updateData);
    if (!Project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.status(200).json(Project);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const deleteProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    const Project = await ProjectService.deleteProjectById(id, userId);
    if (!Project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.status(200).json({ message: "Deleted Successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports = { createProj, getAllProjects, updateProjectById, deleteProjectById };
