const mongoose = require("mongoose");

const missionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: { type: String, required: true }, 
  points: [
    {
      lat: { type: Number, required: true },
      lng: { type: Number, required: true },
      label: { type: String },
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Mission", missionSchema);
