const express = require('express');
const app = express();
const userRouter = require('./controllers/userRoute');
const productRouter = require('./controllers/productRoutes');
const errorMiddleware = require('./middleware/errormiddleware');
const path = require('path'); 

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);



console.log(path.join(__dirname, 'uploadproducts'))


app.use('/profile-photo', express.static(path.join(__dirname, 'uploads')));

app.use('/products-photo', express.static(path.join(__dirname, 'uploadproducts')));

app.use("/user",userRouter)
app.use("/product", productRouter);



// Error Middleware
app.use(errorMiddleware);

module.exports = app;