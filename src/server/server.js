const express = require("express");
const server = express();
const cors = require("cors");
const bodyParser = require('body-parser')
const tools = require("../helpers/tools")

//injections
server.use(express.json())
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: false }))
server.use(express.urlencoded({ extended: false }))
server.use(cors())

//routers
const user = require("../routers/userRouter");
server.use("/user", user)

module.exports = server