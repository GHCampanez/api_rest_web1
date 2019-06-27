const mongoose = require('mongoose');

const Curriculo = new mongoose.Schema({

    nome: {
        type: String,
        required: true
    },

    linkPdf: {
        type: String,
        required: true
    }
    
});

mongoose.model('Curriculo', Curriculo);