const express = require('express');
const mongoose = require('mongoose');
const shortid = require('shortid');
const response = require('./../libs/responseLib');
const time = require('./../libs/timeLib');
const check = require('./../libs/checkLib');
const logger = require('./../libs/loggerLib');

// importing schema
const EcommerceModel = mongoose.model('Ecommerce');
const CartModel = mongoose.model('Cart');

let createProduct = (req, res) => {
    let today = Date.now();
    let productId = shortid.generate();

    let newProduct = new EcommerceModel({

        productId: productId,
		productCategory: req.body.productCategory,
		productBrand: req.body.productBrand,
		productName: req.body.productName,
		productDescription: req.body.productDescription,
		productPrice: req.body.productPrice,
		productStarRating: req.body.productStarRating,
		productSellar: req.body.productSellar,
		created: today,
		lastModified: today

    });

    let similarProducts = (check.isEmptyArray(req.body.similarProducts)) ? req.body.similarProducts.split(','):[];
	let recommendedProducts = (check.isEmptyArray(req.body.recommendedProducts)) ? req.body.recommendedProducts.split(','):[];
	let productOffers = (check.isEmptyArray(req.body.productOffers)) ? req.body.productOffers.split(','):[];

    newProduct.similarProducts = similarProducts;
    newProduct.recommendedProducts = recommendedProducts;
    newProduct.productOffers = productOffers;

    newProduct.save((err, result)=>{
        if(err)
        {
            logger.error(`Error Occured : ${err}`, 'eCommerceController: createProduct (Internal Server Error)', 10);
            let apiResponse = response.generate(true, 'Error Occured.', 500, null);
            res.send(apiResponse);
        }
        else
        {
            logger.information('Product Created Successfully.','eCommerceController: createProduct',1);
            let apiResponse = response.generate(false, 'Product Created Successfully.', 200, result);
            res.send(apiResponse);
        }
    });
}

let getAllProducts = (req, res) => {
    EcommerceModel.find()
    .select('-__v -_id')
    .lean()
    .exec((err, result) => {
        if(err)
        {
            logger.error(`Error Occured : ${err}`, 'eCommerceController: getAllProducts (Internal Server Error)', 10);
            let apiResponse = response.generate(true, 'Failed To Find Blog Details', 500, null);
            res.send(apiResponse);            
        }
        else if(check.isEmpty(result))
        {
            logger.information('No product found','eCommerceController: getAllProducts',5);
            let apiResponse = response.generate(true, 'No Blog Found', 404, null);
            res.send(apiResponse);
        }
        else
        {
            logger.information('All products found','eCommerceController: getAllProducts',1)
            let apiResponse = response.generate(false, 'All Products Found', 200, result);
            res.send(apiResponse);
        }
    });
}

let viewByCategory = (req, res) => {
    if(check.isEmpty(req.params.category))
    {
        logger.information('category is missing','eCommerceController: viewByCategory',2);
        let apiResponse = response.generate(true, 'category is missing', 403, null);
        res.send(apiResponse); 
    }
    else
    {
        EcommerceModel.find({'productCategory': req.params.category},(err, result)=>{
            if(err)
            {
                logger.error(`Error Occured : ${err}`, 'eCommerceController: viewByCategory (Internal Server Error)', 10);
                let apiResponse = response.generate(true, 'Error Occured.', 500, null);
                res.send(apiResponse);  
            }
            else if(check.isEmpty(result))
            {
                logger.information('Product Not Found.','eCommerceController: viewByCategory',5);
                let apiResponse = response.generate(true, 'Product Not Found.', 404, null);
                res.send(apiResponse);  
            }
            else
            {
                logger.information('Product Found Successfully.','eCommerceController: viewByCategory',1);
                let apiResponse = response.generate(false, 'Product Found Successfully.', 200, result);
                res.send(apiResponse);  
            }
        });
    }
}

