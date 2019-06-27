const app = require('express')();
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const bodyParser = require('body-parser');

const cors = require('cors');

const dbConfig = require('./config/database');

mongoose.connect(dbConfig.URL , {useNewUrlParser:true});

requireDir(dbConfig.modelsPath);
app.use(cors());


app.use(bodyParser.json());

app.use('/api', require('./src/routes'));


const PORT = process.env.PORT || 3000;

app.listen(PORT , () =>{
    console.log("server rodando na porta " + PORT);
});
