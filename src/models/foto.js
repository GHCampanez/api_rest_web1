const mongoose = require('mongoose');

const Foto = new mongoose.Schema({

    titulo: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required:true
    }
});

mongoose.model('Foto', Foto);
