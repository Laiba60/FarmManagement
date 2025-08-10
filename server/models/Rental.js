const mongoose3 = require('mongoose');

const rentalSchema = new mongoose3.Schema({
  robot: { type: mongoose3.Schema.Types.ObjectId, ref: 'Robot', required: true },
  farmer: { type: mongoose3.Schema.Types.ObjectId, ref: 'User', required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  price: { type: Number, required: true },
  paid: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose3.model('Rental', rentalSchema);