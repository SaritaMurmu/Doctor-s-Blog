const express = require('express')
const router = express.Router()

const adminController = require('../../Controller/adminController/adminCategoryController')

// GET: All Categories
router.get('/allCategories', adminController.allCategories)

// POST
router.post('/createCategory', adminController.createCategory)

// DELETE
router.get('/deleteCategory/:id', adminController.deleteCategory)

module.exports = router