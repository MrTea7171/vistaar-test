const mongoose = require('mongoose')
exports.getAllCustomers = async (req, res) => {
    const Customers = mongoose.model('customers')
    const page = parseInt(req.query.page) || 1 // Default to page 1 if not specified
    const perPage = parseInt(req.query.perPage) || 10 // Default to 10 items per page
    const searchName = req.query.search || '' // Default to empty string if not specified

    // Build a search query based on the 'searchName' parameter
    const query = {}
    if (searchName) {
        query.name = { $regex: new RegExp(searchName, 'i') } // Case-insensitive search
    }

    try {
        const totalResults = await Customers.countDocuments(query)
        const totalPages = Math.ceil(totalResults / perPage)

        const results = await Customers.find(query)
            .sort({ name: 1 })
            .skip((page - 1) * perPage)
            .limit(perPage)
            .select('name address accounts')

        res.json({
            totalResults,
            totalPages,
            currentPage: page,
            perPage,
            results,
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Error fetching customers' })
    }
}

exports.getAllAccountTransactions = (req, res) => {
    const accountID = req.params.accountId
    const Transactions = mongoose.model('transactions')
    const page = parseInt(req.query.page) || 1 // Default to page 1 if not specified
    const transactionsPerPage = parseInt(req.query.perPage) || 10 // Default to 10 items per page
    const searchTransactionCode = req.query.search || '' // Default to empty string if not specified

    const skipCount = (page - 1) * transactionsPerPage

    const pipeline = [
        {
            $match: {
                account_id: parseInt(accountID),
            },
        },
        {
            $unwind: '$transactions',
        },
        {
            $match: {
                'transactions.transaction_code': {
                    $regex: new RegExp(searchTransactionCode, 'i'), // Case-insensitive partial match
                },
            },
        },
        {
            $sort: {
                'transactions.date': -1,
            },
        },
        {
            $group: {
                _id: null,
                totalResults: { $sum: 1 }, // Calculate the total number of search results
                transactions: {
                    $push: {
                        date: '$transactions.date',
                        amount: '$transactions.amount',
                        transaction_code: '$transactions.transaction_code',
                        symbol: '$transactions.symbol',
                        price: '$transactions.price',
                        total: '$transactions.total',
                    },
                },
            },
        },
        {
            $addFields: {
                totalPages: {
                    $ceil: {
                        $divide: ['$totalResults', transactionsPerPage],
                    },
                },
            },
        },
        {
            $project: {
                _id: 0,
                totalPages: 1,
                transactions: {
                    $slice: ['$transactions', skipCount, transactionsPerPage],
                },
            },
        },
    ]

    Transactions.aggregate(pipeline)
        .then((result) => {
            res.send(result)
        })
        .catch((error) => {
            console.error(error)
            res.status(500).send('Error fetching transactions')
        })
}
