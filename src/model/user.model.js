const mongo = require('mongoose');

const userSchema = new mongo.Schema({
    userId: {
        type: Number,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const userModel = mongo.model('chandana', userSchema);

module.exports = {
    userModel
}