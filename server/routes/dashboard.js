// FILE: routes/dashboard.js
const express5 = require('express');
const router5 = express5.Router();
const auth5 = require('../middleware/auth');
const Robot5 = require('../models/Robot');
const Rental5 = require('../models/Rental');

// stats for admin
router5.get('/stats', auth5, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ error: 'Forbidden' });
  try {
    const totalRobots = await Robot5.countDocuments();
    const available = await Robot5.countDocuments({ status: 'available' });
    const rented = await Robot5.countDocuments({ status: 'rented' });
    const earnings = await Rental5.aggregate([
      { $group: { _id: null, total: { $sum: '$price' } } }
    ]);
    res.json({ totalRobots, available, rented, earnings: (earnings[0] && earnings[0].total) || 0 });
  } catch (err) { res.status(500).json({ error: 'Server error' }); }
});

module.exports = router5;