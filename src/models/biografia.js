const mongoose = require('mongoose');

const Biografia = new mongoose.Schema({

    texto: {
        type: String,
        required: true
    }
    
});

mongoose.model('Biografia', Biografia);