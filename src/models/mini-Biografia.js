const mongoose = require('mongoose');

const miniBio = new mongoose.Schema({

    texto: {
        type: String,
        required: true
    }
    
});
 mongoose.model('miniBio', miniBio);