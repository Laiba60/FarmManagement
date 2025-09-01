require('dotenv').config();
const express = require('express');
const cors = require('cors'); 
const connectDB = require('./database');
const setupSwagger = require('./swagger');  

// Import admin routes (CommonJS)
const engineerRoutes = require("./routes/admin/engineer");
const farmerRoutes = require("./routes/admin/farmer");
const robotRoutes = require("./routes/admin/robot");

const authRoutes = require('./routes/auth');
const dashboardRoutes = require('./routes/dashboard');
const chatbotRoutes = require('./routes/chatbot');
const engineersRoutes = require('./routes/engineers');
const farmersRoutes = require("./routes/farmers");
const robotsRoutes = require('./routes/robots');
const missionsRoutes = require("./routes/missions");
const rentalsRoutes = require("./routes/rentals");

const app = express();

app.use(cors({
    origin: (origin, callback) => {
        if (!origin) return callback(null, true);
        if (origin.startsWith('http://localhost')) {
            return callback(null, true);
        }
        callback(new Error('Not allowed by CORS'));
    },
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'], // PATCH added
    allowedHeaders: ['Content-Type', 'Authorization'], // optional but good
    credentials: true
}));


app.use(express.json());

connectDB();
setupSwagger(app);  

// Example demo data
const engineers = [
  { name: "Ali", expertise: "Precision Spraying", status: "Available" },
  { name: "Sara", expertise: "GPS Navigation", status: "Busy" },
  { name: "Ahmed", expertise: "Soil Analysis", status: "Available" },
];
let batteryStatus = { value: 75 }; 
let chemicalLevel = { value: 60 };

app.get("/engineers-demo", (req, res) => res.json(engineers));
app.get("/battery", (req, res) => res.json(batteryStatus));
app.get("/chemical", (req, res) => res.json(chemicalLevel));

// Normal routes
app.use('/auth', authRoutes);
app.use('/dashboard', dashboardRoutes);
app.use('/chatbot', chatbotRoutes);
app.use('/engineers', engineersRoutes);
app.use("/farmers", farmersRoutes);

app.use("/missions", missionsRoutes);
app.use("/rentals", rentalsRoutes);

// Admin routes
app.use("/admin/engineers", engineerRoutes);
app.use("/admin/farmers", farmerRoutes);
app.use("/admin/robots", robotRoutes);

// Root
app.get('/', (req, res) => res.send('Farm Management API Running'));

app.get('/faqs', (req, res) => {
    const faqs = [
        { question: 'What is this app about?', answer: 'This is a farm management API.' },
        { question: 'How to connect to MongoDB?', answer: 'Use the connectDB function in database.js.' }
    ];
    res.json(faqs);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
