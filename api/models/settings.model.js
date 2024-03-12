const mongoose = require('mongoose')

const settingsSchema = mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
			unique: true,
		},
		type: {
			type: String,
			required: true,
		},
		createdBy: {
			type: String,
		},
	},
	{ timestamps: true }
)

const Settings = mongoose.model('Settings', settingsSchema)

module.exports = Settings
