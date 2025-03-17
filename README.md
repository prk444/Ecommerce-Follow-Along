# Ecommerce-Follow-Along



A backend-focused e-commerce application built to explore and demonstrate modern web development techniques, including RESTful APIs, database management, and authentication.

## 🚀 Features
- **User Authentication and Authorization (JWT-based)**: Secure login and token management.
- **Product Management (CRUD operations)**: Ability to add, update, delete, and view products.
- **Cart and Order Management**: Users can add products to their cart and place orders.
- **Payment Integration (Stripe/PayPal)**: Seamless payment options for processing transactions.
- **Secure and Scalable Architecture**: Designed for performance and growth.
- **Integrated Error Handling and Validation**: Ensures clean and reliable APIs.
- **Database Implementation**: Uses MongoDB/MySQL for efficient data storage.


## 🛠️ Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB / MySQL
- **Authentication**: JWT (JSON Web Tokens)
- **Payment Gateway**: Stripe / PayPal
- **Dev Tools**: Postman, Git, Docker (optional)

# Milestone1

This project refers to the implementation of an e-commerce application containing a structured front-end and a back-end;
the front end is responsible for the user's interface and experiences, while back-end is engaged in business logics, operations with databases and APIs.

# Milestone 2

# Login Page - React & CSS

## Overview

This project is a simple, modern login page made using *React.js* and *CSS*. Features include:
Email and Password input fields
"Remember Me" checkbox
"Forgot Password?" link
Submit button
Sign-up option
Icons for email input and password visibility toggle

## Features

Responsive UI Designed for smooth customer experience with varying screen sizes.

- *Password Visibility Toggle:* Users can toggle the password visibility.
- *Validation (Optional):* Can be extended with form validation.

## ???? Technologies Used

- *React.js* - Component-based UI development
- *CSS* - Styling for the form and layout
- *React Icons* - Icons for email and password fields

# Milestone 3: Backend Setup

## Overview

With Milestone 2 complete, we built the frontend foundation of our e-commerce application. In Milestone 3, we focused on setting up the backend by:
Structuring backend folders
Setting up a Node.js & Express server
Connecting the project to MongoDB
Implementing basic error handling

This ensures that our application has a strong backend to support future development.

## Key Achievements

1. Organized Backend Folder Structure
   We created a well-structured backend setup:

graphql
Copy
Edit
backend/
│── controllers/ # Handles API logic  
│── models/ # Defines database schemas  
│── routes/ # Manages API endpoints  
│── middleware/ # Custom middlewares (error handling, authentication, etc.)  
│── config/ # Database connection setup  
│── server.js # Main server file  
 2. Server Setup with Express.js
Installed Express.js and configured the backend server.
Used dotenv to manage environment variables.
Server runs on PORT 5000 (or from .env file). 3. Database Connection (MongoDB Atlas)
Connected the backend to MongoDB Atlas for data storage.
Used Mongoose to define models for products, users, and orders.
Verified the database connection with logs. 4. Implemented Basic Error Handling
Added middleware to catch errors and return clear error messages.
Improved debugging and user-friendly API responses.

## Technologies Used

Node.js & Express.js – Backend framework
MongoDB Atlas & Mongoose – Database management
dotenv – Manage environment variables
Cors & Body-Parser – Middleware for API requests

# Milestone 4: User Model, Controller & File Uploads

# Overview

In this milestone, we focused on setting up key backend features for user management and file uploads. With guidance from our mentor, we completed:
User Model – Defines how user data is structured in MongoDB.
User Controller – Handles API logic for user-related operations.
Multer Setup – Enables image/file uploads for user profiles and products.

# Key Achievements

1. Created the User Model (User.js)
   Defined a Mongoose schema for user data, including:
   name, email, password (with encryption using bcrypt).
   role (Admin/User distinction).
   profileImage field to store uploaded images.

# Milestone 5: Building the Sign-Up Page & Implementing Form Validation

# Overview

In this milestone, we focused on creating a Sign-Up Page where users can register an account. We also implemented form validation to ensure users enter correct and valid data before submitting the form. This helps improve the user experience and ensures the backend receives clean and structured information.

# Key Achievements

1. Built the Sign-Up Page (HTML, CSS, React.js)
   Designed a clean and user-friendly registration form.
   Used React.js for interactivity and CSS for styling.
2. Implemented Form Validation
   Name Field: Ensures the name is entered.
   Email Validation: Checks if the email is in the correct format.
   Password Validation: Requires at least 8 characters, one uppercase letter, and one number.
   Error Messages: Displays real-time feedback when input is invalid.

# Technologies Used

React.js – Frontend Framework
HTML & CSS – Form Structure & Styling
JavaScript (ES6) – Form Validation Logic



