const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const multer = require('multer')
const path = require('path')

const doctorController = require('../../Controller/apiController/DoctorController')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

// ---------------- Multer ----------------

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./server/public/imageUploads/doctorUploads/")
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + 'service' + path.extname(file.originalname))
    }
})

const maxSize = 2 * 1024 * 1024 // for 1MB

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true)
        } else {
            cb(null, false)
            return cb(new Error("Only .png, .jpg and .jpeg format allowed!"))
        }
    },
    limits: { fileSize: maxSize }
})

// ---------------- Multer ----------------

// GET: All Doctors
router.get('/alldoctors', doctorController.allDoctors) 
router.get('/doctors-by-cat/:cat', doctorController.doctorsByCategory)                                 // Required for ReactJS fetching data

// GET: Single Doctor
router.get('/singleDoctor/:id', doctorController.singleDoctor)                       // Required for ReactJS fetching data

// POST
router.post('/createDoctor', upload.single('docImage'), doctorController.createDoctor)

// PUT
router.post('/updateDoctor/:id', upload.single('docImage'), doctorController.updateDoctor)

// DELETE
router.get('/deleteDoctor/:id', doctorController.deleteDoctor)

module.exports = router