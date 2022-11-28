//1ero requiero el modelo q necesito controlar
const User = require('../models/User')
//2do defino el obj controller (q va a controlar el modelo)
const bcryptjs = require('bcryptjs')
const crypto = require('crypto')
const accountVerificationEmail = require('../middlewares/accountVerificationEmail')
const { userSignedUpResponse, userNotFoundResponse, invalidCredentialsResponse, userSignedOutResponse } = require('../response/auth')




const controller = {
//met para crear un doc User
create: async (req,res , next) => {
    let { name, lastName, photo, age, email, password } = req.body
    let role = 'user'
    let verified = false
    let logged = false
    let code = crypto.randomBytes(10).toString('hex')
    password = bcryptjs.hashSync(password, 10)
    try{
 await User.create({ name, lastName, photo, age, email, password, role, verified, logged, code })
await accountVerificationEmail(email, code)
return userSignedUpResponse(req, res)

}catch(error){
    next(error)
}
},
}
//para usarlo en otros lados lo exporto
module.exports = controller 