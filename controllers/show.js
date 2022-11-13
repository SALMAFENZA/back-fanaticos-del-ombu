const Show = require('../models/Show')
const controller = {
create: async (req,res) => {
try{
let show = await Show.create(req.body)
res.status(201).json({
    id: show._id,
    success: true,
    message:"The Show was created successfully"
})
}catch(error){
res.status(400).json({
    success: false,
    message: error.message
})
}
}
}
module.exports = controller 