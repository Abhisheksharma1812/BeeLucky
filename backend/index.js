const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const authRoutes = require('./routes/auth');
require('dotenv').config();

const app = express();

// CORS configuration (same as server.js)
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })
);

app.use(express.json());
app.use('/uploads', express.static('uploads'));

// MongoDB connection (same as server.js)
const MONGO = process.env.MONGO_URI || 'mongodb://localhost:27017/Beelucky';
mongoose
  .connect(MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('Mongo error', err));

// Mount API routes at /api so that /api/login, /api/register, etc. work
app.use('/api', authRoutes);

// Export the Express app for Vercel (@vercel/node will handle the server)
module.exports = app;
