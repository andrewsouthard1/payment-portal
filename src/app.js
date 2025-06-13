const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const setRoutes = require('./routes');

dotenv.config(); // Load environment variables from .env file
connectDB();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

setRoutes(app);