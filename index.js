const express = require('express');
// import express from 'express'
var morgan = require('morgan');
// import morgan from 'morgan';
var cors = require('cors');
// import cors from 'cors';
var mongoose = require('mongoose');
// import mongoose from 'mongoose';
const router = require('./routes');
// import apiRouter from './routes/index';

//conexión a la base de datos
// const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const urlDB = 'mongodb+srv://ciclo3_user:3LTiZ5OMtKYmSnex@ciclo3.gm2lp.mongodb.net/ciclo3DB?retryWrites=true&w=majority';
mongoose.connect(urlDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(mongoose => console.log('Conectado a Atlas estado del server --- <<< Activo >>>---'))
.catch(err => console.log(err))

const app = express();
app.use(morgan('dev'));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));


//rutas
app.use('/api', router);

app.set('PORT', process.env.PORT || 3000);

//middleware



app.listen(app.get('PORT'), () => {
  console.log(`Server started on port: ${app.get('PORT')}`);
});

app.get('/', (req,res) => {
    res.send('Pagina en construccion ....... by SantoLopez');
})