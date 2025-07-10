import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env file
const mongoose = require("mongoose");



const connectDB= async () => {
    try {
        // Connect to MongoDB using the URI from the .env file
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,   // Use the new URL parser (recommended)
            useUnifiedTopology: true, // Use the new connection management engine
            useCreateIndex: true,    // Create indexes for better performance
            useFindAndModify: false  // Disable deprecated `findAndModify` method
        });
        
        console.log("MongoDB Connected: ", conn.connection.host);
    } catch (err) {
        console.log("Error connecting to MongoDB: ", err);
        process.exit(1); // Exit with failure code
    }
};

export default connectDB;
