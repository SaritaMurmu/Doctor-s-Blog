const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    type: {
        type: Number
        // default: 1
    },
    status: {
        type: Boolean,
        default: true
    }
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('User', userSchema)