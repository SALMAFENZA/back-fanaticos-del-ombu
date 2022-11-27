const joi = require('joi')

const schema = joi.object({
    
    name:joi
        .string()
        .required() 
        .min(1)
        .max(50)
        .messages({
            'any.required': 'Name form required',
            'string.empty': 'Full name form required',
            'string.base': 'Name must be a word. Numbers or symbols are not allowed',
            'string.min': 'Name too short',
            'string.max': 'Name extremely long',
        }),
    continent:joi
        .string()
        .required()
        .min(3)
        .messages({
            'any.required': 'Continent form required',
            'string.empty': 'Full continent form required',
            'string.min': 'continent too short',
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
    population:joi
    .number()
    .required()
    .messages({
        'any.required': 'Population form required',
        'string.empty': 'Population form must be filled',
        'string.base': 'Population must be a number. Letters or symbols are not allowed'
    }),
    userId: joi
        .string()
        .required()
        .messages({
            'any.required': 'UserID form required',
            'string.empty': 'UserID form must be filled',
            'string.base': 'UserID must be a string',
        }),
})

module.exports = schema
