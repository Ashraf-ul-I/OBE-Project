
const mongoose = require('mongoose');
const coRatioSchema = new mongoose.Schema({
    studentIDvalue: Array,
    ratios: Object, 
  });

  const CoRatiosModel = mongoose.model('coRatios', coRatioSchema);

  module.exports=CoRatiosModel;