const Exercise = require('../models/exercise.model.js')

const createExercise = async (req, res) => {
	try {
		// Check if the exercise title exist
		const existingCategory = await Exercise.findOne({ title: req.body.title })
		if (existingCategory) return res.status(400).json({ message: 'This exercise name already exist!' })

		// Check if the slug is already in use
		const existingSlug = await Exercise.findOne({ slug: req.body.slug })
		if (existingSlug) return res.status(400).json({ message: 'This slug is already in use!' })

		//Create new exercise
		const exercise = new Exercise({ ...req.body })

		await exercise.save()

		res.status(201).json({ message: 'Exercise registered successfully!' })
	} catch (error) {
		res.status(500).json({ message: 'Internal server error' })
	}
}

const getExercises = async (req, res) => {
	try {
		const exercises = await Exercise.find({})

		res.status(200).json(exercises)
	} catch (error) {
		res.status(500).json({ message: 'Internal server error' })
	}
}

const getExercise = async (req, res) => {
	const { slug } = req.params

	try {
		const exercise = await Exercise.findOne({ slug })

		res.status(200).json(exercise)
	} catch (error) {
		res.status(500).json({ message: 'Internal server error' })
	}
}

const updateExercise = async (req, res) => {
	const { slug } = req.params

	try {
		const exercise = await Exercise.findOne({ slug })

		// Check if it's another exercise with the same title
		const existingTitle = await Exercise.findOne({ title: req.body.title })
		if (existingTitle && exercise.title !== req.body.title) return res.status(400).json({ message: 'This exercise title is already taken!' })

		// Check if it's another exercise with the same slug
		const existingSlug = await Exercise.findOne({ slug: req.body.slug })
		if (existingSlug && exercise.slug !== req.body.slug) return res.status(400).json({ message: 'This exercise slug is already taken!' })

		const updatedExercise = await Exercise.findByIdAndUpdate(exercise.id, { ...req.body }, { new: true })

		res.status(200).json(updatedExercise)
	} catch (error) {
		res.status(500).json({ message: 'Internal server error' })
	}
}

const deleteExercise = async (req, res) => {
	const { id } = req.params

	try {
		await Exercise.findByIdAndDelete(id)
		res.status(200).json({ message: 'Exercise deleted successfully!' })
	} catch (error) {
		res.status(500).json({ message: 'Internal server error' })
	}
}

module.exports = { createExercise, getExercises, getExercise, updateExercise, deleteExercise }
