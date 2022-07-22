const ProductsController = require('../controllers/products.controller');

module.exports = app => {
    app.post('/api/products', ProductsController.createNewProduct);
    app.get('/api/products', ProductsController.findAllProducts);
    app.get('/api/products/:id', ProductsController.findProductById);
}