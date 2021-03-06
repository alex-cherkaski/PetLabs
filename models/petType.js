// User mongoose model
const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: {
        type: String,
		required: true,
		minlength: 1,
		trim: true,
    },
    neutralImage : {
        type: String,
        required: true
    },
    happyImage: {
        type: String,
        required: true
    },
    sadImage: {
        type: String,
        required: true
    },
    strengthRate: {
        type: Number,
		required: true,
    },
    speedRate: {
        type: Number,
		required: true,
    },
    intelligenceRate: {
        type: Number,
		required: true,
    },
    happinessRate: {
        type: Number,
		required: true,
    },
    fullnessRate: {
        type: Number,
		required: true,
    },
    price: {
        type: Number,
		required: true,
    },
});

const PetType = mongoose.model('PetType', schema, 'PetTypes');

module.exports = { PetType };