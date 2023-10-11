const mongoose = require('mongoose')
const Schema = mongoose.Schema

const customerSchema = new Schema({
    name: String,
    address: String,
})

mongoose.model('customers', customerSchema)
