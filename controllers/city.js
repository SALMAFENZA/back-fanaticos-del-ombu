const City = require("../models/City");
const controller = {

  create: async (req, res) => {
    try {
      let new_city = await City.create(req.body);
      res.status(201).json({
        id: new_city._id,
        success: true,
        message: "City created successfully",
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
        if (req.query.userId) {
        query = {
          ...query,
          userId: req.query.userId.split(",")};
        }

        if (req.query.continent) {
        query = {
          ...query,
          continent: req.query.continent.split(",")};
        }
        
        if (req.query.name) {
            query = {
                ...query,
                name: { $regex: req.query.name, $options: "i" },
            };
        }
    try {
      console.log(query);
      let city = await City.find(query);
      res.status(200).json({
        city: city,
        success: true,
        message: "The cities was found successfully",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  getOne: async (req, res) => {
    const { id } = req.params;
    try {
      let city = await City.findOne({ _id: id }).populate({path:'userId',select:'name photo -_id'});
      if (city) {
        res.status(200).json({
          response: city,
          success: true,
          message: "The city was found successfully",
        });
      } else {
        res.status("404").json({
          message: "No city could be found",
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
  editCity: async (req, res) => {
    const { id } = req.params;

    try {
      let cityeditated = await City.findOneAndUpdate({ _id:id }, req.body, { new: true });
      res.status(200).json({
        response: cityeditated,
        success: true,
        message: "The City updated successfully",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  deleteCity: async (req, res) => {
    const { id } = req.params;

    try {
      await City.findOneAndDelete({ _id:id })
      res.status(200).json({
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
