// FILE: routes/robots.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Robot = require('../models/Robot');

// create robot (admin)
router.post('/', auth, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ error: 'Forbidden' });
  try {
    const robot = new Robot(req.body);
    await robot.save();
    res.json(robot);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});
// list robots
router.get('/', auth, async (req, res) => {
  try {
    const robots = await Robot.find();
    res.json(robots);
  } catch (err) { res.status(500).json({ error: 'Server error' }); }
});

// get single robot
router.get('/:id', auth, async (req, res) => {
  try {
    const robot = await Robot.findById(req.params.id);
    if (!robot) return res.status(404).json({ error: 'Not found' });
    res.json(robot);
  } catch (err) { res.status(500).json({ error: 'Server error' }); }
});
// update robot (admin)
router.put('/:id', auth, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ error: 'Forbidden' });
  try {
    const robot = await Robot.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(robot);
  } catch (err) { res.status(500).json({ error: 'Server error' }); }
});

// delete robot (admin)
router.delete('/:id', auth, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ error: 'Forbidden' });
  try {
    await Robot.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) { res.status(500).json({ error: 'Server error' }); }
});
module.exports = router;