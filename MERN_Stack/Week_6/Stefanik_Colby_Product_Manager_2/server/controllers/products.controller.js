const Product = require('../models/products.model');

module.exports.createNewProduct = (req, res) => {
    Product.create(req.body)
        .then(newlyCreatedProduct => {
            res.json({newlyCreatedProduct})
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then((allProducts) => { 
            res.json({ product: allProducts })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.findProductById = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(oneProduct => {
            res.json({ product: oneProduct })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}