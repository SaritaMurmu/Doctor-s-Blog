const mongoose = require('mongoose')

const doctorSchema = mongoose.Schema({
    docImage: {
        type: String,
        required: true
    },
    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Department"
    },
    docName: {
        type: String,
        required: true
    },
    qualification:{
        type:Array,
        required:true
    },
    skill: {
        type:String,
        required:true
    },
    expertise: {
        type:Array,
        required:true
    }
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Doctor', doctorSchema)
