// db.js
const mongoose = require('mongoose')

// Load your environment variables from the .env file
require('dotenv').config({ path: './config/.env' })

// Define the MongoDB connection URL
const MONGO_URL = process.env.MONGO_URL

// Function to establish the database connection
const connectToDatabase = async () => {
    try {
        await mongoose.connect(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Database Connected Successfully')
    } catch (err) {
        console.error(err)
    }
}

// Function to load models
const loadModels = () => {
    require('./User')
    require('./Customers')
    require('./Transaction')
}

module.exports = {
    connectToDatabase,
    loadModels,
}
