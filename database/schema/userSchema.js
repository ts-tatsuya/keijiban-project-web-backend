const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    email: String,
    username: String,
    password: String,
    displayName: String,

});

const Users = mongoose.model('users', userSchema);

module.exports = { Users };

