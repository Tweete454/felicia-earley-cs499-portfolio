const express = require('express');
const path = require('path');
const hbs = require('hbs');
const mongoose = require('mongoose');

const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./models/trips');
require('./models/users');
mongoose.connect('mongodb://127.0.0.1:27017/travlr');

mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to ' + mongoose.connection.name);
});

mongoose.connection.on('error', (err) => {
    console.log('Mongoose connection error: ' + err);
});
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(
    path.join(__dirname, 'app_server', 'views', 'partials')
);
app.use(express.static(path.join(__dirname, 'public')));
const apiRouter = require('./app_api/routes');
app.use('/api', apiRouter);
const webRouter = require('./app_server/routes');
app.use('/', webRouter);
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

