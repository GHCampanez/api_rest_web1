const mongoose = require('mongoose');
const Foto = mongoose.model('Foto');

module.exports = {
    async index(req,res) {
        const ft = await Foto.find();

        return res.json(ft);
    },

    async showOne(req,res) {
        const ft = await Foto.findById( req.params.id);

        return res.json(ft);
    },

    async store(req,res) {
        
        const ft = await Foto.create(req.body);

        return res.json(ft);
    },

    async update( req, res) {

        const ft = await Foto.findByIdAndUpdate(req.params.id , req.body, { new: true});

        return res.json(ft);
    },

    async delete( req, res) {

        await Foto.findByIdAndRemove(req.params.id);

        return res.send("deletado");
    }


};