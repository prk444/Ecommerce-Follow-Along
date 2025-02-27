const express = require('express');
const app = express();
const userRouter = require('./controllers/userRoute');
const productRouter = require('./controllers/productRoutes');
const errorMiddleware = require('./middleware/errormiddleware');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);

// Error Middleware
app.use(errorMiddleware);

module.exports = app;