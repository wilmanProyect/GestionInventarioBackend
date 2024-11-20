// middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');
const User = require('../model/userModel');

// Proteger rutas
const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select('-password');
      next();
    } catch (error) {
      res.status(401).json({ message: 'No autorizado, token fallido' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'No autorizado, no se proporcionó token' });
  }
};

// Verificar rol de administrador
const admin = (req, res, next) => {
  if (req.user && req.user.rol === 'admin') {
    next();
  } else {
    res.status(403).json({ message: 'No autorizado, acceso restringido a administradores' });
  }
};

module.exports = { protect, admin };
