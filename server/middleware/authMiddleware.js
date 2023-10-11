// authMiddleware.js
const isAuthenticated = (req, res, next) => {
    // Implement your authentication logic here
    if (req.isAuthenticated()) {
        // Check if the user is authenticated
        return next() // User is authenticated, continue to the next middleware/route
    } else {
        return res.status(401).json({ message: 'Unauthorized' })
    }
}

module.exports = isAuthenticated
