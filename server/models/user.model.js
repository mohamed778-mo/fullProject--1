const mongoose=require("mongoose")
const validator=require("validator")
const bcryptjs=require("bcryptjs")

const userSchema = new mongoose.Schema({
 
  username:{
    type:String,
    trim:true,
    // required:true,
  }
  ,email:{
    type:String,
    trim:true,
    required:true,
    unique:true,

    validate(val){
      if(! validator.isEmail(val)){
        throw new Error("Email is not valid")
      }
    }
  }
  ,password:{
    type:String,
    trim:true,
    required:true,

    validate(value){
      const StrongPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])")
      if(!StrongPassword.test(value)){
        throw new Error("Password must contain at least one number and one uppercase letter")
      }
     

    }
    
    
  }

  ,age:{
    type:Number,
    default:18,
    validate(value){
      if(value <= 0){
        throw new Error("Age must be postive num")
      }
      if(value<18){
        throw new Error("Age muut be at least 18 years old")
      }
      if(value>100){
        throw new Error("Age must be at most 100 years old")
      }

  }
},

isAdmin:{
    type:Boolean,
    default:false
  }

  ,tokens:[
    {
      type:String,
      expires: "2d"
    }

  ],
  

})

/////////////////////////////////////////////////////////////
// another way to hash   
 userSchema.pre("save",async function(){

  try {
   const user = this 
      if(!user.isModified("password")){
      
        return
      }
          user.password = await bcryptjs.hash( user.password , 8)
    
    }
 catch (error) {
      console.log(error)
} 
   })     
  
////////////////////////////////////////////////////
   // hide data
   userSchema.methods.toJSON = function(){
      const user = this 
      const dataToObject = user.toObject()
      delete dataToObject.password
      delete dataToObject.tokens
     
      return dataToObject
    }
    



const User = mongoose.model('User',userSchema)

module.exports = User;