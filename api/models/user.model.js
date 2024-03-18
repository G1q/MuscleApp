const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			unique: true,
		},
		role: {
			type: String,
			required: true,
			default: 'user',
		},
		active: {
			type: Boolean,
			default: true,
		},
		firstName: {
			type: String,
		},
		lastName: {
			type: String,
		},
		birthdate: {
			type: String,
		},
		bio: {
			type: String,
		},
		avatar: {
			type: String,
		},
		favorites: {
			type: [mongoose.Schema.Types.ObjectId],
			ref: 'Exercise',
		},
	},
	{ timestamps: true }
)

const User = mongoose.model('User', userSchema)

module.exports = User
