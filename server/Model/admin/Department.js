const mongoose = require('mongoose')

const departmentSchema = mongoose.Schema({
    deptImage: {
        type: String,
        required: true
    },
    deptName: {
        type: String,
        required: true
    },
    deptDescription: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Department', departmentSchema)