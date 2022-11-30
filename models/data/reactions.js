let reactions = [

{
    "itineraryId": "637e64213fb9b3330ff4fb33", 
    "name": "I love it!",
    "icon": "https://img.icons8.com/ios-filled/50/F25081/hearts.png",
    "iconBack": "https://img.icons8.com/ios/50/F25081/hearts--v1.png",
    "userId": ["637e5f6eb770505b2535a176"]  
},
{
    "itineraryId": "637e64213fb9b3330ff4fb33", 
    "name": "I like it",
    "icon": "https://img.icons8.com/material-rounded/24/F25081/facebook-like--v1.png",
    "iconBack": "https://img.icons8.com/material-outlined/24/F25081/facebook-like--v1.png",
    "userId": ["637e5f6eb770505b2535a176"]  
},
{
    "itineraryId": "637e64213fb9b3330ff4fb33", 
    "name": "I do not like it!",
    "icon": "https://img.icons8.com/material-rounded/24/F25081/thumbs-down.png",
    "iconBack": "https://img.icons8.com/material-outlined/24/F25081/thumbs-down.png",
    "userId": ["637e5f6eb770505b2535a176"]  
},
{
    "itineraryId": "637e64213fb9b3330ff4fb33", 
    "name": "Wow! what a surprise!",
    "icon": "https://img.icons8.com/ios/50/F25081/shocked.png",
    "iconBack": "https://img.icons8.com/ios/50/000000/shocked.png",
    "userId": ["637e5f6eb770505b2535a176"]  
},
 ]

 require('dotenv').config()
require('../../config/database')

const Reaction = require('../Reaction')

reactions.forEach(element=>{
    Reaction.create ({

        itineraryId:element.itineraryId,
        name:element.name,
        icon:element.icon,
        iconBack:element.iconBack,
        userId:element.userId,
    })
})