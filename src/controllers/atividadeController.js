const mongoose = require('mongoose');
const Atividade = mongoose.model('Atividade');

module.exports = {
    async index(req,res) {
        const ativ = await Atividade.find();

        return res.json(ativ);
    },

    async showOne(req,res) {
        const ativ = await Atividade.findById( req.params.id);

        return res.json(ativ);
    },

    async store(req,res) {
        
        const atv = await Atividade.create(req.body);

        return res.json(atv);
    },

    async update( req, res) {

        const atv = await Atividade.findByIdAndUpdate(req.params.id , req.body, { new: true});

        return res.json(atv);
    },

    async delete( req, res) {

        await Atividade.findByIdAndRemove(req.params.id);

        return res.send("deletado");
    }


};