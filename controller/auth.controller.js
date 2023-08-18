const { StatusCodes } = require('http-status-codes');
const User = require('../model/user.model')
const bcrypt = require('bcryptjs')

// register
const register = async (req,res) => {
    try {
        const extEmail = await User.findOne({email: req.body.email})
            if(extEmail)
                return res.status(StatusCodes.BAD_REQUEST).json({msg: `${req.body.email} already exists`})
        const extMobile = await User.findOne({mobile: req.body.mobile})
            if(extMobile)
                return res.status(StatusCodes.BAD_REQUEST).json({msg: `${req.body.mobile} already exists`})

        const newUser = await User.create(req.body)
            return res.status(StatusCodes.OK).json({ msg: "User registered successfully", newUser })
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

// login
const login = async (req,res) => {
    try {
        const user = req.body
        res.status(StatusCodes.OK).json({ user })
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

// logout
const logout = async (req,res) => {
    try {
        res.status(StatusCodes.OK).json({ msg: "logout"})
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

// token
const getToken = async (req,res) => {
    try {
        res.status(StatusCodes.OK).json({ msg: "get token"})
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

// current logged user info
const loggedUser = async (req,res) => {
    try {
        res.status(StatusCodes.OK).json({ msg: "logged user"})
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

module.exports = { register, login, logout, getToken, loggedUser }