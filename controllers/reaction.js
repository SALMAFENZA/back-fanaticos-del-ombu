const Reaction = require("../models/Reaction");
const controller = {
  create: async (req, res) => {
    try {
      let reaction = await (
        await Reaction.create(req.body)
      ).populate("userId", { name: 1, photo: 1 });
      res.status(201).json({
        response: reaction,
        success: true,
        message: "The Reaction was created successfully",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  delUserId: async (req, res) => {
    let { userId, id } = req.body;
    console.log(userId, id);
    try {
      await Reaction.updateOne({ _id: id }, { $pull: { userId: userId } });
      res.status(201).json({
        success: true,
        message: "The Reaction was removed successfully",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  addUserId: async (req, res) => {
    let { userId, id } = req.body;
    console.log(userId, id);
    try {
      await Reaction.updateOne({ _id: id }, { $push: { userId: userId } });
      res.status(201).json({
        success: true,
        message: "The Reaction was added successfully",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  getAll: async (req, res) => {
    let query = {};

    if (req.query.itineraryId) {
      query = {
        ...query,
        itineraryId: req.query.itineraryId,
      };
    }

    try {
      let reactions = await Reaction.find(query).populate("userId", {
        name: 1,
        photo: 1,
      });
      if (reactions) {
        res.status(200).json({
          response: reactions.length,
          success: true,
          message: `The itinerary has ${reactions.length} reactions`,
        });
      } else {
        res.status("404").json({
          message: "No reaction here",
          success: false,
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  deleteReaction: async (req, res) => {
    const { name } = req.body;
    try {
      await Reaction.findOneAndDelete({ name: name });
      res.status(200).json({
        response: name,
        success: true,
        message: "Deleted",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
};

module.exports = controller;
