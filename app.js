const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const indexController = require('./controllers/index');

const app = express();

// App configuration
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use('/', express.static(__dirname + '/public'));

// Routes
app.use('/', indexController);

module.exports = app;
