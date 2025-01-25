const express = require('express');

const router = express.Router();

const userSignUpController = require("../controller/user/userSignUp.jsx");
const userSignInController = require('../controller/user/userSignIn.jsx');
const userDetailsController = require('../controller/user/userDetails.jsx');
const authToken = require('../middleware/authToken.jsx');
const UserLogout = require('../controller/user/userLogout.jsx');
const AllUsers = require('../controller/user/AllUsers.jsx');
const updateUser = require('../controller/user/UpdateUser.jsx');
const UploadProductController = require('../controller/product/UploadProduct.jsx');
const getProductController = require('../controller/product/GetProduct.jsx');
const updateProductController = require('../controller/product/UpdateProduct.jsx');
const getCategoryProduct = require('../controller/product/getCategoryProductOne.jsx');
const getCategoryWiseProduct = require('../controller/product/getCategoryWiseProduct.jsx');





// Correct the route definition
router.post("/signUp", userSignUpController); // Pass the controller function
router.post("/signIn", userSignInController); // Pass the controller function
router.get("/user-details",authToken,userDetailsController)
router.get('/userLogout', UserLogout)

//admin panel
router.get('/all-user',authToken,AllUsers)
router.post('/update-user', authToken,updateUser)

//product
router.post('/upload-product',authToken, UploadProductController)
router.get('/get-product', getProductController)
router.post('/update-product',authToken, updateProductController)
router.get('/get-categoryProduct', getCategoryProduct)
router.post('/category-product', getCategoryWiseProduct)



module.exports = router;