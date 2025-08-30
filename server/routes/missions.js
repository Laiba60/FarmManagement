const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth"); 
const Mission = require("../models/Mission");


router.post("/", auth, async (req, res) => {
  try {
    const { name, points } = req.body;

    if (!points || points.length < 2) {
      return res.status(400).json({ message: "At least 2 points required" });
    }

    const mission = new Mission({
      user: req.user.id,
      name,
      points,
    });

    await mission.save();
    res.status(201).json(mission);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

// GET → Fetch user’s missions
router.get("/my", auth, async (req, res) => {
  try {
    const missions = await Mission.find({ user: req.user.id });
    res.json(missions);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
