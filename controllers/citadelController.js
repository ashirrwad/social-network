const Topic = require("./../models/topic")
const Question = require("./../models/question")
const User = require("./../models/user")
const multer = require("multer")
const path = require("path")
const validator = require("express-validator")


//handling routes functions
exports.getAllTopics = async (req, res, next) => {
	const input = {
		title: "Topics",
		connectedUser: req.user
	}

	try {
		const topics = await Topic.find()
		input.topics = topics
		res.render("citadel", input)
	} catch (error) {
		next(error)
	}
}

