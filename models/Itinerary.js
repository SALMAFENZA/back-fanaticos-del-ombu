const mongoose = require("mongoose")
const schema = new mongoose.Schema({

cityId: {Type: mongoose.Types.ObjectId, ref:'cities', required:true},
name: {type:String, required:true},
photo: {type:String, required:true},
description: {type:String, required:true},
price: {type:Number, required:true},
duration: {type:Number, required:true},
userId: {Type: mongoose.Types.ObjectId, ref:'users', required:true}
})

const City= mongoose.model("itineraries", schema)
module.exports= Itinerary