const mongoose = require('mongoose');

const AtividadeSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    }
});

mongoose.model('Atividade', AtividadeSchema);