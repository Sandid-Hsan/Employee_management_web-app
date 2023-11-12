const mongoose = require('mongoose');


var userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        surname:{
            type: String,
            required: true,
        },
        birthdate:{
            type: String,
            required: true,
        },
        department:{
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('User', userSchema);
