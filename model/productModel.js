// models/productModel.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    categoria: { type: String, required: true },
    precio: { type: Number, required: true, min: 0 },
    stock: { type: Number, required: true, min: 0 },
}, {
    timestamps: true // Añade automáticamente las fecha de añadido y la de modificado del producto
});

module.exports = mongoose.model('Product', productSchema);
