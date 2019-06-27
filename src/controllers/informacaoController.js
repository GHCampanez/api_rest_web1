const mongoose = require('mongoose');
const Informacao = mongoose.model('Informacao');

module.exports = {
    async index(req,res) {
        const info = await Informacao.find();

        return res.json(info);
    },

    async showOne(req,res) {
        const info = await Informacao.findById( req.params.id);

        return res.json(info);
    },

    async store(req,res) {
        
        const info = await Informacao.create(req.body);

        return res.json(info);
    },

    async update( req, res) {

        const info = await Informacao.findByIdAndUpdate(req.params.id , req.body, { new: true});

        return res.json(info);
    },

    async delete( req, res) {

        await Informacao.findByIdAndRemove(req.params.id);

        return res.send("deletado");
    }


};