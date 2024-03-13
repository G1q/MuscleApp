const mongoose = require('mongoose')

const exerciseSchema = mongoose.Schema(
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
		videoURL: {
			type: String,
		},
		type: {
			type: String,
			required: true,
		},
		equipment: {
			type: String,
			required: true,
		},
		description: {
			type: String,
		},
		steps: {
			type: [String],
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

const Exercise = mongoose.model('Exercise', exerciseSchema)

module.exports = Exercise
