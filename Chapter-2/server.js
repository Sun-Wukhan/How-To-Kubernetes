// Dependencies 
const express = require('express');
const requestTime = require('./middleware/requestTime');
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const cors = require('cors');
const colors = require('colors');
const dotenv = require('dotenv').config();
const axios = require('axios'); 
const logger = require('./middleware/logger');


// Functions 
connectDB();

// Variables
const port = process.env.PORT || 4001;
const app = express(); 

// Initialize
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(requestTime);
app.use(cors());

// Endpoints 
app.use('/api/landlord', require('./routes/landlordRoutes'));
app.use('/api/tenant', require('./routes/tenantRoutes'));
app.use('/api/leaseListing', require('./routes/leaseListingRoutes'));
app.use('/api/tenantReview', require('./routes/tenantReviewRoutes'));
app.use('/api/landlordReview', require('./routes/landlordReviewRoutes'));
app.use('/api/user', require('./routes/userRoutes'))
app.use(errorHandler); // This needs to be at the bottom to effectively show routes

// Port
app.listen(port, '0.0.0.0', () => {
    console.log(`Listening to Port ${port}`);
});