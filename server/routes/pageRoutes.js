const isAuthenticated = require('../middleware/authMiddleware')

const {
    getAllCustomers,
    getAllAccountTransactions,
} = require('../controllers/pageControllers')

module.exports = (app) => {
    app.get('/api/customers', getAllCustomers)

    app.get(
        '/api/customers/account/:accountId/transaction',
        getAllAccountTransactions
    )
}
