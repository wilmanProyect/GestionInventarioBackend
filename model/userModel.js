// Modelo Usuario(user)
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// esquema
const userSchema = new mongoose.Schema({
  nombre: {type: String, required: true,},
  email: {type: String, required: true, unique: true,},
  password: {type: String, required: true,},
  rol: { type: String, enum: ['admin', 'user'],default: 'user',
  },
});

// esquema para encriptar la contraseña antes de guardar
userSchema.pre('save', async function (next) {

  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 10);

  next();
});

// Metodo para comparar contraseñas
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
