const { readAllUsers, getSingleUser } = require('../controller/user.controller')
const userRoute = require('express').Router()

// read all users
userRoute.get(`/all`, readAllUsers)

// read single user
userRoute.get(`/single/:id`, getSingleUser)

module.exports = userRoute