# Milestone 6 - Secure User Signup & Password Encryption

 Milestone 6: Backend Signup Endpoint & Secure Password Storage

 Overview
In Milestone 5, we built the Signup Page in the frontend.
Now, in Milestone 6, we are implementing a backend endpoint for signup that:
 Accepts user registration requests
 Encrypts passwords before storing them
 Saves user data securely in the MongoDB database

This ensures that user credentials are protected from attacks like data breaches & password leaks.

 Key Achievements
 1. Created a Secure Signup API Endpoint (/api/auth/signup)
Users can now register securely with:
Name
Email
Encrypted Password
User Role (Default: User)
API validates user input before saving.
 2. Used bcryptjs for Password Encryption
Before storing passwords, we encrypt them using bcrypt hashing.
This prevents plain-text passwords from being saved in the database.
 3. Stored User Data in MongoDB (Mongoose Schema)
Created a User Model to store user details in MongoDB Atlas.
 4. Tested Signup API Using Postman
Successfully registered users via Postman API testing.
 Technologies Used
Node.js & Express.js – Backend Framework
MongoDB Atlas & Mongoose – Database Management
bcryptjs – Password Encryption
dotenv – Securely manage environment variables
Postman – API Testing


# Milestone 7: Backend Endpoint for User Login
Welcome to Milestone 7! In this milestone, you’ll create a backend endpoint for user login, focusing on validating user credentials and verifying encrypted passwords stored in the database. Let’s break it down step by step.

Learning Goals 
By the end of this milestone, you will:

Understand how to validate user credentials during login.

Learn how to compare the encrypted password with the user’s input.

Why Encrypt Passwords?
Protect User Data: Keeps passwords safe even if the database is compromised.

Privacy: Ensures passwords aren’t stored in plain text.

Compliance: Meets security standards like GDPR and PCI-DSS.

Prevents Password Theft: Hashed passwords are difficult to decipher, increasing security.

How Login Authentication Works 
User Enters Credentials:

The user provides their email/username and password on the login page.

Fetch User Data from Database:

The backend retrieves the user record based on the provided email/username.

If the user is not found, return an error: "User does not exist."

Compare Encrypted Passwords:

Process the user's input password using the same hashing algorithm (e.g., bcrypt).

Compare the resulting hash to the stored hashed password.

If they match, the user is authenticated; if not, send an error.

# Milestone 8: Creating and Displaying Card Components
Welcome to Milestone 8!  In this milestone, you’ll learn how to create a card component and display multiple cards on the products page. This will help you showcase products effectively and improve the user experience of your e-commerce app.

Learning Goals 
By the end of this milestone, you will:

Learn how to create a card component.

Learn how to display those cards on the products page.

Why Create Card Components?
Showcase Products Effectively: Presents product details in a clear and visually appealing way.

Reusable Design: Can be used across multiple pages or sections of the app.

Improved User Experience: Makes it easy for users to browse and interact with products.

Organized Layout: Keeps the homepage clean and structured.

How to Display a Single Card for Multiple Products?
Create a Dynamic Component: Design a single card component that accepts product details as props.

Use Mapping: Use array mapping to iterate over the product list and render a card for each product.

Pass Data Dynamically: Pass unique product information (e.g., name, price, image) to each card.

Maintain Consistency: Ensure the layout remains uniform for all products.

## *Milestone 9*
-Product Form with Multiple Image Upload

This project focuses on designing a user-friendly product form that allows users to enter product details and upload multiple images. The form ensures a smooth and efficient way to manage product information, making it suitable for e-commerce platforms, inventory systems, or online marketplaces.  

The form includes fields for essential product details such as name, description, price, category, and stock quantity. It also provides an intuitive image upload feature where users can select multiple images at once. This enhances product presentation by allowing detailed visual representation.  

To ensure data accuracy, the form implements validation rules, requiring users to input necessary information and upload images in supported formats. The ability to preview images before submission further improves user experience by allowing verification of uploaded files.  

By integrating multiple image uploads, this form enhances the way products are displayed, helping businesses and sellers showcase their items more effectively. It is designed with simplicity and efficiency in mind, making product management seamless and convenient.

## **Milestone 10: Product Schema & API Endpoint**
### **Overview**
Defined **Product Schema** using Mongoose and implemented a **POST API endpoint**.

### **Key Achievements**
1. **Product Schema (Mongoose):**
   ```js
  const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    tags: { type: [String], required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    category: { type: String, required: true },
    images: { type: [String], required: true },
    email: { 
        type: String, 
        required: true, 
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address'] 
    }}, { timestamps: true });

   ```
2. **API Endpoint (`/api/products`)**
   - Validates and stores product details in **MongoDB**.
   - Ensures **data integrity & validation**.

