const joi = require('joi')

const schema = joi.object({
name:joi   
    .string()
    .required() 
    .max(50)
    .messages({
        'any.required': 'Name form required',
        'string.empty': 'Full name form required',
        'string.base': 'Name must be a word. Numbers or symbols are not allowed',
        'string.max': 'Name extremely long',
    }),
lastName:joi   
    .string()
    .required() 
    .max(50)
    .messages({
        'any.required': 'LastName form required',
        'string.empty': 'Full LastName form required',
        'string.base': 'LastName must be a word. Numbers or symbols are not allowed',
        'string.max': 'LastName extremely long',
    }),
    country:joi
        .string()
        .required()
        .min(3)
        .messages({
            'any.required': 'Country form required',
            'string.empty': 'Full Country form required',
            'string.min': 'Country too short'
        }),
photo:joi
    .string()
    .required()
    .uri()
    .messages({
        'any.required': 'Photo form required',
        'string.empty': 'Photo form must be filled with a link',
        'string.uri':'Photo must be a valid Url',
    }),
email:joi
    .string()
    .required()
    .min(1)
    .email({minDomainSegments:2})
    .messages({
        'any.required': 'Email form required',
        'string.empty': 'Email form must be filled',
        'string.min': 'Email too short'
    }),
password:joi 
.string()
.required()
.min(8)
.max(30)
.messages({
    'any.required': 'Password form required',
    'string.empty': 'Full password form required',
    'string.base': 'Password must be a word with a number and a symbol',
    'string.max': 'Password extremely long',
}),

})
module.exports = schema
