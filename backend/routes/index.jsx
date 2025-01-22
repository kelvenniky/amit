const express = require('express');

const router = express.Router();

const userSignUpController = require("../controller/userSignUp.jsx");
const userSignInController = require('../controller/userSignIn.jsx');
const userDetailsController = require('../controller/userDetails.jsx');
const authToken = require('../middleware/authToken.jsx');
const UserLogout = require('../controller/userLogout.jsx');
const AllUsers = require('../controller/AllUsers.jsx');
const updateUser = require('../controller/UpdateUser.jsx');
const UploadProductController = require('../controller/UploadProduct.jsx');
const getProductController = require('../controller/GetProduct.jsx');
const updateProductController = require('../controller/UpdateProduct.jsx');




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



module.exports = router;