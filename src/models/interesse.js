const mongoose = require('mongoose');

const Interesse = new mongoose.Schema({

    listaInteresse: {
        type: String,
        required: true
    }
    
});

 mongoose.model('Interesse', Interesse);