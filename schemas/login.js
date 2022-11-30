const joi = require('joi')

const Login = joi.object({
    email: joi.string().required().email({minDomainSegments: 2}).messages({
        'string.empty': 'email is required',
        'string.email': 'email must be a valid email',
        'any.required': 'email is required'
        }),
    password: joi.string().required().messages({
        'string.empty': 'password is required',
        'any.required': 'password is required'
    }),
})

module.exports = Login