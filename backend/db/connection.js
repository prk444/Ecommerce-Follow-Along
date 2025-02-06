let mongooose = require("mongoose");
// require("dotenv").config();

let connect=mongooose.connect("mongodb+srv://poluriraghavas81:gflir33yGuUFolT2@cluster0.30lgl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
module.exports=connect;