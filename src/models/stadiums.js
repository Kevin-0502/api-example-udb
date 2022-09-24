const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stadiumSchema = new Schema({
    id:{
        type: String,
        trim: true,
    },
    name:{
        type: String,
        trim: true,
    },
    team:{
        type: String,
        trim: true,
    },
    country:{
        type: String,
        trim: true,
    },
    image:{
        type: String,
        trim: true,
    },
});

module.exports = mongoose.model('Stadiums',stadiumSchema);
