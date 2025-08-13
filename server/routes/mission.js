const express3 = require('express');
const router3 = express3.Router();
const auth3 = require('../middleware/auth');
const Mission = require('../models/Mission');
const Robot3 = require('../models/Robot');

/**
 * @swagger
 * tags:
 *   name: Missions
 *   description: Mission planning and management
 */

/**
 * @swagger
 * /api/missions:
 *   post:
 *     summary: Plan a new mission (Farmer)
 *     tags: [Missions]
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
 *               title:
 *                 type: string
 *                 example: "Harvest Corn"
 *               description:
 *                 type: string
 *                 example: "Harvest corn using robot X"
 *               targetFarm:
 *                 type: string
 *                 example: "Farm 5"
 *               plannedAt:
 *                 type: string
 *                 format: date-time
 *                 example: "2025-08-12T09:00:00Z"
 *     responses:
 *       200:
 *         description: Mission planned successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Mission'
 *       404:
 *         description: Robot not found
 *       500:
 *         description: Server error
 */
router3.post('/', auth3, async (req, res) => {
  try {
    const { robotId, title, description, targetFarm, plannedAt } = req.body;
    const robot = await Robot3.findById(robotId);
    if (!robot) return res.status(404).json({ error: 'Robot not found' });

    const mission = new Mission({ robot: robotId, farmer: req.user.id, title, description, targetFarm, plannedAt });
    await mission.save();
    res.json(mission);
  } catch (err) { console.error(err); res.status(500).json({ error: 'Server error' }); }
});

/**
 * @swagger
 * /api/missions/my:
 *   get:
 *     summary: Get missions planned by the logged-in farmer
 *     tags: [Missions]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of missions
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Mission'
 *       500:
 *         description: Server error
 */
router3.get('/my', auth3, async (req, res) => {
  try {
    const missions = await Mission.find({ farmer: req.user.id }).populate('robot');
    res.json(missions);
  } catch (err) { res.status(500).json({ error: 'Server error' }); }
});

/**
 * @swagger
 * /api/missions:
 *   get:
 *     summary: Get all missions (Admin only)
 *     tags: [Missions]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of all missions
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Mission'
 *       403:
 *         description: Forbidden (user not admin)
 *       500:
 *         description: Server error
 */
router3.get('/', auth3, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ error: 'Forbidden' });
  try {
    const missions = await Mission.find().populate('robot').populate('farmer');
    res.json(missions);
  } catch (err) { res.status(500).json({ error: 'Server error' }); }
});

module.exports = router3;
