let express = require('express');
let cors=require('cors');

let app = express();
app.use(express.json());
let errormiddleware=require('./middleware/errormiddleware');
const userRouter = require('./controllers/userRoute');

app.use(cors({
    origin:"*",
    credentials:true
}));
app.use("/user",userRouter)
 






app.get("/test",(req,res)=>{
    res.send("Hello World");
})



app.use(errormiddleware)
module.exports = app; 