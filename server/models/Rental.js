const mongoose = require("mongoose");

const RentalSchema = new mongoose.Schema({
  duration: { type: String, required: true }, 
  price: { type: Number, required: true },
  unit: { type: String, default: "/month" },
  features: [String],
  isBooked: { type: Boolean, default: false }, 
  bookedAt: { type: Date } 
});

module.exports = mongoose.model("Rental", RentalSchema);
