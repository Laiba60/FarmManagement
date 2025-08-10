// FILE: routes/chatbot.js
const express6 = require('express');
const router6 = express6.Router();
const faqs = [
  { q: 'How to rent a robot?', a: 'Register, login as farmer, choose a robot and create a rental.' },
  { q: 'What is the rent price?', a: 'Rent price varies per robot. Check robot details for monthly price.' },
  { q: 'Who to contact for repairs?', a: 'Contact support or the assigned repairing engineer via dashboard.' }
];
// basic FAQ endpoint
router6.get('/faqs', (req, res) => res.json(faqs));

// simple chat endpoint (rule-based)
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