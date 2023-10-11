// index.js
const express = require('express')
const app = express()
const { PORT } = require('./config') // Load your environment variables from a config file

const db = require('./models') // Import the db module

// Connect to the database
db.connectToDatabase()

// Load models
db.loadModels()

// Middleware setup
const setupMiddleware = require('./middleware')
setupMiddleware(app)

// Routes setup
const setupRoutes = require('./routes')
setupRoutes(app)

// Start the server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})
