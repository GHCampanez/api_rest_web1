const mongoose = require('mongoose');
const Idioma = mongoose.model('Idioma');

module.exports = {
    async index(req,res) {
        const idio = await Idioma.find();

        return res.json(idio);
    },

    async showOne(req,res) {
        const idio = await Idioma.findById( req.params.id);

        return res.json(idio);
    },

    async store(req,res) {
        
        const idio = await Idioma.create(req.body);

        return res.json(idio);
    },

    async update( req, res) {

        const idio = await Idioma.findByIdAndUpdate(req.params.id , req.body, { new: true});

        return res.json(idio);
    },

    async delete( req, res) {

        await Idioma.findByIdAndRemove(req.params.id);

        return res.send("deletado");
    }


};