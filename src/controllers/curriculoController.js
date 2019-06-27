const mongoose = require('mongoose');
const Curriculo = mongoose.model('Curriculo');

module.exports = {
    async index(req,res) {
        const curr = await Curriculo.find();

        return res.json(curr);
    },

    async showOne(req,res) {
        const curr = await Curriculo.findById( req.params.id);

        return res.json(curr);
    },

    async store(req,res) {
        
        const curr = await Curriculo.create(req.body);

        return res.json(curr);
    },

    async update( req, res) {

        const curr = await Curriculo.findByIdAndUpdate(req.params.id , req.body, { new: true});

        return res.json(curr);
    },

    async delete( req, res) {

        await Curriculo.findByIdAndRemove(req.params.id);

        return res.send("deletado");
    }


};