const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Games
let Hotel = new Schema({
  name2: {
    type: String
  },
  phone2: {
    type: Number
  },
  people2: {
      type:Number
  },
},{
    collection: 'hotels'
});

module.exports = mongoose.model('Hotel', Hotel);
