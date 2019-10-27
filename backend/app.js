const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const recipeNjia = require('./routes/recipe');

const mongoose = require('mongoose');

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

mongoose.connect('mongodb+srv://ken:Ivylove1@cluster0-lwrbr.mongodb.net/test?retryWrites=true&w=majority').then(() => {
    console.log('connected succesfully')
}). catch((error) => {
    console.log(error)
})
app.use(bodyParser.json());

app.use('/api/recipes', recipeNjia)


module.exports = app;





