const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    status: {
        required: true,
        type: Number
    },
    description: {
        required: false,
        type: String
    }
});

module.exports = mongoose.model('Category', categorySchema);