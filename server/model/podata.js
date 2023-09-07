const mongoose = require('mongoose');

// Define a schema for PO values
const poSchema = new mongoose.Schema({
  studentIDvalue: Array, 
  po:Object
});

const POModel = mongoose.model('POModel', poSchema);

module.exports = POModel;
