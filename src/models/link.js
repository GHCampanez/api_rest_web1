const mongoose = require('mongoose');

const Link = new mongoose.Schema({

    linkGit: {
        type: String,
    },
    linkRedesSociais:{
        type: String,
        required:true
    }
    
});
 mongoose.model('Link', Link);
 