const { getAppointment, getSingleAppointment, addAppointment, updateAppointment, deleteAppointment } = require('../controller/appointment.controller')
const appointmentRoute = require('express').Router()

// ------ read all -------
appointmentRoute.get(`/appointments/all`, getAppointment)

// ------ read single -------
appointmentRoute.get(`/appointments/:id`, getSingleAppointment)

// ------ create appointment - post ------
appointmentRoute.post(`/appointment/add`, addAppointment)

// ------ edit appointment ------
appointmentRoute.patch(`/appointment/edit/:id`, updateAppointment)

// ------ delete appointment ------
appointmentRoute.delete(`/appointment/delete/:id`, deleteAppointment)

module.exports = appointmentRoute