const mongoose = require('mongoose')
const Schema = mongoose.Schema

const transactionSchema = new Schema({
    account_id: Number,
    transaction_count: Number,
    transactions: [
        {
            date: Date,
            amount: Number,
            transaction_code: String,
            symbol: String,
            price: String,
            total: String,
        },
    ],
})

mongoose.model('transactions', transactionSchema)
