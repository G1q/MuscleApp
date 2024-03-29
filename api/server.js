require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

// Middleware
app.use(cors())
app.use(express.json())

// MongoDB Connection
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => console.log('Connected to MongoDB'))
	.catch((error) => console.error('MongoDB connection error:', error))

// Routes
const userRoutes = require('./routes/user.routes.js')
const authRoutes = require('./routes/auth.routes.js')
const settingsRoutes = require('./routes/settings.routes.js')
const categoryRoutes = require('./routes/category.routes.js')
const exerciseRoutes = require('./routes/exercise.routes.js')

// Middlewares
app.use('/api/v1/users', userRoutes)
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/settings', settingsRoutes)
app.use('/api/v1/categories', categoryRoutes)
app.use('/api/v1/exercises', exerciseRoutes)

// Start the server
app.listen(process.env.PORT, () => {
	console.log(`Server is running on port ${process.env.PORT}`)
})
