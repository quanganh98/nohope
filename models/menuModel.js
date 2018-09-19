const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const MenuModel = new Schema({
    type: { type: String,default:"food" },
    name: { type: String, required: true, unique: true },
    imageUrl: { type: String, required: true },
    price: { type: Number, required: true },
    state:{ type: String , default:"available"}
}, {
        timestamps: true
    })

module.exports = mongoose.model('Menu', MenuModel)