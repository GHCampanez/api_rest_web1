const mongoose = require('mongoose');

const Portifolio = new mongoose.Schema({

    nome: {
        type: String,
        required: true
    },
    descricao:{
        type: String,
        required: true
    },  

    data:{
        type: Date,
        required: true
    }
});
 mongoose.model('Portifolio', Portifolio);