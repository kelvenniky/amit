const express = require('express');

const router = express.Router();

const userSignUpController = require("../controller/userSignUp.jsx");
const userSignInController = require('../controller/userSignIn.jsx');

// Correct the route definition
router.post("/signUp", userSignUpController); // Pass the controller function
router.post("/signIn", userSignInController); // Pass the controller function


module.exports = router;