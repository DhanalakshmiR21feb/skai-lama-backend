const podcastService=require("../Services/podcastService");

const addPodcast=async(req,res)=>{
    try{
        const { text } = req.body;
        const userId = req.user.id;
        const projectPodcast = await podcastService.addPodcast({
            projectId: req.params.id,
          userId,
          text,
        });
       // console.log("added Podcast ",projectPodcast);
        res.status(201).json(projectPodcast);
    }catch(err){
        res.status(500).json({message:err.message});
    }
}

const getAllPodcasts=async(req,res)=>{
    try{
    const {projectId}=req.params;
      // console.log("getallPodcasts projectID",projectId);
        const Podcasts=await podcastService.getAllPodcasts(projectId);
        res.status(200).json(Podcasts);
    }catch(err){
        res.status(500).json({message:err.message});
    }
}

const updatePodcastById=async(req,res)=>{
    try{
        const {projectId,id}=req.params;
        const userId=req.user.id;
        const updateData=req.body;
      //  console.log("update controller ",projectId,id);
        const Podcast=await podcastService.updatePodcastById(
            projectId,id,userId,updateData
        );
        if(!Podcast){
            return res.status(404).json({message:"Podcast not found"});
        }
        res.status(200).json(Podcast);
    }catch(err){
        res.status(500).json({message:err.message});
    }
}

const deletePodcastById=async(req,res)=>{
    try{
        const {projectId,id}=req.params;
        const userId=req.user.id;
        const Podcast=await podcastService.deletePodcastById(
            projectId,id,userId
        );
        if(!Podcast){
            return res.status(404).json({message:"Podcast not found"});
        }
        res.status(200).json(Podcast);
    }catch(err){
        res.status(500).json({message:err.message});
    }
}

module.exports={addPodcast,getAllPodcasts,updatePodcastById,deletePodcastById};