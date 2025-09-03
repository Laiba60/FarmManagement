
const mongoose = require('mongoose');

const FarmerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  priceStatus: { type: String, default: "pending" },
});

module.exports = mongoose.model('Farmer', FarmerSchema);
