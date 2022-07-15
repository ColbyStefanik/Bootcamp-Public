const ProductsController = require('../controllers/products.controller');

module.exports = app => {
    app.post('/api/products', ProductsController.createNewProduct);
}