const mongoose = require('mongoose');

const Informacao = new mongoose.Schema({

    texto: {
        type: String,
        required: true
    }
    
});
mongoose.model('Informacao', Informacao);