const Settings = require('../models/settings.model.js')

const createSettings = async (req, res) => {
	try {
		const settings = new Settings({ ...req.body })

		await settings.save()

		res.status(201).json({ message: 'Settings registered successfully!' })
	} catch (error) {
		res.status(500).json({ message: 'Internal server error' })
	}
}

const getSettings = async (req, res) => {
	try {
		const settings = await Settings.find({})

		res.status(200).json(settings)
	} catch (error) {
		res.status(500).json({ message: 'Internal server error' })
	}
}

const getSingleSettings = async (req, res) => {
	const { id } = req.params

	try {
		const settings = await Settings.findById(id)

		res.status(200).json(settings)
	} catch (error) {
		res.status(500).json({ message: 'Internal server error' })
	}
}

const updateSettings = async (req, res) => {
	const { id } = req.params

	try {
		const updatedSettings = await Settings.findByIdAndUpdate(id, { ...req.body }, { new: true })

		res.status(200).json(updatedSettings)
	} catch (error) {
		res.status(500).json({ message: 'Internal server error' })
	}
}

const deleteSettings = async (req, res) => {
	const { id } = req.params

	try {
		await Settings.findByIdAndDelete(id)
		res.status(200).json({ message: 'Settings deleted successfully!' })
	} catch (error) {
		res.status(500).json({ message: 'Internal server error' })
	}
}

module.exports = { createSettings, getSettings, getSingleSettings, updateSettings, deleteSettings }
