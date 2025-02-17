let express=require("express");
let userRouter=express.Router();
let Errorhandler=require('../utils/errorhanler');
let asyncerror=require('../middleware/asyncErrorCatch');
let UserModel=require('../model/usermodel');
let bcrypt=require('bcrypt');
let sendmail=require('../utils/mail');
let jwt=require('jsonwebtoken');

userRouter.post("/signup",asyncerror(async(req,res,next)=>{

    const {email,password,name}=req.body;
    if(!email || !password || !name){
        next(new Errorhandler("Please Provide Email And Password",400))
    }
   let User= await userModel.findOne({email})
   if(User){
    next(new Errorhandler("Please login",400))
   }

   bcrypt.hash(password, 5, async(err, hash)=>{

    if(err){
        next(new Errorhandler("Please Provide Password",400))
    }
    const  newuser=await new UserModel.create({
        name,
        email,
        password:hash
    })
    let token=jwt.sign( 'secret', {id:newuser._id},{ expiresIn: 60 * 60*60*30 });
      let activation_url=`http://localhost:8080/user/activation/${token}`
    try {
        await sendmail( {
            email:newuser.email,
            subject:"Account Activation",       
            message:`hello ${newuser.name} click on the link to activate your account ${activation_url}`
        })
        await newuser.save();
    } catch (error) {
        next(new Errorhandler("Internal server error",500))
    }
   

    
})




    res.status(200).json({message:"User Created Successfully"})
    

      


})
)





module.exports=userRouter;