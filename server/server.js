require('dotenv').config();
const express = require('express');
const cors = require('cors'); 
const connectDB = require('./database');
const setupSwagger = require('./swagger');  

const app = express();


app.use(cors({
    origin: (origin, callback) => {
       
        if (!origin) return callback(null, true);

        
        if (origin.startsWith('http://localhost')) {
            return callback(null, true);
        }

       
        callback(new Error('Not allowed by CORS'));
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use(express.json());


connectDB();


setupSwagger(app);  

const engineers = [
  { name: "Ali", expertise: "Precision Spraying", status: "Available" },
  { name: "Sara", expertise: "GPS Navigation", status: "Busy" },
  { name: "Ahmed", expertise: "Soil Analysis", status: "Available" },
];

let batteryStatus = { value: 75 }; 
let chemicalLevel = { value: 60 };


app.get("/engineers", (req, res) => {
  res.json(engineers);
});

app.get("/battery", (req, res) => {
  res.json(batteryStatus);
});

app.get("/chemical", (req, res) => {
  res.json(chemicalLevel);
});

const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

const dashboardRoutes = require('./routes/dashboard');
app.use('/dashboard', dashboardRoutes);


const chatbotRoutes = require('./routes/chatbot');
app.use('/chatbot', chatbotRoutes);

const engineersRoutes = require('./routes/engineers');
app.use('/engineers', engineersRoutes);
const farmerRoutes = require("./routes/farmers");
app.use("/farmers", farmerRoutes);
const robotsRoutes = require('./routes/robots');
app.use('/robots', robotsRoutes);

const missionsRoutes = require("./routes/missions");
app.use("/missions", missionsRoutes);
const rentalsRoutes = require("./routes/rentals");
app.use("/rentals", rentalsRoutes);


app.get('/', (req, res) => {
    res.send(' Farm Management API Running');
});

app.get('/faqs', (req, res) => {
    const faqs = [
        { question: 'What is this app about?', answer: 'This is a farm management API.' },
        { question: 'How to connect to MongoDB?', answer: 'Use the connectDB function in database.js.' }
    ];
    res.json(faqs);
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
