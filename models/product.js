/**
 * Created by Owner on 11/17/2016.
 */
//link to mongoose
var mongoose = require('mongoose');
// this is the products model which defines the attributes of a product
// this model is inherited from the mongoose.Schema
var productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Please enter a name'
    },
    Company: {
        type: String,
        required: 'Please choose a type'
    },
    Price: {
        type: String,
        required: 'Please enter the price'
    },
    Ram: {
        type: String,
        required: 'Please enter the ram available'
    },
    Processor:{
        type: String,
        required: 'Please enter the type of processor'
    },
    Color:{
        type: String,
        required: 'Please enter the color'
    },
    Quantity:{
        type: Number,
        required: 'Please enter the stock left'
    }

});

// making the files public
module.exports = mongoose.model('Product', productSchema);