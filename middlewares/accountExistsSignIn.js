const User = require("../models/User");
const { userNotFoundResponse } = require("../response/auth");

async function accountExistsSignIn(req, res, next) {
    const user = await User.findOne({email: req.body.email})
    if (user) {
        req.user = user
        return next()
    }
    userNotFoundResponse(req,res)
}

module.exports = accountExistsSignIn 
