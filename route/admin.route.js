const { allRegUsers, allRegDoctors, allAppointments, changeRole } = require('../controller/admin.controller')
const adminRoute = require('express').Router()

// ------------- get ----------
adminRoute.get(`/all/reg/users`, allRegUsers)
adminRoute.get(`/all/reg/doctors`, allRegDoctors)
adminRoute.get(`/all/appointments`, allAppointments)

// ----------- patch-----------
adminRoute.patch(`/change/role/:id`, changeRole)

module.exports = adminRoute
