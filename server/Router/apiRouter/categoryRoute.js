const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

const adminController = require('../../Controller/apiController/CategoryController')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

// GET: All Categories
router.get('/allCategories', adminController.allCategories)

// GET: Single Category
router.get('/singleCategory/:_id', adminController.singleCategory)

// POST
router.post('/createCategory', adminController.createCategory)

// DELETE
router.get('/deleteCategory/:id', adminController.deleteCategory)

module.exports = router