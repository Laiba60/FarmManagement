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

// **New routes added here**
const robotRoutes = require('./routes/robots');
app.use('/api/robots', robotRoutes);
const missionRoutes = require('./routes/mission');

app.use('/api/missions', missionRoutes);

const rentalRoutes = require('./routes/rental');
app.use('/api/rentals', rentalRoutes);

const engineerRoutes = require('./routes/engineer');
app.use('/api/engineers', engineerRoutes);

const notificationRoutes = require('./routes/notifications');
app.use('/api/notifications', notificationRoutes);

// Optional chatbot routes
const chatbotRoutes = require('./routes/chatbot');
app.use('/api/chatbot', chatbotRoutes);

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
