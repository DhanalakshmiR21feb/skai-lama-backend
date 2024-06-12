const express=require("express");
const router=express.Router();
const projectController=require("../Controllers/projectController");
const middlewareauth=require("../Middleware/authToken")

const podcastController=require("../Controllers/podcastController")

//Project
//create the Project
router.post("/",middlewareauth,projectController.createProj);

//get all Projects og User
router.get("/",middlewareauth,projectController.getAllProjects);

//update the Project by ID
router.put("/:id",middlewareauth,projectController.updateProjectById);

//delete the Project by ID
router.delete("/:id",middlewareauth,projectController.deleteProjectById);


//PODCASTS
//Add a podcast to project
router.post("/:id/podcasts",middlewareauth,podcastController.addPodcast);

//get all podcasts of project
router.get("/:projectId/podcasts",middlewareauth,podcastController.getAllPodcasts);

//update the podcast by ID
router.put("/:projectId/podcasts/:id",middlewareauth,podcastController.updatePodcastById);

//delete the podcast by ID
router.delete("/:projectId/podcasts/:id",middlewareauth,podcastController.deletePodcastById);

module.exports=router;