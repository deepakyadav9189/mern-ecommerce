import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
dotenv.config(); // Load environment variables from the .env file
const app = express(); // Load environment variables from the .env file
const connectDB = require('./db'); // Use require with the correct path
// Import the connectDB function
const PORT = process.env.PORT || 5000; // Set the port from .env or default to 5000

// Middlewares
app.use(express.json()); // Middleware to parse JSON
app.use(express.urlencoded({ extended: false })); // Middleware to parse URL-encoded data
app.use(express.static("public")); // Serve static files from "public" directory

// Connect to MongoDB
connectDB(); // Establish MongoDB connection using the connectDB function

// Routes
app.use('/api/items', require("./routes/items"));
app.use('/api/payment', cors(), require("./routes/payment"));

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
