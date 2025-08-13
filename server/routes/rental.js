// FILE: routes/rentals.js
const express2 = require('express');
const router2 = express2.Router();
const auth2 = require('../middleware/auth');
const Rental = require('../models/Rental');
const Robot2 = require('../models/Robot');

/**
 * @swagger
 * tags:
 *   name: Rentals
 *   description: Robot rental operations
 */

/**
 * @swagger
 * /api/rentals:
 *   post:
 *     summary: Create a new rental (Farmer)
 *     tags: [Rentals]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               robotId:
 *                 type: string
 *                 example: "64d123abc4567890"
 *               startDate:
 *                 type: string
 *                 format: date-time
 *                 example: "2025-08-12T09:00:00Z"
 *               endDate:
 *                 type: string
 *                 format: date-time
 *                 example: "2025-08-20T17:00:00Z"
 *               price:
 *                 type: number
 *                 example: 500
 *     responses:
 *       200:
 *         description: Rental created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Rental'
 *       400:
 *         description: Robot not available
 *       404:
 *         description: Robot not found
 *       500:
 *         description: Server error
 */
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

/**
 * @swagger
 * /api/rentals/my:
 *   get:
 *     summary: Get rentals of the logged-in farmer
 *     tags: [Rentals]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of farmer rentals
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Rental'
 *       500:
 *         description: Server error
 */
router2.get('/my', auth2, async (req, res) => {
  try {
    const rentals = await Rental.find({ farmer: req.user.id }).populate('robot');
    res.json(rentals);
  } catch (err) { res.status(500).json({ error: 'Server error' }); }
});

/**
 * @swagger
 * /api/rentals:
 *   get:
 *     summary: Get all rentals (Admin only)
 *     tags: [Rentals]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of all rentals
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Rental'
 *       403:
 *         description: Forbidden (user not admin)
 *       500:
 *         description: Server error
 */
router2.get('/', auth2, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ error: 'Forbidden' });
  try {
    const rentals = await Rental.find().populate('robot').populate('farmer');
    res.json(rentals);
  } catch (err) { res.status(500).json({ error: 'Server error' }); }
});

module.exports = router2;
