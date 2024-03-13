const Category = require('../models/category.model.js')

const createCategory = async (req, res) => {
	try {
		// Check if the category exist
		const existingCategory = await Category.findOne({ title: req.body.title })

		if (existingCategory) return res.status(400).json({ message: 'This category allready exist!' })

		//Create new category
		const category = new Category({ ...req.body })

		await category.save()

		res.status(201).json({ message: 'Category registered successfully!' })
	} catch (error) {
		res.status(500).json({ message: 'Internal server error' })
	}
}

const getCategories = async (req, res) => {
	try {
		const categories = await Category.find({})

		res.status(200).json(categories)
	} catch (error) {
		res.status(500).json({ message: 'Internal server error' })
	}
}

const getCategory = async (req, res) => {
	const { slug } = req.params

	try {
		const category = await Category.findOne({ slug })

		res.status(200).json(category)
	} catch (error) {
		res.status(500).json({ message: 'Internal server error' })
	}
}

const updateCategory = async (req, res) => {
	const { slug } = req.params

	try {
		const category = await Category.findOne({ slug })

		// Check if it's another category with the same title
		const existingTitle = await Category.findOne({ title: req.body.title })
		if (existingTitle && category.title !== req.body.title) return res.status(400).json({ message: 'This category title is allready taken!' })

		// Check if it's another category with the same slug
		const existingSlug = await Category.findOne({ slug: req.body.slug })
		if (existingSlug && category.slug !== req.body.slug) return res.status(400).json({ message: 'This category slug is allready taken!' })

		const updatedCategory = await Category.findByIdAndUpdate(category.id, { ...req.body }, { new: true })

		res.status(200).json(updatedCategory)
	} catch (error) {
		res.status(500).json({ message: 'Internal server error' })
	}
}

const deleteCategory = async (req, res) => {
	const { id } = req.params

	try {
		const user = await Category.findByIdAndDelete(id)
		res.status(200).json({ message: 'Category deleted successfully!' })
	} catch (error) {
		res.status(500).json({ message: 'Internal server error' })
	}
}

module.exports = { createCategory, getCategories, getCategory, updateCategory, deleteCategory }
