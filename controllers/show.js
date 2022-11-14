const Show = require("../models/Show");
const controller = {
  
  create: async (req, res) => {
    try {
      let show = await Show.create(req.body);
      res.status(201).json({
        id: show._id,
        success: true,
        message: "The Show was created successfully",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },

  update: async (req, res) => {
    let { id } = req.params;
    try {
      let update_show = await Show.findOneAndUpdate({ _id: id }, req.body, {
        new: true,
      });
      if (update_show) {
        res.status(200).json({
          success: true,
          message: "The Show was created successfully",
        });
      } else {
        res.status(400).json({
          success: false,
          message: "The Show was not found",
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },

  destroy: async (req, res) => {
    let { id } = req.params;
    try {
      let delate_show = await Show.findOneAndDelete({ _id: id });
      if (delate_show) {
        res.status(200).json({
          success: true,
          message: "The Show was successfully removed",
        });
      } else {
        res.status(404).json({
          success: false,
          message: "The Show was not found",
        });
      }
    } catch (error) {
      res.status(404).json({
        success: false,
        message: error.message,
      });
    }
  },
};
module.exports = controller;
