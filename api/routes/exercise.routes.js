const express = require('express')
const router = express.Router()
const { createExercise, getExercises, deleteExercise, getExercise, updateExercise } = require('../controllers/exercise.controller.js')

router.post('/', createExercise)

router.get('/', getExercises)
router.get('/:slug', getExercise)

router.put('/:slug', updateExercise)

router.delete('/:id', deleteExercise)

module.exports = router
