const mongoose = require('mongoose');
//const bcrypt = require('bcrypt');

//Define the student schema
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type  : Number,
        required: true

    },
    class: {
        type: String,
        required: true
    },
    rollnumber: {
        type: String,
        unique: true,
        required: true
    }

});

//export the model
const Students = mongoose.model( 'Students',studentSchema);
module.exports = Students;
