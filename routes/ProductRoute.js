const route = require('express').Router()
const ProductController = require('../controllers/ProductController')
const { adminAuthorization } = require('../middlewares/authorization')

route.get('/product', ProductController.getProduct)
route.get('/product/:id', ProductController.getProductById)
route.post('/product', adminAuthorization , ProductController.createProduct)
route.patch('/product/:id', adminAuthorization , ProductController.editProduct)
route.delete('/product/:id', adminAuthorization, ProductController.deleteProduct)




module.exports = route