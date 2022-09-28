const express = require('express');
const expressConfig = require('./config/express')


const homeController = require('./controllers/homeController');
const catalogController = require('./controllers/catalogController');
const createController = require('./controllers/createController');
const defaultController = require('./controllers/defaultController');


const app = express();

expressConfig(app)

app.use(homeController);
app.use('/catalog', catalogController);
app.use('/create', createController);
// TODO attach other controllers

app.all('*', defaultController);


app.listen(3000, () => console.log('Server listening on port 3000'));