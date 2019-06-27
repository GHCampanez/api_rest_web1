const mongoose = require('mongoose');

const Formacao = new mongoose.Schema({

    nome: {
        type: String,
        required: true
    }
    
});

mongoose.model('Formacao', Formacao);