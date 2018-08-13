const express = require('express'),
	path = require('path'),
	bodyParser = require('body-parser'),
	cors = require('cors'),
	mongoose = require('mongoose');
	
	const DB = 
	'mongodb://dagan:dagan12@ds117540.mlab.com:17540/lomda';

const gameRoutes = require('./routes/game.route');
const hotelRoutes = require('./routes/hotel.route');

	mongoose.Promise = global.Promise;
	mongoose.connect(DB).then(
	  () => {console.log('Database is connected') },
	  err => { console.log('Can not connect to the database'+ err)}
	);

const app = express();
	app.use(bodyParser.json());
	app.use(cors());
	app.use('/games', gameRoutes);
	app.use('/hotels', hotelRoutes);

const port = process.env.PORT || 4000;

const server = app.listen(port, function(){
	console.log('Listening on port ' + port);
});