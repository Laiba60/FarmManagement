require('dotenv').config();
const express = require('express');
const cors = require('cors'); // ✅ Import CORS
const connectDB = require('./database');
const setupSwagger = require('./swagger');  // Import swagger setup

const app = express();

// ===== CORS Middleware =====
// Allow requests from your frontend (http://localhost:5173)
// You can also use app.use(cors()) to allow all origins during development
app.use(cors({
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    credentials: true
}));

// Middleware for JSON
app.use(express.json());

// Connect to MongoDB
connectDB();

// Swagger docs route
setupSwagger(app);  // Swagger API docs available at /api-docs

// Routes
const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

const dashboardRoutes = require('./routes/dashboard');
app.use('/dashboard', dashboardRoutes);

// Chatbot Routes
const chatbotRoutes = require('./routes/chatbot');
app.use('/chatbot', chatbotRoutes);

const engineersRoutes = require('./routes/engineers');
app.use('/engineers', engineersRoutes);

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
