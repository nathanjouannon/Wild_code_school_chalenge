const mongoose = require('mongoose');

const NameShema = mongoose.Schema({
    name : {type : String, required : true}
});

module.exports = mongoose.model('Name', NameShema)