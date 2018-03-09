const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let DogModel = {};

// A DB Schema to define our data structure
const DogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },

  breed: {
    type: String,
    required: true,
    trim: true,
  },

  age: {
    type: Number,
    min: 0,
    required: true,
  },

  createdData: {
    type: Date,
    default: Date.now,
  },
});

// findByName function to search for a dog by name
DogSchema.statics.findByName = (name, callback) => {
  const search = {
    name,
  };

  return DogModel.findOne(search, callback);
};

// Create the DogModel
DogModel = mongoose.model('Dog', DogSchema);


// Export our public properties
module.exports.DogModel = DogModel;
module.exports.DogSchema = DogSchema;
