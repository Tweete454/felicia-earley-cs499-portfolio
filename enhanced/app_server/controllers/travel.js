const mongoose = require('mongoose');

const Trip = mongoose.model('Trip');
const travel = (req, res) => {

    Trip.find({})
        .then((trips) => {

            res.render('travel', {
                title: 'Travlr Getaways',
                trips: trips
            });

        })
        .catch((err) => {

            console.log(err);

            res.status(500).send('Error loading trips');

        });

};

module.exports = {
    travel
};

