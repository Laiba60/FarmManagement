require('dotenv').config();
const express = require('express');
const connectDB = require('./database');

const app = express();

// Middleware for JSON
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

const dashboardRoutes = require('./routes/dashboard');
app.use('/api/dashboard', dashboardRoutes);


// Test Routes
app.get('/', (req, res) => {
    res.send('🚀 Farm Management API Running');
});

app.get('/faqs', (req, res) => {
    const faqs = [
        { question: 'What is this app about?', answer: 'This is a farm management API.' },
        { question: 'How to connect to MongoDB?', answer: 'Use the connectDB function in database.js.' }
    ];
    res.json(faqs);
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
