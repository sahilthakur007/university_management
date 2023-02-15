const express = require("express");
const { register_instructor } = require("../controllers/instructer_registration");
const { register_student } = require("../controllers/student_controller");
const Router = express.Router();
Router.route("/registerstudent").post(register_student)
Router.route("/registerinstructer").post(register_instructor)
module.exports = Router