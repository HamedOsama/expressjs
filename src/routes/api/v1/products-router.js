const Router = require('express');
const controller = require('../../../controllers/products-controller')
const routes = Router();
routes.route('/all-products').get(controller.getAll)
routes.route('/top-products').get(controller.getTop)
routes.post('/add',controller.uploads.single("image"),controller.addProduct)
// routes.route('/add').post(controller.addProduct)
module.exports  = routes