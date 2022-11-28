//1ero requiero el modelo q necesito controlar
const User = require('../models/User')
//2do defino el obj controller (q va a controlar el modelo)
const bcryptjs = require('bcryptjs')
const crypto = require('crypto')
const accountVerificationEmail = require('../middlewares/accountVerificationEmail')
const { userSignedUpResponse, userNotFoundResponse, invalidCredentialsResponse, userSignedOutResponse } = require('../response/auth')
const jwt = require('jsonwebtoken')



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
login: async (req, res, next) => {
    let { password } = req.body
    let { user } = req
    try {
        console.log(password , user.password)
        const verify = bcryptjs.compareSync(password, user.password)
        console.log(verify)
        if (verify) {
            const location_user = await User.findOneAndUpdate({ email: user.email }, { logged: true }, { new: true })
            const token = jwt.sign(
                { id: location_user.id, name: location_user.name, photo: location_user.photo, logged: location_user.logged },
                process.env.KEY_JWT,
                { expiresIn: 60 * 60 * 24 }
            )

            user = {
                name: user.name,
                role: user.role,
                email: user.email,
                photo: user.photo,
                age: user.age,
                id: user.id
            }
            return res.status(200).json({
                response: { user, token },
                success: true,
                message: 'Welcome ' + user.name
            })
        }
        return invalidCredentialsResponse(req, res)
    } catch (error) {
        next(error)
    }
}

}
//para usarlo en otros lados lo exporto
module.exports = controller 