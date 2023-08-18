const { getDoctors, addDoctor, updateDoctor, deleteDoctor } = require('../controller/doctor.controller')
const doctorRoute = require('express').Router()

// ------ read all -------
doctorRoute.get(`/doctors/all`, getDoctors)

// ------ read single -------
// doctorRoute.get(`/doctor/:id`, getSingleDoctor)

// ------ create doctor - post ------
doctorRoute.post(`/doctor/add`, addDoctor)

// ------ edit doctor ------
doctorRoute.patch(`/doctor/edit/:id`, updateDoctor)

// ------ delete doctor ------
doctorRoute.delete(`/doctor/delete/:id`, deleteDoctor)

module.exports = doctorRoute