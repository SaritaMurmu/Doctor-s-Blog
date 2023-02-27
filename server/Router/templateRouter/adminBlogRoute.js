const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')

const adminController = require('../../Controller/adminController/adminBlogController')

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
router.get('/allBlogs', adminController.allBlogs)

// POST
router.get('/addBlog', adminController.addBlog)
router.post('/createBlog', upload.single('blogImage'), adminController.createBlog)

// // PUT
// router.get('/editBlog/:id', adminController.singleBlog)
// router.post('/updateBlog/:id', upload.single('blogImage'), adminController.updateBlog)

// DELETE
router.get('/deleteBlog/:id', adminController.deleteBlog)

module.exports = router