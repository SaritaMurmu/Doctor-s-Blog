// For the client for ReactJS

const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const multer = require('multer')
const path = require('path')

const auth = require('../../Middleware/Auth')
const userController = require('../../Controller/UserController')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

// -------------------------- Multer --------------------------

// Define static folder 
router.use(express.static('public'))

// Use multer diskStorage for file upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/imageUploads/userUploads'), function (error, success) {
            if (error) throw error
        })
    },
    filename: function (req, file, cb) {
        const name = Date.now() + '_' + path.extname(file.originalname)
        cb(null, name, function (error1, success1) {
            if (error1) throw error1
        })
    }
})

//define uploaded storage path
const upload = multer({ storage: storage })

// -------------------------- Multer --------------------------

router.get('/all-users', userController.home)

router.post('/register', upload.single('image'), userController.registerUser)
router.post('/login', userController.userLogin)
router.get('/test', auth, userController.test)

// Update password
router.post('/update-password', auth, userController.updatePassword)

router.post('/forget-password', userController.forgetPassword)          // Does not work. Does send a random string to given email.

module.exports = router