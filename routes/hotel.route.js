
const express = require('express');
const app = express();
const hotelRoutes = express.Router();

// Require Game model in our routes module
let Hotel = require('../models/Hotel');

// Defined store route
hotelRoutes.route('/add').post(function (req, res) {
  let hotel = new Hotel(req.body);
  hotel.save()
    .then(hotel => {
    res.status(200).json({'hotel': 'CoGamein added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
hotelRoutes.route('/').get(function (req, res) {
  Hotel.find(function (err, hotels){
    if(err){
      console.log(err);
    }
    else {
      res.json(hotels);
    }
  });
});
                                                              


module.exports = hotelRoutes;