### **Technologies Used**
- **Node.js & Express.js**
- **MongoDB Atlas & Mongoose**
- **Multer (for file uploads)**

---

## **Conclusion**
This e-commerce project follows a structured milestone-based approach, ensuring a **scalable, secure, and fully functional** web application.
```




### Milestone 11
## Get All Products Endpoint

### Backend

The `/api/products/all` endpoint retrieves all products from the database and sends them to the frontend.

#### Endpoint

- **URL**: `/api/products/all`
- **Method**: `GET`
- **Description**: Retrieves all products from the database.
- **Response**:
  - `200 OK`: List of products.

#### Example Code

```javascript
// filepath: /c:/Users/prk41/Ecommerce-Follow-Along/backend/controllers/productRoutes.js
productRouter.get(
  "/all",
  catchAsyncError(async (req, res, next) => {
    const products = await ProductModel.find();
    res.status(200).json({
      success: true,
      products,
    });
  })
);.


### Milestone 12

 ## Get All Products with User Email Endpoint

### Backend

The `/api/products/allWithUserEmail` endpoint retrieves all products from the database along with the user email and sends them to the frontend.

#### Endpoint

- **URL**: `/api/products/allWithUserEmail`
- **Method**: `GET`
- **Description**: Retrieves all products from the database along with the user email.
- **Response**:
  - `200 OK`: List of products with user email.

#### Example Code

```javascript
// filepath: /c:/Users/prk41/Ecommerce-Follow-Along/backend/controllers/productRoutes.js
productRouter.get(
  "/allWithUserEmail",
  catchAsyncError(async (req, res, next) => {
    const products = await ProductModel.find().populate('user', 'email');
    res.status(200).json({
      success: true,
      products,
    });
  })
);```

Frontend
The frontend fetches all products data with user email from the backend and displays them dynamically using the ProductCard component.

Fetching Products Data
The ProductPage component fetches all products data from the /api/products/allWithUserEmail endpoint and stores it in the state. It then maps over the products array to render a ProductCard component for each product.

 
 ### Milestone 13

 ## Update Product Endpoint

### Backend

The `/api/products/updateProduct/:id` endpoint updates an existing product in the database with new data.

#### Endpoint

- **URL**: `/api/products/updateProduct/:id`
- **Method**: `PUT`
- **Description**: Updates an existing product in the database with new data.
- **Response**:
  - `200 OK`: Product updated successfully.
  - `404 Not Found`: Product not found.

#### Example Code

```javascript
// filepath: /c:/Users/prk41/Ecommerce-Follow-Along/backend/controllers/productRoutes.js
productRouter.put(
  "/updateProduct/:id",
  upload.array("images", 10),
  catchAsyncError(async (req, res, next) => {
    const { name, description, category, tags, price, stock } = req.body;
    const images = req.files.map((file) => file.path);

    const updatedProduct = await ProductModel.findByIdAndUpdate(
      req.params.id,
      {
        name,
        description,
        category,
        tags,
        price,
        stock,
        images,
      },
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {
      return next(new ErrorHandler("Product not found", 404));
    }

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      product: updatedProduct,
    });
  })
);```

### Milestone 14

## Delete Product Endpoint

### Backend

The `/api/products/deleteProduct/:id` endpoint deletes a product from the database using its ID.

#### Endpoint

- **URL**: `/api/products/deleteProduct/:id`
- **Method**: `DELETE`
- **Description**: Deletes a product from the database using its ID.
- **Response**:
  - `200 OK`: Product deleted successfully.
  - `404 Not Found`: Product not found.

#### Example Code

```javascript
// filepath: /c:/Users/prk41/Ecommerce-Follow-Along/backend/controllers/productRoutes.js
productRouter.delete(
  "/deleteProduct/:id",
  catchAsyncError(async (req, res, next) => {
    const product = await ProductModel.findByIdAndDelete(req.params.id);

    if (!product) {
      return next(new ErrorHandler("Product not found", 404));
    }

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  })
);```

### Milestone 15

NavBar Component:-

The NavBar component is a responsive navigation bar for your e-commerce application. It includes links to various pages such as Home, Add Products, Cart, and Login. The navigation bar adapts to different screen sizes, providing a hamburger menu for mobile devices.

Features:-

Responsive Design: Adapts to different screen sizes using Tailwind CSS classes.
Hamburger Menu: Provides a toggleable menu for mobile devices.
Navigation Links: Includes links to Home, Add Products, Cart, and Login pages.

Explanation:
Hamburger Menu Button: This button toggles the mobile menu visibility.

Large Screen Navigation: The navigation links are displayed in a horizontal row for larger screens.

