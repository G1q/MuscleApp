const express = require('express')
const router = express.Router()
const { createSettings, getSettings, getSingleSettings, updateSettings, deleteSettings } = require('../controllers/settings.controller.js')

router.post('/', createSettings)

router.get('/', getSettings)
router.get('/:id', getSingleSettings)

router.put('/:id', updateSettings)

router.delete('/:id', deleteSettings)

module.exports = router
