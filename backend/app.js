let express = require('express');

let app = express();
app.use(express.json());
let Errorhandler=require('./utils/errorhanler');
let errormiddleware=require('./middleware/errormiddleware');
let asyncerror=require('./middleware/asyncErrorCatch');
const userRouter = require('./controllers/userRoute');

app.use("/user",userRouter)


// app.post("/create",asyncerror(async(req,res,next)=>{
     
//         const {email,password}=req.body;
//         if(!email || !password){
//             next(new Errorhandler("Please Provide Email And Password",400))
//         }
//         res.status(200).json({message:"User Created Successfully"})     
   
// }))



app.get("/test",(req,res)=>{
    res.send("Hello World");
})



app.use(errormiddleware)
module.exports = app; 