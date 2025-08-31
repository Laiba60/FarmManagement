const express = require("express");
const router = express.Router();
const Rental = require("../models/Rental");


router.get("/", async (req, res) => {
  try {
    const rentals = await Rental.find();
    res.json(rentals);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
});


router.post("/:id/rent", async (req, res) => {
  try {
    const rental = await Rental.findById(req.params.id);
    if (!rental) {
      return res.status(404).json({ message: "Rental not found" });
    }

    if (rental.isBooked) {
      return res.status(400).json({ message: "Rental already booked" });
    }

    rental.isBooked = true;
    rental.bookedAt = new Date();
    await rental.save();

    res.status(200).json({ message: "Rental booked successfully", rental });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;
