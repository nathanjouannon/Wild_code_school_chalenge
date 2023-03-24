const mongoose = require('mongoose');

const name = mongoose.Schema({
    name : {type : String, required : true}
});

module.exports = name;