const express = require("express");
const routes  = express.Router();

const {getdata} = require("../Controller/control")
routes.get("/data", getdata);




module.exports = routes;