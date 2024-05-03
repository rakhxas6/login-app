import { Router } from "express";
const router = Router();

// import all controllers
import * as controller from "../controllers/appControllers.js";

// POST Methods
router.route("/register").post(controller.register); //register user
// router.route('/registerMail').post() //send the mail
router.route("/authenticate").post((req, res) => res.end()); //aunthenticate the user
router.route("/login").post(controller.login); //login in app

//GET Method
router.route("/user/:username").get(controller.getUser); //user with username
router.route("/generateOTP").get(controller.generateOTP); //generate random OTP
router.route("/verifyOTP").get(controller.verifyOTP); //verify the generated random OTP
router.route("/createResetSession").get(controller.createResetSession); //reset all  the variables

//PUT Method
router.route("/updateuser").put(controller.updateUser); //to update the user profile
router.route("/resetPassword").put(controller.resetPassword); // to reset the password

export default router;
