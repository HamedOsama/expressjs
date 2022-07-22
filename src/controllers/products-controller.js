const Product = require('../models/products-model');
const multer=require('multer')

const uploads=multer({
    fileFilter(req,file,cb){
        if(!file.originalname.match(/\.(jpg|jpeg|png|jfif)$/))
        return cb(new Error('please upload image!'))
        cb(null,true)
    }
})
const addProduct = async function(req,res){
    try {
       uploads.single('image')
        const product = new Product(req.body);
        if(req.file){
            product.image=req.file.buffer
        }
        await product.save();
        res.send(product)
    } catch (error) {
        res.send(error.message)
    }
}
const getAll = async function (req,res) {
    try {
        const product = await Product.find({});
        res.json({
            status: 'success',
            data: product,
            message: 'Data Retrieved successfully',
        });
    } catch (err) {
        req.send(err.message);
        // console.error(err);
    }
};

const getTop = async function (req,res) {
    try {
        const product = await Product.find({rank: {$ne: null}}).sort({rank :"ASC" });
        res.json({
            status: 'success',
            data: product,
            message: 'Data Retrieved successfully',
        });
    } catch (err) {
        req.send(err.message);
        // console.error(err);
    }
};

module.exports = {getAll,getTop,addProduct,uploads}