const express = require('express')
const morgan = require('morgan')
const routes = require('./src/routes/index.js')

const port = process.env.PORT || 3333;
const app = express()
require('./src/db/db')
app.use(express.json())

// security middleware
app.use(morgan('common'));

// home page
app.get('/', (_, res) => {
    res.send('hello world!');
});
// api routes
app.use('/api/v1', routes);

// handling wrong routes
app.use((_, res) => {
    res.status(404).json({
        message: 'go to main',
    });
});

app.listen(port,()=>console.log(`server running on: http://127.0.0.1:${PORT}`))

// routes 
// (get) get all products : http://127.0.0.1:3000/api/v1/products/all-products
// (get) get top products : http://127.0.0.1:3000/api/v1/products/top-products
// (post) add product :  http://127.0.0.1:3000/api/v1/products/add
//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------
// app.get('/' , (req,res)=>{
//     res.send('home')
// })
// app.get('/api/v1/all-products',(req,res)=>{
//     res.json({
//         name: 'data received',
//         Image : '../../'
//     })
// })
// app.get('/api/v1/top-products',(req,res)=>{
//     res.json({
//         name: 'data received',
//         Image : '../../'
//     })
// })