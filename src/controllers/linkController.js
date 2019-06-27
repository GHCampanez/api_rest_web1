const mongoose = require('mongoose');
const Link = mongoose.model('Link');

module.exports = {
    async index(req,res) {
        const li = await Link.find();

        return res.json(li);
    },

    async showOne(req,res) {
        const li = await Link.findById( req.params.id);

        return res.json(li);
    },

    async store(req,res) {
        
        const liatv = await Link.create(req.body);

        return res.json(li);
    },

    async update( req, res) {

        const li = await Link.findByIdAndUpdate(req.params.id , req.body, { new: true});

        return res.json(li);
    },

    async delete( req, res) {

        await Link.findByIdAndRemove(req.params.id);

        return res.send("deletado");
    }


};