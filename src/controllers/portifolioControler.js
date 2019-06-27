const mongoose = require('mongoose');
const Portifolio = mongoose.model('Portifolio');

module.exports = {
    async index(req,res) {
        const port = await Portifolio.find();

        return res.json(port);
    },

    async showOne(req,res) {
        const port = await Portifolio.findById( req.params.id);

        return res.json(port);
    },

    async store(req,res) {
        
        const port = await Portifolio.create(req.body);

        return res.json(port);
    },

    async update( req, res) {

        const port = await Portifolio.findByIdAndUpdate(req.params.id , req.body, { new: true});

        return res.json(port);
    },

    async delete( req, res) {

        await Portifolio.findByIdAndRemove(req.params.id);

        return res.send("deletado");
    }


};