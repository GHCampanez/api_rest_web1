const mongoose = require('mongoose');

const Habilidade = new mongoose.Schema({

    tipo: {
        type: String,
        required: true
    }
});

mongoose.model('Habilidade', Habilidade);