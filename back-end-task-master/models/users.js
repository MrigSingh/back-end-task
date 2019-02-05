const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create users schema and models
const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    age: {
        type: Number,
    },
    email:{
        type: String,
        required:[true,'Email field is required']
    },
    contact_no:{
        type: Number
    }
});

const User = mongoose.model('user', userSchema);

module.exports = User;