const { register, login, logout, getToken, loggedUser } = require('../controller/auth.controller')
const authRoute = require('express').Router()

authRoute.post('/register', register);
authRoute.post('/login', login);
authRoute.get('/logout', logout);
authRoute.get('/logged-user', loggedUser);
authRoute.get('/token', getToken);

module.exports = authRoute;