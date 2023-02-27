const AppointmentModel = require('../../Model/admin/Appointment')
const DoctorModel = require('../../Model/admin/Doctor/Doctor')
const DepartmentModel = require('../../Model/admin/Department')

// GET - All Appointments
exports.allAppointments = (req, res) => {
    AppointmentModel.find()
        .populate("department")
        .populate("doctor")
        .exec((error, result) => {
            if (!error) {
                // res.status(200).send({ success: true, msg: 'successs', allData: result })
                DepartmentModel.find().then(resultDepartment => {
                    DoctorModel.find().then(resultDoctor => {
                        res.status(200).send({ success: true, msg: 'successs', allData: result, displayDepartment: resultDepartment, displayDoctor: resultDoctor })
                    })
                })
            }
        })
}

// POST - Add Appointment (Use the "department ID" and "doctor ID" for the "department" field and "doctor" field respectively in "addAppointment API")
exports.createAppointment = async (req, res, next) => {
    try {
        const { department, doctor, date, time, patientName, phone, message } = req.body

        const appointmentData = await AppointmentModel.create({ department, doctor, date, time, patientName, phone, message })
        // return res.json({ status: true, data: appointmentData })
                return res.json({ status: true, data: appointmentData })
    } catch (error) {
        next(error)
    }
}

//GET - Delete Appointment
exports.deleteAppointment = (req, res) => {
    const appointmentID = req.params.id

    console.log('serviceID Value: ', appointmentID)

    AppointmentModel.deleteOne({ _id: appointmentID })
        .then(data => {
            res.status(200).send({ success: true, msg: `Data with Service ID [${appointmentID}] using API deleted Successfully !`, appointment: data })
        })
        .catch(error => {
            console.log(`Error: ${error}`)
        })
}