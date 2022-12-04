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
  addDelUserId: async (req, res) => {   
    let Id = req.user.id;  // Este es el "user" que nos devuelve el passport cuando acepta el "token"
    let id = req.params.id

    try {
      let reaction = await Reaction.findOne({ _id: id });  
      console.log(reaction)
      if (reaction) {
        if (reaction.userId.includes(Id)) {              
          await Reaction.findOneAndUpdate({ _id: id },{ $pull: { userId: req.user.id }});   // Si ya le dio like, lo va a quitar
          res.status(200).json({
            message: `User was remove from ${reaction.name} successfully`,
            success: true,
            reactioned: false,
          });
        } else {
          await Reaction.findOneAndUpdate({ _id: id },{ $push: { userId: req.user.id }}); // Si no le dio like, lo agrega
          res.status(200).json({
            message: `User was added to ${reaction.name}`,
            success: true,
            reactioned: true,
          });
        }
      } else {
        res.status(404).json({
          message: "The reaction does not exist",
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
  getAll: async (req, res) => {
    let query = {};
console.log(req.query)
    if (req.query.userId) {
      query = { userId: req.query.userId };
  }

    if (req.query.itineraryId) {
      query = {
        ...query,
        itineraryId: req.query.itineraryId,
      };
    }

    try {
      let reactions = await Reaction.find(query)
      .populate({ path: 'userId', select: 'name lastName photo' })
      .populate({ path: 'itineraryId', select: 'name photo _id' })
      if (reactions) {
        console.log(reactions);
        res.status(200).json({
          response: reactions,
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
  getAllByUser: async (req, res) => {
    let query = {};

    if (req.query.userId) {
      query = { userId: req.query.userId };
  }

    if (req.query.itineraryId) {
      query = {
        ...query,
        itineraryId: req.query.itineraryId,
      };
    }

    try {
      let reactions = await Reaction.find(query)
      .populate({ path: 'userId', select: 'name lastName photo' })
      .populate({ path: 'itineraryId', select: 'name photo _id' })
      if (reactions) {
        console.log(reactions);
        res.status(200).json({
          response: reactions,
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
