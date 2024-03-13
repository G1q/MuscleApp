const express = require('express')
const router = express.Router()
const { createCategory, getCategories, deleteCategory, getCategory, updateCategory, getCategoriesWithParam } = require('../controllers/category.controller.js')

router.post('/', createCategory)

router.get('/', getCategories)
router.get('/:slug', getCategory)
router.get('/params/:title', getCategoriesWithParam)

router.put('/:slug', updateCategory)

router.delete('/:id', deleteCategory)

module.exports = router
