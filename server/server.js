const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');
const connectDB = require('./database');

dotenv.config();
const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

// connect database
connectDB();

// routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/robots', require('./routes/robots'));
app.use('/api/rentals', require('./routes/rentals'));
app.use('/api/missions', require('./routes/missions'));
app.use('/api/engineers', require('./routes/engineers'));
app.use('/api/dashboard', require('./routes/dashboard'));
app.use('/api/chatbot', require('./routes/chatbot'));

// health
app.get('/', (req, res) => res.send({ status: 'ok', time: new Date() }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));