const express = require('express');
const app = express();
//const productRouter = require('./routes/product');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Content, Accept, Authorization, X-Requested-');
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, PATCH, OPTIONS')
    next();
})

//app.use('/api/products', productRouter);

app.use('/pokemons', (req, res) => {
    pokemons = ['dracaufeu', 'brasegalie'];
    res.status(200).json(pokemons);
});

module.exports = app;
