// For the admin to make changes from the backend side through POSTMAN

const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const multer = require('multer')
const path = require('path')

const userController = require('../../Controller/apiController/UserController')
const adminController = require('../../Controller/AdminController')


router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

// -------------------------- Multer --------------------------

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./server/public/imageUploads/userUploads/")
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + 'user' + path.extname(file.originalname))
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

// -------------------------- Multer --------------------------

// GET: All Users
router.get('/allUsers', userController.allUsers)

// GET: Single User
router.get('/singleUser/:id', userController.singleUser)

// POST
router.post('/createUser',  upload.single('image'), userController.createUser)

// PUT
router.post('/updateUser/:id',  upload.single('image'), userController.updateUser)

// DELETE
router.get('/deleteUser/:id', userController.deleteUser)

// Activate-Deactivate
router.get("/activateUser/:id", adminController.adminAuth, userController.activateUser)
router.get("/deactivateUser/:id", adminController.adminAuth, userController.deactivateUser)

module.exports = router