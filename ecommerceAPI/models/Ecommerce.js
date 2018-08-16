// importing mongoose module
const mongoose = require('mongoose');

// importing timeLib
const time = require('./../libs/timeLib');

// import schema
const Schema = mongoose.Schema;

let eCommerceSchema = new Schema({

    productId: {
        type: String,
        unique: true
    },
    productCategory: {
        type: String,
        default: ''
    },
    productBrand: {
        type: String,
        default: ''
    },
    productName: {
        type: String,
        default: ''
    },
    productDescription: {
        type: String,
        default: ''
    },
    productPrice: {
        type: Number,
        default: ''
    },
    productStarRating: {
        type: Number,
        default: 0
    },
    productSellar: {
        type: String,
        default: ''
    },
    similarProducts: [],
    recommendedProducts: [],
    productOffers: [],
    created: {
        type: Date,
        default: time.now
    },
    lastModified: {
        type: Date,
        default: time.now
    }


});


mongoose.model('Ecommerce',eCommerceSchema);