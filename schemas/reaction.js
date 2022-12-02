const joi = require('joi')


const schema = joi.object({
    
    name:joi
        .string()
        .required() 
        .min(1)
        .max(6)
        .messages({
            'any.required': 'Name form required',
            'string.empty': 'Full name form required',
            'string.base': 'Name must be a word. Numbers or symbols are not allowed',
            'string.min': 'Name too short',
            'string.max': 'Name extremely long',
        }),   
    icon:joi
    .string()
    .required()
    .uri()
    .messages({
        'any.required': 'Icon form required',
        'string.empty': 'Icon form must be filled with a link',
        'string.uri':'Icon must be a valid Url',
    }),
    iconBack:joi
    .string()
    .required()
    .uri()
    .messages({
        'any.required': 'Icon form required',
        'string.empty': 'Icon form must be filled with a link',
        'string.uri':'Icon must be a valid Url',
    }),    
    userId: joi
        .array()
        .required()
        .messages({
            'any.required': 'UserID form required',            
        }),
    itineraryId: joi
        .string()
        .required()
        .messages({
            'any.required': 'Itinerary ID form required',            
        }),
})

module.exports = schema
