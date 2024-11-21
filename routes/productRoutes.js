// routes/productRoutes.js
const express = require('express');
const {
  createProduct,
  updateProduct,
  deleteProduct,
  getProducts,
} = require('../controller/productController');

const { protect, admin } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', protect, admin, createProduct);
router.put('/:id', protect, admin, updateProduct);
router.delete('/:id', protect, admin, deleteProduct);
router.get('/', protect, getProducts);

module.exports = router;
