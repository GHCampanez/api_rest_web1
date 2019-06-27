const mongoose = require('mongoose');
const Habilidade = mongoose.model('Habilidade');

module.exports = {
    async index(req,res) {
        const habi = await Habilidade.find();

        return res.json(habi);
    },

    async showOne(req,res) {
        const habi = await Habilidade.findById( req.params.id);

        return res.json(habi);
    },

    async store(req,res) {
        
        const habi = await Habilidade.create(req.body);

        return res.json(habi);
    },

    async update( req, res) {

        const habi = await Habilidade.findByIdAndUpdate(req.params.id , req.body, { new: true});

        return res.json(habi);
    },

    async delete( req, res) {

        await Habilidade.findByIdAndRemove(req.params.id);

        return res.send("deletado");
    }


};