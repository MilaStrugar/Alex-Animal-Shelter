const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    pet_name: {
        type: String,
        required: [true, "This field is required"],
        minLength: [3, "Name needs to be longer then 3 characters"],
    },
    pet_type: {
        type: String,
        required: [true, "This field is required"],
    },
    pet_description: {
        type: String,
        required: [true, "This field is required"],
    },
    skill1: {
        type: String,
    },
    skill2: {
        type: String,
    },
    skill3: {
        type: String,
    }
},
    { timestamps: true });



module.exports.Pet = mongoose.model('Pet', PetSchema);