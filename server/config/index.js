// config.js
const dotenv = require('dotenv')
dotenv.config({ path: './config/.env' })
module.exports = {
    PORT: process.env.PORT || 8000,
    MONGO_URL: process.env.MONGO_URL || 'Game',
    COOKIE_KEY: process.env.MY_COOKIE_KEY || 'Life',
}
