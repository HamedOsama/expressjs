const Router = require('express');
const controller = require('../../../controllers/products-controller')
// const multer=require('multer')

// const uploads=multer({
//     fileFilter(req,file,cb){
//         if(!file.originalname.match(/\.(jpg|jpeg|png|jfif)$/))
//         return cb(new Error('please upload image!'))
//         cb(null,true)
//     }
// })
const routes = Router();
routes.route('/all-products').get(controller.getAll)
routes.route('/top-products').get(controller.getTop)
routes.post('/add',controller.uploads.single("image"),controller.addProduct)
// routes.route('/add').post(controller.addProduct)
// export default routes;
module.exports  = routes