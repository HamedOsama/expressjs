const Router = require('express');
const productsRouter = require('./api/v1/products-router')
const routes = Router();
routes.use('/products', productsRouter);

module.exports =  routes;
