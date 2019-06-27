const mongoose = require('mongoose');
const Interesse = mongoose.model('Interesse');

module.exports = {
    async index(req,res) {
        const inte = await Interesse.find();

        return res.json(inte);
    },

    async showOne(req,res) {
        const inte = await Interesse.findById( req.params.id);

        return res.json(inte);
    },

    async store(req,res) {
        
        const inte = await Interesse.create(req.body);

        return res.json(inte);
    },

    async update( req, res) {

        const inte = await Interesse.findByIdAndUpdate(req.params.id , req.body, { new: true});

        return res.json(inte);
    },

    async delete( req, res) {

        await Interesse.findByIdAndRemove(req.params.id);

        return res.send("deletado");
    }


};