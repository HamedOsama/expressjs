const Router = require('express');
const productsRouter = require('./api/v1/products-router')
const contactsRouter = require('./api/v1/contact-router')
const routes = Router();
routes.use('/products', productsRouter);
routes.use('/contacts',contactsRouter)
module.exports =  routes;
