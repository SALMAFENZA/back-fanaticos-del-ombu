const mongoose = require("mongoose")
const schema = new mongoose.Schema({

itineraryId: {type: mongoose.Types.ObjectId, ref:'itineraries', required:true},
name: {type:String, required:true},
icon: {type:String, required:true},
iconBack: {type:String, required:true},
userId: [{type: mongoose.Types.ObjectId, ref:'users', required:true}]  
})
const Reactions= mongoose.model("reactions", schema)
module.exports= Reactions