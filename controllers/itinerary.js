const Itinerary = require("../models/Itinerary");
const controller = {
  create: async (req, res) => {
    try {
      let new_itinerary = await Itinerary.create(req.body);
      res.status(201).json({
        id: new_itinerary._id,
        success: true,
        message: "The Itinerary was created successfully",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  getallbycity: async (req, res) =>{
    let query = {}
   if(req.query.cityId){
    query={
      cityId:req.query.cityId
    }
    }
    try {      
      let itinerary = await Itinerary.find(query);
    if (itinerary){    
      res.status(200).json({
        response: itinerary,
        success: true,
        message: "Itineraries loaded successfully",})
    }else{
        res.status("404").json({
          message: "Itineraries could not be found",
          success: false
        });
    }
  } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },

  editItinerary: async (req, res) => {
    const { id } = req.params;
    try {
      let Itineraryeditated = await Itinerary.findOneAndUpdate({ _id:id }, req.body, { new: true });
      if (Itineraryeditated) {
      res.status(200).json({
        success: true,
        message: "Itinerary updated successfully",
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Itinerary was not found",
      });
    }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  deleteItinerary: async (req, res) => {
    const { id } = req.params;
    try {
      let delate_itinerary = await Itinerary.findOneAndDelete({ _id: id });
      if (delate_itinerary) {
        res.status(200).json({
          success: true,
          message: "itinerary successfully removed",
        });
      } else {
        res.status(404).json({
          success: false,
          message: "itinerary was not found",
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
};
module.exports = controller;
