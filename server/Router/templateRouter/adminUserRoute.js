// For the admin to make changes from the backend side through admin-Panel Localhost:3002

const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')

const adminUserController = require('../../Controller/adminController/adminUserController')
const adminController = require('../../Controller/AdminController')

// ---------------- Multer ----------------

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./server/public/imageUploads/userUploads")
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

// ---------------- Multer ----------------

// GET: All Users
router.get('/allUsers', adminUserController.allUsers)

// POST
router.get('/addUser', adminUserController.addUser)
router.post('/createUser', upload.single('image'), adminUserController.createUser)

// PUT
router.get('/editUser/:id', adminUserController.singleUser)
router.post('/updateUser/:id', upload.single('image'), adminUserController.updateUser)

// DELETE
router.get('/deleteUser/:id', adminUserController.deleteUser)

// Activate-Deactivate
router.get("/activateUser/:id", adminController.adminAuth, adminUserController.activateUser)
router.get("/deactivateUser/:id", adminController.adminAuth, adminUserController.deactivateUser)

module.exports = router