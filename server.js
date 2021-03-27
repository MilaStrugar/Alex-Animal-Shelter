const express = require('express');
const cors = require('cors')
const app = express();
const mongoose = require('mongoose')
app.use(express.urlencoded({ extended: true }), express.json(), cors())

require('./server/routes/pet.routes')(app);
require("./server/config/pet.config")


app.listen(8000, () => {
    console.log("Listening at Port 8000")
})