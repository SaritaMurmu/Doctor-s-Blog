const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const multer = require('multer')
const path = require('path')

const serviceController = require('../../Controller/apiController/ServiceController')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

// ---------------- Multer ----------------

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./server/public/imageUploads/serviceUploads/")
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

// GET: All Services
router.get('/allServices', serviceController.allServices)                                   // Required for ReactJS fetching data

// GET: Single Services
router.get('/singleService/:id', serviceController.singleService)                           // Required for ReactJS fetching data

// POST
router.post('/createService', upload.single('image'), serviceController.createService)

// PUT
router.post('/updateService/:id', upload.single('image'), serviceController.updateService)

// DELETE
router.get('/deleteService/:id', serviceController.deleteService)

module.exports = router