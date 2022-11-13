const Hotel = require('../models/Hotel')
const controller = {

    create: async ( req, res) =>{
try{
    let new_hotel = await Hotel.create(req.body)
    res.status(201).json({
    id: new_hotel._id,
    success: true,
    message:"The Hotel was created successfully"
    })
} catch(error){
    res.status(400).json({
        success: false,
        message: error.message
})
    }
    },
    update: async (req, res) =>{
        let {id}= req.params
        try{
            let update_hotel= await Hotel.findOneAndUpdate({_id:id},req.body,{new:true})
        if(update_hotel){
            res.status(200).json({
            success: true,
            message:"The Hotel was created successfully"
            })
        }else{
            res.status(400).json({
                success: false,
                message: "The Hotel was notfound created successfully"
        })
        }
    }catch(error){
        res.status(400).json({
        success: false,
        message: error.message
    })
}}
}
module.exports = controller