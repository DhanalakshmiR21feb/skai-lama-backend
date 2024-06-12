const Podcast = require("../Models/podcastModel");

const addPodcast = async (PodcastData) => {
  try {
   // console.log("inside Podcast service",PodcastData)
    const podcast = await Podcast.create(PodcastData);
    return podcast;
  } catch (err) {
    throw err;
  }
};
const getAllPodcasts = async (projectId) => {
  try {
   // console.log("Podcast service getAllPodcasts ",projectId);
    const Podcasts = await Podcast.find({projectId:projectId});
    return Podcasts;
  } catch (err) {
    throw err;
  }
};
const updatePodcastById = async (projectId, PodcastId, userId, updateData) => {
  try {
   // console.log("Podcast service ",projectId, PodcastId, userId, updateData);
    const updatedData = await Podcast.findOneAndUpdate(
      { _id: PodcastId, projectId: projectId, userId: userId },
      { $set: updateData },
      { new: true }
    );
    return updatedData;
  } catch (err) {
    throw err;
  }
};
const deletePodcastById = async (projectId, PodcastId, userId) => {
  try {
    const podcast = await Podcast.findOneAndDelete({
      _id: PodcastId,
      projectId: projectId,
      userId: userId,
    });
    return podcast;
  } catch (err) {
    throw err;
  }
};
module.exports = {
  addPodcast,
  getAllPodcasts,
  updatePodcastById,
  deletePodcastById,
};
