define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/cart/add",
    "title": "Add product to cart",
    "version": "0.0.1",
    "group": "Add_Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>productId of the product passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Product Added successfully\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tuserId: \"string\",\n\t\t\t\t\t\tproductId: \"string\",\n\t\t\t\t\t\taddedOn: \"date\"\n\t\t\t\t\t}\n\t    \t\t]\n\t   \t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/eCommerceRoutes.js",
    "groupTitle": "Add_Product",
    "name": "PostApiV1CartAdd"
  },
  {
    "type": "post",
    "url": "/api/v1/cart/:userId/:productId/remove",
    "title": "Remove product from cart",
    "version": "0.0.1",
    "group": "Remove_Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user passed as the URL parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>productId of the product passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\t\t\"error\": false,\n\t\t\t\"message\": \"Product Removed from cart Successfully\",\n\t\t\t\"status\": 200,\n\t\t\t\"data\": []\n\t    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/eCommerceRoutes.js",
    "groupTitle": "Remove_Product",
    "name": "PostApiV1CartUseridProductidRemove"
  },
  {
    "type": "get",
    "url": "/api/v1/cart/:userId/all",
    "title": "Get cartList",
    "version": "0.0.1",
    "group": "View_Cart_List",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user passed as a url parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\"error\": false,\n\t\"message\": \"All Products are Found\",\n\t\"status\": 200,\n\t\"data\": [\n\t\t\t\t{\n\t\t\t\t\tuserId: \"string\",\n\t\t\t\t\tproductId: \"string\",\n\t\t\t\t\taddedOn: \"date\"\n\t\t\t\t}\n\t\t\t]\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t\"error\": true,\n\t\"message\": \"Failed To Find Cart List Details\",\n\t\"status\": 500,\n\t\"data\": null\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/eCommerceRoutes.js",
    "groupTitle": "View_Cart_List",
    "name": "GetApiV1CartUseridAll"
  },
  {
    "type": "post",
    "url": "/api/v1/products/create",
    "title": "Create product",
    "version": "0.0.1",
    "group": "create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productCategory",
            "description": "<p>productCategory of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productBrand",
            "description": "<p>productBrand of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productName",
            "description": "<p>productName of the blog passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productDescription",
            "description": "<p>productDescription of the blog passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "productPrice",
            "description": "<p>productPrice of the blog passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "productStarRating",
            "description": "<p>productStarRating of the blog passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productSellar",
            "description": "<p>productSellar of the blog passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "similarProducts",
            "description": "<p>similarProducts contains productId`s which are similar to the product creating, should passed as a body parameter (Separated by commas)</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "recommendedProducts",
            "description": "<p>recommendedProducts contains productId`s which are recommended to the product creating, should passed as a body parameter (Separated by commas)</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "productOffers",
            "description": "<p>productOffers contains names of the offers which are applying to the product creating, should passed as a body parameter (Separated by commas)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Product Created successfully\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tproductId: \"string\",\n\t\t\t\t\t\tproductCategory: \"string\",\n\t\t\t\t\t\tproductBrand: \"string\",\n\t\t\t\t\t\tproductName: \"string\",\n\t\t\t\t\t\tproductDescription: \"string\",\n\t\t\t\t\t\tproductPrice: number,\n\t\t\t\t\t\tproductStarRating: number,\n\t\t\t\t\t\tproductSellar: \"string\",\n\t\t\t\t\t\tsimilarProducts: object(type = array),\n\t\t\t\t\t\trecommendedProducts: object(type = array),\n\t\t\t\t\t\tproductOffers: object(type = array),\n\t\t\t\t\t\tcreated: \"date\",\n\t\t\t\t\t\tlastModified: \"date\"\n\t\t\t\t\t}\n\t    \t\t]\n\t    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/eCommerceRoutes.js",
    "groupTitle": "create",
    "name": "PostApiV1ProductsCreate"
  },
  {
    "type": "post",
    "url": "/api/v1/products/:productId/delete",
    "title": "Delete product by productId",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>productId of the product passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\t\t\"error\": false,\n\t\t\t\"message\": \"Product Deleted Successfully\",\n\t\t\t\"status\": 200,\n\t\t\t\"data\": []\n\t    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/eCommerceRoutes.js",
    "groupTitle": "delete",
    "name": "PostApiV1ProductsProductidDelete"
  },
  {
    "type": "put",
    "url": "/api/v1/products/:productId/edit",
    "title": "Edit product by productId",
    "version": "0.0.1",
    "group": "edit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>productId of the product passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Product Edited Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tproductId: \"string\",\n\t\t\t\t\t\tproductCategory: \"string\",\n\t\t\t\t\t\tproductBrand: \"string\",\n\t\t\t\t\t\tproductName: \"string\",\n\t\t\t\t\t\tproductDescription: \"string\",\n\t\t\t\t\t\tproductPrice: number,\n\t\t\t\t\t\tproductStarRating: number,\n\t\t\t\t\t\tproductSellar: \"string\",\n\t\t\t\t\t\tsimilarProducts: object(type = array),\n\t\t\t\t\t\trecommendedProducts: object(type = array),\n\t\t\t\t\t\tproductOffers: object(type = array),\n\t\t\t\t\t\tcreated: \"date\",\n\t\t\t\t\t\tlastModified: \"date\"\n\t\t\t\t\t}\n\t    \t\t]\n\t    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/eCommerceRoutes.js",
    "groupTitle": "edit",
    "name": "PutApiV1ProductsProductidEdit"
  },
  {
    "type": "get",
    "url": "/api/v1/products/all",
    "title": "Get all products",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\"error\": false,\n\t\"message\": \"All Products are Found\",\n\t\"status\": 200,\n\t\"data\": [\n\t\t\t\t{\n\t\t\t\t\tproductId: \"string\",\n\t\t\t\t\tproductCategory: \"string\",\n\t\t\t\t\tproductBrand: \"string\",\n\t\t\t\t\tproductName: \"string\",\n\t\t\t\t\tproductDescription: \"string\",\n\t\t\t\t\tproductPrice: number,\n\t\t\t\t\tproductStarRating: number,\n\t\t\t\t\tproductSellar: \"string\",\n\t\t\t\t\tsimilarProducts: object(type = array),\n\t\t\t\t\trecommendedProducts: object(type = array),\n\t\t\t\t\tproductOffers: object(type = array),\n\t\t\t\t\tcreated: \"date\",\n\t\t\t\t\tlastModified: \"date\"\n\t\t\t\t}\n\t\t\t]\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t\"error\": true,\n\t\"message\": \"Failed To Find product Details\",\n\t\"status\": 500,\n\t\"data\": null\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/eCommerceRoutes.js",
    "groupTitle": "read",
    "name": "GetApiV1ProductsAll"
  },
  {
    "type": "get",
    "url": "/api/v1/products/view/by/category/:category",
    "title": "Get products by category",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>category of the product passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Products Found Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tproductId: \"string\",\n\t\t\t\t\t\tproductCategory: \"string\",\n\t\t\t\t\t\tproductBrand: \"string\",\n\t\t\t\t\t\tproductName: \"string\",\n\t\t\t\t\t\tproductDescription: \"string\",\n\t\t\t\t\t\tproductPrice: number,\n\t\t\t\t\t\tproductStarRating: number,\n\t\t\t\t\t\tproductSellar: \"string\",\n\t\t\t\t\t\tsimilarProducts: object(type = array),\n\t\t\t\t\t\trecommendedProducts: object(type = array),\n\t\t\t\t\t\tproductOffers: object(type = array),\n\t\t\t\t\t\tcreated: \"date\",\n\t\t\t\t\t\tlastModified: \"date\"\n\t\t\t\t\t}\n\t    \t\t]\n\t    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/eCommerceRoutes.js",
    "groupTitle": "read",
    "name": "GetApiV1ProductsViewByCategoryCategory"
  },
  {
    "type": "get",
    "url": "/api/v1/products/view/by/rating/:rating",
    "title": "Get products by rating",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "rating",
            "description": "<p>rating of the product passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Products Found Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tproductId: \"string\",\n\t\t\t\t\t\tproductCategory: \"string\",\n\t\t\t\t\t\tproductBrand: \"string\",\n\t\t\t\t\t\tproductName: \"string\",\n\t\t\t\t\t\tproductDescription: \"string\",\n\t\t\t\t\t\tproductPrice: number,\n\t\t\t\t\t\tproductStarRating: number,\n\t\t\t\t\t\tproductSellar: \"string\",\n\t\t\t\t\t\tsimilarProducts: object(type = array),\n\t\t\t\t\t\trecommendedProducts: object(type = array),\n\t\t\t\t\t\tproductOffers: object(type = array),\n\t\t\t\t\t\tcreated: \"date\",\n\t\t\t\t\t\tlastModified: \"date\"\n\t\t\t\t\t}\n\t    \t\t]\n\t    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/eCommerceRoutes.js",
    "groupTitle": "read",
    "name": "GetApiV1ProductsViewByRatingRating"
  },
  {
    "type": "get",
    "url": "/api/v1/products/view/:productId",
    "title": "Get a single product",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>The productId should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Product Found Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": {\n\t\t\t\t\t\t_id: \"string\",\n\t\t\t\t\t\t__v: number\n\t\t\t\t\t\tproductId: \"string\",\n\t\t\t\t\t\tproductCategory: \"string\",\n\t\t\t\t\t\tproductBrand: \"string\",\n\t\t\t\t\t\tproductName: \"string\",\n\t\t\t\t\t\tproductDescription: \"string\",\n\t\t\t\t\t\tproductPrice: number,\n\t\t\t\t\t\tproductStarRating: number,\n\t\t\t\t\t\tproductSellar: \"string\",\n\t\t\t\t\t\tsimilarProducts: object(type = array),\n\t\t\t\t\t\trecommendedProducts: object(type = array),\n\t\t\t\t\t\tproductOffers: object(type = array),\n\t\t\t\t\t\tcreated: \"date\",\n\t\t\t\t\t\tlastModified: \"date\"\n\t\t\t\t}\n\t    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/eCommerceRoutes.js",
    "groupTitle": "read",
    "name": "GetApiV1ProductsViewProductid"
  }
] });
