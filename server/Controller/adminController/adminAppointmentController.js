const AppointmentModel = require('../../Model/admin/Appointment')
const DoctorModel = require('../../Model/admin/Doctor/Doctor')
const DepartmentModel = require('../../Model/admin/Department')

// GET - All Appointments
exports.allAppointments = (req, res) => {
    AppointmentModel
        .find()
        .populate("department")
        .populate("doctor")
        .exec((error, data) => {
            console.log(data);
            if (!error) {
                res.render('Appointments/allAppointments', {
                    title: 'AdminLTE | All Appointments',
                    dashboardtitle: 'Appointments Page',
                    displaydata: data
                })
            }
        })
}

// GET - Add Appointment
exports.addAppointment = (req, res) => {
    DepartmentModel.find().then(result => {
        DoctorModel.find().then(result1 => {
            res.render('Appointments/addAppointment', {
                title: 'AdminLTE | Add New Appointment',
                dashboardtitle: 'Appointments Page',
                message: req.flash('message'),
                displayDatas: result,
                displayDatas1: result1
            })
        })
    })
}


// POST - Add Appointment
exports.createAppointment = (req, res) => {
    const Appointment = new AppointmentModel({
        department: req.body.department,
        doctor: req.body.doctor,
        date: req.body.date,
        time: req.body.time,
        patientName: req.body.patientName,
        phone: req.body.phone,
        message: req.body.message
    })
    Appointment.save()
        .then(result => {
            console.log(result, "Appointment data created successfully.")
            req.flash('message', 'Added Appointment successfully')
            res.redirect('/admin/allAppointments')
        })
        .catch(err => {
            console.log(err, "No Data Saved.")
            req.flash('error', 'You can not send Empty data.')
            res.redirect('/admin/addAppointment')
        })
}


// DELETE - Appointment
exports.deleteAppointment = ((req, res, next) => {
    const appointmentID = req.params.id

    AppointmentModel.deleteOne({ _id: appointmentID })
        .then(result => {
            console.log(result, "Appointment data deleted successfully.")
            req.flash('message', 'Deleted Appointment data successfully')
            res.redirect('/admin/allAppointments')
        })
        .catch(err => {
            console.log(err, "No Data Deleted.")
            req.flash('error', 'Unable to delete Appointment data.')
            res.redirect('/admin/allAppointments')
        })
})