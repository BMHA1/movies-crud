const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    name: { type: String },
    surname: { type: String },
    role: { type: String },
    favorites: [{ type: String, ref: 'Movie' }]
})

module.exports = mongoose.model('User', UserSchema)