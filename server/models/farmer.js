
const mongoose = require('mongoose');

const FarmerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
    priceStatus: { type: String, default: "pending" },
  password: { type: String, required: true },
  phone: String,
  farmLocation: String,
  cropType: String,
}, { timestamps: true });
 



module.exports = mongoose.model('Farmer', FarmerSchema);
