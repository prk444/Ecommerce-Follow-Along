let express = require("express");
const { ProductModel } = require("../model/productModel");
const catchAsyncError = require("../middleware/asyncErrorCatch");
const ErrorHandler = require("../utils/errorhanler");
const productRouter = express.Router();
const { UserModel } = require("../model/usermodel");
const upload = require("../middleware/multer");
const { default: mongoose } = require("mongoose");

productRouter.post(
  "/createProduct",
  upload.array("images", 10),
  catchAsyncError(async (req, res, next) => {
    const { email, name, description, category, tags, price, stock } = req.body;
    
    const images = req.files.map((file) => file.path);
    console.log(email, name, description, category, tags, price, images);

    if (!email || !name || !description || !category || !tags || !price || !images || !stock) {
      return next(new ErrorHandler("All fields are required", 400));
    }

    let user = await UserModel.findOne({ email });
    if (!user) {
      return(new ErrorHandler("User does not exist", 404));
    }

    let product = new ProductModel({ email, name, description, category, tags, price, images, stock });

    await product.save();
    res.status(201).json({ message: "Product created successfully" });
  })
);

productRouter.get(
  "/allProduct",
  catchAsyncError(async (req, res, next) => {
    const products = await ProductModel.find();
    res.status(200).json({
      success: true,
      products,
    });
  })
);

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

productRouter.put(
  "/:id",
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
);

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
);

productRouter.get(
  "/category/:category",
  catchAsyncError(async (req, res, next) => {
    const products = await ProductModel.find({ category: req.params.category });
    res.status(200).json({
      success: true,
      products,
    }); }));
productRouter.get(
  "/search/:keyword",
  catchAsyncError(async (req, res, next) => {
    const products = await ProductModel.find({
      name: {
        $regex: req.params.keyword,
        $options: "i",
      },
    });
    res.status(200).json({
      success: true,
      products,
    });
  })
);  

productRouter.post('/cart', catchAsyncError(async (req, res, next) => {
  const{productId, quantity} = req.body;
  let userid = req.user_id;
  if(!userid){
    return next(new ErrorHandler('userid is required', 400));
  }
  if(!mongoose.Types.ObjectId.isValid(productId)){
    return next(new ErrorHandler('Invalid product id', 400));
  }
  if(!quantity||quantity<1){
    return next(new ErrorHandler('Quantity must be at least 1', 400));
  }
  const user = await UserModel.findById(userid);
  if(!user){
    return next(new ErrorHandler('User not found', 404));
  }
  const product = await ProductModel.findById(productId);
  if(!product){
    return next(new ErrorHandler('Product not found', 404));
  }
  const cartItemIndex = user.cart.findIndex(
    item=>item.productId.toString()==productId
  );
  if(cartItemIndex>-1){
    user.cart[cartItemIndex].quantity += quantity;
  }
  else{
    user.cart.push({productId, quantity});
  }
  await user.save();
  res.status(200).json({
    success:true,
    message:'Product added to cart',
    cart: user.cart,
    
  });
}));


productRouter.get('/cart', catchAsyncError(async (req, res, next) => {
  const userid = req.user_id;
  if(!userid){
    return next(new ErrorHandler('userid is required', 400));
  }
  const user = await UserModel.findById(userid);
  if(!user){
    return next(new ErrorHandler('User not found', 404));
  }
  let cartItems = [];
  for(let item of user.cart){
    const product = await product.findById(item.productId).select('name price images');
    cartItems.push({
      product,
      quantity:item.quantity,
    });
}

   
res.status(200).json({
  success:true,
  cart: user.cart,
  cartItems,
});
}));



module.exports = productRouter;