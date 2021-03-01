// Importing required modules
const cors = require('cors');
const express = require('express');

// parse env variables
require('dotenv').config();

require("./helpers/db/mongodb.js")();

// Configuring port
const port = process.env.PORT || 9000;

const app = express();

// Configure middlewares
app.use(cors());
app.use(express.json());

app.set('view engine', 'html');

// Static folder
app.use(express.static(__dirname + '/views/'));

// Defining route middleware
app.use('/api/users', require('./routes/user_routes'));
app.use('/api/reviews', require('./routes/review_routes'));
app.use('/api/articles', require('./routes/article_routes'));
app.use('/api/roles', require('./routes/role_routes'));


// Listening to port
app.listen(port);
console.log(`Listening On http://localhost:${port}/api`);

module.exports = app;
