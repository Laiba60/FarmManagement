const express = require("express");
const Robot = require("../../models/Robot");

const router = express.Router();

/**
 * GET /admin/robots
 * Fetch all robots
 */
router.get("/", async (req, res) => {
  try {
    const robots = await Robot.find();
    res.json(robots);
  } catch (error) {
    console.error("Error fetching robots:", error);
    res.status(500).json({ error: "Failed to fetch robots" });
  }
});

/**
 * POST /admin/robots
 * Add a new robot
 */
router.post("/", async (req, res) => {
  try {
    const { name, model, status, battery, remainingSpray, location, rentPricePerMonth } = req.body;

    if (!name) {
      return res.status(400).json({ error: "Name is required" });
    }

    const newRobot = new Robot({
      name,
      model: model || "",
      status: status || "available",
      battery: battery || 100,
      remainingSpray: remainingSpray || 100,
      location: location || "",
      rentPricePerMonth: rentPricePerMonth || 0
    });

    await newRobot.save();
    res.status(201).json({ message: "Robot added successfully", robot: newRobot });
  } catch (error) {
    console.error("Error adding robot:", error);
    res.status(500).json({ error: "Failed to add robot" });
  }
});

/**
 * PATCH /admin/robots/:id
 * Update an existing robot
 */
router.patch("/:id", async (req, res) => {
  try {
    const updates = req.body;
    const updatedRobot = await Robot.findByIdAndUpdate(req.params.id, updates, { new: true });

    if (!updatedRobot) {
      return res.status(404).json({ error: "Robot not found" });
    }

    res.json(updatedRobot);
  } catch (error) {
    console.error("Error updating robot:", error);
    res.status(500).json({ error: "Failed to update robot" });
  }
});

/**
 * DELETE /admin/robots/:id
 * Delete a robot
 */
router.delete("/:id", async (req, res) => {
  try {
    const robot = await Robot.findByIdAndDelete(req.params.id);

    if (!robot) {
      return res.status(404).json({ error: "Robot not found" });
    }

    res.json({ message: "Robot deleted" });
  } catch (error) {
    console.error("Error deleting robot:", error);
    res.status(500).json({ error: "Failed to delete robot" });
  }
});

module.exports = router;
