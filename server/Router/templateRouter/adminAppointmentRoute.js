const express = require('express')
const router = express.Router()

const adminController = require('../../Controller/adminController/adminAppointmentController')

// GET: All Appointments
router.get('/allAppointments', adminController.allAppointments)

// POST
router.get('/addAppointment', adminController.addAppointment)
router.post('/createAppointment', adminController.createAppointment)

// DELETE
router.get('/deleteAppointment/:id', adminController.deleteAppointment)

module.exports = router