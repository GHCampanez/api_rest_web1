const mongoose = require('mongoose');
const Biografia = mongoose.model('Biografia');

module.exports = {
    async index(req,res) {
        const bio = await Biografia.find();

        return res.json(bio);
    },

    async showOne(req,res) {
        const bio = await Biografia.findById( req.params.id);

        return res.json(bio);
    },

    async store(req,res) {
        
        const bio = await Biografia.create(req.body);

        return res.json(bio);
    },

    async update( req, res) {

        const bio = await Biografia.findByIdAndUpdate(req.params.id , req.body, { new: true});

        return res.json(bio);
    },

    async delete( req, res) {

        await Biografia.findByIdAndRemove(req.params.id);

        return res.send("deletado");
    }


};