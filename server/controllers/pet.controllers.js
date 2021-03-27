const { Pet } = require('../models/pet.model');


module.exports.createPet = (request, response) => {
    Pet.create(request.body)
        .then(data => response.json(data))
        .catch(err => response.json(err));
}

module.exports.allPet = (request, response) => {
    Pet.find({}).sort({ pet_type: 1 })
        .then(data => response.json(data))
        .catch(err => response.json(err));
}

module.exports.singlePet = (request, response) => {
    Pet.findOne({ _id: request.params.id })
        .then(data => response.json(data))
        .catch(err => response.json(err));
}

module.exports.deletePet = (request, response) => {
    Pet.deleteOne({ _id: request.params.id })
        .then(data => response.json(data))
        .catch(err => response.json(err))
}

module.exports.updatePet = (request, response) => {
    console.log(request.body)
    Pet.findOneAndUpdate(
        { _id: request.params.id },
        request.body,
        { new: true, runValidators: true })
        .then(data => response.json(data))
        .catch(err => response.json(err))
}