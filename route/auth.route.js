const { register, login, logout, getToken, loggedUser } = require('../controller/auth.controller')
const authRoute = require('express').Router()
const auth = require('../middleware/auth.middleware')

// ----- register user----- post
authRoute.post('/register', register);

// ------- login user ----- post
authRoute.post('/login', login);

// ------- logout -------- get
authRoute.get('/logout', logout);

// ------ get token ---------- get
authRoute.get('/getToken', getToken);

// ------- current login user ---- get
authRoute.get('/logged/user', auth, loggedUser);

module.exports = authRoute;