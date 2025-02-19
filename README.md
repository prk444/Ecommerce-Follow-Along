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



## Milestone 2: Frontend - Login Page

In this milestone, I focused on creating the frontend for the login page. I structured the application by setting up a `components` folder where I created the `Login.jsx` component. Additionally, I organized the layout by creating a `pages` folder, which includes `Home.jsx`, `Login.jsx`, and `Navbar.jsx` components. These components work together to provide a seamless user experience, with a functional and visually clean login page for the e-commerce platform.


## Setup and Installation

To get started with the project locally:

### 1. Clone the repository




### Milestone 2
In Milestone 2, we've moved the e-commerce application to the next level. Having completed Milestone 1, we have focused on structuring the project, setting up both the frontend and backend environments, and building the first user-facing feature – the Login Page. In this milestone, we ensure the project is structured and organized for what features will come in.

Learning Goals ????
We have for the end of this milestone

Implemented project file organisation, making sure everything is organized and in place in the project
Set up a React frontend app to do the UI layout
Configured a Node.js server for our backend, that will be prepared for API handling
Integrated Tailwind CSS and used utility classes to make things easier with respect to styling classes.
Developed a functional/styled Login page for the front end, thereby ensuring a smoothen experience for the end user.
Feature Implemented????️
- +1.Project Folder Structure.
frontend: Holds all files relating to React.
backend: Has the Node.js server and subsequent API files
- +2. Setup of React Frontend
Activated the frontend by using React to create dynamic UIs
Installed dependencies like React Router for routing
- +3. Setup of Node.js Backend
Activated a minimal Node.js server with Express for subsequent API requests
- +4. Tailwind CSS Setup
Activated Tailwind CSS to make styling of the applications look a lot cleaner and more modern in nature and response.
Installed PostCSS for maximum comfort with developing using Tailwind CSS.
- +5. Building Login Page
Logged-in Page has been designed as the initial functionality of the e-commerce platform.
It was made using Tailwind CSS so it has an incredibly clean design with modern style
Basic fields included were Email, Password fields with a submit button.
Has potential to implement new functionalities (in this case authentication).


### Milestone 3

## API Endpoints

### User Routes
- **POST /user/signup**: Create a new user
    - Request Body: `{ "email": "user@example.com", "password": "password123" }`
    - Response: `{ "message": "User Created Successfully" }`

- **POST /user/login**: Authenticate a user
    - Request Body: `{ "email": "user@example.com", "password": "password123" }`
    - Response: `{ "token": "JWT token" }`

- **GET /user/profile**: Get user profile
    - Headers: `{ "Authorization": "Bearer <token>" }`
    - Response: `{ "email": "user@example.com", "name": "John Doe" }`

### Product Routes
- **POST /product**: Create a new product
    - Request Body: `{ "name": "Product Name", "price": 100, "description": "Product Description" }`
    - Response: `{ "message": "Product Created Successfully" }`

- **GET /product/:id**: Get product details
    - Response: `{ "name": "Product Name", "price": 100, "description": "Product Description" }`

- **PUT /product/:id**: Update product details
    - Request Body: `{ "name": "Updated Product Name", "price": 150, "description": "Updated Product Description" }`
    - Response: `{ "message": "Product Updated Successfully" }`

- **DELETE /product/:id**: Delete a product
    - Response: `{ "message": "Product Deleted Successfully" }`

### Cart Routes
- **POST /cart**: Add a product to the cart
    - Request Body: `{ "productId": "product_id", "quantity": 1 }`
    - Response: `{ "message": "Product Added to Cart" }`

- **GET /cart**: Get cart details
    - Response: `{ "products": [{ "productId": "product_id", "quantity": 1 }] }`

- **DELETE /cart/:id**: Remove a product from the cart
    - Response: `{ "message": "Product Removed from Cart" }`

### Order Routes
- **POST /order**: Place an order
    - Request Body: `{ "cartId": "cart_id", "paymentMethod": "stripe" }`
    - Response: `{ "message": "Order Placed Successfully" }`

- **GET /order/:id**: Get order details
    - Response: `{ "orderId": "order_id", "status": "Processing", "total": 100 }`

## Error Handling
The application uses a centralized error handling mechanism. Errors are captured and passed to the error middleware, which sends a structured JSON response.

### Database Connection
The database connection is established using Mongoose. The connection configuration is located in connection.js



### Milestone 4

Learning Goals 
By the end of this milestone, you will:
Create a User Model: This is like a blueprint for how your users' data will be stored in the database.
Create a User Controller: This will help you manage what happens with your user data (like adding a new user or getting their information).
Enable and configure Multer: Multer will allow your app to accept and store files (such as images) uploaded by users.
Update the README file: Don’t forget to document your progress!
1. What’s a Model?
A model is like a detailed map or plan. When you create a User Model, you’re designing how a user’s data (like name, email, and password) will look in the database. Imagine drawing a blueprint of a house. The model is the map of what information you need to store for each user. In MongoDB, we use something called Schemas to create a model. A schema is a definition of what data should look like for that model.

2. What’s a Controller?
A controller is a special part of the server that decides what happens when someone interacts with your app. For example, if someone wants to sign up for your website, the controller will handle what happens when the data is sent to the server. Think of the controller as a "manager" of requests and responses. It’s like the teacher in a classroom—telling the students (your app) what to do and ensuring everything goes smoothly.

### Milestone 5
### 1. File Uploads with Multer
Sometimes, your users might want to upload files like profile pictures.
To help with this, we use Multer, which is a tool that makes it easy to upload files to your server.
Multer will help us store user images in the backend and keep track of them. It's like a virtual file cabinet for storing pictures!

## Steps for Milestone 5 📝
Let’s walk through the steps to complete this milestone:
This milestone will be a mentor-led lesson where your mentor will guide you through:
- Explaining and creating the User Model
- Creating the User Controller
- Setting up Multer for file uploads

### Creating the User Model
The User Model is a blueprint for how user data will be stored in the database. It defines the structure of the user data, including fields like name, email, and password.

### Milestone 6
Creating the User Controller:
The User Controller manages what happens with user data, such as adding a new user or getting user information. It handles requests and responses related to user operations.

Setting up Multer for File Uploads:
Multer is a middleware for handling multipart/form-data, which is primarily used for uploading files. We will configure Multer to store uploaded files in a specific directory.

Integrating Multer with User Routes
We will integrate Multer with the user routes to handle file uploads.

### Milestone 7

## Learning Goals 🎯
By the end of this milestone, you will:

- Implement User Authentication: Secure login and token management using JWT.
- Create Product Management APIs: Ability to add, update, delete, and view products.
- Implement Cart and Order Management: Users can add products to their cart and place orders.
- Integrate Payment Gateway: Seamless payment options for processing transactions.
- Update the README file: Don’t forget to document your progress!

### 1. User Authentication
User authentication is crucial for securing your application. We will use JWT (JSON Web Tokens) for secure login and token management.

### 2. Product Management APIs
We will create APIs for managing products, including adding, updating, deleting, and viewing products.

### 3. Cart and Order Management
We will implement APIs for managing the cart and orders, allowing users to add products to their cart and place orders.
