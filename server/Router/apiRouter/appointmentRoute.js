const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

const adminController = require('../../Controller/apiController/AppointmentController')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

// GET: All Appointments
router.get('/allAppointments', adminController.allAppointments)

// POST
router.post('/createAppointment', adminController.createAppointment)


// DELETE
router.get('/deleteAppointment/:id', adminController.deleteAppointment)

module.exports = router