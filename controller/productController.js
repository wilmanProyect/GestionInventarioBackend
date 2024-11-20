// Controlador productController.js
const Product = require('../model/productModel');

// Crear un Producto
const createProduct = async (req, res) => {
  const { nombre, categoria, precio, stock } = req.body;

  try {
    const product = await Product.create({ nombre, categoria, precio, stock });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message:'Error al crear el Producto' + error.message });
  }
};

// Actualizar un Producto
const updateProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Eliminar un Producto
const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    res.status(200).json({ message: 'Producto eliminado' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener todos los Productos
const getProducts = async (req, res) => {
  const { categoria } = req.query;

  try {
    let products;
    if (categoria) {
      products = await Product.find({ categoria });
    } else {
      products = await Product.find();
    }

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createProduct, updateProduct, deleteProduct, getProducts };
