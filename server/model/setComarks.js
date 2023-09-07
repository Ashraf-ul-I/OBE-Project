const mongoose = require('mongoose');

const Comarks = new mongoose.Schema({
   
    co1: Number,
    co2: Number,
    co3: Number,
    co4: Number,
    co5: Number,
    co6: Number,
    co7: Number,
   
});

const Comark = mongoose.model('comarksDB', Comarks);

module.exports = Comark;