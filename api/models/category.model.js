const mongoose = require('mongoose')

const categorySchema = mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
			unique: true,
		},
		parent: {
			type: String,
			default: 0,
		},
		imageURL: {
			type: String,
		},
		description: {
			type: String,
		},
		slug: {
			type: String,
			unique: true,
			required: true,
		},
		active: {
			type: Boolean,
			default: true,
		},
		createdBy: {
			type: String,
		},
	},
	{ timestamps: true }
)

const Category = mongoose.model('Category', categorySchema)

module.exports = Category
