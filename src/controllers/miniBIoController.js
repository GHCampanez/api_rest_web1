const mongoose = require('mongoose');
const miniBio = mongoose.model('miniBio');

module.exports = {
    async index(req,res) {
        const bio = await miniBio.find();

        return res.json(bio);
    },

    async showOne(req,res) {
        const bio = await miniBio.findById( req.params.id);

        return res.json(bio);
    },

    async store(req,res) {
        
        const bio = await miniBio.create(req.body);

        return res.json(bio);
    },

    async update( req, res) {

        const bio = await miniBio.findByIdAndUpdate(req.params.id , req.body, { new: true});

        return res.json(bio);
    },

    async delete( req, res) {

        await miniBio.findByIdAndRemove(req.params.id);

        return res.send("deletado");
    }


};