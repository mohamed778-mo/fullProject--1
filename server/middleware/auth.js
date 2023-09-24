const User  = require('../models/user.model')
const jwt  = require("jsonwebtoken")
const PostMessage =require("../models/postMessage")
require('dotenv').config()

const multer = require("multer")
const path = require ("path")
// const loggerEvent = require("../services/logger.service")
// const logger = loggerEvent("user")




const auth = async (req,res,next)=>{

    try {
    if(! req?.cookies){
   
        return res.status(404).send( "No token provided" )
   
    }
   
    const token = req?.cookies?.access_token?.split(" ")[1]
    console.log(token)
    const SECRET_KEY = process.env.SECRET_KEY
    console.log(SECRET_KEY)
    const value = await jwt.verify( token , SECRET_KEY )
    console.log(value)
    
     if(!value){
        return res.status(401).send( "Invalid token provided" )
    }
    let user = await User.findById ( value.id )
    // console.log(user)
    req.user = user
    // res.status(200).send()
    
    if(!user){
    return res.status(401).send("Invalid token provided" )
    }
    else{
      
        next(); 
        
    }
    
} catch (error) {
    res.status(500).send({message:error.message})
    
}
}

const adminAuth = async(req,res,next)=>{
try{
        const token = req?.cookies?.access_token?.split(" ")[1]
        const SECRET_KEY = process.env.SECRET_KEY
        const value = await jwt.verify( token , SECRET_KEY )
        const user = await User.findById ( value.id )
        if(!user.isAdmin){
           return res.status(403).send('user not admin')
        }else{
        next()
       } 

}catch(e){
    res.status(500).send(e.message)
}
    
        
}

// destination   مكان التخزين

const postStorage = multer.diskStorage({
  
    destination: function (req , file , cb){
        cb(null,"uploads/")
      
},

    filename:function(req,file,cb){
        let ext = path.extname(file.originalname)
        cb(null, Date.now() + ext )
       
    }
})

const postUpload=multer({
    storage:postStorage,
    limits:{ fileSize : 1024 * 1024 * 5},
    fileFilter:function (req,file,cb){
        
        fileType = file.mimetype == "image/png" || file.mimetype ==  "image/jpg" || file.mimetype == "image/jpeg"
        if(fileType){
            cb(null,true)
        }else{
            cb(null,false)

        }
        

    }



}) 













module.exports = { 
    auth,
    adminAuth,
    postUpload
}