Mobile Menu: The navigation links are displayed in a vertical list for smaller screens when the menu is open.

Responsive Design: The navigation bar is responsive and adapts to different screen sizes using Tailwind CSS classes.

This NavBar component should provide a responsive navigation experience for your application.


### Milestone 16
## Product Detail Page

### Backend

The `/api/products/:id` endpoint retrieves a product from the database using its ID.

#### Endpoint

- **URL**: `/api/products/:id`
- **Method**: `GET`
- **Description**: Retrieves a product from the database using its ID.
- **Response**:
  - `200 OK`: Product retrieved successfully.
  - `404 Not Found`: Product not found.

#### Example Code

```javascript
// filepath: [productRoutes.js](http://_vscodecontentref_/1)
productRouter.get(
  "/:id",
  catchAsyncError(async (req, res, next) => {
    const product = await ProductModel.findById(req.params.id);
    if (!product) {
      return next(new ErrorHandler("Product not found", 404));
    }
    res.status(200).json({
      success: true,
      product,
    });
  })
);

### Milestone 17

## Cart Schema and Add to Cart Endpoint

### Backend

The cart schema stores products added to the cart by users. The `/api/products/cart` endpoint allows users to add products to their cart.

#### Cart Schema

The cart schema includes the user ID and an array of products with their quantities.

#### Example Code

```javascript
// filepath: [cartModel.js](http://_vscodecontentref_/2)
const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        default: 1,
      },
    },
  ],
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;

### Milestone 18


## Get Products in Cart Endpoint

### Backend

The `/api/products/cart/:userId` endpoint retrieves the products inside the cart for a user.

#### Endpoint

- **URL**: `/api/products/cart/:userId`
- **Method**: `GET`
- **Description**: Retrieves the products inside the cart for a user.
- **Response**:
  - `200 OK`: Cart retrieved successfully.
  - `404 Not Found`: Cart not found.

#### Example Code

```javascript
// filepath: [productRoutes.js](http://_vscodecontentref_/0)
const Cart = require('../model/cartModel');

productRouter.get(
  "/cart/:userId",
  catchAsyncError(async (req, res, next) => {
    const { userId } = req.params;

    const cart = await Cart.findOne({ user: userId }).populate('products.product');

    if (!cart) {
      return next(new ErrorHandler("Cart not found", 404));
    }

    res.status(200).json({
      success: true,
      cart,
    });
  })
);

### Milestone 19

## Increase and Decrease Quantity Endpoints

### Backend

The `/api/products/cart/increase/:userId/:productId` and `/api/products/cart/decrease/:userId/:productId` endpoints increase and decrease the quantity of a product in the user's cart, respectively.

#### Endpoints

- **URL**: `/api/products/cart/increase/:userId/:productId`
- **Method**: `PUT`
- **Description**: Increases the quantity of a product in the user's cart.
- **Response**:
  - `200 OK`: Quantity increased successfully.
  - `404 Not Found`: Cart or product not found.

- **URL**: `/api/products/cart/decrease/:userId/:productId`
- **Method**: `PUT`
- **Description**: Decreases the quantity of a product in the user's cart.
- **Response**:
  - `200 OK`: Quantity decreased successfully.
  - `404 Not Found`: Cart or product not found.
  - `400 Bad Request`: Quantity cannot be less than 1.

#### Example Code

```javascript
// filepath: [productRoutes.js](http://_vscodecontentref_/0)
const Cart = require('../model/cartModel');

productRouter.put(
  "/cart/increase/:userId/:productId",
  catchAsyncError(async (req, res, next) => {
    const { userId, productId } = req.params;

    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
      return next(new ErrorHandler("Cart not found", 404));
    }

    const productIndex = cart.products.findIndex(
      (item) => item.product.toString() === productId
    );

    if (productIndex > -1) {
      cart.products[productIndex].quantity += 1;
      await cart.save();
      res.status(200).json({
        success: true,
        cart,
      });
    } else {
      return next(new ErrorHandler("Product not found in cart", 404));
    }
  })
);

productRouter.put(
  "/cart/decrease/:userId/:productId",
  catchAsyncError(async (req, res, next) => {
    const { userId, productId } = req.params;

    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
      return next(new ErrorHandler("Cart not found", 404));
    }

    const productIndex = cart.products.findIndex(
      (item) => item.product.toString() === productId
    );

    if (productIndex > -1) {
      if (cart.products[productIndex].quantity > 1) {
        cart.products[productIndex].quantity -= 1;
        await cart.save();
        res.status(200).json({
          success: true,
          cart,
        });
      } else {
        return next(new ErrorHandler("Quantity cannot be less than 1", 400));
      }
    } else {
      return next(new ErrorHandler("Product not found in cart", 404));
    }
  })
);