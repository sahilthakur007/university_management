const express = require("express");
const { Studentlogin } = require("../Controller/login");
// const { default: StudentLogin } = require("../../client/src/component/StudentLogin");
const Router =  express.Router(); 
Router.route("/login").post(Studentlogin)
module.exports=Router;