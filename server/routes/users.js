const express = require("express")
const router = express.Router()
const {signUp,login,getUser,editEmail,editPassword,deleteUser,getAllUser}=require('../controllers/users.control')
const{auth,adminAuth}=require("../middleware/auth")

router.post('/signup',signUp)

router.post('/login',login)

router.get('/getuser/:id',getUser)

router.patch('/editemail',auth, editEmail)

router.patch('/editpassword',auth, editPassword)

router.delete('/deleteuser' ,auth ,deleteUser )

router.get('/getallusers',adminAuth,getAllUser)


module.exports= router;