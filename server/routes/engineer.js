/ FILE: routes/engineers.js
const express4 = require('express');
const router4 = express4.Router();
const auth4 = require('../middleware/auth');
const Engineer = require('../models/Engineer');

// add engineer (admin)
router4.post('/', auth4, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ error: 'Forbidden' });
  try {
    const eng = new Engineer(req.body);
    await eng.save();
    res.json(eng);
  } catch (err) { res.status(500).json({ error: 'Server error' }); }
});
// list engineers
router4.get('/', auth4, async (req, res) => {
  try {
    const list = await Engineer.find();
    res.json(list);
  } catch (err) { res.status(500).json({ error: 'Server error' }); }
});

module.exports = router4;