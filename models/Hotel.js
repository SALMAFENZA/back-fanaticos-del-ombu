const mongoose= require("mongoose")

const schema= new mongoose.Schema({
    
    name:{type: String, require: true},
    photo:[{type: String, require: true}],
    capacity:{type: Number, require: true},
    cityId:{type: mongoose.Types.ObjectId, ref:"cities"},
    userId:{type: mongoose.Types.ObjectId, ref:"users"}
})

const Hotel= mongoose.model("hotels", schema)
module.exports= Hotel