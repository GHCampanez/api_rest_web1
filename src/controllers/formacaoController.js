const mongoose = require('mongoose');
const Formacao = mongoose.model('Formacao');

module.exports = {
    async index(req,res) {
        const form = await Formacao.find();

        return res.json(form);
    },

    async showOne(req,res) {
        const form = await Formacao.findById( req.params.id);

        return res.json(form);
    },

    async store(req,res) {
        
        const form = await Formacao.create(req.body);

        return res.json(form);
    },

    async update( req, res) {

        const form = await Formacao.findByIdAndUpdate(req.params.id , req.body, { new: true});

        return res.json(form);
    },

    async delete( req, res) {

        await Formacao.findByIdAndRemove(req.params.id);

        return res.send("deletado");
    }


};