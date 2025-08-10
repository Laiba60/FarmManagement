const mongoose4 = require('mongoose');

const missionSchema = new mongoose4.Schema({
  robot: { type: mongoose4.Schema.Types.ObjectId, ref: 'Robot', required: true },
  farmer: { type: mongoose4.Schema.Types.ObjectId, ref: 'User', required: true },
  title: String,
  description: String,
  targetFarm: String,
  status: { type: String, enum: ['planned','in-progress','completed','failed'], default: 'planned' },
  plannedAt: Date,
  completedAt: Date,
  telemetry: Object,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose4.model('Mission', missionSchema);