// middleware.js
const passport = require('passport')
const cookieSession = require('cookie-session')
const cors = require('cors')
const { COOKIE_KEY } = require('../config')

module.exports = function setupMiddleware(app) {
    require('../services/passport')
    app.use(
        cors({
            origin: 'http://localhost:5173', // Change to your React app's domain
            credentials: true,
        })
    )

    app.use(
        cookieSession({
            maxAge: 30 * 24 * 60 * 60 * 1000,
            keys: [COOKIE_KEY],
        })
    )

    app.use(passport.initialize())
    app.use(passport.session())
}
