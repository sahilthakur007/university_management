const express = require("express");
// const { default: enrollStudent } = require("../../client/src/Components/enrollStudent");
const { register_instructor } = require("../controllers/instructer_registration");
const { enrollstudent } = require("../controllers/studentenrollment");
const { register_student } = require("../controllers/student_controller");
const Router = express.Router();
Router.route("/registerstudent").post(register_student)
Router.route("/registerinstructer").post(register_instructor)
Router.route("/enroll").post(enrollstudent)
module.exports = Router