let viewByProductId = (req, res) => {
    if(check.isEmpty(req.params.productId))
    {
        logger.information('ProductId is missing','eCommerceController: viewByProductId',2);
        let apiResponse = response.generate(true, 'productId is missing', 403, null);
        res.send(apiResponse); 
    }
    else
    {
        EcommerceModel.findOne({'productId': req.params.productId},(err, result)=>{
            if(err)
            {
                logger.error(`Error Occured : ${err}`, 'eCommerceController: viewByProductId (Internal Server Error)', 10);
                let apiResponse = response.generate(true, 'Error Occured.', 500, null);
                res.send(apiResponse);  
            }
            else if(check.isEmpty(result))
            {
                logger.information('Product Not Found.','eCommerceController: viewByProductId',5);
                let apiResponse = response.generate(true, 'Product Not Found.', 404, null);
                res.send(apiResponse);  
            }
            else
            {
                logger.information('Product Found Successfully.','eCommerceController: viewByCategory',1);
                let apiResponse = response.generate(false, 'Product Found Successfully.', 200, result);
                res.send(apiResponse);  
            }
        });
    }
}

let viewByRating = (req, res) => {
    if(check.isEmpty(req.params.rating))
    {
        logger.information('rating is missing','eCommerceController: viewByRating',2);
        let apiResponse = response.generate(true, 'rating is missing', 403, null);
        res.send(apiResponse); 
    }
    else
    {
        EcommerceModel.find({'productStarRating': req.params.rating},(err, result)=>{
            if(err)
            {
                logger.error(`Error Occured : ${err}`, 'eCommerceController: viewByRating (Internal Server Error)', 10);
                let apiResponse = response.generate(true, 'Error Occured.', 500, null);
                res.send(apiResponse);  
            }
            else if(check.isEmpty(result))
            {
                logger.information('Rating Not Found.','eCommerceController: viewByRating',5);
                let apiResponse = response.generate(true, 'Product Not Found.', 404, null);
                res.send(apiResponse);  
            }
            else
            {
                logger.information('Rating Found Successfully.','eCommerceController: viewByRating',1);
                let apiResponse = response.generate(false, 'Product Found Successfully.', 200, result);
                res.send(apiResponse);  
            }
        });
    }
}

let deleteProduct = (req, res) => {
    if(check.isEmpty(req.params.productId))
    {
        logger.information('productId is missing.','eCommerceController: deleteProduct',2);
        let apiResponse = response.generate(true, 'productId is missing', 403, null);
        res.send(apiResponse); 
    }
    else
    {
        EcommerceModel.remove({'productId':req.params.productId}, (err, result) => {
            if(err)
            {
                logger.error(`Error Occured : ${err}`, 'eCommerceController: deleteProduct (Internal Server Error)', 10);
                let apiResponse = response.generate(true, 'Error Occured.', 500, null);
                res.send(apiResponse);
            }
            else if(check.isEmpty(result))
            {
                logger.information('Product Not Found.','eCommerceController: deleteProduct',5);
                let apiResponse = response.generate(true, 'Product Not Found.', 404, null);
                res.send(apiResponse);
            }
            else
            {
                logger.information('Product Deleted Successfully.','eCommerceController: deleteProduct',1);
                let apiResponse = response.generate(false, 'Product Deleted Successfully.', 200, result);
                res.send(apiResponse);
            }
        });
    }
}

let editProduct = (req, res) => {
    if(check.isEmpty(req.params.productId))
    {
        logger.information('productId is missing.','eCommerceController: editProduct',2);
        let apiResponse = response.generate(true, 'productId is missing', 403, null);
        res.send(apiResponse); 
    }
    else
    {
        let options = req.body;
        EcommerceModel.update({'productId': req.params.productId}, options, {multi:true}).exec((err, result)=>{
            if(err)
            {
                logger.error(`Error Occured : ${err}`, 'eCommerceController: editProduct (Internal Server Error)', 10);
                let apiResponse = response.generate(true, 'Error Occured.', 500, null);
                res.send(apiResponse);
            }
            else if(check.isEmpty(result))
            {
                logger.information('Product Not Found.','eCommerceController: editProduct',5);
                let apiResponse = response.generate(true, 'Product Not Found.', 404, null);
                res.send(apiResponse);
            }
            else
            {
                logger.information('Product Found Successfully.','eCommerceController: editProduct',1);
                let apiResponse = response.generate(false, 'Product Found Successfully.', 200, result);
                res.send(apiResponse);
            }
        });
    }
}


