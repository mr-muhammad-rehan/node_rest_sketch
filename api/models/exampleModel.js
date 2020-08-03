const mongoose = require('mongoose');

const exampleSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    filed1: { type: String, required: true },
    filed2: { type: Number, required: true },
    filed3: { type: String, required: true }
});

module.exports = mongoose.model('MODEL_NAME', exampleSchema);