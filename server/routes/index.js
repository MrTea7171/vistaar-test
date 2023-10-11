// routes.js
const authRoutes = require('./authRoutes')
const pageRoutes = require('./pageRoutes')

module.exports = function setupRoutes(app) {
    authRoutes(app)
    pageRoutes(app)
}
