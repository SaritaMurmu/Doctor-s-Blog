const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')

const adminController = require('../../Controller/adminController/adminServiceController')

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
router.get('/allServices', adminController.allServices)

// POST
router.get('/addService', adminController.addService)
router.post('/createService', upload.single('image'), adminController.createService)

// PUT
router.get('/editService/:id', adminController.singleService)
router.post('/updateService/:id', upload.single('image'), adminController.updateService)

// DELETE
router.get('/deleteService/:id', adminController.deleteService)

module.exports = router