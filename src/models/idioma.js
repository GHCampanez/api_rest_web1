const mongoose = require('mongoose');

const Idioma = new mongoose.Schema({

    nome: {
        type: String,
        required: true
    },
    nivel:{
        type: String,
        required: true
    }
    
});

mongoose.model('Idioma', Idioma);