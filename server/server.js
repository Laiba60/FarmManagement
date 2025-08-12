const express = require('express');
const connectDB = require('./database');

const app = express();

// Connect to MongoDB
connectDB();

app.get('/', (req, res) => {
  res.send('MongoDB Connected Successfully');
});

// New route for FAQs
app.get('/faqs', (req, res) => {
  const faqs = [
    { question: 'What is this app about?', answer: 'This is a farm management API.' },
    { question: 'How to connect to MongoDB?', answer: 'Use the connectDB function in database.js.' }
  ];
  res.json(faqs);
});

const PORT = 5000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
