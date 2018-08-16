// importing mongoose module
const mongoose = require('mongoose');

// importing timeLib
const time = require('./../libs/timeLib');

// import schema
const Schema = mongoose.Schema;

let cartSchema = new Schema({

    userId: {
        type: String,
        required: true,
        default:''
    },
    productId: {
        type: String,
        required: true,
        default: ''
    },
    addedOn: {
        type: Date,
        default: Date.now()
    }


});


mongoose.model('Cart',cartSchema);