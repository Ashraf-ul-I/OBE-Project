// const mongoose = require('mongoose');

// // Define a schema for PO values
// const poSchema = new mongoose.Schema({
//   studentIDvalue: Array, 
//   po:Object
// });

// const POModel = mongoose.model('POModel', poSchema);

// module.exports = POModel;

const mongoose = require('mongoose');

// Define a schema for PO values
const poSchema = new mongoose.Schema({
  studentIDvalue: Array, 
  po1: [Number],
  po2: [Number],
  po3: [Number],
  po4: [Number],
  po5: [Number],
  po6: [Number],
  po7: [Number] ,
});

const POModel = mongoose.model('POModel', poSchema);

module.exports = POModel;