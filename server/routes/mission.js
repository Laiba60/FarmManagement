// FILE: routes/missions.js
const express3 = require('express');
const router3 = express3.Router();
const auth3 = require('../middleware/auth');
const Mission = require('../models/Mission');
const Robot3 = require('../models/Robot');
// plan mission (farmer)
router3.post('/', auth3, async (req, res) => {
  try {
    const { robotId, title, description, targetFarm, plannedAt } = req.body;
    // check robot exists
    const robot = await Robot3.findById(robotId);
    if (!robot) return res.status(404).json({ error: 'Robot not found' });

    const mission = new Mission({ robot: robotId, farmer: req.user.id, title, description, targetFarm, plannedAt });
    await mission.save();
    res.json(mission);
  } catch (err) { console.error(err); res.status(500).json({ error: 'Server error' }); }
});
// get missions for user
router3.get('/my', auth3, async (req, res) => {
  try {
    const missions = await Mission.find({ farmer: req.user.id }).populate('robot');
    res.json(missions);
  } catch (err) { res.status(500).json({ error: 'Server error' }); }
});
// admin get all
router3.get('/', auth3, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ error: 'Forbidden' });
  try {
    const missions = await Mission.find().populate('robot').populate('farmer');
    res.json(missions);
  } catch (err) { res.status(500).json({ error: 'Server error' }); }
});
module.exports = router3;