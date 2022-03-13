const express = require("express");
const server = express();
const cors = require("cors");
const bodyParser = require('body-parser')

//injections
server.use(express.json())
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: false }))
server.use(express.urlencoded({ extended: false }))
server.use(cors())

//controllers
const routers = require("../routers");
server.use(routers)

// require("../models/ModelProducts");
// require("../models/ModelContacts");
// require("../models/ModelPerfil");
// require("../models/ModelClients");
// require("../models/ModelUsers");
// require("../models/ModelTransactions");
// require("../models/ModelSuppliers");

module.exports = server