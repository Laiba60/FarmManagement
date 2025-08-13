const express6 = require('express');
const router6 = express6.Router();

const faqs = [
  { q: 'How to rent a robot?', a: 'Register, login as farmer, choose a robot and create a rental.' },
  { q: 'What is the rent price?', a: 'Rent price varies per robot. Check robot details for monthly price.' },
  { q: 'Who to contact for repairs?', a: 'Contact support or the assigned repairing engineer via dashboard.' }
];

/**
 * @swagger
 * tags:
 *   name: Chatbot
 *   description: Chatbot and FAQ endpoints
 */

/**
 * @swagger
 * /api/chatbot/faqs:
 *   get:
 *     summary: Get list of FAQs
 *     tags: [Chatbot]
 *     responses:
 *       200:
 *         description: Returns all FAQs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   q:
 *                     type: string
 *                     example: How to rent a robot?
 *                   a:
 *                     type: string
 *                     example: Register, login as farmer, choose a robot and create a rental.
 */
router6.get('/faqs', (req, res) => res.json(faqs));

/**
 * @swagger
 * /api/chatbot/ask:
 *   post:
 *     summary: Ask the chatbot a question
 *     tags: [Chatbot]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - message
 *             properties:
 *               message:
 *                 type: string
 *                 example: How to rent a robot?
 *     responses:
 *       200:
 *         description: Chatbot reply
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 reply:
 *                   type: string
 *                   example: Register, login as farmer, choose a robot and create a rental.
 *       400:
 *         description: Bad request (message not provided)
 */
router6.post('/ask', (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).json({ error: 'Provide message' });
  const msg = message.toLowerCase();
  if (msg.includes('rent')) return res.json({ reply: faqs[0].a });
  if (msg.includes('price')) return res.json({ reply: faqs[1].a });
  if (msg.includes('repair')) return res.json({ reply: faqs[2].a });
  res.json({ reply: "Sorry, I didn't understand. Try 'rent', 'price' or 'repair'." });
});

module.exports = router6;
