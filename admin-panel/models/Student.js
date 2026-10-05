const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, lowercase: true },
    age: { type: Number, min: 1, max: 120 },
    course: String,
    phone: String
});

module.exports = mongoose.model('Student', studentSchema);