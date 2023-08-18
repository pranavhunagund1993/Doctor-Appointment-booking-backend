const { getServices, addService, updateService, deleteService } = require('../controller/service.controller')
const serviceRoute = require('express').Router()

// ------ read all -------
serviceRoute.get(`/services/all`, getServices)

// ------ read single -------
// serviceRoute.get(`/service/:id`, getSingleService)

// ------ create service - post ------
serviceRoute.post(`/service/add`, addService)

// ------ edit service ------
serviceRoute.patch(`/service/edit/:id`, updateService)

// ------ delete service ------
serviceRoute.delete(`/service/delete/:id`, deleteService)

module.exports = serviceRoute