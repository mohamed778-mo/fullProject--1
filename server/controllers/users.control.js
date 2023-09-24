const User = require("../models/user.model")
const bcryptjs=require("bcryptjs")
const jwt = require("jsonwebtoken")
// const loggerEvent = require("../services/logger.service")
// const logger = loggerEvent("user")
const mongoose=require("mongoose")

const signUp = async (req,res)=>{

try{

    const user =req.body 
   
    const deplicatedEmail = await User.findOne({ email : user.email })
    if(deplicatedEmail){
        res.status(400).send('Email is exist')
    } 
    
    // const MatchPassword =  await bcryptjs.compare(password , confirmPassword )
    // if(!MatchPassword){
    //     res.status(400).send('Password Not match')
    // } 
        

    const newUser = new User(user)
    await newUser.save()
    res.status(200).send(newUser)


}catch(e){

    
    res.status(500).send(e.message)
}
}

const login =async (req,res)=>{
 
    try {
        let {email,password}=req.body
       
        const user = await User.findOne({email})
       
        if(!user)
        { 
          return  res.status(404).send("invalid email or password") 
        }
       
        const isPassword= await bcryptjs.compare( password , user.password )
        if(!isPassword){
            return  res.status(404).send("invalid email or password")
        }
        
        const SECRET_KEY = process.env.SECRET_KEY
        const token = await jwt.sign({ id : user._id}, SECRET_KEY )
        res.cookie("access_token",`Berear ${token}`,{
            expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
            httpOnly: true
        })
       
        user.tokens.push(token)
        res.status(200).send("login success")
        

    } catch (error) {
       console.log(error.message)
       return res.status(500).send(error.message)
    }



}

const getUser=async (req,res)=>{
try{
    const{id:_id}=req.params
    const user = await User.findById( _id )

    if(!user){
        res.status(404).send('not found')
    }
    res.status(200).send(user)

    

}catch(e){
    res.status(500).send(e.message)
}


}

const editEmail=async(req,res)=>{
   try{
    const email =req.body
    const {id:_id}=req.user
    if(!mongoose.Types.ObjectId.isValid(_id)){
        res.status(404).send("not found")
    }
    
    const newemail = await User.findByIdAndUpdate(_id,email,{new:true})
    if(!newemail){
        res.status(401).send("something is wrong")
    }
    newemail.save()
    res.status(200).send("email is changed!!")
    console.log(newemail)
    
     
}catch(e){
    res.status(500).send(e.message)
}


}

const editPassword = async(req,res)=>{
        try{ 
        const { oldPassword, newPassword } = req.body
        const {id:_id}= req.user
        if(!mongoose.Types.ObjectId.isValid(_id)){
            res.status(404).send("not found")
        }

        const user = await User.findById( _id )
        const isPassword = await bcryptjs.compare(oldPassword , user.password)
        if(!isPassword){
            res.status(404).send("invalid old password")
        }
        user.password = newPassword
        await user.save()
        res.status(200).send("password is changed!!")
        
}catch(e){
    res.status(500).send(e.message)
}


}

const deleteUser =async(req,res)=>{
try{
    const {id:_id}=req.user
    if(!mongoose.Types.ObjectId.isValid(_id)){
        res.status(404).send("not found")
    }

    const removeUser = await User.findByIdAndDelete(_id)
    res.status(200).send("user is deleted!!")

}catch(e){
    res.status(500).send(e.message)
}


}

const getAllUser=async (req,res)=>{
    try{
        const users = await User.find({})
    
        if(!users){
            res.status(404).send('not found')
        }
        res.status(200).send(users)
    
        
    
    }catch(e){
        res.status(500).send(e.message)
    }
    
    
    }
    






module.exports={
    signUp, 
    login,
    getUser,
    editEmail,
    editPassword,
    deleteUser,
    getAllUser
}