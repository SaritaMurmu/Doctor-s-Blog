const mongoose = require('mongoose')
const Schema = mongoose.Schema

const appointmentSchema = Schema({
    department: {
        type: Schema.Types.ObjectId,
        ref: "Department"
    },
    doctor: {
        type: Schema.Types.ObjectId,
        ref: "Doctor"
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    patientName: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Appointment', appointmentSchema)