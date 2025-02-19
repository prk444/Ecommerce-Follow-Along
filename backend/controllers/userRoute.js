let express = require("express");
let userRouter = express.Router();
let Errorhandler = require('../utils/errorhanler');
let asyncerror = require('../middleware/asyncErrorCatch');
let UserModel = require('../model/usermodel');
let bcrypt = require('bcrypt');
let sendmail = require('../utils/mail');
let jwt = require('jsonwebtoken');
const asyncErrorCatch = require("../middleware/asyncErrorCatch");
const upload = require("../middleware/multer");

userRouter.post("/signup", asyncerror(async (req, res, next) => {
    const { email, password, name } = req.body;
    if (!email || !password || !name) {
        return next(new Errorhandler("Please Provide Email And Password", 400));
    }
    let User = await UserModel.findOne({ email });
    if (User) {
        return next(new Errorhandler("Please login", 400));
    }

    bcrypt.hash(password, 5, async(err, hash) => {
        if (err) {
            return next(new Errorhandler("Please Provide Password", 400));
        }
        const newuser = await new UserModel({
            name,
            email,
            password: hash
        });
        console.log(newuser);
        let token = jwt.sign({ id: newuser._id }, process.env.ACCESS, { expiresIn: 60 * 60 * 60 * 30 });
        let activation_url = `http://localhost:8080/user/activation/${token}`;
        try {
            await sendmail({
                email: newuser.email,
                subject: "Account Activation",
                message: `hello ${newuser.name} click on the link to activate your account ${activation_url}`
            });
            
            await newuser.save();
            res.status(200).json({ status: true, message: "registration successful please activate your account" });
        } catch (error) {
            console.log(error);
            return next(new Errorhandler("Internal server error", 500));
        }
    });

}));

userRouter.get("/activation/:token", asyncErrorCatch(async (req, res, next) => {
    let token = req.params.token;
    if (!token) {
        return next(new Errorhandler("token not found", 404));
    }
    jwt.verify(token, process.env.ACCESS, async (err, decoded) => {
        if (err) {
            return next(new Errorhandler("token is not valid", 400));
        }

        let id = decoded.id;
        await UserModel.findByIdAndUpdate(id, { isActivated: true });

        res.status(200).json({ status: true, message: "activation is completed" });
    });
}));

userRouter.post("/login", asyncErrorCatch(async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return next(new Errorhandler("email and password are required", 400));
    }

    let user = await UserModel.findOne({ email });
    if (!user) {
        return next(new Errorhandler("please signup before login", 400));
    }

    if (!user.isActivated) {
        return next(new Errorhandler("please activate your account before login", 400));
    }

    let isMatching = await bcrypt.compare(password, user.password);
    if (!isMatching) {
        return next(new Errorhandler("password is incorrect", 400));
    }

    let token = jwt.sign({ id: user._id }, process.env.ACCESS, { expiresIn: 60 * 60 * 60 * 60 * 24 * 30 });

    res.cookie("accesstoken", token, {
        httpOnly: true,
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });

    res.status(200).json({ status: true, message: "login successful" });
}));

userRouter.post("/upload", upload.single("photo"), asyncErrorCatch(async (req, res, next) => {
    console.log(req.file);
    console.log(req.body);
    if (!req.file) {
        return next(new Errorhandler("File not found", 400));
    }

    res.status(200).json({ message: "File uploaded successfully", filePath: `/uploads/${req.file.filename}` });
}));

module.exports = userRouter;