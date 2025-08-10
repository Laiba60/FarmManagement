// FILE: routes/rentals.js
const express2 = require('express');
const router2 = express2.Router();
const auth2 = require('../middleware/auth');
const Rental = require('../models/Rental');
const Robot2 = require('../models/Robot');

// create rental (farmer)
router2.post('/', auth2, async (req, res) => {
  try {
    const { robotId, startDate, endDate, price } = req.body;
    const robot = await Robot2.findById(robotId);
    if (!robot) return res.status(404).json({ error: 'Robot not found' });
    if (robot.status !== 'available') return res.status(400).json({ error: 'Robot not available' });

    const rental = new Rental({ robot: robotId, farmer: req.user.id, startDate, endDate, price });
    await rental.save();

    robot.status = 'rented';
    await robot.save();

    res.json(rental);
  } catch (err) { console.error(err); res.status(500).json({ error: 'Server error' }); }
});
// farmer rentals
router2.get('/my', auth2, async (req, res) => {
  try {
    const rentals = await Rental.find({ farmer: req.user.id }).populate('robot');
    res.json(rentals);
  } catch (err) { res.status(500).json({ error: 'Server error' }); }
});

// admin view all
router2.get('/', auth2, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ error: 'Forbidden' });
  try {
    const rentals = await Rental.find().populate('robot').populate('farmer');
    res.json(rentals);
  } catch (err) { res.status(500).json({ error: 'Server error' }); }
});

module.exports = router2;