const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({

    code: String,
    name: String,
    length: String,
    start: String,
    resort: String,
    perPerson: String,
    image: String,
    description: String

});

mongoose.model('trips', tripSchema);
