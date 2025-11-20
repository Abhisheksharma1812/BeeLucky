const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const path = require('path');

const app = express();

require('dotenv').config();

const allowedOrigins = [
  'https://bee-lucky.vercel.app', // Vercel frontend
  'http://localhost:5173', // local dev
  "https://bee-lucky-2qt5ujwno-abhi1812s-projects.vercel.app" // another vercel link
       
];

app.use(
  cors({
    origin: "*",
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, // you use Bearer tokens, not cookies
  })
);

app.use(express.json());
app.use("/uploads", express.static("uploads")); // serve images

const MONGO = process.env.MONGO_URI || 'mongodb://localhost:27017/Beelucky';
mongoose.connect(MONGO, {useNewUrlParser:true, useUnifiedTopology:true})
  .then(()=> console.log('MongoDB connected'))
  .catch(err => console.error('Mongo error', err));

  
// Mount API routes BEFORE static/catch-all so API requests aren't intercepted
const PORT = 5000;
app.use('/api', authRoutes);

// Serve the static files from the React app
//app.use(express.static(path.join(__dirname, '../frontend')));
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Handle requests by serving index.html for all non-API routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
});

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));