let addProduct = (req, res) => {
    
    CartModel.find({'userId': req.body.userId, 'productId': req.body.productId},(err, result)=>{
        if(err)
        {
            logger.error(`Error Occured while finding product in cart : ${err}`, 'eCommerceController: addProduct (Internal Server Error)', 10);
            let apiResponse = response.generate(true, 'Error Occured.', 500, null);
            res.send(apiResponse);  
        }
        else if(check.isEmpty(result))
        {
            let today = Date.now();

            let cartProduct = new CartModel({

                userId: req.body.userId,
                productId: req.body.productId,
                addedOn: today
            });
        
            cartProduct.save((err, result)=>{
                if(err)
                {
                    logger.error(`Error Occured : ${err}`, 'eCommerceController: addProduct (Internal Server Error)', 10);
                    let apiResponse = response.generate(true, 'Error Occured.', 500, null);
                    res.send(apiResponse);
                }
                else
                {
                    logger.information('Product Added Successfully.','eCommerceController: addProduct',1);
                    let apiResponse = response.generate(false, 'Product added Successfully.', 200, result);
                    res.send(apiResponse);
                }
            }); 
        }
        else
        {
            logger.information('Product Already Added.','eCommerceController: addProduct',1);
            let apiResponse = response.generate(false, 'Product Already Added.', 200, result);
            res.send(apiResponse);  
        }
    });


}

let removeProduct = (req, res) => {
    if(check.isEmpty(req.params.userId) || check.isEmpty(req.params.productId))
    {
        logger.information('userId or productId is missing.','eCommerceController: removeProduct',2);
        let apiResponse = response.generate(true, 'userId or productId is missing', 403, null);
        res.send(apiResponse); 
    }
    else
    {
        CartModel.remove({'userId':req.params.userId,'productId':req.params.productId}, (err, result) => {
            if(err)
            {
                logger.error(`Error Occured : ${err}`, 'eCommerceController: removeProduct (Internal Server Error)', 10);
                let apiResponse = response.generate(true, 'Error Occured.', 500, null);
                res.send(apiResponse);
            }
            else if(check.isEmpty(result))
            {
                logger.information('Product Not Found.','eCommerceController: removeProduct',5);
                let apiResponse = response.generate(true, 'Product Not Found.', 404, null);
                res.send(apiResponse);
            }
            else
            {
                logger.information('Product Removed Successfully.','eCommerceController: deleteProduct',1);
                let apiResponse = response.generate(false, 'Product Removed Successfully.', 200, result);
                res.send(apiResponse);
            }
        });
    }
}

let viewCartList = (req, res) => {
    if(check.isEmpty(req.params.userId))
    {
        logger.information('userId is missing.','eCommerceController: viewCartList',2);
        let apiResponse = response.generate(true, 'userId is missing', 403, null);
        res.send(apiResponse); 
    }
    else
    {
        CartModel.find({'userId': req.params.userId},(err, result)=>{
            if(err)
            {
                logger.error(`Error Occured : ${err}`, 'eCommerceController: viewCartList (Internal Server Error)', 10);
                let apiResponse = response.generate(true, 'Error Occured.', 500, null);
                res.send(apiResponse);  
            }
            else if(check.isEmpty(result))
            {
                logger.information('Cart List is empty.','eCommerceController: viewCartList',2);
                let apiResponse = response.generate(true, 'Cart List is empty.', 404, null);
                res.send(apiResponse);  
            }
            else
            {
                logger.information('Cartlist Found Successfully.','eCommerceController: viewCartList',1);
                let apiResponse = response.generate(false, 'Cartlist Found Successfully.', 200, result);
                res.send(apiResponse);  
            }
        });
    }
}




module.exports = {
    createProduct: createProduct,
    getAllProducts: getAllProducts,
    viewByCategory: viewByCategory,
    viewByProductId: viewByProductId,    
    viewByRating: viewByRating,
    deleteProduct: deleteProduct,
    editProduct: editProduct,
    addProduct: addProduct,
    removeProduct: removeProduct,
    viewCartList: viewCartList    
}








