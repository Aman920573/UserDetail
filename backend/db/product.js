const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    User_id:String,
    name:String,
    email:String,
    phone:String,
})

module.exports = mongoose.model('Product',productSchema);