const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const multer = require('multer')
const path = require('path')

const blogController = require('../../Controller/apiController/BlogController')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

// ---------------- Multer ----------------

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./server/public/imageUploads/blogUploads/")
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + 'blog' + path.extname(file.originalname))
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

// GET: All Blogs
router.get('/allBlogs', blogController.allBlogs)                               // Required for ReactJS fetching data

// GET: Single Blog
router.get('/singleBlog/:id', blogController.singleBlog)                       // Required for ReactJS fetching data

// GET: Popular Blogs
router.get('/popularBlogs', blogController.popularBlogs)

// GET: Search Filter
router.get('/filter', blogController.filter)

// POST
// router.post('/createBlog', upload.single('blogImage'), blogController.createBlog)

// DELETE
router.get('/deleteBlog/:id', blogController.deleteBlog)

module.exports = router