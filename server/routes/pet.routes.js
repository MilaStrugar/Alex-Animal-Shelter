const PetController = require('../controllers/pet.controllers');

module.exports = app => {
    app.post('/api/pet', PetController.createPet);
    app.get('/api/pet/all', PetController.allPet);
    app.get('/api/pet/:id', PetController.singlePet);
    app.delete('/api/pet/delete/:id', PetController.deletePet);
    app.put("/api/pet/update/:id", PetController.updatePet)
}