const express = require('express');
const eCommerceController = require('./../controllers/eCommerceController');
const appConfig = require('./../config/appConfig');
const auth = require("./../middlewares/auth")

let setRouter = (app) => {

	let baseUrl = appConfig.apiVersion + '/products';

	let cartBaseUrl = appConfig.apiVersion + '/cart';

	app.get(baseUrl + '/all', auth.isAuthenticated, eCommerceController.getAllProducts);

	/**
 * @api {get} /api/v1/products/all Get all products
 * @apiVersion 0.0.1
 * @apiGroup read
 *
 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
 *
 *  @apiSuccessExample {json} Success-Response:
 *  {
	"error": false,
	"message": "All Products are Found",
	"status": 200,
	"data": [
				{
					productId: "string",
					productCategory: "string",
					productBrand: "string",
					productName: "string",
					productDescription: "string",
					productPrice: number,
					productStarRating: number,
					productSellar: "string",
					similarProducts: object(type = array),
					recommendedProducts: object(type = array),
					productOffers: object(type = array),
					created: "date",
					lastModified: "date"
				}
			]
	}
	 
  @apiErrorExample {json} Error-Response:
 *
 * {
	"error": true,
	"message": "Failed To Find product Details",
	"status": 500,
	"data": null
   }
 */

	app.get(baseUrl + '/view/:productId', auth.isAuthenticated, eCommerceController.viewByProductId);

    /**
	 * @api {get} /api/v1/products/view/:productId Get a single product
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} productId The productId should be passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Product Found Successfully.",
	    "status": 200,
	    "data": {
						_id: "string",
						__v: number
						productId: "string",
						productCategory: "string",
						productBrand: "string",
						productName: "string",
						productDescription: "string",
						productPrice: number,
						productStarRating: number,
						productSellar: "string",
						similarProducts: object(type = array),
						recommendedProducts: object(type = array),
						productOffers: object(type = array),
						created: "date",
						lastModified: "date"
				}
	    }
		 
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.",
	    "status": 500,
	    "data": null
	   }
	 */


	app.get(baseUrl + '/view/by/category/:category', auth.isAuthenticated, eCommerceController.viewByCategory);

    /**
	 * @api {get} /api/v1/products/view/by/category/:category Get products by category
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} category category of the product passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Products Found Successfully.",
	    "status": 200,
	    "data": [
					{
						productId: "string",
						productCategory: "string",
						productBrand: "string",
						productName: "string",
						productDescription: "string",
						productPrice: number,
						productStarRating: number,
						productSellar: "string",
						similarProducts: object(type = array),
						recommendedProducts: object(type = array),
						productOffers: object(type = array),
						created: "date",
						lastModified: "date"
					}
	    		]
	    }
		 
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.",
	    "status": 500,
	    "data": null
	   }
	 */

	app.get(baseUrl + '/view/by/rating/:rating', auth.isAuthenticated, eCommerceController.viewByRating);

    /**
	 * @api {get} /api/v1/products/view/by/rating/:rating Get products by rating
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} rating rating of the product passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Products Found Successfully.",
	    "status": 200,
	    "data": [
					{
						productId: "string",
						productCategory: "string",
						productBrand: "string",
						productName: "string",
						productDescription: "string",
						productPrice: number,
						productStarRating: number,
						productSellar: "string",
						similarProducts: object(type = array),
						recommendedProducts: object(type = array),
						productOffers: object(type = array),
						created: "date",
						lastModified: "date"
					}
	    		]
	    }
		 
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.",
	    "status": 500,
	    "data": null
	   }
	 */





	app.post(baseUrl + '/:productId/delete', auth.isAuthenticated, eCommerceController.deleteProduct);

    /**
	 * @api {post} /api/v1/products/:productId/delete Delete product by productId
	 * @apiVersion 0.0.1
	 * @apiGroup delete
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} productId productId of the product passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
			"error": false,
			"message": "Product Deleted Successfully",
			"status": 200,
			"data": []
	    }
		 
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.",
	    "status": 500,
	    "data": null
	   }
	 */

	app.put(baseUrl + '/:productId/edit', auth.isAuthenticated, eCommerceController.editProduct);

    /**
	 * @api {put} /api/v1/products/:productId/edit Edit product by productId
	 * @apiVersion 0.0.1
	 * @apiGroup edit
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} productId productId of the product passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Product Edited Successfully.",
	    "status": 200,
	    "data": [
					{
						productId: "string",
						productCategory: "string",
						productBrand: "string",
						productName: "string",
						productDescription: "string",
						productPrice: number,
						productStarRating: number,
						productSellar: "string",
						similarProducts: object(type = array),
						recommendedProducts: object(type = array),
						productOffers: object(type = array),
						created: "date",
						lastModified: "date"
					}
	    		]
	    }
		 
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.",
	    "status": 500,
	    "data": null
	   }
	 */


	app.post(baseUrl + '/create', auth.isAuthenticated, eCommerceController.createProduct);

    /**
	 * @api {post} /api/v1/products/create Create product
	 * @apiVersion 0.0.1
	 * @apiGroup create
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} productCategory productCategory of the product passed as a body parameter
	 * @apiParam {String} productBrand productBrand of the product passed as a body parameter
	 * @apiParam {String} productName productName of the blog passed as a body parameter
	 * @apiParam {String} productDescription productDescription of the blog passed as a body parameter
	 * @apiParam {Number} productPrice productPrice of the blog passed as a body parameter
	 * @apiParam {Number} productStarRating productStarRating of the blog passed as a body parameter
	 * @apiParam {String} productSellar productSellar of the blog passed as a body parameter
	 * @apiParam {Array} similarProducts similarProducts contains productId`s which are similar to the product creating, should passed as a body parameter (Separated by commas)
	 * @apiParam {Array} recommendedProducts recommendedProducts contains productId`s which are recommended to the product creating, should passed as a body parameter (Separated by commas)
	 * @apiParam {Array} productOffers productOffers contains names of the offers which are applying to the product creating, should passed as a body parameter (Separated by commas)
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Product Created successfully",
	    "status": 200,
	    "data": [
					{
						productId: "string",
						productCategory: "string",
						productBrand: "string",
						productName: "string",
						productDescription: "string",
						productPrice: number,
						productStarRating: number,
						productSellar: "string",
						similarProducts: object(type = array),
						recommendedProducts: object(type = array),
						productOffers: object(type = array),
						created: "date",
						lastModified: "date"
					}
	    		]
	    }
		
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.",
	    "status": 500,
	    "data": null
	   }
	 */

	app.post(cartBaseUrl + '/add', auth.isAuthenticated, eCommerceController.addProduct);

    /**
	 * @api {post} /api/v1/cart/add Add product to cart
	 * @apiVersion 0.0.1
	 * @apiGroup Add Product
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} userId userId of the user passed as a body parameter
	 * @apiParam {String} productId productId of the product passed as a body parameter
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Product Added successfully",
	    "status": 200,
	    "data": [
					{
						userId: "string",
						productId: "string",
						addedOn: "date"
					}
	    		]
	   	}
	
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.",
	    "status": 500,
	    "data": null
	   }
	 */


	app.get(cartBaseUrl + '/:userId/all', auth.isAuthenticated, eCommerceController.viewCartList);

	/**
 * @api {get} /api/v1/cart/:userId/all Get cartList
 * @apiVersion 0.0.1
 * @apiGroup View Cart List
 *
 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
 * @apiParam {String} userId userId of the user passed as a url parameter
 *  @apiSuccessExample {json} Success-Response:
 *  {
	"error": false,
	"message": "All Products are Found",
	"status": 200,
	"data": [
				{
					userId: "string",
					productId: "string",
					addedOn: "date"
				}
			]
	}
	 
  @apiErrorExample {json} Error-Response:
 *
 * {
	"error": true,
	"message": "Failed To Find Cart List Details",
	"status": 500,
	"data": null
   }
 */

	app.post(cartBaseUrl + '/:userId/:productId/remove', auth.isAuthenticated, eCommerceController.removeProduct);

    /**
	 * @api {post} /api/v1/cart/:userId/:productId/remove Remove product from cart
	 * @apiVersion 0.0.1
	 * @apiGroup Remove Product
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} userId userId of the user passed as the URL parameter
	 * @apiParam {String} productId productId of the product passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
			"error": false,
			"message": "Product Removed from cart Successfully",
			"status": 200,
			"data": []
	    }
		 
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.",
	    "status": 500,
	    "data": null
	   }
	 */






}// end setRouter function

module.exports = {
	setRouter: setRouter
}// end module exports 