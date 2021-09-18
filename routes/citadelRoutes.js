const express = require("express")
const router = express.Router()
const topicsController = require("./../controllers/citadelController")
const usersController = require("./../controllers/usersController")
const Topic = require("../models/topic")

router.get("/", topicsController.getAllTopics)




module.exports = router
